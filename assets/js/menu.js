// import { get } from "https";

const menuIcon = document.querySelector('.menu-icon');
const menuContainer = document.querySelector('.menu');
const dropDownMenu = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const sp1 = menuIcon.firstElementChild,
    sp2 = sp1.nextElementSibling,
    sp3 = sp2.nextElementSibling;

let triggerPosition = 0;

// Deactivate icon
function iconInactive() {
    menuIcon.style = 'pointer-events: none';
}

// Activate icon
function iconActive() {
    menuIcon.style = 'pointer-events: auto';
}

// Make links clickable
function containerInactive() {
    menuContainer.style = 'pointer-events: none';
}

// Icon scroll down animation
function animateOut() {
    //Add out animations
    sp1.classList.add('sp1-out');
    sp2.classList.add('sp2-out');
    sp3.classList.add('sp3-out');
    //Remove in animaions
    sp1.classList.remove('sp1-in');
    sp2.classList.remove('sp2-in');
    sp3.classList.remove('sp3-in');
}

// Icon scroll up animation
function animateIn() {
    loadAnim();
    //Remove out animations
    sp1.classList.remove('sp1-out');
    sp2.classList.remove('sp2-out');
    sp3.classList.remove('sp3-out');
}

// Animation of page load
function loadAnim() {
    //Add in animations
    sp1.classList.add('sp1-in');
    sp2.classList.add('sp2-in');
    sp3.classList.add('sp3-in');
}

// Hover over menu icon
menuIcon.addEventListener('mouseenter', function() {
    //Menu drops down
    dropDownMenu.classList.add('expand-menu');
    setTimeout(() => navLinks.classList.add('nav-expand'), 100);
    //Icon is inactive
    iconInactive();
    //Links are clickable
    containerInactive();
});

// Hover out of menu
dropDownMenu.addEventListener('mouseleave', function() {
    //Menu retracts
    navLinks.classList.remove('nav-expand');
    setTimeout(() => this.classList.remove('expand-menu'), 50);
    //Icon is active again
    iconActive();
});

// if (window.location == 'home.html') {
//     // ABOUT LINK CLICKED
//     const content = {
//         homeLink    : grab('.home'),
//         home        : grab('.home-info'),
//         aboutLink   : grab('.about'),
//         about       : grab('.about-info'),
//         workLink    : grab('.work'),
//         work        : grab('.work-info'),

//         hide        : function (target) {
//             target.classList.add('fade-out-content');
//             setTimeout(() => {
//                 target.classList.add('hide');
//             },500);
//         }
//     };

//     content.aboutLink.addEventListener('click', function() {
//         let _out = content.home;
//         let _in = content.about;
//         let seeAll = grab('.see-all');

//         // Close curtains
//         curtain.close();

//         // Hide current showcase and home info
//         content.hide(_out);
//         seeAll.classList.add('fade-out-content');

//         //Menu retracts
//         navLinks.classList.remove('nav-expand');
//         dropDownMenu.style.pointerEvents = 'none';
//         setTimeout(() => this.classList.remove('expand-menu'), 50);

//         //Icon is active again
//         iconActive();


//         // Open curtains with about info
//         setTimeout(() => {
//             curtain.bottom().classList.remove('bottom-curtain-close');
//             curtain.open();
//         }, 500);
        
//         setTimeout(() => {
//             window.location = 'about.html'
//             }, 500);
//     });

//     // WORK LINK CLICKED
//     content.aboutLink.addEventListener('click', function() {
//         let _out = content.home;
//         let _in = content.about;

//         // Close curtains
//         curtain.close();

//         // Hide current showcase and home info
//         content.hide(_out);

//         // Open curtains with about info
//         setTimeout(() => {
//             curtain.bottom().classList.remove('bottom-curtain-close');
//             curtain.open();
//         }, 500);
        
//         setTimeout(() => {
//             _in.classList.remove('hide');
//             _in.style.opacity = '0';
//             _in.classList.add('fade-in-content');
//             }, 500);
//     });

// } else if (window.location == 'work.html') {

// } else if (window.location == 'about.html') {

// }

window.onscroll = function() {
    let scrollPosition = window.scrollY;

    //Scroll down
    if (scrollPosition > triggerPosition) {
        animateOut();
        iconInactive();
    } else { 
        //Scroll up
        animateIn();
        iconActive();
        //Menu will retract
        containerInactive();
    }
    triggerPosition = scrollPosition;
};

// Animates icon on page load
window.onload = () => {
    // loadAnim();
    if (window.pageYOffset === 0) iconActive();
};