/**
 * Improved page component loading for JobFlex
 * To be used in the main.js file or directly in page scripts
 */

// Load header and footer components
function loadPageComponents() {
    // Determine path based on current location
    const isInSubdir = window.location.pathname.includes('/pages/');
    const basePath = isInSubdir ? '../' : '';

    // Load header
    loadComponent('header-placeholder', basePath + '../includes/header.html', function() {
        // After header loads, initialize active navigation
        setupActiveNavigation();

        // Initialize language system
        if (window.LanguageManager) {
            window.LanguageManager.init();
        } else {
            // If LanguageManager is not available yet, use a direct approach
            applyInitialLanguage();
        }
    });

    // Load footer
    loadComponent('footer-placeholder', basePath + '../includes/footer.html', function() {
        // Fix footer links if in subdir
        if (isInSubdir) {
            fixFooterLinks();
        }
    });
}

// Load HTML component from external file
function loadComponent(targetId, componentUrl, callback) {
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

            // Execute callback if provided
            if (typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => {
            console.error(`Error loading component from ${componentUrl}:`, error);
            target.innerHTML = `<div class="alert alert-danger">Nie można załadować komponentu</div>`;
        });
}

// Set up active state for navigation based on current URL
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
        } else if (href && href.includes(currentPage)) {
            link.classList.add('active-link');
        }
    });
}

// Fix footer links when in subdir
function fixFooterLinks() {
    document.querySelectorAll('.footer-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('pages/')) {
            link.setAttribute('href', href.replace('pages/', ''));
        } else if (href === 'index.html') {
            link.setAttribute('href', '../index.html');
        }
    });
}

// Apply initial language from localStorage
function applyInitialLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'pl';

    // Try to apply translations if available
    if (window.translations) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');

            if (window.translations[key] && window.translations[key][savedLang]) {
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', window.translations[key][savedLang]);
                } else {
                    element.textContent = window.translations[key][savedLang];
                }
            }
        });
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', loadPageComponents);