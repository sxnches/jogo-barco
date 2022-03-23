class bola {
    constructor (x, y, r){
        
        var config = {
            isStatic: true
        }

        this.r = r;
        this.bol = Bodies.circle (x, y, r, config);
        this.bm = loadImage ("assets/cannonball.png");
        World.add (world, this.bol);
    }
    display (){
        push ()
        imageMode (CENTER);
        image (this.bm, this.bol.position.x, this.bol.position.y, this.r, this.r);
        pop ()

        

    }
    disp (){
        
        var glo;
        glo = canao.a;
        glo = glo * (3.14 / 180);
        
        var ve;
        ve = p5.Vector.fromAngle (glo);
        ve.mult (0.5);

        Matter.Body.setStatic (this.bol, false);
        Matter.Body.setVelocity (this.bol, {x: ve.x * (180 / 3.14), y: ve.y * (180 / 3.14)});
    }

    eii  (ind){
        
        Matter.Body.setVelocity (this.bol, {x : 0, y : 0})
        setTimeout (() => {
            Matter.World.remove (world, mab[ind].bol);
            delete mab[ind];
        }
        ,1000

        )
    }
}
