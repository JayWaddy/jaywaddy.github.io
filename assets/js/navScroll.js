const page = {
    home    : grab('.home'),
    projects: grab('.projects'),
    about   : grab('.about'),
    contact : grab('.contact')
}

function navScroll(target, duration) {
    //Target is declaired within function's scope, so... var...
    var target = document.querySelector(target);

    let targetPosition = target.getBoundingClientRect().top,
        startPosition = window.pageYOffset,
        startTime = null,
        distance = targetPosition - startPosition;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;

        //Animate for set duration
        let  timeElapsed = currentTime - startTime;

        function ease(t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        };
        //Smoothly scrolls to target
        window.scrollTo(0, ease(timeElapsed, startPosition, targetPosition, duration));
        //Reset start time after scroll animation
        
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    //Renders animation (at 60fps)
    requestAnimationFrame(animation);
}

page.home.addEventListener('click', () => navScroll('#main', 800));
page.projects.addEventListener('click', () => navScroll('#main', 800));
page.about.addEventListener('click', () => navScroll('#main', 800));
page.contact.addEventListener('click', () => navScroll('#contact', 800));