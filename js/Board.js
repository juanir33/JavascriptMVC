import { Ball } from "./Ball.js";
import { Bar } from "./Bar.js";

let bal = new Ball(20, 20, "tomato", "white");
let playerOne = new Bar(20, 100, "green", "white");
let playerTwo = new Bar(20, 100, "yellow", "white");
let width = document.documentElement.clientWidth - bal.move;
let height = document.documentElement.clientHeight - bal.move;
let balDom = document.querySelector("#ball");
let bar = document.querySelector("#bar1");
let bar1 = document.querySelector("#bar2");
let gol1 = document.querySelector(".point1");
let gol2 = document.querySelector(".point2");
let game;
let points1 = 0;
let points2 = 0;

/**
 * Evento del documento, determina si la tecla buscada se apreto. 
 * @param {*} e 
 */
document.onkeydown = function (e) {
  switch (e.key) {
    case "q": // Q
    case "x": // A
      playerOne.key = e.key;
      playerOne.keyPress = true;
      console.log(playerOne.keyPress);
      break;
    case "o": // O
    case "m": // L
      playerTwo.key = e.key;
      playerTwo.keyPress = true;
      break;
  }
};
document.onkeyup = function (e) {
  if (e.key == "q" || e.key == "x") {
    playerOne.keyPress = false;
  }
  if (e.key == "o" || e.key == "m") {
    playerTwo.keyPress = false;
  }
};

/**
 * Metodo para iniciar el juego, se llaman los metodos de mover la pelota y paletas; tambien los checkeos de estado de la pelota.
 */
export const init = () => {
  playerOne.moveBar("q", "x", bar, height);
  playerTwo.moveBar("o", "m", bar1, height);
  bal.moveBall(balDom);
  let col1 = bal.collidePlayer1(bar, balDom);
  let col2 = bal.collidePlayer2(balDom, bar1, width);
  bal.checkStateBall(balDom, height, col1, col2);
  bal.checkIfLost(balDom, width, add1, add2, stop);
   gol1.innerText = points1;
  gol2.innerText = points2;
  
};

/**
 * Setteo inicial de los atributos creados en la instancia de las clases pelota y paletas. 
 */
export const board = () => {
  playerOne.setAtributes(bar);
  playerTwo.setAtributes(bar1);
  
  bal.setAtributes(balDom);
  balDom.direction = 1;
  balDom.state = 1;
 

  
};
/**
 * Comienza a contar el intervalo para que se vaya actualizando las posiciones y se vean en pantalla.
 */
const start = () => {
    board();
    game = setInterval(init, 100); 
}


/**
 * Detiene el juego 
 */

function stop() {
   
if(points1 === 11|| points2 === 11){
  clearInterval(game);
  document.body.style.background = "#f00";
  
  if(points1 > points2){
     document.body.innerHTML = `<h1>"Gano Jugador 1"</h1>`;
  }else{document.body.innerHTML = `<h1>"Gano Jugador 2"</h1>`;}
  
  }
}

const add1 = () => {
    let acc =  points1++
    gol1.innerText = acc
    
}
const add2 = () => {
   let acc =  points2++
    gol2.innerHTML = acc
}
start();