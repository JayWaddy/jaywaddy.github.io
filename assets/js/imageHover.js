// const showcase = {
//     element : document.querySelector('.showcase'),
//     cursorElement  : document.querySelector('.new-cursor'),

//     images  : function () {
//         return this.element.children;
//     },

//     image_1 : function () {
//         return this.images[0];
//     },

//     image_2 : function () {
//         return this.images[1];
//     },

//     image_3 : function () {
//         return this.images[2];
//     },

//     cursor  : function () {
//         this.element.addEventListener('mouseover', function() {
//             // Hide default cursor
//             html.body.style = 'cursor: none';
        
//             // Show newCursor
//             cursorElement.style.opacity = '1';
        
//             for (let i = 0; i < showcase.images.length; i++) {
//                 // On hover
//                 this.images[i].addEventListener('mousemove', function(event) {
//                     let mouseX = event.pageX - (cursorElement.offsetWidth / 2),
//                         mouseY = event.pageY - (cursorElement.offsetHeight / 2);
                    
//                         cursorElement.setAttribute('style', `top: ${mouseY}px; left: ${mouseX}px; opacity: 1;`);
//                 });
                
//                 // Reset curson on hover-out
//                 this.images[i].addEventListener('mouseout', () => {
//                     html.body.style.cursor = 'auto';
        
//                     // Hover out
//                     cursorElement.style.opacity = '0';
//                 });
//             }
//         });
//     },

//     hover   : function showcaseHover(name, _in, _out) {
//         // On hover - text slide in
//         function showcaseIn(name) {
//             name.addEventListener('mouseover', function() {
//                 this.lastElementChild.setAttribute('class', '')
//                 this.lastElementChild.classList.add(_in);
//             });
//         };
        
//         // On hover-out - text slide out
//         function showcaseOut(name) {
//             name.addEventListener('mouseout', function() {
//                 this.lastElementChild.classList.remove(_in);
//                 this.lastElementChild.classList.add(_out);
//             });
//         };
    
//         showcaseIn(name);
//         showcaseOut(name);
//     }
    
// }

// load(() => {
//     //Show cursor
//     showcase.cursor();

//     // Showcase text on hover
//     showcase.hover(showcase.image_1(), 'showcase1-in', 'showcase1-out');
//     showcase.hover(showcase.image_2(), 'showcase2-in', 'showcase2-out');
//     showcase.hover(showcase.image_3(), 'showcase3-in', 'showcase3-out');
// })

const   newCursor = document.querySelector('.new-cursor'),
        showcase = document.querySelector('.showcase'),
        image = showcase.children,
        first = image[0],
        second = image[1],
        third = image[2];



if (window.location.pathname == '/home.html'){
    // Showcase text on hover
    showcaseHover(first, 'showcase1-in', 'showcase1-out');
    showcaseHover(second, 'showcase2-in', 'showcase2-out');
    showcaseHover(third, 'showcase3-in', 'showcase3-out');
    
    showcase.addEventListener('mouseover', function() {
        // Hide default cursor
        document.body.style = 'cursor: none';
    
        // Show newCursor
        newCursor.style.opacity = '1';
    
        for (let i = 0; i < image.length; i++) {
            // On hover
            image[i].addEventListener('mousemove', function(event) {
                let mouseX = event.pageX - (newCursor.offsetWidth / 2),
                    mouseY = event.pageY - (newCursor.offsetHeight / 2);
                
                newCursor.setAttribute('style', `top: ${mouseY}px; left: ${mouseX}px; opacity: 1;`);
            });
            
            // Reset curson on hover-out
            image[i].addEventListener('mouseout', () => {
                document.body.style.cursor = 'auto';
    
                // Hover out
                newCursor.style.opacity = '0';
            });
        }
    });    
}


function showcaseHover(name, _in, _out) {
    // On hover - text slide in
    function showcaseIn(name) {
        name.addEventListener('mouseover', function() {
            this.lastElementChild.setAttribute('class', '')
            this.lastElementChild.classList.add(_in);
        });
    };
    
    // On hover-out - text slide out
    function showcaseOut(name) {
        name.addEventListener('mouseout', function() {
            this.lastElementChild.classList.remove(_in);
            this.lastElementChild.classList.add(_out);
        });
    };

    showcaseIn(name);
    showcaseOut(name);
}