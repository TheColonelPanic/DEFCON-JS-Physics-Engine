// Constructor function for Ball
function Ball(){
    // Define position and velocity vectors
    this.position = createVector(width/2,height/2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0,0);

    // Define Diameter and Radius of ball
    this.d = 40;
    this.r = this.d/2;

    this.move = function(){
        // add position, acceleration & velocity vectors
        this.acceleration = p5.Vector.random2D();
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.velocity.limit(5);
    }

    // Wall Collision
    this.bounce = function(){
        if (((this.position.x+this.r) > width) || ((this.position.x-this.r) < 0)){
            this.velocity.x = this.velocity.x * -1;
        } else if (((this.position.y+this.r) > height)||((this.position.y-this.r) < 0)){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    // Astroids style clip movement (Exit left, enter right)
    this.astroid = function(){
        if (this.position.x > width) this.position.x = 0;
        if (this.position.x < 0) this.position.x = width;
        if (this.position.y > height) this.position.y = 0;
        if (this.position.y < 0) this.position.y = height;
    }

    this.render = function(){
        fill(0);
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
    background(200);
    b.astroid();
    b.move();

    b.render();
}