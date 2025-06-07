
// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

// mennu button
const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');

openBtn.addEventListener('click', () => {
    menu.classList.remove('h-0');
    menu.classList.add('h-screen');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('h-screen');
    menu.classList.add('h-0');
});

