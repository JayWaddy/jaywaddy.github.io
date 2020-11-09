(function toggleNavigationMenu() {
    const menuIcon = document.querySelector(".menu-icon"),
          mainContent = document.querySelector(".main-content"),
          links = document.querySelectorAll("a");
    let menuIsToggled = false,
        currentURL;

    for (let link of links) {
        link.addEventListener("click", function(event) {
            currentURL = window.location.href;
            event.preventDefault();
            closeMenu();
            if (this.href !== currentURL) setTimeout(() => window.location = this.href, 500);
        });
    }

    menuIcon.addEventListener("click", function() {
        menuIsToggled = !menuIsToggled;
        menuIsToggled ? openMenu() : closeMenu();
    });

    function openMenu() {
        mainContent.style.transform = "scale(0.7)";
        menuIcon.classList.add("close-menu-icon");
    }

    function closeMenu() {
        menuIsToggled = false;
        mainContent.style.transform = "scale(1)";
        menuIcon.classList.remove("close-menu-icon");
    }
})();