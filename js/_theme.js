const menuBtn = document.querySelector('#menu')
let root = document.querySelector('html');


menuBtn.addEventListener('click', function () {
    switch (root.getAttribute('data-theme')) {
        case 'main-theme':
            root.setAttribute('data-theme', 'black');
            break;
        case 'black':
            root.setAttribute('data-theme', 'blue');
            break;
        case 'blue':
            root.setAttribute('data-theme', 'green');
            break;
        case 'green':
            root.setAttribute('data-theme', 'main-theme');
            break;
    }
})

