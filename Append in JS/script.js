let main = document.querySelector("main");
let button = document.querySelector("button");

button.addEventListener("click",function(){
    let div = document.createElement("div");

    let r = Math.floor(Math.random()*255+1);
    let g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);

    let x = Math.random()*100;
    let y = Math.random()*100;
    let rot = Math.random()*360;
    
    div.style.position =  'absolute';
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.left = x + '%';
    div.style.top = y + '%';
    div.style.rotate = rot + "deg";
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    main.appendChild(div);


})