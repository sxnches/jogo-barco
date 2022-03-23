class barco {
    constructor (x, y, w, h, bani){
        
        this.barcoo = Bodies.rectangle (x, y, w, h);
        //this.barcimg = loadImage ("assets/barquin.png");
        World.add (world, this.barcoo);
        this.animation = bani;
        this.speed = 0.05;
        this.w = w;
        this.h = h;
    }
    iee (ind){
        this.animation = brkma;
        this.speed = 0.05
        this.w = 400;
        this.h = 400;
        setTimeout ( () => {
                Matter.World.remove (world, barr[ind].barcoo);
                delete barr[ind];
            }
            ,1000
        )
    }


    display (){
        
        push ();
        translate (this.barcoo.position.x, this.barcoo.position.y);
        imageMode (CENTER);
        image (this.animation[floor (this.speed%this.animation.length)], 0, 0, this.w, this.h);
        pop ();


    }
    animavel (){
        this.speed += 0.05;
    }

    
    

}
