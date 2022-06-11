 export class Ball {
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
    switch(baldom.state){
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
  collidePlayer1(bar, baldom){
    if(baldom.offsetLeft <= (bar.clientWidth) &&
           baldom.offsetTop >= bar.offsetTop &&
           baldom.offsetTop <= (bar.offsetTop + bar.clientHeight)){
            return true;
        }

        return false;}
collidePlayer2(baldom, bar, width){
    if(baldom.offsetLeft >= (width-bar.clientWidth) &&
           baldom.offsetTop >= bar.offsetTop &&
           baldom.offsetTop <= (bar.offsetTop + bar.clientHeight)){
            return true;
        }
        return false;

}
  
   checkStateBall(baldom, height, col2, col1){

    if(col2){
        this.direction = 2;
        if(baldom.state == 1) baldom.state = 3;
        if(baldom.state == 2) baldom.state = 4;
    }else if(col1){
        this.direction = 1;
        if(baldom.state == 3) baldom.state = 1;
        if(baldom.state == 4) baldom.state = 2;
    }

    if(this.direction ===1){
        if(baldom.offsetTop >= height)baldom.state=2;
        else if(baldom.offsetTop <=0 ) baldom.state=1;
    }else{
        if(baldom.offsetTop >= height) baldom.state=4;
        else if(baldom.offsetTop <=0 ) baldom.state=3;
    }
    console.log(col1);
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

