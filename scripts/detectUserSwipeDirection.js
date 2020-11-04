(function detectUserSwipeDirection() {
    let touchStart = 0,
        touchEnd = 0;
    
    window.addEventListener("touchstart", function (event) {
        touchStart = event.changedTouches[0].screenY;
    });

    window.addEventListener("touchend", function (event) {
        touchEnd = event.changedTouches[0].screenY;
        if (touchStart < touchEnd) userSwipedDown();
        if (touchStart > touchEnd) userSwipedUp();
    });

    function userSwipedDown() {
        // IF ON LANDING PAGE:
        // Maybe add some personality on the landing page?

        // IF ON WORK PAGE:
        // 1. animate new content overtop of old content
        // 2. remove old content
        console.log("user swiped down");
    }

    function userSwipedUp() {
        // IF ON LANDING PAGE:
        // 1. set a timeout function on redirecting the page
        // 2. animate current content off of the screen
        // 3. redirect to work page

        // IF ON WORK PAGE:
        // 1. animate new content overtop of old content
        // 2. remove old content
        console.log("user swiped up");
    }
})();