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

// Smooth Scrolling for Anchor Links
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

// Hide Navigation Bar on Scroll Down, Show on Scroll Up
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

// Animation for Hero Section on Scroll (using Intersection Observer)
const heroSection = document.querySelector('.hero h1');
const heroObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                heroSection.style.transform = 'translateY(0)';
                heroSection.style.opacity = '1';
                heroObserver.unobserve(heroSection); // Stop observing once animation runs
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the element is visible
    }
);

heroSection.style.transform = 'translateY(-20px)';
heroSection.style.opacity = '0';
heroObserver.observe(heroSection);
