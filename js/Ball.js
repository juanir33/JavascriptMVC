 class Ball {
 constructor(width, height, color, borderColor) {
    this.width = width;
    this.height = height;
    this.borderColor = borderColor;
    this.color = color;
    this.direction = 1;
    this.state =1;
    this.move = 20;
    
    
 }
  setAtributes(baldom){
    
    baldom.style.width = this.width + 'px';
    baldom.style.height = this.height + 'px';
    baldom.style.backgroundColor = this.color;
    baldom.style.borderColor = this.borderColor;

  }
  moveBall(baldom){
    switch(this.state){
        case 1: 
            baldom.style.left = (baldom.offsetLeft + this.move) +"px";
            baldom.style.top = (baldom.offsetTop + this.move) +"px";
            break;
        case 2: 
            baldom.style.left = (baldom.offsetLeft + this.move) +"px";
            baldom.style.top = (baldom.offsetTop - this.move) +"px";
            break;
        case 3:
            baldom.style.left = (baldom.offsetLeft - this.move) +"px";
            baldom.style.top = (baldom.offsetTop + this.move) +"px";
            break;
        case 4: 
            baldom.style.left = (baldom.offsetLeft - this.move) +"px";
            baldom.style.top = (baldom.offsetTop - this.move) +"px";
            break;
    }

  }
   checkIfLost(baldom){
    if(baldom.offsetLeft >= width){
        stop();
        console.log("punto player 1");
    }
    if(baldom.offsetLeft <= 0){
        stop();
        console.log("punto player 2");
    }
}



}


function start() {
 let balDom = document.querySelector("#ball");
 let bal =  new Ball(30, 30, 'tomato', 'red');
 console.log("hola");
 bal.setAtributes(balDom);
 bal.moveBall(balDom);
}
//setInterval( start, 100);