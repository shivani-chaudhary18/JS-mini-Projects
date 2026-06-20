let img = document.querySelector("img");
let main = document.querySelector("main");

main.addEventListener("mousemove",function(dets){
      img.style.left = dets.x + "px";
      img.style.top = dets.y + "px";
})