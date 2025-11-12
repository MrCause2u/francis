// Navigation Script
(function() {
    const navLinks = document.querySelectorAll('.navbar-centered a');
    const currentLocation = location.pathname;

    // Set active link based on current page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if we're on the home page
        if ((currentLocation === '/' || currentLocation.includes('index.html')) && href === 'index.html') {
            link.style.color = '#f39c12';
        } else if (currentLocation.includes(href.replace('.html', '')) && href !== 'index.html') {
            link.style.color = '#f39c12';
        }
    });

    // Smooth scroll behavior for anchor links
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
})();
