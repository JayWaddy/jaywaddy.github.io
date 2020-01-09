window.onload = () => {
    parallax();
    rollText();
};

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

function rollText() {
    const span = document.querySelector('.roll');
    const list = [
        'UX/UI Designer',
        'Avid Wireframer-er',
        'Front-End Developer',
        'Stack Overflow Regular...',
        'Ctrl + Z Spammer'
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
        if (counter < list.length - 1) {
            counter += 1;
        } else {
            counter = 0;
        }
        return list[num];
    }
}