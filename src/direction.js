let direction = "vertical"

// Bewege das Logo basierend auf der ausgewählten Richtung
switch (direction) {
    case 'vertical':
      y += step;
      break;
    case 'diagonal':
      x += step;
      y += step;
      break;
    case 'horizontal':
      x += step;
      break;
    case 'diagonalUp':
      x += step;
      y -= step;
      break;
  }