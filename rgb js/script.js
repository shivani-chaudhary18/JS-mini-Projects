let div = document.querySelector("div");
let button = document.querySelector("button");


button.addEventListener("click",function(){
    let r = Math.floor(Math.random()*255+1);
    let g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
})
