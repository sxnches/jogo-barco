const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var back;
var torre;
var torreimg;
var canao;
var an;
//matriz
var mab = [];

var brc;

var barr = [];

var ind;

//barco
var bani = [];

var jsbar;

var barim;

var fram;

var barimgg;

//broken
var brkma = [];
var jsbrk;
var brkim;
var frame;
var brknimgg;

var exsom1;
var watsom1;
var hahasom1;
var bgsom1;


function preload() {
 back = loadImage ("assets/background.gif");
 torreimg = loadImage ("assets/tower.png")
 
 barim = loadImage ("boat.png");
 jsbar = loadJSON ("boat.json");

 brkim = loadImage ("brokenBoat.png");
 jsbrk = loadJSON ("brokenBoat.json");

 bgsom1 = loadSound ("assets/assets_background_music.mp3");
 exsom1 = loadSound ("assets/assets_cannon_explosion.mp3");
 watsom1 = loadSound ("assets/somcanonagua.mp3");
 hahasom1 = loadSound ("assets/lolsom.mp3");



}
function setup() {

  canvas = createCanvas(windowWidth, windowHeight - 4);
  engine = Engine.create();
  world = engine.world;
 angleMode (DEGREES);
 an = 10;
 canao = new cno (180, 205, 120, 120, an);
 fram = jsbar.frames;
 frame = jsbrk.frames;
 
 for (var i = 0; i < fram.length; i++){
   var p = fram[i].position;
   barimgg = barim.get (p.x, p.y, p.w, p.h);
   bani.push (barimgg);

 }

 for (var i = 0; i < frame.length; i++){
   var p = frame [i].position;
   brknimgg = brkim.get (p.x, p.y, p.w, p.h);
   brkma.push (brknimgg);
 }
 




  options={
 isStatic:true
 }

 torre = Bodies.rectangle (80, 240, 190, 310, options);
 World.add (world, torre)

 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
}

function draw() {
  background(back);
  Engine.update(engine);
  image (torreimg, torre.position.x, torre.position.y, 190, 310);
  canao.display();
  displ ();

  if (!bgsom1.isPlaying ()){
    bgsom1.play ();
    bgsom1.setVolume (0.03);
  }

for (var i = 0; i < mab.length; i++){
dis(mab[i], i);
collir(i);
}


 push()
 rectMode (CENTER);
 translate (ground.position.x, ground.position.y);
 rect(0, 0,width*2,1);
 pop()
   
}

function keyReleased (){
  if (keyCode == 32){
    ba = new bola (canao.x + 10, canao.y - 20, 40);
    mab.push (ba);
    mab[mab.length - 1].disp();
    exsom1.play ();
    exsom1.setVolume (0.07);
  }
}

function dis (ba,ind){
  if (ba){
    ba.display();
    if (ba.bol.position.y >= height - 50){
        if (!watsom1.isPlaying()){
      watsom1.play ();
      watsom1.setVolume (0.07);
        }
        ba.eii(ind);
    }
  }

}

function displ (){
  if (barr.length > 0){
    if ( barr[barr.length - 1] == undefined || barr[barr.length - 1].barcoo.position.x < width / 2 + 140){

      brc = new barco (width, height - 100, 200, 270, bani); 
      barr.push (brc);
          }
          for (var i = 0; i < barr.length; i++){
          
          console.log (barr [i])
            var tesbt = Matter.SAT.collides (this.torre, barr [i].barcoo)
          
            if (tesbt.collided){
              gameover ();
                if (!hahasom1.isPlaying()){
                  hahasom1.play ();
                  hahasom1.setVolume (0.05);

                }

            }

            //if (barr[i]){
              Matter.Body.setVelocity (barr[i].barcoo, {x: -2, y: 0});
              barr[i].display();
              barr [i].animavel ();
            
            
            //}
    }
    
  } 
  else {brc = new barco (width, height -100, 200, 270, bani); 
  barr.push (brc);
  }

}

function collir (ind){
    for (var i = 0; i < barr.length; i++){
      if (mab[ind]!== undefined && barr[i]!== undefined){
        var col = Matter.SAT.collides (mab [ind].bol, barr [i].barcoo)
        if (col.collided){
          barr [i].iee (i);
          mab [ind].eii (ind);
          barr [i].animavel();

        }
        console.log (col.collided);
      }
    }
}

function gameover (){
  swal ({
    title : "cabo", 
    text : "tenta de novo ai",
    imageUrl : "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
    imageSize : "150 x 250",
    confirmButtonText : "clica aq"
  },
  function (isConfirm){
    if (isConfirm){
      location.reload ()
    }
  }
  )
}
