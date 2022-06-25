function titleScreen(){
  
    background(0, 0, 54);
    fill(255);
    textSize(72);
    textFont(avenixel)
    
    rivichanR.resize(140, 260);
    image(rivichanR, 40, 40);
  

    textAlign(LEFT);
    text('Daily\nLunch Special', width/2 - 120, 210);
    textAlign(CENTER);
    textSize(30);
    text('© 2022 PLATANITY.Works', width/2, 600)



    if(sin(blink)>=0){
      fill(0, 0, 54);
      text('PRESS SPACE TO PLAY' , width/2, 440)
    } 
    else {
      fill(255);
      text('PRESS SPACE TO PLAY' , width/2, 450)
    }



    //reset player location + shuffle
    RiVi.x = (width * 3/4)/2 - RiVi.w/2;
    OV.x = 580;

    for(let i = 0; i<60; i++){
        food[i].x = random(width - (160+13));
        food[i].y = 0
      }

    //reset score
    score = 0;
  

}


function gamePlay() {

        for(i = 0; i < dropNum; i++) {
        if (counter < dropNum && selector[i] == -1) {
          selector[i] = int(random(0, 59))
          counter++
        }
        for (j = 0; j < dropNum; j++) {
          if ((selector[i] == selector[j]) && i != j) {
            selector[i] = int(random(0, 59))
          }
        }
      }
      //bg color
      background(0, 0, 54);
    
      //platform
      fill(160);
      noStroke();
      rect(0, 600, platformWidth , platformHeight);
    
      //questBoard
      fill(0);
      rect(480, 0, width/4 , height);

      //questBoard: recipe(Count)
      fill(0,100,255);    
      square(483, 92, 18);
      fill(255, 0, 50);
      square(483, 152, 18);
      fill(255);
      square(483, 212, 18);
      fill(255,255, 0);
      square(483, 272, 18);

      textSize(27);
      fill(0,100,255);
      text('BLUEBERRY', 483, 80);
      fill(255, 0, 50);
      text('CRANBERRY', 483, 140);
      fill(255);
      text('MILK', 483, 200);
      fill(255,255, 0);
      text('EGG', 483, 260);
      
      textSize(40);
      textAlign(LEFT);
      fill(255);
      text(blueberryCount+'/'+blueberryNeed, 510, 110);
      text(cranberryCount+'/'+cranberryNeed, 510, 170);
      text(milkCount+'/'+milkNeed, 510, 230);
      text(eggCount+'/'+eggNeed, 510, 290);

      //questBoard: score
      push();
      textSize(27); 
      fill(255);
      text('SCORE', 483, 20);
      textSize(35); 
      text(score, 483, 52);
      pop();

    
      //Foods
    
      for(let i = 0; i<dropNum; i++){
        food[selector[i]].exist = true
        food[selector[i]].draw();
        food[selector[i]].move();
      }
    
      for(let i = 0; i<60; i++){
        food[i].disappear()
      }
    
      for(let i = 0; i<dropNum; i++){
        if (food[selector[i]].exist == false) {
          selector[i] = -1
          counter--
        }
      }



      //kitchen open

      if((blueberryCount>= blueberryNeed)&&(cranberryCount>= cranberryNeed) 
      &&(milkCount>= milkNeed)&&(eggCount>= eggNeed) ){

        kitOpenSE++

        fill(255, 192, 203);
        rect(480, 480, 160, 120);
        fill(204,);
        rect(480, 600, 160, 40);
        OV.draw2();

        textSize(32);
      
        if(sin(blink)>=0){
          fill(0);
          text('KITCHEN', 480, 480);
        } 
        else {
          fill(255);
          text('KITCHEN', 480, 480);
        }
        kitchen = true;
      }

      //just for Kitchen open & OV  sound
      if(kitOpenSE == 1){
        SE_kitchenOpen.play();
      }
      if(power == 200){
        //do
      }
      if(power == 300){
        //re
      }
      if(power == 400){
        //mi
      }
      if(power == 500){
        //fa
      }
      if(power == 600){
        //sol
      }
      if(power == 700){
        //la
      }
      if(power == 800){
        //ti
      }
      if(power == 900){
        //do
      }
      if(power == 1000){
        SE_fin.play();
      }
      //----------------------------

      
      print(power);

      if((kitchen == true) && (RiVi.x > 540)){

        //chat bubble : OV
        fill(255);
        noStroke();
        beginShape();
        vertex(487,330);
        vertex(487,450);
        vertex(600,450);

        vertex(OV.x+20,OV.y -20);

        vertex(620, 450);
        vertex(630,450);
        vertex(630, 450);
        vertex(630, 330);
        endShape();

        fill(0);
        textSize(24);
        text('Hold Space to\nStart Cooking!!', 490,350);
        text(power+'/1000', 490, 420);

        if(keyIsPressed && keyCode == '32'){
          fill(255);
          text('yay!', RiVi.x- 10, RiVi.y-24);
          power++ //charge OV
          score++

        } 
      }

    
      //RiVi
      RiVi.draw();
      RiVi.move();
      RiVi.block();
      RiViHit();
      if((RiVi.x<= (w*3/4) - RiVi.w)) {
        score++
      }


      //according to Power value
      
    
      if(power > 1000){
        OV.move2();
        OV.block();
        RiVi.x = 560;
      }

      if(power>=1000){

        if((blueberryCount = blueberryNeed)&&(cranberryCount= cranberryNeed) 
        &&(milkCount= milkNeed)&&(eggCount = eggNeed) ){
      
          screenCheck = 3;
          SE_fin.play();
        }
        else{
          screenCheck = 4;
          SE_fin.play();
        }
      }


      print(blueberryCount, blueberryNeed);
      print(milkCount, milkNeed)
      
      //print(screenCheck);

      
}

