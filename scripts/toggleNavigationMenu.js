(function toggleNavigationMenu() {
    const navigationBackground = document.querySelector("nav .navigation-background"),
          navigationLinks = document.querySelector("nav ul"),
          menuIcon = document.querySelector(".menu-icon"),
          mainContent = document.querySelector(".main-content");
    let menuIsToggled = false;

    menuIcon.addEventListener("click", function () {
        menuIsToggled = !menuIsToggled;
        menuIsToggled ? openMenu() : closeMenu();
        ;
    });

    function openMenu() {
        mainContent.style.transform = "scale(0.7)";
    }

    function closeMenu() {
        mainContent.style.transform = "scale(1)";
    }
})();