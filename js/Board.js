import {Ball} from "./Ball.js";

 let bal =  new Ball(20, 20, 'tomato', 'red');
let width = document.documentElement.clientWidth - bal.move;
   let height = document.documentElement.clientHeight - bal.move;
let balDom = document.querySelector("#ball");
let bar = document.querySelector("#bar1");
let bar1 = document.querySelector("#bar2");
export const  board = () => {
   
   

console.log(bar.clientWidth);
bal.setAtributes(balDom);
bal.moveBall(balDom);
let col1 = bal.collidePlayer1(bar, bal);
let col2 = bal.collidePlayer2(bar1, bal, width);
bal.checkStateBall(balDom, height, col1, col2);
}
setInterval( board, 300);