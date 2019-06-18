const html = {
    body            : document.body,
    preloadClass    : document.querySelector('.preload'),
    logo            : document.querySelector('.logo'),
    text            : document.querySelector('.loading-text'),

    preload         : function() {
        //When the page loads...
        window.addEventListener('load', () => {       
            this.body.style = 'overflow: hidden'; 
            this.logo.classList.add('op', 'shrink');
            this.text.classList.add('fade-in');
        
            setTimeout(() => {
                this.logo.classList.add('fill');
        
                setTimeout(() => {
                    this.logo.classList.remove('shrink');
                    this.logo.classList.add('toTheTop');
        
                    setTimeout(() => {
                        this.preloadClass.classList.add('toHome');
                        this.text.classList.remove('fade-in');
                        
                        setTimeout(() => {
                            //Scrolling re-enabled
                            this.body.style = 'overflow: auto';
                            setTimeout(() => {
                                window.location = 'home.html';
                            }, 100);
                        }, 700);
                    }, 0);
                }, 2000);
            }, 1800);
        });
    },

    dev             : function () {
        if (html.preloadClass) this.preloadClass.style.display = 'none';
        curtain.open();
    }
}

// html.dev();
html.preload();