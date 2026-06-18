let main = document.querySelector("main");
let button = document.querySelector("button");

let arr = ["I am Shivani Chaudhary","Keep Practice","JS is Love","Web Developer","Data Analyst", "Student Researcher","Want to Join MNC","Work Hard","Be Honest","You Become Whatever you Think"];

button.addEventListener("click",function(){
    let h1 = document.createElement("h1");

    let r = Math.floor(Math.random()*255+1);
    let g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);

    let x = Math.random()*100;
    let y = Math.random()*100;
    let s = Math.random()*3;
    let rot = Math.random()*360;

    let a = Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[a];
    
    h1.style.position =  'absolute';
    h1.style.left = x + '%';
    h1.style.top = y + '%';
    h1.style.rotate = rot + "deg";
    h1.style.scale = s;
    h1.style.color = `rgb(${r},${g},${b})`;
    main.appendChild(h1);


})