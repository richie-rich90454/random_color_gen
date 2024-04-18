let genHexBtn=document.getElementById("generateHexColor");
let genRGBABtn=document.getElementById("generateRGBAColor");
let genHSLABtn=document.getElementById("generateHSLAColor");
let colorPreview=document.getElementById("color-preview");
let colorSelect=document.getElementById("color-select");
colorSelect.addEventListener("change",function(){
    document.getElementById("preview-group").style.display="block";
    let colorValue=colorSelect.options[colorSelect.selectedIndex].value;
    if (colorValue=="hex"){
        genHexBtn.style.display="block";
        genRGBABtn.style.display="none";
        genHSLABtn.style.display="none";
        colorPreview.textContent="";
        colorPreview.style.backgroundColor="#FFF";
    }
    else if (colorValue=="rgba"){
        genHexBtn.style.display="none";
        genRGBABtn.style.display="block";
        genHSLABtn.style.display="none";
        colorPreview.textContent="";
        colorPreview.style.backgroundColor="#FFF";
    }
    else{
        genHexBtn.style.display="none";
        genRGBABtn.style.display="none";
        genHSLABtn.style.display="block";
        colorPreview.textContent="";
        colorPreview.style.backgroundColor="#FFF";
    }
})
genHexBtn.addEventListener("click",function(){
    let randomColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    randomColor=randomColor.toUpperCase();
    colorPreview.style.backgroundColor=randomColor;
    colorPreview.textContent=randomColor;
})
genRGBABtn.addEventListener("click",function(){
    let randomColor=`rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${(Math.random()).toFixed(2)})`;
    colorPreview.style.backgroundColor=randomColor;
    colorPreview.textContent=randomColor;
});
genHSLABtn.addEventListener("click",function(){
    let randomColor=`hsla(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*101)}%, ${Math.floor(Math.random()*101)}%, ${(Math.random()).toFixed(2)})`;
    colorPreview.style.backgroundColor=randomColor;
    colorPreview.textContent=randomColor;
});