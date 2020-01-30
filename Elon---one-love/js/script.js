window.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.navigation__links'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('navigation__links_active');
        hamburger.classList.toggle('hamburger_active');
    });

});