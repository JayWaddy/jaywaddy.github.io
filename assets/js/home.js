function home () {
    let h3 = grab('.headliner'),
        desc = grab('.description')
    
    // Content fade in
    h3.style.opacity = '1';
    desc.style.opacity = '1';
    // logo.style.opacity = '1';

    curtain.open();
}

if (window.location.pathname == '/home.html') {
    let seeAll = grab('.see-all'),
        home = grab('.home');

    home.style.textDecoration = 'line-through';
    home.style.color = '#D12DDC'
    // ABOUT LINK CLICKED
    content.aboutLink.addEventListener('click', function() {
        let _out = content.home,
            see = grab('.see-all');
        
        // Close curtains
        curtain.close();
    
        // Hide current showcase and home info
        content.hide(_out);
        see.classList.remove('fade-in-content');
        see.classList.add('fade-out-content');
        dropDownMenu.classList.remove('expand-menu');
        
        setTimeout(() => {
            window.location = 'about.html'
            }, 500);
    });

    // WORK LINK CLICKED
    seeAll.addEventListener('click', function () {
        let _out = content.home;
        
        // Close curtains
        curtain.close();
    
        // Hide current showcase and home info
        content.hide(_out);
        this.classList.remove('fade-in-content');
        this.classList.add('fade-out-content');
        dropDownMenu.classList.remove('expand-menu');
        
        setTimeout(() => {
            window.location = 'about.html'
            }, 500);
    });

}

// Make sure home() loads after curtains.js
setTimeout(() => {
    home();
}, 100)