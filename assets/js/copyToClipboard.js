const email = {
    emailLink  : grab('.copy-email'),

    popUp      : function() {
        return grab('.email-copied');
    }, 

    message     : function() {
        return this.emailLink.lastElementChild;
    },

    copy        : function() {
        this.emailLink.addEventListener('click', () => {
            const   text = grab('textarea'),
                    email = `info@jaywaddy.com`;
        
            document.body.appendChild(text);
            text.value = email;
            text.select();
            document.execCommand('copy');
            document.body.removeChild(text);
            
            setTimeout(() => {
                // this.copyButton.style = 'cursor: default';
                // this.message().innerText = 'Copied!';
                // this.message().style = 'color: #3497ed';
                this.popUp().classList.add('email-pop-up');
                this.emailLink.style = 'pointer-events: none'

                setTimeout(() => {
                    this.popUp().classList.add('email-fade')
                },3000);
            }, 100);
        });
    }
}

email.copy();