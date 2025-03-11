
Dies ist ein interaktives Beispiel, um zu veranschaulichen, wie man durch einfache Änderungen im Code das Verhalten einer Animation beeinflussen kann.

#### 🔧 Steuerung der Animation  
- **Klick auf den Canvas** → Startet oder stoppt die Animation.  
- **Ändere die Werte für `x` und `y`** → Position des Logos anpassen.  
- **Klick auf "Toggle Diagonal Movement"** → Wechselt zwischen vertikaler und diagonaler Bewegung.  
- **Drücke eine Taste** → Bewegt die Animation um einen Frame weiter.  

#### 🛠 Code-Anpassungen für eigenes Experimentieren  

##### 🎯 Bewegungsgeschwindigkeit ändern  
Ändere die Variable `step`, um die Geschwindigkeit des Logos anzupassen:  

```js
let step = 5; // Erhöht die Bewegungsgeschwindigkeit
```
##### 🎯 Startposition anpassen
Ändere die Werte von x und y, um die Anfangsposition des Logos zu ändern:

```js
let x = 315; // Logo startet weiter links
let y = 25;  // Logo startet weiter unten
```
##### 🎯 Bewegungsrichtung ändern
Passe den Code im draw()-Loop an, um beispielsweise eine horizontale Bewegung zu ermöglichen:

```js
if (diagonalMovement) {
  x += step; // Bewegt sich nach rechts
} else {
  y += step; // Bewegt sich nach unten
}
```
💡 Tipp: Probiere verschiedene Werte aus und beobachte, wie sich das Verhalten der Animation ändert! 🚀

##### Animation Controls

1. Klicken Sie auf eine beliebige Stelle, um die Animation zu starten/stoppen
2. Legen Sie über die Eingabefelder eine neue Position fest
3. Wechseln Sie zwischen vertikaler und diagonaler Bewegung
4. Drücken Sie eine beliebige Taste, um ein Bild weiterzugehen

Das Logo wird seine Position zurücksetzen, wenn es den Bildschirm verlässt.