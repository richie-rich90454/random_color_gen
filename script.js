//Use: "terser script.js -o script.min.js --compress --mangle" to compress the file (make the min file)
updateColorDisplays(255, 255, 255, 1);
document.getElementById("generateColor").addEventListener("click", ()=>{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let alpha=Math.random().toFixed(2);
    updateColorDisplays(red, green, blue, alpha);
});
function fadeUpdate(el, bgColor, text){
    el.classList.add("fade");
    el.classList.add("hidden");
    setTimeout(()=>{
        el.style.backgroundColor=bgColor;
        el.textContent=text;
        el.classList.remove("hidden");
    }, 150);
}
function updateColorDisplays(red, green, blue, alpha){
    let colorWithAlpha=`rgba(${red}, ${green}, ${blue}, ${alpha})`;
    let redHex=red.toString(16).padStart(2, "0");
    let greenHex=green.toString(16).padStart(2, "0");
    let blueHex=blue.toString(16).padStart(2, "0");
    let hexColor=`#${redHex}${greenHex}${blueHex}`.toUpperCase();
    fadeUpdate(document.getElementById("hex-preview"), colorWithAlpha, hexColor);
    let rgbaColor=`rgba(${red}, ${green}, ${blue}, ${alpha})`;
    fadeUpdate(document.getElementById("rgba-preview"), colorWithAlpha, rgbaColor);
    let hslObject=rgbToHsl(red, green, blue);
    let hslaColor=`hsla(${Math.round(hslObject.hue)}, ${Math.round(hslObject.saturation)}%, ${Math.round(hslObject.lightness)}%, ${alpha})`;
    fadeUpdate(document.getElementById("hsla-preview"), colorWithAlpha, hslaColor);
    setTimeout(()=>{
        adjustTextContrast();
    }, 300);
}
function rgbToHsl(red, green, blue){
    red/=255;
    green/=255;
    blue/=255;
    let max=Math.max(red, green, blue);
    let min=Math.min(red, green, blue);
    let hue, saturation, lightness=(max+min)/2;
    if (max==min){
        hue=saturation=0;
    }
    else{
        let d=max-min;
        saturation=lightness>.5?d/(2-max-min):d/(max+min);
        switch (max){
            case red:
                hue=(green-blue)/d+(green<blue?6:0);
                break;
            case green:
                hue=(blue-red)/d+2;
                break;
            case blue:
                hue=(red-green)/d+4;
                break;
        }
        hue/=6;
    }
    return{
        hue: hue*360,
        saturation: saturation*100,
        lightness: lightness*100
    };
}
function adjustTextContrast(){
    document.querySelectorAll(".color-preview").forEach(el=>{
        let bg=getComputedStyle(el).backgroundColor;
        let rgb=bg.match(/\d+/g);
        if (rgb&&rgb.length>=3){
            let brightness=(parseInt(rgb[0])*299+parseInt(rgb[1])*587+parseInt(rgb[2])*114)/1000;
            el.style.color=brightness>128?"black":"white";
        }
    });
}