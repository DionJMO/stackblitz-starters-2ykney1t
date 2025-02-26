# Animating Events 

## Original 
// Declare variable for the horizontal position of the circle
let x = 5;
let y = 300;
let img;

function preload() {
  img = loadImage('Kurzlogo.png');
}

function setup() {
  // Create the canvas
  createCanvas(720, 400);

  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set the text size
  textSize(20);

  // No animation to start
  noLoop();
}

function draw() {
  // Clear the background
  background(0);

  // Show logo, with hue determined by frameCount
  image(img, x, y / 2, 50, 50);

  // Increase the x variable by 5
  x += 5;


  // Reset the circle position aftex it moves off the right side
  if (x > width + 25) {
    x = -50;
  }

  describe('logo moving to the diagonal');
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draw one frame
  redraw();
}
## Variation 1: Diagonale Bewegung

// Declare variable for the horizontal position of the circle
let x = 5;
let y = 10;
let img;

function preload() {
  img = loadImage('Kurzlogo.png');
}

function setup() {
  // Create the canvas
  createCanvas(720, 400);

  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set the text size
  textSize(20);

  // No animation to start
  noLoop();
}

function draw() {
  // Clear the background
  background(0);

  // Show logo, with hue determined by frameCount
  image(img, x, y / 2, 50, 50);

  // Increase the x variable by 5
  x += 5;
  y += 5;

  // Reset the circle position after it moves off the right side
  if (x > width + 350 || y > height + 350) {
    x = -25;
    y = -25;
  }

  describe('logo moving to the diagonal');
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draw one frame
  redraw();
}
