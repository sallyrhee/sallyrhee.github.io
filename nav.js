// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');
// Defining a function
function toggleNav() {
    // Toggle the 'fa-bars' and 'fa-times' classes on the burger
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');

    // Toggle the 'nav-active' class on the nav element
    nav.classList.toggle('nav-active');

    // Toggle display for nav and nav-links
    if (nav.classList.contains('nav-active')) {
        // If nav has 'nav-active', set display to 'block' for nav and links
        nav.style.display = 'flex';
        // Optionally, toggle display for nav-links here if you want individual control
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.style.display = 'flex';
        });
    } else {
        // If nav doesn't have 'nav-active', set display to 'none'
        nav.style.display = 'none';
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.style.display = 'none';
        });
    }
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
toggleNav();
});