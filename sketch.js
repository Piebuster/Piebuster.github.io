//screenCheck
let screenCheck = 0;

//width & height & frame
let w = 640, h = 640; 
let fr = 60;

//platform
let platformWidth = w * 3/4;
let platformHeight = 40;

//Recipe
let food = []
let blueberry = [];
let cranberry = [];
let milk = [];
let egg = [];

//RecipeCount, RecipeNeed
let blueberryCount = 0;
let cranberryCount = 0;
let milkCount = 0;
let eggCount = 0;

let blueberryNeed = 12;
let cranberryNeed = 10;
let milkNeed = 7;
let eggNeed = 3;

//Fork 
let fork = [];

//amount
let dropNum = 13; //number of drop on screen
let counter = 0, selector= []

//kitchen appears when complete collecing
let kitchen = false
let kitOpenSE = 0;

//blinker + death counter
let blink = 0;
let deathTimer = 0;

//OV power
let power = 0;

//Score
let score = 0;




function preload(){
  avenixel = loadFont('media/Avenixel-Regular.ttf');
  MagicaLunch = loadSound('media/magicalLunch .wav');
  SE_eat = loadSound('media/SE_eat.wav');
  SE_kitchenOpen = loadSound('media/SE_kitchenOpen.wav');
  SE_forkHit = loadSound('media/SE_forkHit.wav');
  SE_gameover = loadSound('media/SE_gameover.wav');
  rivichan = loadImage('media/RiViFront.png');
  rivichanL = loadImage('media/RiVi.png');
  rivichanR = loadImage('media/RiViRight.png');
  OVon = loadImage('media/OV_ON.png');
  OVoff = loadImage('media/OV_OFF.png');
  pancake = loadImage('media/pancake.png');
  SE_fin = loadSound('media/SE_fin.wav');

}


function setup(){
  createCanvas(w, h);
  frameRate(fr);

  RiVi = new Player();
  OV = new Player2();

  //adjust number of food[]
  for(let i = 0; i<5; i++){
    food[i] = new Blueberry;
  }
  for(let i = 5; i<10; i++){
    food[i] = new Cranberry;
  }
  for(let i = 10; i<12; i++){
    food[i] = new Milk;
  }
  for(let i = 12; i<13; i++){
    food[i] = new Egg;
  }
  for(let i = 13; i<60; i++){
    food[i] = new Fork;
  }

  for(let i = 0; i<dropNum; i++){
    selector[i] = -1;
  }

}



function draw() {

blink+= 0.08 


if(screenCheck == 0){
    titleScreen();
  } else if (screenCheck == 1) {
    gamePlay();
  } else if (screenCheck == 2) {
    gameOver();
  } else if (screenCheck == 3) {
    trueEnding();
  } else if (screenCheck == 4) {
    normalEnding();
  }

}

function keyPressed() {
  if(screenCheck == 0 && keyCode == '32' ) {
    screenCheck = 1
    MagicaLunch.loop();
    SE_gameover.stop();
   
  } 
  else if (screenCheck == 2 && keyCode == '32' ) {
    screenCheck = 0
  }

/*  else if (screenCheck == 2 && keyCode == '82' ) {
    screenCheck = 1
  }
*/  
  else if (screenCheck == 3 && keyCode == '32' ) {
    screenCheck = 0
  }
  else if (screenCheck == 4 && keyCode == '32' ) {
    screenCheck = 0  
    }
  }

function RiViHit() {

  //fork hit
  for(i = 13; i<60 ; i++){
    if(((RiVi.x - food[i].d) < food[i].x) && (food[i].x < (RiVi.x+RiVi.w))
     && ((RiVi.y - food[i].d) < food[i].y) && (food[i].y < (RiVi.y+RiVi.h))){

      food[i].x = random(width - (160+13));
      food[i].y = 0
      SE_forkHit.play();
      MagicaLunch.stop();
   
      screenCheck = 2; //gameOver
      SE_gameover.play();

    }
  }

  //blueberry hit(eat)
  for(let i = 0; i<5; i++){
    if(((RiVi.x - food[i].d) < food[i].x) && (food[i].x < (RiVi.x+RiVi.w)) 
    && ((RiVi.y - food[i].d) < food[i].y) && (food[i].y < (RiVi.y+RiVi.h))){

      food[i].x = random(width - (160+13));
      food[i].y = 0
      blueberryCount++
      SE_eat.play();
      score+=100;

    }
  }

  //cranberry hit(eat)
  for(let i = 5; i<10; i++){
    if(((RiVi.x - food[i].d) < food[i].x) && (food[i].x < (RiVi.x+RiVi.w)) 
    && ((RiVi.y - food[i].d) < food[i].y) && (food[i].y < (RiVi.y+RiVi.h))){

      food[i].x = random(width - (160+13));
      food[i].y = 0
      cranberryCount++
      SE_eat.play();
      score+=120;

    }
  }
  //milk hit(eat)
  for(let i = 10; i<12; i++){
    if(((RiVi.x - food[i].d) < food[i].x) && (food[i].x < (RiVi.x+RiVi.w)) 
    && ((RiVi.y - food[i].d) < food[i].y) && (food[i].y < (RiVi.y+RiVi.h))){

      food[i].x = random(width - (160+13));
      food[i].y = 0
      milkCount++
      SE_eat.play();
      score+=150;

    }
  }
  //egg hit(eat)
  for(let i = 12; i<13; i++){
    if(((RiVi.x - food[i].d) < food[i].x) && (food[i].x < (RiVi.x+RiVi.w)) 
    && ((RiVi.y - food[i].d) < food[i].y) && (food[i].y < (RiVi.y+RiVi.h))){

      food[i].x = random(width - (160+13));
      food[i].y = 0
      eggCount++
      SE_eat.play();
      score+=300;

    }
  }


}