import { Ball } from "./Ball.js";
import { Bar } from "./Bar.js"

let bal = new Ball(20, 20, "tomato", "red");
let playerOne = new Bar(20, 100, "red", 'white');
let playerTwo = new Bar(20, 100, 'yellow', 'white');
let width = document.documentElement.clientWidth - bal.move;
let height = document.documentElement.clientHeight - bal.move;
let balDom = document.querySelector("#ball");
let bar = document.querySelector("#bar1");
let bar1 = document.querySelector("#bar2");

document.onkeydown = function(e){
    
    switch(e.key){
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
}
document.onkeyup = function(e){
   if(e.key == "q" || e.key == "x"){
    playerOne.keyPress = false;
   }
   if(e.key == "o" || e.key == "m"){
    playerTwo.keyPress = false
   }
}
export const board = () => {
  playerOne.setAtributes(bar);
  playerTwo.setAtributes(bar1);
  playerOne.moveBar("q", "x", bar, height);
  playerTwo.moveBar("o", "m", bar1, height);
  console.log(bar.clientWidth);
  bal.setAtributes(balDom);
  bal.moveBall(balDom);
  let col1 = bal.collidePlayer1(playerOne, balDom);
  let col2 = bal.collidePlayer2(playerTwo, balDom);
  bal.checkStateBall(balDom, height,col1, col2);
};
setInterval(board, 300);

