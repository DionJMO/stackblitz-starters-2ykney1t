import { config } from './config.js';

// Standardrichtung aus der Konfiguration übernehmen
let currentDirection = config.defaultDirection;

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

// Funktion zum Zurücksetzen der Position wenn außerhalb des Bildschirms
export function resetPosition(x, y, canvasWidth, canvasHeight) {
  let newX = x;
  let newY = y;
  
  // Großzügiger Buffer-Bereich, damit das Logo komplett verschwinden kann
  const buffer = 350; // Erhöhe diesen Wert für mehr Platz
  
  switch (getDirection()) {
    case 'vertical':
      // Nur zurücksetzen, wenn weit unter dem Canvas
      if (y > canvasHeight + buffer) {
        newY = -buffer; // Oberhalb des Canvas starten
      }
      break;
    case 'horizontal':
      // Nur zurücksetzen, wenn weit rechts vom Canvas
      if (x > canvasWidth + buffer) {
        newX = -buffer; // Links vom Canvas starten
      }
      break;
    case 'diagonal':
      // Nur zurücksetzen, wenn weit genug vom Canvas entfernt
      if (y > canvasHeight + buffer || x > canvasWidth + buffer) {
        newY = -buffer;
        newX = -buffer;
      }
      break;
    case 'diagonalUp':
      // Nur zurücksetzen, wenn weit genug vom Canvas entfernt
      if (x > canvasWidth + buffer || y < -buffer) {
        newY = canvasHeight + buffer;
        newX = -buffer;
      }
      break;
  }
  
  return { x: newX, y: newY };
}

// Gibt die aktuelle Richtung zurück
export function getDirection() {
  return currentDirection;
}

// Neue Funktion, um eine bestimmte Richtung direkt einzustellen
export function setDirection(direction) {
  if (['vertical', 'diagonal', 'horizontal', 'diagonalUp'].includes(direction)) {
    currentDirection = direction;
  }
  return currentDirection;
}

// Neue Funktion, um die optimale Startposition basierend auf der Richtung zu erhalten
export function getInitialPosition(canvasWidth, canvasHeight) {
  switch (currentDirection) {
    case 'vertical':
      return { x: canvasWidth / 2 - 25, y: -50 }; // Mittig oben
    case 'horizontal':
      return { x: -50, y: canvasHeight * 0.8 }; // Links mittig
    case 'diagonal':
      return { x: -50, y: -50 }; // Oben links
    case 'diagonalUp':
      return { x: -50, y: canvasHeight + 50 }; // Unten links
    default:
      return { x: canvasWidth / 2 - 25, y: -50 }; // Standard: mittig oben
  }
}