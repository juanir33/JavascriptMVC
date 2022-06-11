 export class Ball {
    /**
     * Clase pelota, le da estilo a la pelota y los metodos para moverse.
     * @param {*} width el ancho de la misma. 
     * @param {*} height el alto, con estos se determina el tamano, tiene por defecto radio 50% siempre redondo.
     * @param {*} color color de la pelota.
     * @param {*} borderColor  color del borde de la pelota.
     */
 constructor(width, height, color, borderColor) {
    this.width = width;
    this.height = height;
    this.borderColor = borderColor;
    this.color = color;
    
   
    this.move = 20;
    
    
 }
 /**
  * Le damos las propiedades al div con clase o Id ball, destinado a ser la pelota.
  * @param {*} baldom  selector del div de la pelota
  */
  setAtributes(baldom){
    

    
    baldom.style.width = this.width + 'px';
    baldom.style.height = this.height + 'px';
    baldom.style.backgroundColor = this.color;
    baldom.style.borderColor = this.borderColor;

  }
  /**
   * Metodo para el movimiento, cambiando las posiciones top y left para determinar hacia donde se mueve.
   * @param {*} baldom  selector del elemento div del DOM, que posea la clase o id ball.
   */
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

  /**
   * Metodos para preguntar si colisiona pla pelota con las paletas. 
   * @param {*} bar selector del elemento DOM, que contiene la paleta 1.
   * @param {*} baldom  selector del elemento DOM, que contiene la pelota.
   * @returns  rtegresa un booleano, para determinar la colision.
   */
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
/**
 * Comprueba el estado de la pelota para determinar su movimiento en las colisiones.
 * @param {*} baldom selector del elemento DOM, que contiene la pelota.
 * @param {*} height altura total del  elemento body.
 * @param {*} col1 respuesta del metodo collidePlayer1
 * @param {*} col2 respuesta del metodo collidePlayer2
 */
  
   checkStateBall(baldom, height, col1, col2){

    if(col2){
        baldom.direction = 2
        if(baldom.state == 1) baldom.state = 3;
        if(baldom.state == 2) baldom.state = 4;
       
    }else if(col1){
        baldom.direction = 1;
        if(baldom.state == 3) baldom.state = 1;
        if(baldom.state == 4) baldom.state = 2;
    }

    if(baldom.direction ===1){
        if(baldom.offsetTop >= height)baldom.state=2;
        else if(baldom.offsetTop <=0 ) baldom.state=1;
    }else{
        if(baldom.offsetTop >= height) baldom.state=4;
        else if(baldom.offsetTop <=0 ) baldom.state=3;
    }
    
}  
/**
 * Verifica si uno de los jugadores a perdido y finaliza el juego.
 * @param {*} baldom selector del elemento DOM, que contiene la pelota.
 * @param {*} width ancho del body del documento html.
 * @param {*} stop metodo que detiene el juego.
 */
   checkIfLost(baldom, width, add1, add2, stop){
    if(baldom.offsetLeft >= width){
        baldom.direction = 2
        if(baldom.state == 1) baldom.state = 3;
        if(baldom.state == 2) baldom.state = 4;
    
       
        add1();
        stop();
    }
    if(baldom.offsetLeft <= 0){
        baldom.direction = 1;
        if(baldom.state == 3) baldom.state = 1;
        if(baldom.state == 4) baldom.state = 2;
        
        add2();
        stop();
        
    }

    
}



}

