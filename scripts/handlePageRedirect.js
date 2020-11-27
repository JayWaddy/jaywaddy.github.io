const links = document.querySelectorAll("a"),
      content = document.querySelectorAll(".content");

let currentURL = "",
    userScrolled = false,
    delay = 50;

window.onload = animateContentIn();
// window.addEventListener("wheel", () => {
//     if (window.location.pathname === "/") {
//         animateContentOut();
//         setTimeout(() => window.location.pathname = "/work.html", 500);
//     }
// });

for (let link of links) {
    link.addEventListener("click", function(event){
        currentURL = window.location.href;
        event.preventDefault();
        closeMenu();
        if (this.href !== currentURL) {
            animateContentOut();
            setTimeout(() => window.location = this.href, 500);
        }
    });
}

function animateContentIn() {
    for (let i = 0; i < content.length; i++) {
        content[i].classList.add("transition--enter");
        setTimeout(() => content[i].classList.add("transition--enter-active"), i * delay);
        setTimeout(() => {
            content[i].classList.remove("transition--enter", "transition--enter-active");
            content[i].classList.add("transition--enter-done");
        }, 1000);
    }
}

function animateContentOut() {
    for (let i = 0; i < content.length; i++) {
        setTimeout(() => {
            content[i].classList.add("transition--exit-active");
        }, i * delay);
    }
}

(function detectUserSwipeDirection() {
    let touchStart = 0,
        touchEnd = 0,
        touchDifference = 0;
    
    window.addEventListener("touchstart", function(event){touchStart = event.changedTouches[0].screenY});
    window.addEventListener("touchend", function(event) {
        touchEnd = event.changedTouches[0].screenY;
        touchDifference = Math.abs(touchStart - touchEnd);
        if ((touchStart > touchEnd) && (touchDifference > 30)) setTimeout(() => {
            if (window.location.pathname === "/") window.location.pathname = "/work.html";
        }, 500);
    });
})();