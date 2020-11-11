
const grilla = document.querySelector(".grilla")
const botonNuevoJuego = document.querySelector("#nuevo-juego")
const botonReiniciarJuego = document.querySelector("#reiniciar-juego")
const botonMatch = document.querySelector("#buscar-match")

alert('Bienvenidx')

const items = ['🍉', '🥝', '🍌', '🍇', '🍋', '🥥']

const obtenerNumeroAlAzar = items => {
  return Math.floor((Math.random() * items.length))  
}

const obtenerItemAlAzar = items => {
  return items[obtenerNumeroAlAzar(items)]
}

let listaDeFrutas = [];

const generarGrilla = (filas, columnas, items) => {

  const anchoDeGrilla = 50 * filas
  grilla.style.width = `${anchoDeGrilla}px`;
 
  for (let i = 0; i < filas; i++) {
    listaDeFrutas[i] = [];
    for (let j = 0; j < columnas; j++) {
      listaDeFrutas[i][j] = obtenerItemAlAzar(items)

      grilla.innerHTML += `<div class="item" data-x="${i}" data-y="${j}">${listaDeFrutas[i][j]}</div>`
    }    
  }

  return grilla
}
console.log(listaDeFrutas)


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


let itemsHTML = document.querySelectorAll('.item')
console.log(itemsHTML)

const encontrarMatchHorizontal = () => {

  for (let i = 0; i < listaDeFrutas.length; i++) {
      
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
       
      if (listaDeFrutas[i][j] === listaDeFrutas[i][j + 1] && listaDeFrutas[i][j + 1] === listaDeFrutas[i][j + 2]) {
        const emoji = document.querySelector(`div[data-x='${i}'][data-y='${j}']`)
        const emoji1 = document.querySelector(`div[data-x='${i}'][data-y='${j + 1}']`)
        const emoji2 = document.querySelector(`div[data-x='${i}'][data-y='${j + 2}']`)
        emoji.style.backgroundColor = 'yellow'
        emoji1.style.backgroundColor = 'yellow'
        emoji2.style.backgroundColor = 'yellow'    
                    
      }
               
    }
      
  }
  
}


const encontrarMatchVertical = () => {
  for (let i = 0; i < listaDeFrutas.length; i++) {
      
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
       
      if (listaDeFrutas[i][j] === listaDeFrutas[i + 1][j] && listaDeFrutas[i + 1][j] === listaDeFrutas[i + 2][j]) {
        const emoji = document.querySelector(`div[data-x='${i}'][data-y='${j}']`)
        const emoji1 = document.querySelector(`div[data-x='${i + 1}'][data-y='${j}']`)
        const emoji2 = document.querySelector(`div[data-x='${i + 2}'][data-y='${j}']`)
        emoji.style.backgroundColor = 'orange'
        emoji1.style.backgroundColor = 'orange'
        emoji2.style.backgroundColor = 'orange'    
                    
      }
               
    }
      
  }

}

botonMatch.onclick = () => {
  encontrarMatchHorizontal()
  encontrarMatchVertical()
}