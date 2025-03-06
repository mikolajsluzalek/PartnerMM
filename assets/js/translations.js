/**
 * System tłumaczeń dla strony JobFlex
 * Zawiera wszystkie teksty w dostępnych językach
 */

// Obiekt z tłumaczeniami dla wszystkich tekstów na stronie
const translations = {
    // Główne menu
    'menu_dla_pracownikow': {
        'pl': 'DLA PRACOWNIKÓW',
        'ua': 'ДЛЯ ПРАЦІВНИКІВ',
        'en': 'FOR EMPLOYEES'
    },
    'menu_dla_firm': {
        'pl': 'DLA FIRM',
        'ua': 'ДЛЯ КОМПАНІЙ',
        'en': 'FOR COMPANIES'
    },
    'menu_kontakt': {
        'pl': 'KONTAKT',
        'ua': 'КОНТАКТ',
        'en': 'CONTACT'
    },

    // Sekcja hero
    'hero_tytul': {
        'pl': 'ZNAJDŹ ➤ ZATRUDNIJ ➤ ROZWIJAJ',
        'ua': 'ЗНАЙТИ ➤ НАЙНЯТИ ➤ РОЗВИВАТИ',
        'en': 'FIND ➤ HIRE ➤ DEVELOP'
    },
    'hero_opis_1': {
        'pl': 'Kompleksowe rozwiązania w rekrutacji pracowników tymczasowych dla Twojego biznesu',
        'ua': 'Комплексні рішення в рекрутингу тимчасових працівників для вашого бізнесу',
        'en': 'Comprehensive recruitment solutions for temporary employees for your business'
    },
    'hero_opis_2': {
        'pl': 'Oferujemy elastyczne zatrudnienie dopasowane do Twoich potrzeb',
        'ua': 'Ми пропонуємо гнучке працевлаштування відповідно до ваших потреб',
        'en': 'We offer flexible employment tailored to your needs'
    },

    // Proces section
    'process_znajdz': {
        'pl': 'ZNAJDŹ',
        'ua': 'ЗНАЙТИ',
        'en': 'FIND'
    },
    'process_zatrudnij': {
        'pl': 'ZATRUDNIJ',
        'ua': 'НАЙНЯТИ',
        'en': 'HIRE'
    },
    'process_rozwijaj': {
        'pl': 'ROZWIJAJ',
        'ua': 'РОЗВИВАТИ',
        'en': 'DEVELOP'
    },
    'process_tytul': {
        'pl': 'ROZWIJAJ SWÓJ BIZNES Z ODPOWIEDNIMI LUDŹMI',
        'ua': 'РОЗВИВАЙТЕ СВІЙ БІЗНЕС З ВІДПОВІДНИМИ ЛЮДЬМИ',
        'en': 'GROW YOUR BUSINESS WITH THE RIGHT PEOPLE'
    },
    'process_opis': {
        'pl': 'REKRUTUJEMY TALENTY DO TYMCZASOWEJ PRACY',
        'ua': 'МИ РЕКРУТУЄМО ТАЛАНТИ ДЛЯ ТИМЧАСОВОЇ РОБОТИ',
        'en': 'WE RECRUIT TALENTS FOR TEMPORARY WORK'
    },

    // Usługi
    'services_znajdz_tytul': {
        'pl': 'ZNAJDŹ',
        'ua': 'ЗНАЙТИ',
        'en': 'FIND'
    },
    'services_znajdz_opis': {
        'pl': 'Niezależnie czy potrzebujesz pracownika na zastępstwo, do pracy sezonowej czy na szczyt produkcyjny - znajdziemy dla Ciebie najlepszych kandydatów spełniających Twoje wymagania.',
        'ua': 'Незалежно від того, чи вам потрібен працівник на заміну, для сезонної роботи чи на пік виробництва - ми знайдемо для вас найкращих кандидатів, які відповідають вашим вимогам.',
        'en': 'Whether you need an employee for replacement, seasonal work or production peak - we will find the best candidates meeting your requirements.'
    },
    'services_zatrudnij_tytul': {
        'pl': 'ZATRUDNIJ',
        'ua': 'НАЙНЯТИ',
        'en': 'HIRE'
    },
    'services_zatrudnij_opis': {
        'pl': 'Zajmujemy się całym procesem zatrudnienia - od rekrutacji przez weryfikację, po szkolenia i formalności. Zatrudniamy pracownika na nasz etat i delegujemy go do pracy u Ciebie.',
        'ua': 'Ми займаємося всім процесом найму - від набору через перевірку до навчання та формальностей. Ми наймаємо працівника на нашу зарплату та делегуємо його на роботу до вас.',
        'en': 'We handle the entire employment process - from recruitment through verification, to training and formalities. We employ the worker on our payroll and delegate them to work for you.'
    },
    'services_rozwijaj_tytul': {
        'pl': 'ROZWIJAJ',
        'ua': 'РОЗВИВАТИ',
        'en': 'DEVELOP'
    },
    'services_rozwijaj_opis': {
        'pl': 'Dzięki elastycznym formom zatrudnienia możesz sprawnie reagować na potrzeby rynku, rozwijać swój biznes bez dodatkowych obciążeń administracyjnych i kadrowych.',
        'ua': 'Завдяки гнучким формам зайнятості ви можете ефективно реагувати на потреби ринку, розвивати свій бізнес без додаткового адміністративного та кадрового навантаження.',
        'en': 'Thanks to flexible forms of employment, you can efficiently respond to market needs, develop your business without additional administrative and HR burdens.'
    },

    // Sekcja rekrutacyjna
    'rekrutacja_tytul': {
        'pl': 'Proces rekrutacji krok po kroku',
        'ua': 'Процес рекрутингу крок за кроком',
        'en': 'Recruitment process step by step'
    },
    'rekrutacja_opis': {
        'pl': 'Nasz system zapewnia szybkie i efektywne dopasowanie kandydatów do wymagań klienta',
        'ua': 'Наша система забезпечує швидке та ефективне підбір кандидатів до вимог клієнта',
        'en': 'Our system ensures quick and effective matching of candidates to client requirements'
    },
    'rekrutacja_wiecej': {
        'pl': 'Dowiedz się więcej',
        'ua': 'Дізнатися більше',
        'en': 'Learn more'
    },
    'krok1_tytul': {
        'pl': 'Krok 1: Analiza potrzeb',
        'ua': 'Крок 1: Аналіз потреб',
        'en': 'Step 1: Needs analysis'
    },
    'krok1_opis': {
        'pl': 'Określenie wymagań i profilu kandydata',
        'ua': 'Визначення вимог та профілю кандидата',
        'en': 'Defining requirements and candidate profile'
    },
    'krok2_tytul': {
        'pl': 'Krok 2: Selekcja CV',
        'ua': 'Крок 2: Відбір резюме',
        'en': 'Step 2: CV selection'
    },
    'krok2_opis': {
        'pl': 'Wybór najlepszych kandydatów z bazy',
        'ua': 'Вибір найкращих кандидатів з бази',
        'en': 'Selection of the best candidates from the database'
    },
    'krok3_tytul': {
        'pl': 'Krok 3: Weryfikacja',
        'ua': 'Крок 3: Перевірка',
        'en': 'Step 3: Verification'
    },
    'krok3_opis': {
        'pl': 'Rozmowy kwalifikacyjne i testy kompetencji',
        'ua': 'Співбесіди та тести компетенцій',
        'en': 'Interviews and competency tests'
    },
    'krok4_tytul': {
        'pl': 'Krok 4: Zatrudnienie',
        'ua': 'Крок 4: Працевлаштування',
        'en': 'Step 4: Employment'
    },
    'krok4_opis': {
        'pl': 'Formalności, szkolenia i delegowanie do pracy',
        'ua': 'Формальності, навчання та делегування на роботу',
        'en': 'Formalities, training and delegation to work'
    },

    // Sekcja branżowa
    'produkcja_tytul': {
        'pl': 'PRODUKCJA',
        'ua': 'ВИРОБНИЦТВО',
        'en': 'PRODUCTION'
    },
    'produkcja_opis': {
        'pl': 'Pracownicy do linii produkcyjnych, montażu i pakowania',
        'ua': 'Працівники виробничих ліній, монтажу та пакування',
        'en': 'Employees for production lines, assembly and packaging'
    },
    'logistyka_tytul': {
        'pl': 'LOGISTYKA',
        'ua': 'ЛОГІСТИКА',
        'en': 'LOGISTICS'
    },
    'logistyka_opis': {
        'pl': 'Pracownicy magazynowi, operatorzy wózków i koordynatorzy',
        'ua': 'Працівники складу, оператори навантажувачів та координатори',
        'en': 'Warehouse workers, forklift operators and coordinators'
    },
    'administracja_tytul': {
        'pl': 'ADMINISTRACJA',
        'ua': 'АДМІНІСТРАЦІЯ',
        'en': 'ADMINISTRATION'
    },
    'administracja_opis': {
        'pl': 'Pracownicy biurowi, asystenci i specjaliści obsługi klienta',
        'ua': 'Офісні працівники, асистенти та фахівці з обслуговування клієнтів',
        'en': 'Office workers, assistants and customer service specialists'
    },
    'rozwijaj_wspolprace': {
        'pl': 'ROZPOCZNIJ WSPÓŁPRACĘ',
        'ua': 'ПОЧАТИ СПІВПРАЦЮ',
        'en': 'START COOPERATION'
    },

    // CTA Section
    'cta_tytul': {
        'pl': 'INNOWACYJNE PODEJŚCIE DO REKRUTACJI',
        'ua': 'ІННОВАЦІЙНИЙ ПІДХІД ДО РЕКРУТИНГУ',
        'en': 'INNOVATIVE APPROACH TO RECRUITMENT'
    },
    'cta_opis': {
        'pl': 'Korzystamy z najnowszych technologii i metod, aby dostarczyć Ci najlepszych pracowników',
        'ua': 'Ми використовуємо найновіші технології та методи, щоб забезпечити вас найкращими працівниками',
        'en': 'We use the latest technologies and methods to provide you with the best employees'
    },
    'cta_button': {
        'pl': 'ZAPISZ SIĘ NA BETA TESTY',
        'ua': 'ЗАРЕЄСТРУЙТЕСЯ НА БЕТА-ТЕСТУВАННЯ',
        'en': 'SIGN UP FOR BETA TESTS'
    },

    // Trust Section
    'trust_tytul': {
        'pl': 'PRACODAWCY NAM UFAJĄ',
        'ua': 'РОБОТОДАВЦІ НАМ ДОВІРЯЮТЬ',
        'en': 'EMPLOYERS TRUST US'
    },
    'trust_opis': {
        'pl': 'FIRMY KORZYSTAJĄCE Z NASZYCH USŁUG',
        'ua': 'КОМПАНІЇ, ЯКІ ВИКОРИСТОВУЮТЬ НАШІ ПОСЛУГИ',
        'en': 'COMPANIES USING OUR SERVICES'
    },
    'trust_email_placeholder': {
        'pl': 'WPROWADŹ SWÓJ E-MAIL',
        'ua': 'ВВЕДІТЬ СВОЮ ЕЛЕКТРОННУ ПОШТУ',
        'en': 'ENTER YOUR E-MAIL'
    },
    'trust_button': {
        'pl': 'WYŚLIJ',
        'ua': 'НАДІСЛАТИ',
        'en': 'SEND'
    },

    // Newsletter
    'newsletter_tytul': {
        'pl': 'ZAPISZ SIĘ DO NEWSLETTERA',
        'ua': 'ПІДПИШІТЬСЯ НА РОЗСИЛКУ',
        'en': 'SUBSCRIBE TO NEWSLETTER'
    },
    'newsletter_email': {
        'pl': 'Twój Email',
        'ua': 'Ваша електронна пошта',
        'en': 'Your Email'
    },
    'newsletter_button': {
        'pl': 'GO',
        'ua': 'GO',
        'en': 'GO'
    },

    // Footer
    'footer_home': {
        'pl': 'HOME',
        'ua': 'ГОЛОВНА',
        'en': 'HOME'
    },
    'footer_prywatnosc': {
        'pl': 'POLITYKA PRYWATNOŚCI',
        'ua': 'ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ',
        'en': 'PRIVACY POLICY'
    },
    'footer_mapa': {
        'pl': 'MAPA STRONY',
        'ua': 'КАРТА САЙТУ',
        'en': 'SITEMAP'
    },
    'footer_faq': {
        'pl': 'FAQ',
        'ua': 'ПИТАННЯ',
        'en': 'FAQ'
    },
    'footer_kontakt': {
        'pl': 'KONTAKT',
        'ua': 'КОНТАКТ',
        'en': 'CONTACT'
    },
    'footer_prawa': {
        'pl': '© 2025 JobFlex - Agencja Pracy Tymczasowej. Wszelkie prawa zastrzeżone.',
        'ua': '© 2025 JobFlex - Агенція тимчасової роботи. Всі права захищені.',
        'en': '© 2025 JobFlex - Temporary Employment Agency. All rights reserved.'
    },

    // Języki
    'lang_polski': {
        'pl': 'Polski',
        'ua': 'Польська',
        'en': 'Polish'
    },
    'lang_ukrainski': {
        'pl': 'Ukraiński',
        'ua': 'Українська',
        'en': 'Ukrainian'
    },
    'lang_angielski': {
        'pl': 'Angielski',
        'ua': 'Англійська',
        'en': 'English'
    }
};

