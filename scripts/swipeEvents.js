function swipe () {
    let touchStart,
        touchEnd;
    window.addEventListener("touchstart", function (event) {
        const touchX = event.changedTouches[0].clientX,
            touchY = event.changedTouches[0].clientY;
        touchStart = [touchX, touchY]
        console.log(touchStart);
    });
}

swipe();