let img = document.querySelector("img");
let love = document.querySelector("i");

img.addEventListener("dblclick",function(){
    love.style.opacity = 1;
    love.style.transform = "translate(-50%,-50%) scale(1) rotate(0)";

    setTimeout(function(){
       love.style.transform = "translate(-50%,-100%) scale(1) rotate(60deg)";
    },1000)

    setTimeout(function(){
       love.style.opacity = 0;
    },1200)

    setTimeout(function(){
       love.style.transform = "translate(-50%,-100%) scale(0) rotate(-60deg)";
    },1400)
})