
const grilla = document.querySelector(".grilla")
const botonNuevoJuego = document.querySelector("#nuevo-juego")
const botonReiniciarJuego = document.querySelector("#reiniciar-juego")
console.log(botonNuevoJuego, botonReiniciarJuego)

alert('Bienvenidx')

const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

const obtenerNumeroAlAzar = items => {
  return Math.floor((Math.random() * items.length))  
}

const obtenerItemAlAzar = items => {
  return items[obtenerNumeroAlAzar(items)]
}

const generarGrilla = (filas, columnas, items) => {

  const anchoDeGrilla = 50 * filas
  grilla.style.width = `${anchoDeGrilla}px`;

  let listaDeFrutas = [];
  
  for (let i = 0; i < filas; i++) {
    listaDeFrutas[i] = [];
    for (let j = 0; j < columnas; j++) {
      listaDeFrutas[i][j] = obtenerItemAlAzar(items)

      grilla.innerHTML += `<div class="item">${listaDeFrutas[i][j]}</div>`
    }    
  }
  
  return grilla
}



let dificultad = ''
const dificultadJuego = () => {

  let rtaUsuarioDificultad = prompt('¿En qué dificultad quiere jugar: FÁCIL, MEDIANO o DIFÍCIL?')
  rtaUsuarioDificultad = rtaUsuarioDificultad.toLowerCase();

  if (rtaUsuarioDificultad === 'facil') {
    dificultad = 9
    return generarGrilla(9, 9, items)
  }
  else if (rtaUsuarioDificultad === 'mediano') {
    dificultad = 6
    return generarGrilla(6, 6, items)
  }
  else if (rtaUsuarioDificultad === 'dificil') {
    dificultad = 4
    return generarGrilla(4, 4, items)
  }
  else {
    dificultad = ''
    return alert('formato NO valido')
  }
}

dificultadJuego()

botonNuevoJuego.onclick = () => {
  grilla.innerHTML = ''
  dificultadJuego()
}

botonReiniciarJuego.onclick = () => {
  grilla.innerHTML = ''
  generarGrilla(dificultad, dificultad, items)
  if (dificultad === '') {
    grilla.innerHTML = ''
    dificultadJuego()
  }
}
