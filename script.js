let genHexBtn=$("#generateHexColor");
let genRGBABtn=$("#generateRGBAColor");
let genHSLABtn=$("#generateHSLAColor");
updateColorDisplays(255, 255, 255, 1);
$("#generateColor").click(function (){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let alpha=Math.random().toFixed(2);
    updateColorDisplays(red, green, blue, alpha);
});
function updateColorDisplays(red, green, blue, alpha){
    let colorWithAlpha="rgba("+red+", "+green+", "+blue+", "+alpha+")";
    let redHex=red.toString(16).padStart(2, "0");
    let greenHex=green.toString(16).padStart(2, "0");
    let blueHex=blue.toString(16).padStart(2, "0");
    let hexColor="#"+redHex+greenHex+blueHex;
    hexColor=hexColor.toUpperCase();
    $("#hex-preview").fadeOut(function (){
        $(this).css("backgroundColor", colorWithAlpha);
        $(this).text(hexColor);
        $(this).fadeIn();
    });
    let rgbaColor="rgba("+red+", "+green+", "+blue+", "+alpha+")";
    $("#rgba-preview").fadeOut(function (){
        $(this).css("backgroundColor", colorWithAlpha);
        $(this).text(rgbaColor);
        $(this).fadeIn();
    });
    let hslObject=rgbToHsl(red, green, blue);
    let hslaColor="hsla("+Math.round(hslObject.hue)+", "+Math.round(hslObject.saturation)+"%, "+Math.round(hslObject.lightness)+"%, "+alpha+")";
    $("#hsla-preview").fadeOut(function (){
        $(this).css("backgroundColor", colorWithAlpha);
        $(this).text(hslaColor);
        $(this).fadeIn();
    });
}
function rgbToHsl(red, green, blue){
    red=red/255;
    green=green/255;
    blue=blue/255;
    let maxValue=Math.max(red, green, blue);
    let minValue=Math.min(red, green, blue);
    let hue;
    let saturation;
    let lightness=(maxValue+minValue)/2;
    if (maxValue==minValue){
        hue=0;
        saturation=0;
    }
    else{
        let delta=maxValue-minValue;
        if (lightness>0.5){
            saturation=delta/(2-maxValue-minValue);
        }
        else{
            saturation=delta/(maxValue+minValue);
        }
        switch (maxValue){
            case red:
                hue=(green-blue)/delta+(green<blue?6:0);
                break;
            case green:
                hue=(blue-red)/delta+2;
                break;
            case blue:
                hue=(red-green)/delta+4;
                break;
        }
        hue=hue/6;
    }
    return{
        hue: hue*360,
        saturation: saturation*100,
        lightness: lightness*100
    };
}