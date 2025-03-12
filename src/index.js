import './styles.scss';

// Make functions available globally
window.updateValues = updateValues;
window.toggleMovement = toggleMovement;

// Declare variable for the horizontal position of the circle
let x = 315;
let y = 375;
let img;
let step = 10;
let diagonalMovement = false;

window.preload = function() {
  img = loadImage('./src/Kurzlogo.png');
}

window.setup = function() {
  // Create the canvas
  let canvas = createCanvas(720, 400);
  canvas.parent('canvas-container');
  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set the text size
  textSize(20);

  // No animation to start
  noLoop();
}

window.draw = function() {
  if(window.isToastVisible) {
    return;
  }
  // Clear the background
  background('#d9d9d9');

  // Show logo, with hue determined by frameCount
  image(img, x, y / 2, 50, 50);

  if (diagonalMovement) {
    x += step;
    y += step;
  } else {
    // Increase the x variable by 5
    y += step;
  }

  if (!diagonalMovement && y > height + 400) { // y > height + 400
    y = - 50; // y = -50 - Nur y zurücksetzen, x bleibt konstant
  } else if (diagonalMovement && (y > height + 400 || x > width + 400)) {
    y = -50;
    x = -50;
  } 

  describe('logo moving ' + (diagonalMovement ? 'diagonally' : 'vertically'));
}

window.mousePressed = function() {
  // Start/stop the animation loop
  if (!isLooping()) {
    loop();
  } else {
    noLoop();
  }
}

window.keyPressed = function() {
  // Draw one frame
  redraw();
}

function updateValues() {
  x = parseInt(document.getElementById('xInput').value) || x;
  y = parseInt(document.getElementById('yInput').value) || y;
  step = parseInt(document.getElementById('stepInput').value) || step;
  redraw(); // Zeichne das Bild neu mit den aktualisierten Werten 
}

function toggleMovement() {
  diagonalMovement = !diagonalMovement;
  redraw();
}