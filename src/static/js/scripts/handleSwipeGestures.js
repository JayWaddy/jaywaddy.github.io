let touchStart = 0;
let touchEnd = 0;
let touchDifference = 0;

class PageIndicator {
    constructor() {
        
    }
    refresh() {

    }
    work() {

    }
}

window.addEventListener("touchstart", event => touchStart = event.changedTouches[0].screenY);
window.addEventListener("touchend", event => {
    touchEnd = event.changedTouches[0].screenY;
    touchDifference = Math.abs(touchStart - touchEnd);
    animateContentOut();
    if ((touchStart > touchEnd) && (touchDifference > 30)) setTimeout(() => {
        if (window.location.pathname === "/") window.location.pathname = "/work.html";
    }, 500);
});
