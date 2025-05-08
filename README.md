## Overview
The Random Color Generator is a simple web application that allows users to generate random colors in Hex, RGBA, or HSLA formats. The selected color is displayed both as text and as a visual preview.
## Demo
You can view the live demo of the application by cloning the repository and running it locally (see Installation). Once running, open your browser and navigate to `http://localhost:6007` to interact with the generator.
## Features
* Generate random Hex colors (e.g., `#A1B2C3`).
* Generate random RGBA colors (e.g., `rgba(123, 45, 67, 0.82)`).
* Generate random HSLA colors (e.g., `hsla(240, 100%, 50%, 0.75)`).
* Real-time preview of the generated color and its code.
* Responsive, centered UI with custom fonts.
## File Structure
```
random_color_gen/
├── index.html       # Main HTML file
├── script.js        # JavaScript logic for color generation
├── EBGaramond-VariableFont_wght.ttf   # Custom font file
├── NotoSans-VariableFont_wdth,wght.ttf   # Custom font file
├── README.md        # Project documentation (this file)
└── package.json     # Project metadata and scripts
```
## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/richie-rich90454/random_color_gen.git
   cd random_color_gen
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   node server.js
   ```
   The Fastify server will start on port **6007**.
4. **Open in browser**:
   Navigate to `http://localhost:6007` to use the Random Color Generator.
## Usage
1. Select a color format from the dropdown (Hex, RGBA, or HSLA).
2. Click the corresponding **Generate** button.
3. View the generated color code and preview in the display box.
4. Repeat to generate new random colors.
## Customization
* **Fonts**: The UI uses `EB Garamond` for buttons and paragraphs, and `Noto Sans` for overall body text. Replace the `.ttf` files with your own to change fonts.
* **Styles**: Modify the CSS in `index.html` to adjust layout, borders, and other visual properties.
* **Server**: The Fastify setup serves static files from the root directory. Update `script.js` or add new routes in `server.js` (or equivalent) to extend functionality.
## Technologies
* HTML5 & CSS3
* JavaScript (ES6+)
* Fastify (Node.js web framework)
Please ensure code is well-documented and follows existing style conventions.
## License
This project is released under the [MIT License](LICENSE).
---
Feel free to reach out with questions or suggestions!