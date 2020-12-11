const menuIcon = document.querySelector(".menu-icon");
const mainContent = document.querySelector(".main-content");
let menuIsToggled = false;

menuIcon.addEventListener("click", function() {
    menuIsToggled = !menuIsToggled;
    menuIsToggled ? openMenu() : closeMenu();
});

function openMenu() {
    menuIsToggled = true;
    mainContent.classList.add("navigation-menu-scale", "main-content-border");
    menuIcon.classList.add("close-menu-icon");
}

function closeMenu() {
    menuIsToggled = false;
    mainContent.classList.remove("navigation-menu-scale", "main-content-border");
    menuIcon.classList.remove("close-menu-icon");
}