const   fileName = [
            'copyToClipboard',
            'curtains',
            'menu',
            'navScroll',
            'imageHover',
            'home',
            'about'
        ],
        
        grab = (name) => document.querySelector(name),

        load = (func) => window.addEventListener('onload', func),

        content = {
            homeLink    : grab('.home'),
            home        : grab('.home-info'),
            aboutLink   : grab('.about'),
            about       : grab('.about-info'),
            workLink    : grab('.work'),
            work        : grab('.work-info'),
        
            hide        : function (target) {
                target.classList.add('fade-out-content');
                setTimeout(() => {
                    target.classList.add('hide');
                },500);
            }
        }

for (let i = 0; i < fileName.length; i++) {
    load(createScript(i));
}

function createScript(file) {
    const newScript = document.createElement('script');

    newScript.setAttribute('src', `assets/js/${fileName[file]}.js`);
    document.body.appendChild(newScript);
}