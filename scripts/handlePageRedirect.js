const links = document.querySelectorAll("a");
let currentURL = "";

for (let link of links) {
    link.addEventListener("click", function(event) {
        currentURL = window.location.href;
        event.preventDefault();
        closeMenu();
        // animatePageOut(); 
        if (this.href !== currentURL) setTimeout(() => window.location = this.href, 500);
    });
}

function animatePageOut() {
    //
}

function animatePageIn() {
    // 
}

(function detectUserSwipeDirection() {
    let touchStart = 0,
        touchEnd = 0,
        touchDifference = 0;
    
    window.addEventListener("touchstart", function (event) {
        touchStart = event.changedTouches[0].screenY;
    });

    window.addEventListener("touchend", function (event) {
        touchEnd = event.changedTouches[0].screenY;
        touchDifference = Math.abs(touchStart - touchEnd);
        if ((touchStart < touchEnd) && (touchDifference > 30)) userSwipedDown();
        if ((touchStart > touchEnd) && (touchDifference > 30)) userSwipedUp();
    });

    function userSwipedDown() {
        // IF ON WORK PAGE:
        // 1. animate new content overtop of old content
        // 2. remove old content

        // NAVIGATE BACK TO HOMEPAGE
        if (window.location.pathname !== "/") setTimeout(() => window.location.pathname = "/", 500);
    }

    function userSwipedUp() {
        // IF ON LANDING PAGE:
        // 1. animate current content off of the screen
        // 2. redirect to work page
        if (window.location.pathname === "/") setTimeout(() => window.location.pathname = "/work.html", 500);

        // IF ON WORK PAGE:
        // 1. animate new content overtop of old content
        // 2. remove old content
    }
})();