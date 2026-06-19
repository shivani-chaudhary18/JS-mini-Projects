let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let main = document.querySelector("main");

img.addEventListener("mouseenter",function(){
    h2.innerHTML = "Oye Durr Hat Jaa Chutki Sai 😡😡😡 ";
    main.style.backgroundColor = "red";
})

img.addEventListener("mouseleave",function(){
    h2.innerHTML = "Chal Abb Durr hi Rehna 😤😤😤 ";
    main.style.backgroundColor = "black";
})