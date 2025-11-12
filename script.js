// Navigation Script
(function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = location.pathname;

    // Set active link based on current page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if we're on the home page
        if ((currentLocation === '/' || currentLocation.includes('index.html')) && href === 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.includes(href.replace('.html', '')) && href !== 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scroll behavior
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            const href = e.target.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
})();
