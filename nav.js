// Navigation Enhancement Script
(function() {
    // Smooth scroll behavior is now handled by CSS scroll-behavior: smooth

    // Add active class to current navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-centered a[href^="#"]');

    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Update on page load
    updateActiveLink();

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open menus if needed
            console.log('Escape key pressed');
        }
    });

    // Analytics: Log when external links are clicked
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('Visiting external link:', link.href);
        });
    });
})();
