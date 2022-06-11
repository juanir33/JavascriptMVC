export class Bar{
    /**
     * Clase para construir las paletas del juego.
     * @param {*} width  ancho de la paleta
     * @param {*} height  altura  de la paleta
     * @param {*} color  color del fondo de la paleta
     * @param {*} borderColor  color del borde
     */
    constructor(width, height, color, borderColor){
        this.width = width;
        this.height = height;
        this.color = color;
        this.borderColor = borderColor;
        this.keyPress = false;
        this.key= null;
        this.move= 20;
    }

    /**
     * Setea los atributos al div destinado a 1 de las paletas
     * @param {*} bardom  selector del elemento DOM, que contiene la paleta
     */
    setAtributes(bardom){
        bardom.style.backgroundColor = this.color;
        bardom.style.borderColor = this.borderColor;
        bardom.style.width= this.width + "px";
        bardom.style.height= this.height + "px";
    }

    /**
     * Metodo para mover las paletas arriba y abajo.
     * @param {*} key letra destinada a mover hacia arriba en formato string "q"
     * @param {*} key2 letra destinada a mover hacia abajo en formato string "x"
     * @param {*} bardom selector del elemento DOM, que contiene la paleta
     * @param {*} height alto total del body del documento html
     */
    moveBar(key, key2, bardom, height){
        if(this.keyPress){
            if(this.key == key && bardom.offsetTop >=0)
                bardom.style.top = (bardom.offsetTop - this.move) + "px";
            if(this.key == key2 && (bardom.offsetTop + bardom.clientHeight)<=height)
                bardom.style.top = (bardom.offsetTop + this.move) + "px";
            
        }
    
        
    }
    
    
}