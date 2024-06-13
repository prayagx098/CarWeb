
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const toggler = document.querySelector(".navbar-toggler");

    toggler.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});