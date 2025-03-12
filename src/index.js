import './styles.scss';
import { moveObject, toggleDirection, resetPosition, getDirection } from './direction.js';

// Make functions available globally
window.updateValues = updateValues;
window.toggleMovement = toggleMovement;

// Declare variables for position and animation
let x = 315;
let y = 375;
let img;
let step = 10;

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

  // Show logo
  image(img, x, y / 2, 50, 50);

  // Bewege das Logo basierend auf der aktuellen Richtung
  const newPosition = moveObject(x, y, step);
  x = newPosition.x;
  y = newPosition.y;

  // Überprüfe, ob die Position zurückgesetzt werden muss
  const resetPos = resetPosition(x, y, width, height);
  x = resetPos.x;
  y = resetPos.y;

  describe('logo moving ' + getDirection());
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
  toggleDirection();
  redraw();
}