function gameOver() {
    background(0, 0, 54);
    fill(255);
    textAlign(CENTER);
    textSize(45);
    text('GAME OVER', w/2, h/2);
    textSize(30);
    text('SCORE: '+ score, w/2, h/2+50);


    if(sin(blink)>=0){
      fill(0, 0, 54);
      text('SPACE : Title Screen', w/2, 560 )
    } 
    else {
      fill(255);
      text('SPACE : Title Screen', w/2, 560 )
    }


    //reset(shuffle)
    RiVi.x = (width * 3/4)/2 - RiVi.w/2;
    for(let i = 0; i<60; i++){
        food[i].x = random(width - (160+13));
        food[i].y = 0
      }
    
    //reset recipeCount
    blueberryCount = 0;
    cranberryCount = 0;
    milkCount = 0;
    eggCount = 0;

    //reset kitchen
    kitchen = false;
    kitOpenSE = 0;
    power = 0; //OV's power reset   

}

function trueEnding(){

  
  background(0, 0, 54);
  MagicaLunch.stop();

  fill(255);
  textAlign(CENTER);
  textSize(45);
  text('Daily Lunch Pancake!!', w/2, h/2+ 150);
  textSize(30);
  text('SCORE: '+ score, w/2, h/2+200);
  fill(255);
  text('SPACE : Title Screen', w/2, 560 )

  image(pancake, w/2- 160, h/2 -250);


    //reset(shuffle)
    RiVi.x = (width * 3/4)/2 - RiVi.w/2;
    for(let i = 0; i<60; i++){
        food[i].x = random(width - (160+13));
        food[i].y = 0
      }
    
    //reset recipeCount
    blueberryCount = 0;
    cranberryCount = 0;
    milkCount = 0;
    eggCount = 0;

    //reset kitchen
    kitchen = false;
    kitOpenSE = 0;
    power = 0; //OV's power reset   
  

}

function normalEnding(){
  background(0, 0, 54);
  MagicaLunch.stop();

  fill(255);
  textAlign(CENTER);
  textSize(45);
  text('Daily Lunch Pancake!!', w/2, h/2+ 150);
  textSize(30);
  text('SCORE: '+ score, w/2, h/2+200);
  fill(255);
  text('SPACE : Title Screen', w/2, 560 )

  image(pancake, w/2- 160, h/2 -250);

      //reset(shuffle)
      RiVi.x = (width * 3/4)/2 - RiVi.w/2;
      for(let i = 0; i<60; i++){
          food[i].x = random(width - (160+13));
          food[i].y = 0
        }
      
      //reset recipeCount
      blueberryCount = 0;
      cranberryCount = 0;
      milkCount = 0;
      eggCount = 0;
  
      //reset kitchen
      kitchen = false;
      kitOpenSE = 0;
      power = 0; //OV's power reset   
  
  
}