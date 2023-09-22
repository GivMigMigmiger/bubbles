class Bubbles {
    constructor(x, y, r){
        this.posX = x;
        this.posY = y;
        this.rad = r;
    }
    
    move(){
        this.posY -= 2;
    }

    show(){
        ellipse(this.posX, this.posY, this.rad*2);
    }
}