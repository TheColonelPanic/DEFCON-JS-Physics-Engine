// Constructor function for Ball
function agent(){

    // Define Diameter and Radius of ball
    this.d = 40;
    this.r = this.d/2;

    // Define position and velocity vectors
    this.position = createVector(random(0,width-this.r),random(0,height-this.r));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0,0);

    this.update = function(){ 
        // add position, acceleration & velocity vectors
        this.velocity.add(this.acceleration);
        let newPos = this.position.add(this.velocity);
        if ((newPos.x+this.r) >= width){
            this.velocity.x = this.velocity.x * -1;
        } else if((newPos.x-this.r) <= 0){
            this.velocity.x = this.velocity.x * -1;
        } else if ((newPos.y+this.r) >= height){
            this.velocity.y = this.velocity.y * -1;
        } else if((newPos.y-this.r) <= 0){
            this.velocity.y = this.velocity.y * -1;
        }
        this.position.add(this.velocity);
        this.acceleration = p5.Vector.mult(this.acceleration, 0);
    }

    // Newton's 2nd Law
    this.applyForce = function(force){
        this.acceleration.add(force)
    }

    // Wall Collision
    this.pong = function(){
        if ((this.position.x+this.r) > width){
            this.position.x = width-this.r;
            this.velocity.x = this.velocity.x * -1;
        } else if((this.position.x-this.r) < 0){
            this.position.x = 0+this.r;
            this.velocity.x = this.velocity.x * -1;
        } else if ((this.position.y+this.r) > height){
            this.position.y = height-this.r;
            this.velocity.y = this.velocity.y * -1;
        } else if((this.position.y-this.r) < 0){
            this.position.y = 0+this.r;
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

// Define Agents Array as global variable
let agents = new Array(1);

// Setup
function setup() {
    // Create Canvas
    createCanvas(800, 600);

    // Loop throung agents[] and create objects
    for (let i=0; i < agents.length; i++){
        agents[i] = new agent();
        console.log(agents[i])
    }
    console.log(agents)
    frameRate(10);
}

// Draw Loop
function draw() {
    background(200);
    
    // Loop through agents[] and run methods for drawcycle
    for(i=0; i<agents.length; i++){
        gravity = createVector(0,1);
        agents[i].applyForce(gravity)

        // wind = createVector(0.1,0)
        // agents[i].applyForce(wind)

        agents[i].update();
        agents[i].render();
    }
}