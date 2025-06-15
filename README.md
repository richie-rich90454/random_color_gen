## Overview of the Program
The program **Random Color Generator** is a lightweight, responsive web application that lets you generate fully random colors in three formats:
* **Hex** (with alpha support): `#RRGGBB` (preview uses RGBA alpha)
* **RGBA**: `rgba(r, g, b, a)`
* **HSLA**: `hsla(h, s%, l%, a)`
Click **Generate Random Color** to update the color codes and see a live preview. Text contrast adjusts automatically for readability in both light and dark modes.
---
## Demo
1. **Clone** this repository:
   ```bash
   git clone https://github.com/richie-rich90454/random_color_gen.git
   cd random_color_gen
   ```
2. **Install** dependencies:
   ```bash
   npm install
   ```
3. **Run** the Fastify server:
   ```bash
   node server.js
   ```
4. **View** the app at `http://localhost:6007` in your browser.
---
## Features
* Generate random Hex colors (e.g., `#A1B2C3`).
* Generate random RGBA colors (e.g., `rgba(123, 45, 67, 0.82)`).
* Generate random HSLA colors (e.g., `hsla(240, 100%, 50%, 0.75)`).
* Real-time preview with smooth fade animations.
* Automatic text-contrast adjustment for accessibility.
* Light & dark theme support (system preference).
* Fallback to local jQuery if CDN fails.
---
## File Structure
```
random_color_gen/
├── index.html                         # Main HTML with embedded CSS & CDN/local jQuery fallback
├── script.js                          # Color generation and preview logic
├── script.min.js                      # Minified JS (using Terser)
├── EBGaramond-VariableFont_wght.ttf   # EB Garamond font (OFL-EB_Garamond)
├── NotoSans-VariableFont_wdth,wght.ttf# Noto Sans font (OFL-Noto_Sans)
├── server.js                          # Fastify server to serve static files
├── package.json                       # Project metadata & dependencies
└── README.md                          # This documentation file
```
---
## Installation & Setup
1. **Clone** the repo:
   ```bash
   git clone https://github.com/richie-rich90454/random_color_gen.git
   cd random_color_gen
   ```
2. **Install** dependencies:
   ```bash
   npm install
   ```
3. **Compress** the client script (optional, recommended before production):
   ```bash
   terser script.js -o script.min.js --compress --mangle
   ```
4. **Start** the server:
   ```bash
   node server.js
   ```
5. **Open** in your browser at `http://localhost:6007`.
---
## Usage
1. Click **Generate Random Color**.
2. Watch the **Hex**, **RGBA**, and **HSLA** previews update with smooth animations.
3. Preference switch between light/dark follows your OS setting.
4. If the jQuery CDN fails, a local copy (`jquery-3.7.1.js`) will load automatically.
---
## Customization
* **Fonts**: Included are:
  * EB Garamond (Variable Wght)
  * Noto Sans (Variable Wdth, Wght)
* **CSS Variables**: Modify root variables in `index.html` for colors, shadows, and spacing.
* **JavaScript**: Extend `updateColorDisplays`, `rgbToHsl`, or contrast logic in `script.js`.
* **Server**: Add new routes or APIs in `server.js`.
---
## Technologies
* **HTML5**, **CSS3** (with CSS Custom Properties & media queries)
* **JavaScript (ES6+)** & **jQuery 3.7.1**
* **Terser** for minification
* **Fastify** (Node.js web framework)
---
## License
* **Client code**: Apache 2.0 ([LICENSE](LICENSE))
* **Fonts**: SIL Open Font License 1.1
  * EB Garamond: © 2017 The EB Garamond Project Authors
  * Noto Sans: © 2022 The Noto Project Authors
*(Full font license texts in `font_licenses/`)*