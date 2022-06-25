class Player {
    constructor(){
        this.w = 20; // playerWidth
        this.h = 30; // playerHeight
        this.x = (width * 3/4)/2 - this.w/2;
        this.y = height - this.h - platformHeight;
        this.leftFrameCount = 0
        this.rightFrameCount = 0
    }

    draw(){
        //hitbox
        
        noFill(); //hiding hitbox
        rect(this.x, this.y, this.w, this.h);  
        
        //RiVi image, direction
        rivichan.resize(40,55);
        rivichanL.resize(40,55);
        rivichanR.resize(40,55);

        if(keyIsDown(LEFT_ARROW)){
        image(rivichanL, this.x-14, this.y-25)
        } 
        else if(keyIsDown(RIGHT_ARROW)){
        image(rivichanR, this.x-14, this.y-25 )
        } else {
        image(rivichan, this.x-14, this.y-25)

        }

      

    }

    move(){

          if(keyIsDown(LEFT_ARROW)){
            this.leftFrameCount++
            this.x -=  2+this.leftFrameCount/2
          } else  {
            this.leftFrameCount = 0;
          }
        
          //Bug:양쪽누르면 발사 트리거
          if(keyIsDown(RIGHT_ARROW)){
            this.rightFrameCount++
            this.x += 2+this.rightFrameCount/2
          } else {
            this.rightFrameCount = 0;
          }

          // if(keyIsDown(LEFT_ARROW&&RIGHT_ARROW)){
          
          //   this.rightFrameCount = 0;
          //   this.leftFrameCount = 0;
          // }
          

         // print(this.leftFrameCount, this.rightFrameCount)
    }
    block(){
        
      if((this.x> (w*3/4) - this.w)&&(kitchen === false)) {
            this.x = (w*3/4) - this.w;
          }
      if((this.x> (w*3/4) - this.w)&&(kitchen === true)) {
          this.x = this.x
      } 
      if(this.x< 0) {
        this.x = 0 ;
      }
      if(this.x> w-this.w){
        this.x = w-this.w
      }

    }
    
}

//player: OV
class Player2 extends Player{
  constructor(){
    super();
    this.w = 40;
    this.h = 40;
    this.x = 580;
    this.y = 580;
  }

  draw2(){
    //hitbox
    
    noFill(); //hiding hitbox
    rect(this.x, this.y-20, this.w, this.h);  
    
    // //RiVi image, direction
     OVoff.resize(40,40);
     OVon.resize(40,40);
   

     if(power>100){
      image(OVon, this.x, this.y-20);
     }
     else{
      image(OVoff, this.x, this.y-20);
     }

    }

  move2(){
    if(keyIsDown(LEFT_ARROW)){
      this.x -= 4
    }

    if(keyIsDown(RIGHT_ARROW)){
      this.x += 4
  }  

 }
}
