/**
 * Improved language management system for JobFlex
 */

// Available languages
const availableLanguages = ['pl', 'ua', 'en'];

// Default language
const defaultLanguage = 'pl';

// Initialize language system
function initLanguage() {
    console.log("Initializing language system");

    // Get saved language or use default
    const currentLang = localStorage.getItem('selectedLanguage') || defaultLanguage;
    console.log("Using language:", currentLang);

    // Set current language
    setLanguage(currentLang, false);

    // Add event listeners to language buttons
    setupLanguageButtons();
}

// Set the language
function setLanguage(lang, saveToStorage = true) {
    console.log("Setting language:", lang);

    // Save to localStorage (optional)
    if (saveToStorage) {
        localStorage.setItem('selectedLanguage', lang);
    }

    // Update flags
    updateFlags(lang);

    // Translate all elements
    translatePage(lang);
}

// Update flag display
function updateFlags(lang) {
    console.log("Updating flags");

    // Determine flags path
    const isInSubdir = window.location.pathname.includes('/pages/');
    const flagsPath = isInSubdir ? '../assets/images/flags/' : 'assets/images/flags/';

    // Update main button flag
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) {
        currentFlag.src = flagsPath + lang + '.png';

        // Set appropriate alt text
        const altTexts = {
            'pl': 'Polski',
            'ua': 'Українська',
            'en': 'English'
        };
        currentFlag.alt = altTexts[lang] || lang;
    } else {
        console.warn("Current flag element not found");
    }

    // Update flag paths in dropdown menu
    document.querySelectorAll('.dropdown-menu img').forEach(img => {
        const imgId = img.id;
        if (imgId && imgId.includes('-flag')) {
            const flagLang = imgId.split('-')[0];
            img.src = flagsPath + flagLang + '.png';
        }
    });
}

// Translate the page to specified language
function translatePage(lang) {
    console.log("Translating page to:", lang);

    // Check if translations object is available
    if (!window.translations) {
        console.error("Translations object is not available!");
        return;
    }

    // Find all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    console.log("Found elements to translate:", elements.length);

    // Translate each element
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');

        // Check if translation exists for the key
        if (window.translations[key] && window.translations[key][lang]) {
            const translation = window.translations[key][lang];

            // Apply translation based on element type
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            } else {
                element.textContent = translation;
            }
        } else {
            console.warn(`No translation found for key: ${key} in language: ${lang}`);
        }
    });
}

// Add event listeners to language buttons
function setupLanguageButtons() {
    console.log("Setting up language buttons");

    // Find language buttons
    const buttons = document.querySelectorAll('[data-language]');
    console.log("Found buttons:", buttons.length);

    // Add click event listeners
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const language = this.getAttribute('data-language');
            console.log("Language button clicked:", language);
            setLanguage(language);
        });
    });
}

// Initialize after DOM and components are loaded
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, waiting for components...");

    // Set a shorter timeout to ensure language system initializes after components
    setTimeout(initLanguage, 300);
});

// Expose methods to global scope for accessibility from HTML
window.LanguageManager = {
    init: initLanguage,
    setLanguage: setLanguage,
    translatePage: translatePage
};