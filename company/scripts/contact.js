document.addEventListener('DOMContentLoaded', function () {

    // hamburger
    hamburgerMenu();
});


// hamburger
function hamburgerMenu() {
    const menuBtn = document.getElementById('hamburger');
    const menuLine = document.getElementsByClassName('hamburgerLine');
    const menu = document.getElementById('hammenu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('is-active');

        for (let i = 0; i < menuLine.length; i++) {
            menuLine[i].classList.toggle('is-active');

            if (menuLine[i].classList.contains('is-active')) {
                menuBtn.setAttribute('aria-expanded', 'true');
            } else {
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    menu.addEventListener('click', function () {
        menu.classList.remove('is-active');

        for (let i = 0; i < menuLine.length; i++) {
            menuLine[i].classList.toggle('is-active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    })
}