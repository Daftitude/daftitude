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

// Dropdown Menu Hover Interaction (for desktop)
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'flex';
    });

    dropdown.addEventListener('mouseleave', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'none';
    });
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

// ==============================
// Hide Navigation Bar on Scroll
// ==============================
let lastScrollY = window.scrollY;
const mainHeader = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        mainHeader.style.top = '-70px'; // Hide header
    } else {
        mainHeader.style.top = '0'; // Show header
    }
    lastScrollY = window.scrollY;
});

// ==============================
// Hero Section Carousel
// ==============================
const carousel = document.querySelector('.hero-carousel');
const panels = document.querySelectorAll('.carousel-panel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
    const offset = currentIndex * -100; // Calculate transform offset
    carousel.style.transform = `translateX(${offset}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out'; // Smooth transitions
}


// Navigate to the previous slide
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? panels.length - 1 : currentIndex - 1;
    updateCarousel();
});

// Navigate to the next slide
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === panels.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Auto-scroll functionality (optional)
const autoScroll = setInterval(() => {
    currentIndex = (currentIndex === panels.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}, 5000);

// Optional: Pause auto-scroll on button click
prevBtn.addEventListener('click', () => clearInterval(autoScroll));
nextBtn.addEventListener('click', () => clearInterval(autoScroll));


// ==============================
// Hero Panel Hover Effects (Optional)
// ==============================
panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => {
        panel.style.transform = 'scale(1.05)';
    });

    panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'scale(1)';
    });
});


