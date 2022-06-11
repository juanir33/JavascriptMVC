export class Bar{
    constructor(width, height, color, borderColor){
        this.width = width;
        this.height = height;
        this.color = color;
        this.borderColor = borderColor;
        this.keyPress = false;
        this.keyCode= null;
        this.move= 20;
    }
    setAtributes(bardom){
        bardom.background = this.color;
        bardom.borderColor = this.borderColor;
        bardom.width= this.width;
        bardom.height= this.height;
    }
    moveBar(key, key2, bardom, height){
        if(this.keyPress){
            if(this.key == key && bardom.offsetTop >=0)
                bardom.style.top = (bardom.offsetTop - this.move) + "px";
            if(this.key == key2 && (bardom.offsetTop + bardom.clientHeight)<=height)
                bardom.style.top = (bardom.offsetTop + this.move) + "px";
            
        }
        
    }
}