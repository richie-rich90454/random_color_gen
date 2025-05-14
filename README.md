## Overview
Random Color Generator is a simple web application that allows users to generate random colors in Hex, RGBA, or HSLA formats. The selected color is displayed both as text and as a visual preview.
## Demo
Clone the repository and run locally to see the app in action: once running, navigate to `http://localhost:6007` in your browser.
## Features
* Generate random Hex colors (e.g., `#A1B2C3`).
* Generate random RGBA colors (e.g., `rgba(123, 45, 67, 0.82)`).
* Generate random HSLA colors (e.g., `hsla(240, 100%, 50%, 0.75)`).
* Real-time preview of generated color code and background.
* Responsive, centered UI with custom font integration.
## File Structure
```
random_color_gen/
├── index.html           # Main HTML file with embedded CSS
├── script.js            # JavaScript logic for color generation
├── EBGaramond-VariableFont_wght.ttf    # EB Garamond font (OFL-EB_Garamond)
├── NotoSans-VariableFont_wdth,wght.ttf # Noto Sans font (OFL-Noto_Sans)
├── README.md            # Project documentation (this file)
└── package.json         # Project metadata and scripts
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
   The Fastify server listens on port **6007**.
4. **Open in browser**:
   Navigate to `http://localhost:6007` to use the Random Color Generator.
## Usage
1. Select a color format from the dropdown (Hex, RGBA, or HSLA).
2. Click the **Generate** button for that format.
3. View the generated color code and its preview box.
4. Change selection or click again to generate new colors.
## Customization
* **Fonts**: Uses the SIL Open Font License (OFL)–licensed fonts:
  * **OFL-EB\_Garamond** (EB Garamond) by The EB Garamond Project Authors
  * **OFL-Noto\_Sans** (Noto Sans) by The Noto Project Authors
* **Styles**: Modify CSS in `index.html` for layout, borders, or typography changes.
* **Server**: Fastify serves static files. Extend by adding routes in the server script.
## Technologies
* HTML5 & CSS3
* JavaScript (ES6+)
* jQuery - JavaScript library for DOM manipulation and smooth animations (version 3.6.0, sourced from https://code.jquery.com)
* Fastify (Node.js web framework)
## License
This project is released under the [Apache-2.0 License](LICENSE) except for the fonts, which uses the OFL licenses listed below.
## Font Licenses
### OFL-EB\_Garamond
Copyright 2017 The EB Garamond Project Authors ([https://github.com/octaviopardo/EBGaramond12](https://github.com/octaviopardo/EBGaramond12))
This Font Software is licensed under the SIL Open Font License, Version 1.1. See the full license at [https://openfontlicense.org](https://openfontlicense.org)
### OFL-Noto\_Sans
Copyright 2022 The Noto Project Authors ([https://github.com/notofonts/latin-greek-cyrillic](https://github.com/notofonts/latin-greek-cyrillic))
This Font Software is licensed under the SIL Open Font License, Version 1.1. See the full license at [https://openfontlicense.org](https://openfontlicense.org)
*(Full license text is included in the `font_licenses/` directory.)*