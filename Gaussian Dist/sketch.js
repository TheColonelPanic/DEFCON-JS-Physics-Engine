// This sketch will demonstrate the Box-Muller transform
// on Math.random() by randomly drawing semi-transparent
// ellipses on the screen with (x,y) being random gaussian
// coordinates. The end result should be a fuzzy black hole
// centered around the mean

// Constructor Function for Walker
function rand_gaus() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

// Setup
function setup() {
    // Create Canvas
    createCanvas(800, 400);
    background(255)
}

// Draw Loop
function draw() {

    // generate gaussian number
    let h = rand_gaus();
    // shift std_dev
    h = h * 200;
    // shift mean
    h = h + (height/2);

    // generate gaussian number
    let w = rand_gaus();
    // shift std_dev
    w = w * 200;
    // shift mean
    w = w + (width/2);

    Color = color(0, 0, 0);
    Color.setAlpha(10);
    noStroke();
    fill(Color);
    ellipse(w, h, 20, 20);

}