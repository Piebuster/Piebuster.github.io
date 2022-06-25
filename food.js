class Food{
    constructor(){
        this.x = random(width - (160+13));
        this.y = 0
        this.exist = false
    }

    draw(){
        push();
        fill(this.c);
        square(this.x, this.y, this.d);
        pop();
    }

    move(){
        this.y += this.drop ;
    }

    disappear(){
        if(this.y > 600 - this.d) {
            this.exist = false
            this.x = random(width - (160+13));
            this.y = 0
        }
    }
}
