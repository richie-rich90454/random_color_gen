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
        genHexBtn.fadeIn();
    }
    else if (colorValue=="rgba"){
        genRGBABtn.fadeIn();
    }
    else if (colorValue=="hsla"){
        genHSLABtn.fadeIn();
    }
    colorPreview.css("backgroundColor", "#FFF").text("");
})
genHexBtn.click(function(){
    let randomColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
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