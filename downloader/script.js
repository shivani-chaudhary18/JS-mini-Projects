let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");

let grow = 0;

btn.addEventListener("click",function(){
    btn.style.pointerEvents = 'none';
  let interval =  setInterval(()=>{
            grow++;
            h2.innerHTML = grow + '%';
            inner.style.width = grow + '%';
    },30);

  setTimeout(()=>{
          clearInterval(interval);
          btn.innerHTML = "Downloaded";
          btn.style.opacity = 0.5;
          btn.style.pointerEvents = none;
  },3000);
})