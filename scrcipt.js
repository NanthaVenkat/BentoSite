
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

// Clock 
$(document).ready(function () {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Calculate degrees for each hand
        const hourDegrees = (hours * 30) + (minutes * 0.5);
        const minuteDegrees = minutes * 6;
        const secondDegrees = seconds * 6;

        // Apply rotation to each hand
        $('.hour-hand').css('transform', `rotate(${hourDegrees}deg)`);
        $('.minute-hand').css('transform', `rotate(${minuteDegrees}deg)`);
        $('.second-hand').css('transform', `rotate(${secondDegrees}deg)`);
    }

    // Update clock immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);
});