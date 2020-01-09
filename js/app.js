window.onload = () => {
    parallax();
    rollText();
    navLinks();
};

function navLinks() {
    const proj = document.querySelector('#navbar nav').firstElementChild;
    const about = proj.nextElementSibling;
    proj.addEventListener('click', () => scroll('#projects', 600));
    about.addEventListener('click', () => scroll('#about', 600));
}

// parallax background effect
function parallax() {
    const bg = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset * 0.8;

        // offset both .parallax elements
        for (let i = 0; i < bg.length; i++) {
            bg[i].style.backgroundPositionY = offset + 'px';
        }
    });
}

// navbar rolling title effect
function rollText() {
    const span = document.querySelector('.roll');
    const arr = [
        'UX/UI Designer',
        'Avid Wireframer-er',
        'Front-End Developer',
        'Stack Overflow Regular...',
        'Ctrl+Z Spammer'
    ];
    let counter = 0;

    // initial iterate
    swap(0);
    setInterval(() => {
        swap(counter);
    }, 7000);

    // fade in/out effect
    function swap(num) {
        span.textContent = roll(num);
        span.style.opacity = 1;
        setTimeout(() => {
            span.style.opacity = 0;
        }, 6700);
    }

    // list iteration
    function roll(num) {
        if (counter < arr.length - 1) {
            counter += 1;
        } else {
            counter = 0;
        }
        return arr[num];
    }
}

// smooth navigation scroll effect
function scroll(tar, dur) {
    let target = document.querySelector(tar);
    let targetPos = target.getBoundingClientRect().top - 59;
    let startPos = window.pageYOffset;
    let startTime = null;

    function jump(currentTime) {
        if (startTime === null) startTime = currentTime;
        let elapsedTime = currentTime - startTime;
        let run = ease(elapsedTime, startPos, targetPos, dur);
        window.scrollTo(0, run);
        if(elapsedTime < dur) requestAnimationFrame(jump);
    }

    // easing function from http://gizma.com/easing
    function ease(t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    };

    requestAnimationFrame(jump);
}