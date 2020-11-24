const menuIcon = document.querySelector(".menu-icon"),
      mainContent = document.querySelector(".main-content");
let menuIsToggled = false;

menuIcon.addEventListener("click", function() {
    menuIsToggled = !menuIsToggled;
    menuIsToggled ? openMenu() : closeMenu();
});

function openMenu() {
    mainContent.classList.add("navigation-menu-scale");
    menuIcon.classList.add("close-menu-icon");
}

function closeMenu() {
    menuIsToggled = false;
    mainContent.classList.remove("navigation-menu-scale");
    menuIcon.classList.remove("close-menu-icon");
}