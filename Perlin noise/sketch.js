// This sketch will serve as an example to show the use of perlin noise to smoothly
// move an agant around the screen using randomness, while avoiding the jagged movement
// typically assoscitated with Math.random(). Perlin noise will move the agents (x,y)
// Coordinates as a function of time.


// Define Variables

t = 0;

// Setup
function setup() {
    // Create Canvas
    createCanvas(800, 400);
}

// Draw Loop
function draw() {
    // Color Info
    background(0)
    fill(255)

    // Set time step value
    t = t+0.01;

    // Generate and map the perlin noise for (x,y)
    x = noise(t);
    x = map(x,0,1,0,width)

    y = noise(t+3);
    y = map(y,0,1,height,0)

    // Draw the ellipse at (x,y)
    ellipse(x,y,40,40)


}