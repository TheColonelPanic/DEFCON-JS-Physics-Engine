// Constructor function for Ball
function Ball(){
    // Define position and velocity vectors
    this.position = createVector(width/2,height/2)
    this.velocity = createVector(2.5, -2)

    // Define Diameter and Radius of ball
    this.d = 40
    this.r = this.d/2

    this.move = function(){
        // add position and velocity vectors
        this.position.add(this.velocity);
    }

    this.bounce = function(){
        if (((this.position.x+this.r) > width) || ((this.position.x-this.r) < 0)){
            this.velocity.x = this.velocity.x * -1;
        } else if (((this.position.y+this.r) > height)||((this.position.y-this.r) < 0)){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.render = function(){
        fill(0)
        ellipse(this.position.x, this.position.y, this.d, this.d);
    }
}

// Setup
function setup() {
    // Create Canvas
    createCanvas(800, 400);

    b = new Ball();
}

// Draw Loop
function draw() {
    background(200)
    b.move();
    b.bounce();
    b.render();
}