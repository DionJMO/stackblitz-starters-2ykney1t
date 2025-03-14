Dies ist ein interaktives Beispiel, um zu veranschaulichen, wie man durch einfache Änderungen im Code das Verhalten einer Animation beeinflussen kann.

## 🔧 Steuerung der Animation  
- **Klick auf den Canvas** → Startet oder stoppt die Animation.  
- **Drücke eine Taste** → Bewegt die Animation um einen Frame weiter.  

## 🧩 Modulare Struktur
Dieses Projekt verwendet eine modulare Struktur:

- **config.js** → Zentrale Konfigurationseinstellungen
- **direction.js** → Bewegungslogik und Richtungssteuerung
- **index.js** → Hauptcode mit p5.js-Integration

## 🛠 Code-Anpassungen für eigenes Experimentieren  

### 🎯 Bewegungsrichtung ändern
Die Standardrichtung ist in `config.js` definiert und kann geändert werden:
```js
// In config.js
export const config = {
  defaultDirection: "horizontal", // Optionen: "vertical", "diagonal", "horizontal", "diagonalUp"
  ...
}
```

### 🎯 Bewegungsgeschwindigkeit ändern  
Die Schrittweite kann ebenfalls in der Konfiguration angepasst werden:  
```js
// In config.js
export const config = {
  defaultStep: 10, // Erhöhe den Wert für schnellere Bewegung
  ...
}
```

### 🎯 Hintergrund- und Darstellungseigenschaften
Passe die visuellen Eigenschaften an:
```js
// In config.js
export const config = {
  backgroundColor: '#d9d9d9', // Ändere die Hintergrundfarbe
  canvasWidth: 720,           // Breite des Canvas
  canvasHeight: 400,          // Höhe des Canvas
  logoWidth: 50,              // Breite des Logos
  logoHeight: 50,             // Höhe des Logos
  ...
}
```

## 💡 Tipps
- Probiere die verschiedenen Richtungen aus und beobachte, wie sich das Verhalten der Animation ändert!
- Kombiniere Richtungen und Geschwindigkeiten für interessante Effekte
- Die Position wird automatisch zurückgesetzt, wenn das Logo den Bildschirm verlässt
