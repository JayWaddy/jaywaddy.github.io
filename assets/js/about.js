function about () {

    
    curtain.open(); 
    
    if (window.location.pathname == '/about.html') {
        let about = grab('.about');

        about.style.textDecoration = 'line-through';
        about.style.color = '#D12DDC'
        // HOME LINK CLICKED
        content.homeLink.addEventListener('click', function() {
            let _out = content.about;
        
            // Close curtains
            curtain.close();
        
            // Hide current showcase and home info
            content.hide(_out);
            dropDownMenu.classList.remove('expand-menu');

            setTimeout(() => {
                window.location = 'home.html'
                }, 500);
        });    
    
        // WORK LINK CLICKED
        }
};

setTimeout(() => {
    about();
}, 100);