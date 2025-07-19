// ==============================
// Navigation Menu Functionality
// ==============================

// Select elements
const hamburgerToggle = document.querySelector('.hamburger-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.createElement('div'); // Create overlay dynamically
overlay.className = 'overlay';
document.body.appendChild(overlay); // Add overlay to DOM

// Toggle Navigation Menu
hamburgerToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Show/hide nav menu
    overlay.classList.toggle('active'); // Show/hide overlay
});

// Close Navigation Menu When Clicking Overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
});

// ==============================
// Smooth Scrolling for Anchor Links
// ==============================
document.querySelectorAll('.nav-links a, .cta-btn-hero, .cta-btn').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1); // Remove the `#`
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Close menu on mobile after clicking a link
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.hero-carousel');
    const panels = document.querySelectorAll('.carousel-panel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0; // Start with the first panel

    // Debug logs
    console.log('Number of panels:', panels.length);

    // Update carousel position
    function updateCarousel() {
        const offset = currentIndex * -100;
        carousel.style.transform = `translateX(${offset}%)`;
        console.log(`Transform applied: translateX(${offset}%)`);
    }

    // Go to the previous panel
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? panels.length - 1 : currentIndex - 1;
        console.log('Previous clicked, currentIndex:', currentIndex);
        updateCarousel();
    });

    // Go to the next panel
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === panels.length - 1) ? 0 : currentIndex + 1;
        console.log('Next clicked, currentIndex:', currentIndex);
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel();
});
