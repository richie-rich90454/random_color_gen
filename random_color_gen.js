let genHexBtn=document.getElementById("generateHexColor");
let colorPreview=document.getElementById("color-preview");
genHexBtn.addEventListener("click",function(){
    let randomColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    colorPreview.style.backgroundColor=randomColor;
    colorPreview.textContent=randomColor;
})