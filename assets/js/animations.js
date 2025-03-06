/**
 * Animations JavaScript File for JobFlex
 * Handles all animations and visual effects on the site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Setup counter animations
    setupCounterAnimations();

    // Setup service card hover effects
    setupServiceCardEffects();

    // Setup solution card hover effects
    setupSolutionCardEffects();

    // Setup scroll animations
    setupScrollAnimations();
});

/**
 * Sets up the counter animations in the trust section
 */
function setupCounterAnimations() {
    const counterBoxes = document.querySelectorAll('.counter-box');

    if (counterBoxes.length === 0) return;

    // Initial animation
    animateCounters();

    // Set interval for continuous animation
    setInterval(animateCounters, 5000);

    function animateCounters() {
        counterBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.transform = 'scale(1.05)';
                box.style.backgroundColor = '#2980b9';
                setTimeout(() => {
                    box.style.transform = 'scale(1)';
                    box.style.backgroundColor = '#3498db';
                }, 200);
            }, index * 200);
        });
    }
}

/**
 * Sets up hover effects for service cards
 */
function setupServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

/**
 * Sets up hover effects for solution cards
 */
function setupSolutionCardEffects() {
    const solutionCards = document.querySelectorAll('.solution-card');

    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#3498db';
            this.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.2)';

            const icon = this.querySelector('.solution-icon');
            if (icon) {
                icon.style.transform = 'translateY(-5px)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e1e1e1';
            this.style.boxShadow = 'none';

            const icon = this.querySelector('.solution-icon');
            if (icon) {
                icon.style.transform = 'translateY(0)';
            }
        });
    });
}

/**
 * Sets up scroll animations for various elements
 */
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .solution-card, .process-step');

    // Set initial state for elements (hidden)
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Function to handle scroll and reveal elements
    function handleScroll() {
        animatedElements.forEach(el => {
            if (isInViewport(el) && el.style.opacity === '0') {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial check on page load
    setTimeout(handleScroll, 300);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}