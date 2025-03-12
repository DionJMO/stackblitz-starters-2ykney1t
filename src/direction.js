// Standardrichtung ist vertikal
let currentDirection = "horizontal";

// Funktion zur Bewegung des Logos basierend auf der ausgewählten Richtung
export function moveObject(x, y, step) {
  switch (currentDirection) {
    case 'vertical':
      return { x, y: y + step };
    case 'diagonal':
      return { x: x + step, y: y + step };
    case 'horizontal':
      return { x: x + step, y };
    case 'diagonalUp':
      return { x: x + step, y: y - step };
    default:
      return { x, y: y + step };
  }
}

// Funktion zum Ändern der Richtung
export function toggleDirection() {
  switch(currentDirection) {
    case 'vertical':
      currentDirection = 'diagonal';
      break;
    case 'diagonal':
      currentDirection = 'horizontal';
      break;
    case 'horizontal':
      currentDirection = 'diagonalUp';
      break;
    case 'diagonalUp':
      currentDirection = 'vertical';
      break;
  }
  return currentDirection;
}

// Funktion zum Zurücksetzen der Position
export function resetPosition(x, y, canvasWidth, canvasHeight) {
  let newX = x;
  let newY = y;
  
  switch (currentDirection) {
    case 'vertical':
      if (y > canvasHeight + 400) {
        newY = -50;
      }
      break;
    case 'diagonal':
    case 'horizontal':
    case 'diagonalUp':
      if (y > canvasHeight + 400 || x > canvasWidth + 400 || y < -400) {
        newY = -50;
        newX = -50;
      }
      break;
  }
  
  return { x: newX, y: newY };
}

// Gibt die aktuelle Richtung zurück
export function getDirection() {
  return currentDirection;
}