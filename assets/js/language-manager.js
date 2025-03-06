/**
 * Bardzo prosty system zarządzania językami dla strony JobFlex
 */

// Dostępne języki
const availableLanguages = ['pl', 'ua', 'en'];

// Domyślny język
const defaultLanguage = 'pl';

// Funkcja inicjalizująca język
function initLanguage() {
    console.log("Inicjalizacja języka");

    // Pobierz zapisany język lub użyj domyślnego
    const currentLang = localStorage.getItem('selectedLanguage') || defaultLanguage;
    console.log("Używam języka:", currentLang);

    // Ustaw aktualny język
    setLanguage(currentLang, false);

    // Dodaj obsługę przycisków zmiany języka
    setupLanguageButtons();
}

// Funkcja ustawiająca język
function setLanguage(lang, saveToStorage = true) {
    console.log("Ustawiam język:", lang);

    // Zapisz wybór w localStorage (opcjonalnie)
    if (saveToStorage) {
        localStorage.setItem('selectedLanguage', lang);
    }

    // Aktualizuj flagi
    updateFlags(lang);

    // Przetłumacz wszystkie elementy
    translatePage(lang);
}

// Aktualizuje wyświetlanie flag
function updateFlags(lang) {
    console.log("Aktualizuję flagi");

    // Określ ścieżkę do flag
    const isInSubdir = window.location.pathname.includes('/pages/');
    const flagsPath = isInSubdir ? '../assets/images/flags/' : 'assets/images/flags/';

    // Aktualizuj flagę w głównym przycisku
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) {
        currentFlag.src = flagsPath + lang + '.png';

        // Ustaw odpowiedni tekst alternatywny
        const altTexts = {
            'pl': 'Polski',
            'ua': 'Українська',
            'en': 'English'
        };
        currentFlag.alt = altTexts[lang] || lang;
    } else {
        console.warn("Nie znaleziono elementu current-flag");
    }

    // Aktualizuj ścieżki do flag w menu
    document.querySelectorAll('.dropdown-menu img').forEach(img => {
        const imgId = img.id;
        if (imgId && imgId.includes('-flag')) {
            const flagLang = imgId.split('-')[0];
            img.src = flagsPath + flagLang + '.png';
        }
    });
}

// Tłumaczy stronę na określony język
function translatePage(lang) {
    console.log("Tłumaczę stronę na język:", lang);

    // Sprawdź czy obiekt translations jest dostępny
    if (!window.translations) {
        console.error("Obiekt translations jest niedostępny!");
        return;
    }

    // Znajdź wszystkie elementy z atrybutem data-translate
    const elements = document.querySelectorAll('[data-translate]');
    console.log("Znaleziono elementów do przetłumaczenia:", elements.length);

    // Przetłumacz każdy element
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');

        // Sprawdź czy istnieje tłumaczenie dla danego klucza
        if (window.translations[key] && window.translations[key][lang]) {
            const translation = window.translations[key][lang];

            // Zastosuj tłumaczenie w zależności od typu elementu
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            } else {
                element.textContent = translation;
            }
        } else {
            console.warn(`Brak tłumaczenia dla klucza: ${key} w języku: ${lang}`);
        }
    });
}

// Dodaje obsługę przycisków zmiany języka
function setupLanguageButtons() {
    console.log("Dodaję obsługę przycisków zmiany języka");

    // Znajdź przyciski zmiany języka
    const buttons = document.querySelectorAll('[data-language]');
    console.log("Znaleziono przycisków:", buttons.length);

    // Dodaj nasłuchiwanie zdarzeń kliknięcia
    buttons.forEach(button => {
        // Usuń wcześniejsze nasłuchiwacze, aby uniknąć duplikacji
        const clone = button.cloneNode(true);
        button.parentNode.replaceChild(clone, button);

        // Dodaj nowy nasłuchiwacz
        clone.addEventListener('click', function(e) {
            e.preventDefault();
            const language = this.getAttribute('data-language');
            console.log("Kliknięto przycisk zmiany języka:", language);
            setLanguage(language);
        });
    });
}

// Inicjalizacja po załadowaniu DOM i komponentów
window.addEventListener('load', function() {
    console.log("Strona załadowana, rozpoczynam inicjalizację języka");
    setTimeout(initLanguage, 500);
});