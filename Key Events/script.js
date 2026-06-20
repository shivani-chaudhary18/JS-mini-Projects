let body = document.querySelector("body");
let h1 = document.querySelector("h1");

body.addEventListener("keydown",function(dets){
    h1.innerHTML = dets.code;
})