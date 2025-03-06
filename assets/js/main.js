/**
 * Main JavaScript File for JobFlex
 * Handles core functionality including loading page components
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load header component
    loadComponent('header-placeholder', 'includes/header.html');

    // Load footer component
    loadComponent('footer-placeholder', 'includes/footer.html');

    // Setup sticky navbar
    setupStickyNavbar();

    // Setup form validation
    setupFormValidation();

    // Inicjalizacja obsługi języków - będzie wywołana po załadowaniu nagłówka
});

/**
 * Loads HTML components from external files
 * @param {string} targetId - The ID of the element to load the component into
 * @param {string} componentUrl - The URL of the component to load
 */
function loadComponent(targetId, componentUrl) {
    const target = document.getElementById(targetId);

    if (!target) {
        console.error(`Target element with ID "${targetId}" not found`);
        return;
    }

    fetch(componentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            target.innerHTML = html;

            // If this is the header, setup the active state for navigation
            if (targetId === 'header-placeholder') {
                setupActiveNavigation();

                // Initialize language system after the header is loaded
                if (typeof window.initLanguageSystem === 'function') {
                    window.initLanguageSystem();
                }
            }
        })
        .catch(error => {
            console.error(`Error loading component from ${componentUrl}:`, error);
            target.innerHTML = `<div class="alert alert-danger">Nie można załadować komponentu</div>`;
        });
}

/**
 * Sets up the active state for navigation based on current URL
 */
function setupActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Remove any existing active class
        link.classList.remove('active-link');

        // Get the href attribute
        const href = link.getAttribute('href');

        // Check if this link corresponds to the current page
        if ((currentPage === '' || currentPage === 'index.html') && (href === 'index.html' || href === './')) {
            link.classList.add('active-link');
        } else if (href === currentPage) {
            link.classList.add('active-link');
        }
    });
}

/**
 * Sets up the sticky navbar behavior
 */
function setupStickyNavbar() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.5rem 2rem';
            } else {
                navbar.style.padding = '1rem 2rem';
            }
        }
    });
}

/**
 * Sets up form validation for all forms
 */
function setupFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');

            // If valid and it's a newsletter form, show success message
            if (form.checkValidity() && form.closest('.newsletter-form')) {
                event.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                alert(`Dziękujemy! Adres ${email} został zapisany do newslettera.`);
                form.reset();
                form.classList.remove('was-validated');
            }
        });
    });
}