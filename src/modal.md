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

### 🎯 Dunkle Hintergrundfarben
Probiere diese Grautöne für einen dunkleren Look:
```js
// In config.js - Wähle eine dieser Farben für backgroundColor
export const config = {
  // Verschiedene Dunkelheitsgrade:
  backgroundColor: '#2E2E2E', // 70% Schwarz
  // oder
  backgroundColor: '#666666', // 40% Schwarz
  // oder
  backgroundColor: '#999999', // 25% Schwarz
  // oder
  backgroundColor: '#B3B3B3', // 15% Schwarz
  ...
  backgroundColor: '#29AEC0', // 80% Blau
  // oder
  backgroundColor: '#5ABCC8', // 60% Blau
  // oder
  backgroundColor: '#8CCDD3', // 40% Blau
  // oder
  backgroundColor: '#C0E5E9', // 20% Blau
}
```

## 💡 Tipps
- Probiere die verschiedenen Richtungen aus und beobachte, wie sich das Verhalten der Animation ändert!
- Kombiniere Richtungen und Geschwindigkeiten für interessante Effekte
- Die Position wird automatisch zurückgesetzt, wenn das Logo den Bildschirm verlässt
