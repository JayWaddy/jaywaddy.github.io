const curtain = {

    container   : grab('.curtain-container'),
    seeMore     : grab('.see-all'),

    bottom      : function () {
        return this.container.children[2];
    },

    content     : function () { 
        return this.container.children[0];
    },

    open        : function () {
        return (function () {
            curtain.bottom().classList.add('bottom-curtain-open');
            curtain.content().classList.add('content-curtain-open');

            // seeMore is only on the home page (will throw an error)
            if (window.location.pathname == '/home.html') {
                curtain.seeMore.classList.add('fade-in-content');
            }
        })();
    },

    close       : function () {
        return (function () {
            // curtain.bottom().classList.remove('bottom-curtain-open');
            curtain.bottom().classList.add('bottom-curtain-close');
            curtain.content().classList.remove('content-curtain-open');
        })();
    }
}