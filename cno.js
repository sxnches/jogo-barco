class cno {
    constructor (x, y, w, h, a){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;

        this.imgc = loadImage ("assets/canon.png");
        this.base = loadImage ("assets/cannonBase.png");

    }
    display (){
        push ()
        translate (this.x, this.y);
        rotate (this.a);
        imageMode (CENTER);
        image (this.imgc, 0, 0, this.w, this.h);
        pop ()
        image (this.base, 115, 165, 130, 90);


        if (keyIsDown (UP_ARROW) && this.a > -30){
            this.a -= 1;
            
        }
        if (keyIsDown (DOWN_ARROW) && this.a < 85){
            this.a += 1;
        }
        
    }
}