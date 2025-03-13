// Hier werden Konfigurationseinstellungen definiert, die Schüler nicht ändern sollen

// Standard-Konfiguration
export const config = {
    // Bewegungsrichtung: 'vertical', 'diagonal', 'horizontal', 'diagonalUp'
    defaultDirection: "diagonalUp",
    
    // Hintergrundfarbe
    backgroundColor: '#d9d9d9',
    
    // Canvas-Größe
    canvasWidth: 720,
    canvasHeight: 400,
    
    // Logo-Größe
    logoWidth: 50,
    logoHeight: 50,
    
    // Standard-Schrittweite
    defaultStep: 10
  };
  
  // Hilfsfunktion zum Setzen des Hintergrunds
  export function clearBackground(p5Instance) {
    p5Instance.background(config.backgroundColor);
  }