/**
 * Pobiera tłumaczenie dla klucza w wybranym języku
 * @param {string} key - Klucz tłumaczenia
 * @param {string} lang - Kod języka (pl, ua, en)
 * @returns {string} Przetłumaczony tekst lub klucz, jeśli brak tłumaczenia
 */
function getTranslation(key, lang) {
    if (translations[key] && translations[key][lang]) {
        return translations[key][lang];
    }
    console.warn(`Missing translation for key: ${key} in language: ${lang}`);
    return key;
}

/**
 * Zmienia język na stronie
 * @param {string} lang - Kod języka (pl, ua, en)
 */
function changeLanguage(lang) {
    // Zapisz wybrany język w localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Zmień flagę w przycisku dropdown
    const path = window.location.pathname;
    const isInSubdir = path.includes('/pages/');
    const flagsPath = isInSubdir ? '../assets/images/flags/' : 'assets/images/flags/';

    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) {
        currentFlag.setAttribute('src', flagsPath + lang + '.png');

        // Zmień tekst alternatywny flagi w zależności od wybranego języka
        if (lang === 'pl') {
            currentFlag.setAttribute('alt', 'Polski');
        } else if (lang === 'ua') {
            currentFlag.setAttribute('alt', 'Українська');
        } else if (lang === 'en') {
            currentFlag.setAttribute('alt', 'English');
        }
    }

    // Zaktualizuj wszystkie elementy z atrybutem data-translate
    const translatableElements = document.querySelectorAll('[data-translate]');

    translatableElements.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        const translatedText = getTranslation(translationKey, lang);

        // Sprawdź, czy element ma atrybut placeholder (dla pól formularza)
        if (element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', translatedText);
        } else {
            element.textContent = translatedText;
        }
    });
}

/**
 * Inicjalizuje obsługę języków na stronie
 */
function initLanguageSystem() {
    // Sprawdź czy istnieje wcześniej zapisany wybór języka
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pl';

    // Ustaw flagę dla zapisanego języka
    const path = window.location.pathname;
    const isInSubdir = path.includes('/pages/');
    const flagsPath = isInSubdir ? '../assets/images/flags/' : 'assets/images/flags/';

    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) {
        currentFlag.setAttribute('src', flagsPath + savedLanguage + '.png');

        // Ustaw tekst alternatywny flagi w zależności od zapisanego języka
        if (savedLanguage === 'pl') {
            currentFlag.setAttribute('alt', 'Polski');
        } else if (savedLanguage === 'ua') {
            currentFlag.setAttribute('alt', 'Українська');
        } else if (savedLanguage === 'en') {
            currentFlag.setAttribute('alt', 'English');
        }
    }

    // Zastosuj tłumaczenia
    changeLanguage(savedLanguage);
}

// Inicjalizacja systemu tłumaczeń po załadowaniu dokumentu
document.addEventListener('DOMContentLoaded', initLanguageSystem);