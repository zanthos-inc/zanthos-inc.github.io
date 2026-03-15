// Scroll spy: highlight active nav item based on scroll position
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.main-navigation .nav-link');
    var sections = [];

    navLinks.forEach(function (link) {
        var hash = link.getAttribute('href');
        if (hash && hash.startsWith('#')) {
            var target = document.querySelector('a[id="' + hash.substring(1) + '"]');
            if (target) {
                sections.push({ link: link, target: target });
            }
        }
    });

    function onScroll() {
        var scrollPos = window.scrollY + 100;

        var current = null;
        sections.forEach(function (s) {
            if (s.target.offsetTop <= scrollPos) {
                current = s;
            }
        });

        navLinks.forEach(function (link) {
            link.parentElement.classList.remove('active');
        });

        if (current) {
            current.link.parentElement.classList.add('active');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Collapse mobile nav on link click
    var navbarCollapse = document.getElementById('navbar');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        });
    });
});
