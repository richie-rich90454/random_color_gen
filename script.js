let genHexBtn=$("#generateHexColor");
let genRGBABtn=$("#generateRGBAColor");
let genHSLABtn=$("#generateHSLAColor");
let colorPreview=$("#color-preview");
let colorSelect=$("#color-select");
colorSelect.change(function(){
    document.getElementById("preview-group").style.display="block";
    let colorValue=colorSelect.val();
    $("input[type='button']").hide();
    if (colorValue=="hex"){
        genHexBtn.show();
        colorPreview.css("backgroundColor", "#FFF").text("#FFFFFF");
    }
    else if (colorValue=="rgba"){
        genRGBABtn.show();
        colorPreview.css("backgroundColor", "#FFF").text("rgba(255, 255, 255, 1)");
    }
    else if (colorValue=="hsla"){
        genHSLABtn.show();
        colorPreview.css("backgroundColor", "#FFF").text("hsla(0, 0%, 100%, 1)");
    }
})
genHexBtn.click(function(){
    let randomColor=`#${Math.floor(Math.random()*16777215).toString(16).padStart(6, "0")}`;
    randomColor=randomColor.toUpperCase();
    colorPreview.fadeOut(function(){
        colorPreview.css("backgroundColor", randomColor).text(randomColor).fadeIn();
    });
})
genRGBABtn.click(function(){
    let randomColor=`rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${(Math.random()).toFixed(2)})`;
    colorPreview.fadeOut(function(){
        colorPreview.css("backgroundColor", randomColor).text(randomColor).fadeIn();
    });
});
genHSLABtn.click(function(){
    let randomColor=`hsla(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*101)}%, ${Math.floor(Math.random()*101)}%, ${(Math.random()).toFixed(2)})`;
    colorPreview.fadeOut(function(){
        colorPreview.css("backgroundColor", randomColor).text(randomColor).fadeIn();
    });
});