window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navlinks = document.querySelector('.nav-links');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navlinks.classList.add('scrolled');

    } else {
        navlinks.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
    }
});

