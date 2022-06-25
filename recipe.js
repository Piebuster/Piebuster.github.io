class Blueberry extends Food {
    constructor() {
        super()
        this.c = color(0, 100, 255);
        this.d = random(7,9);
        this.drop = random(4, 7);
    }
}

class Cranberry extends Food {
    constructor() {
        super()
        this.c = color(255, 0, 50);
        this.d = random(6,9);
        this.drop = random(4, 8);
    }
}

class Milk extends Food {
    constructor() {
        super()
        this.c = color(255);
        this.d = random(8,10);
        this.drop = random(3, 7);
    }
}

class Egg extends Food {
    constructor() {
        super()
        this.c = color(255,255,0);
        this.d = random(8,10);
        this.drop = random(3, 6)
    }
}

