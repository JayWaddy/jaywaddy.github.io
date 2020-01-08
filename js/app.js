window.onload = () => {
    parallax();
};

function parallax() {
    const bg = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset * 0.8;

        // offset both .parallax elements
        for(let i = 0; i < bg.length; i++) {
            bg[i].style.backgroundPositionY = offset + 'px';
        }
    });
}