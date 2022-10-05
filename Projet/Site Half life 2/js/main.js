const navigation = document.querySelector("nav");

window.addEventListener("scroll", function(){
    navigation.classList.toggle("sticky", window.scrollY > 20)
});

const btnToggle = document.querySelector(".nav-toggle");

const menu = document.querySelector(".menu");

btnToggle.addEventListener("click", toggleMenu);

function toggleMenu(){
    menu.classList.toggle("expanded");
}