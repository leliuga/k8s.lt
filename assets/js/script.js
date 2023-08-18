let menu = document.querySelector(".navbar-toggler");
let navbar = document.querySelector(".navbar-collapse");

menu.addEventListener("click", function () {
    menu.classList.toggle("collapsed");
    navbar.classList.toggle("collapse");
});

window.onscroll = () => {
    menu.classList.add("collapsed")
    navbar.classList.add("collapse");
};