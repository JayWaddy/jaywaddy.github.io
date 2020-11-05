(function toggleNavigationMenu() {
    const NAVIGATION_BACKGROUND = document.querySelector("nav .navigation-background"),
          NAVIGATION_LINKS = document.querySelector("nav ul li"),
          MENU_ICON = document.querySelector(".menu-icon");
    let menuIsToggled = false;

    MENU_ICON.addEventListener("click", function () {
        menuIsToggled = !menuIsToggled;
        menuIsToggled ? openMenu() : closeMenu();
    });

    function openMenu() {
        // 1. set navigation links to "visible"
        // 2. add animation class(es) to menu icon, background, and navigation links
        console.log("menu is open");
    }

    function closeMenu() {
        // 1. animate links, background, and menu icon out of view
        // 2. set navigation links to display: none
        console.log("menu is closed");
    }
})();