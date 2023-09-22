class Bubbles {
    constructor(X, Y, R){
        this.x = X;
        this.y = Y;
        this.r = R;
    }
    
    move(){
        this.y -= 2;
    }

    show(){
        ellipse(this.x, this.y, this.r*2);
    }
}