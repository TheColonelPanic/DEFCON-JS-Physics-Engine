// The Purpose of this sketch is to implimetn basic random locomotion by having an agent
// move randomly around the screen. This is done but by instantiating a walker object
// and moving its x and Y by random values for every frame

// Constructor Function for Walker
function Walker(){

    // Define x & y
    this.x = width/2;
    this.y = height/2;

    // Step Function
    this.step = function(){
        choice = int(random(4));

        if (choice == 0){
            this.x++;
        } else if (choice == 1){
            this.x--;
        } else if (choice == 2){
            this.y++;
        } else {
            this.y--;
        }

        this.x = constrain(this.x,0, width-1);
        this.y = constrain(this.y,0, height-1);
    }

    //Render Function
    this.render = function(){
        stroke(0);
        point(this.x,this.y);
    }
}

// Setup
function setup() {
    // Create Canvas
    createCanvas(800, 600);

    // Create The Walker Object
    w = new Walker();

    //Background
    background(255)
  }

// Draw Loop
function draw() {
    w.step();
    w.render();
}