// Hier werden Konfigurationseinstellungen definiert, die Schüler nicht ändern sollen

// Standard-Konfiguration
export const config = {
    // Bewegungsrichtung: 'vertical', 'diagonal', 'horizontal', 'diagonalUp'
    defaultDirection: "horizontal",
    
    // Hintergrundfarbe
    backgroundColor: '#b3b3b3',
    
    // Canvas-Größe
    canvasWidth: 720,
    canvasHeight: 400,
    
    // Logo-Größe
    logoWidth: 50,
    logoHeight: 50,
    
    // Standard-Schrittweite
    defaultStep: 5
  };
  
  // Hilfsfunktion zum Setzen des Hintergrunds
  export function clearBackground(p5Instance) {
    p5Instance.background(config.backgroundColor);
  }