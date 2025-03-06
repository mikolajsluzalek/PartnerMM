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
    },

    // STRONA DLA PRACOWNIKÓW
    'pracownicy_title': {
        'pl': 'Dla Pracowników',
        'ua': 'Для Працівників',
        'en': 'For Employees'
    },
    'pracownicy_subtitle': {
        'pl': 'Znajdź pracę dopasowaną do Twoich umiejętności i oczekiwań',
        'ua': 'Знайдіть роботу, що відповідає вашим навичкам та очікуванням',
        'en': 'Find a job tailored to your skills and expectations'
    },
    'pracownicy_section_title': {
        'pl': 'Jaką pracę oferujemy?',
        'ua': 'Яку роботу ми пропонуємо?',
        'en': 'What jobs do we offer?'
    },
    'pracownicy_produkcja_title': {
        'pl': 'Produkcja',
        'ua': 'Виробництво',
        'en': 'Production'
    },
    'pracownicy_produkcja_1': {
        'pl': 'Operatorzy maszyn',
        'ua': 'Оператори машин',
        'en': 'Machine operators'
    },
    'pracownicy_produkcja_2': {
        'pl': 'Pracownicy linii produkcyjnej',
        'ua': 'Працівники виробничої лінії',
        'en': 'Production line workers'
    },
    'pracownicy_produkcja_3': {
        'pl': 'Kontrolerzy jakości',
        'ua': 'Контролери якості',
        'en': 'Quality controllers'
    },
    'pracownicy_produkcja_4': {
        'pl': 'Pracownicy montażu',
        'ua': 'Монтажники',
        'en': 'Assembly workers'
    },
    'pracownicy_produkcja_5': {
        'pl': 'Pakowacze',
        'ua': 'Пакувальники',
        'en': 'Packers'
    },
    'pracownicy_logistyka_title': {
        'pl': 'Logistyka',
        'ua': 'Логістика',
        'en': 'Logistics'
    },
    'pracownicy_logistyka_1': {
        'pl': 'Pracownicy magazynowi',
        'ua': 'Складські працівники',
        'en': 'Warehouse workers'
    },
    'pracownicy_logistyka_2': {
        'pl': 'Operatorzy wózków widłowych',
        'ua': 'Оператори вилочних навантажувачів',
        'en': 'Forklift operators'
    },
    'pracownicy_logistyka_3': {
        'pl': 'Kompletatorzy zamówień',
        'ua': 'Комплектувальники замовлень',
        'en': 'Order pickers'
    },
    'pracownicy_logistyka_4': {
        'pl': 'Koordynatorzy logistyczni',
        'ua': 'Логістичні координатори',
        'en': 'Logistics coordinators'
    },
    'pracownicy_logistyka_5': {
        'pl': 'Kierowcy',
        'ua': 'Водії',
        'en': 'Drivers'
    },
    'pracownicy_administracja_title': {
        'pl': 'Administracja',
        'ua': 'Адміністрація',
        'en': 'Administration'
    },
    'pracownicy_administracja_1': {
        'pl': 'Asystenci biurowi',
        'ua': 'Офісні асистенти',
        'en': 'Office assistants'
    },
    'pracownicy_administracja_2': {
        'pl': 'Pracownicy obsługi klienta',
        'ua': 'Працівники обслуговування клієнтів',
        'en': 'Customer service representatives'
    },
    'pracownicy_administracja_3': {
        'pl': 'Recepcjoniści',
        'ua': 'Рецепціоністи',
        'en': 'Receptionists'
    },
    'pracownicy_administracja_4': {
        'pl': 'Specjaliści ds. administracyjnych',
        'ua': 'Фахівці з адміністративних питань',
        'en': 'Administrative specialists'
    },
    'pracownicy_administracja_5': {
        'pl': 'Pracownicy call center',
        'ua': 'Працівники кол-центру',
        'en': 'Call center employees'
    },
    'pracownicy_benefits_title': {
        'pl': 'Korzyści ze współpracy z JobFlex',
        'ua': 'Переваги співпраці з JobFlex',
        'en': 'Benefits of working with JobFlex'
    },
    'pracownicy_benefit1_title': {
        'pl': 'Legalność Zatrudnienia',
        'ua': 'Легальність Працевлаштування',
        'en': 'Legal Employment'
    },
    'pracownicy_benefit1_desc': {
        'pl': 'Umowa o pracę tymczasową, pełne ubezpieczenie, wszystkie składki opłacone.',
        'ua': 'Договір про тимчасову роботу, повне страхування, всі внески сплачені.',
        'en': 'Temporary employment contract, full insurance, all contributions paid.'
    },
    'pracownicy_benefit2_title': {
        'pl': 'Terminowe Wynagrodzenie',
        'ua': 'Своєчасна Оплата',
        'en': 'Timely Payment'
    },
    'pracownicy_benefit2_desc': {
        'pl': 'Gwarantujemy wypłatę na czas, bez opóźnień, zawsze zgodną z umową.',
        'ua': 'Ми гарантуємо виплату вчасно, без затримок, завжди відповідно до договору.',
        'en': 'We guarantee on-time payment, without delays, always according to the agreement.'
    },
    'pracownicy_benefit3_title': {
        'pl': 'Elastyczny Grafik',
        'ua': 'Гнучкий Графік',
        'en': 'Flexible Schedule'
    },
    'pracownicy_benefit3_desc': {
        'pl': 'Dopasowujemy się do Twoich możliwości czasowych - praca pełna lub na część etatu.',
        'ua': 'Ми адаптуємося до ваших часових можливостей - повна або часткова зайнятість.',
        'en': 'We adapt to your time availability - full-time or part-time work.'
    },
    'pracownicy_benefit4_title': {
        'pl': 'Rozwój Zawodowy',
        'ua': 'Професійний Розвиток',
        'en': 'Professional Development'
    },
    'pracownicy_benefit4_desc': {
        'pl': 'Szkolenia, możliwość zdobycia doświadczenia i perspektywa stałego zatrudnienia.',
        'ua': 'Навчання, можливість отримати досвід і перспектива постійного працевлаштування.',
        'en': 'Training, opportunity to gain experience and the prospect of permanent employment.'
    },
    'pracownicy_ready_title': {
        'pl': 'Gotowy, by rozpocząć swoją nową pracę?',
        'ua': 'Готові почати свою нову роботу?',
        'en': 'Ready to start your new job?'
    },
    'pracownicy_ready_desc': {
        'pl': 'Wypełnij formularz, a nasz konsultant skontaktuje się z Tobą w ciągu 24 godzin.',
        'ua': 'Заповніть форму, і наш консультант зв\'яжеться з вами протягом 24 годин.',
        'en': 'Fill out the form and our consultant will contact you within 24 hours.'
    },
    'pracownicy_apply_button': {
        'pl': 'APLIKUJ TERAZ',
        'ua': 'ПОДАТИ ЗАЯВКУ ЗАРАЗ',
        'en': 'APPLY NOW'
    },

    // STRONA DLA FIRM
    'firmy_title': {
        'pl': 'Dla Firm',
        'ua': 'Для Компаній',
        'en': 'For Companies'
    },
    'firmy_subtitle': {
        'pl': 'Elastyczne rozwiązania w zakresie zatrudniania pracowników tymczasowych',
        'ua': 'Гнучкі рішення для найму тимчасових працівників',
        'en': 'Flexible solutions for hiring temporary employees'
    },
    'firmy_benefits_title': {
        'pl': 'Korzyści ze współpracy z JobFlex',
        'ua': 'Переваги співпраці з JobFlex',
        'en': 'Benefits of working with JobFlex'
    },
    'firmy_benefit1_title': {
        'pl': 'Redukcja kosztów',
        'ua': 'Зниження витрат',
        'en': 'Cost reduction'
    },
    'firmy_benefit1_desc': {
        'pl': 'Brak kosztów rekrutacji, szkoleń wstępnych i obsługi kadrowo-płacowej. Elastyczne zatrudnienie tylko wtedy, gdy faktycznie potrzebujesz pracowników.',
        'ua': 'Відсутність витрат на рекрутинг, початкове навчання та кадрово-розрахункове обслуговування. Гнучке працевлаштування лише тоді, коли вам дійсно потрібні працівники.',
        'en': 'No recruitment, initial training, and payroll costs. Flexible employment only when you actually need employees.'
    },
    'firmy_benefit2_title': {
        'pl': 'Szybkość działania',
        'ua': 'Швидкість дії',
        'en': 'Speed of action'
    },
    'firmy_benefit2_desc': {
        'pl': 'Dostarczamy wykwalifikowanych pracowników w ciągu 24-48 godzin. Szybka reakcja na nagłe potrzeby kadrowe, szczyty produkcyjne czy sezonowe zapotrzebowanie.',
        'ua': 'Ми надаємо кваліфікованих працівників протягом 24-48 годин. Швидка реакція на раптові кадрові потреби, виробничі піки чи сезонний попит.',
        'en': 'We provide qualified employees within 24-48 hours. Quick response to sudden staffing needs, production peaks, or seasonal demand.'
    },
    'firmy_benefit3_title': {
        'pl': 'Brak zobowiązań',
        'ua': 'Відсутність зобов\'язань',
        'en': 'No obligations'
    },
    'firmy_benefit3_desc': {
        'pl': 'Pracownicy są zatrudnieni przez naszą agencję. Przejmujemy wszystkie obowiązki formalne i prawne związane z zatrudnieniem.',
        'ua': 'Працівники працевлаштовані через наше агентство. Ми беремо на себе всі формальні та юридичні обов\'язки, пов\'язані з працевлаштуванням.',
        'en': 'Employees are employed by our agency. We take over all formal and legal obligations related to employment.'
    },
    'firmy_benefit4_title': {
        'pl': 'Weryfikacja pracowników',
        'ua': 'Перевірка працівників',
        'en': 'Employee verification'
    },
    'firmy_benefit4_desc': {
        'pl': 'Dokładnie sprawdzamy kwalifikacje, doświadczenie i referencje każdego kandydata. Dostarczamy tylko zweryfikowanych i odpowiednio przygotowanych pracowników.',
        'ua': 'Ми ретельно перевіряємо кваліфікацію, досвід та рекомендації кожного кандидата. Ми надаємо лише перевірених та належним чином підготовлених працівників.',
        'en': 'We thoroughly check the qualifications, experience, and references of each candidate. We provide only verified and properly prepared employees.'
    },
    'firmy_benefit5_title': {
        'pl': 'Elastyczność',
        'ua': 'Гнучкість',
        'en': 'Flexibility'
    },
    'firmy_benefit5_desc': {
        'pl': 'Dopasowujemy liczbę pracowników do aktualnych potrzeb Twojej firmy. Możliwość szybkiego zwiększenia lub zmniejszenia zespołu bez konsekwencji prawnych.',
        'ua': 'Ми адаптуємо кількість працівників до поточних потреб вашої компанії. Можливість швидкого збільшення або зменшення команди без юридичних наслідків.',
        'en': 'We adjust the number of employees to the current needs of your company. Possibility to quickly increase or decrease the team without legal consequences.'
    },
    'firmy_benefit6_title': {
        'pl': 'Obsługa administracyjna',
        'ua': 'Адміністративне обслуговування',
        'en': 'Administrative service'
    },
    'firmy_benefit6_desc': {
        'pl': 'Zajmujemy się wszystkimi formalnościami - od rekrutacji przez umowy, badania lekarskie, szkolenia BHP po rozliczenia i ewidencję czasu pracy.',
        'ua': 'Ми займаємося всіма формальностями - від найму через контракти, медичні огляди, навчання з охорони праці до розрахунків та обліку робочого часу.',
        'en': 'We handle all formalities - from recruitment through contracts, medical examinations, health and safety training to settlements and time records.'
    },
    'firmy_process_title': {
        'pl': 'Jak przebiega współpraca?',
        'ua': 'Як відбувається співпраця?',
        'en': 'How does the cooperation work?'
    },
    'firmy_process1_title': {
        'pl': 'Analiza potrzeb',
        'ua': 'Аналіз потреб',
        'en': 'Needs analysis'
    },
    'firmy_process1_desc': {
        'pl': 'Określamy Twoje potrzeby kadrowe, wymagania, oczekiwania i terminy',
        'ua': 'Ми визначаємо ваші кадрові потреби, вимоги, очікування та терміни',
        'en': 'We determine your staffing needs, requirements, expectations, and deadlines'
    },
    'firmy_process2_title': {
        'pl': 'Rekrutacja',
        'ua': 'Рекрутинг',
        'en': 'Recruitment'
    },
    'firmy_process2_desc': {
        'pl': 'Przeprowadzamy proces rekrutacji i selekcji kandydatów',
        'ua': 'Ми проводимо процес набору та відбору кандидатів',
        'en': 'We conduct the recruitment and selection process of candidates'
    },
    'firmy_process3_title': {
        'pl': 'Zatrudnienie',
        'ua': 'Працевлаштування',
        'en': 'Employment'
    },
    'firmy_process3_desc': {
        'pl': 'Załatwiamy wszystkie formalności związane z zatrudnieniem',
        'ua': 'Ми вирішуємо всі формальності, пов\'язані з працевлаштуванням',
        'en': 'We handle all formalities related to employment'
    },
    'firmy_process4_title': {
        'pl': 'Wsparcie',
        'ua': 'Підтримка',
        'en': 'Support'
    },
    'firmy_process4_desc': {
        'pl': 'Zapewniamy bieżące wsparcie i monitoring jakości pracy',
        'ua': 'Ми забезпечуємо постійну підтримку та моніторинг якості роботи',
        'en': 'We provide ongoing support and work quality monitoring'
    },
    'firmy_industries_title': {
        'pl': 'Branże, z którymi współpracujemy',
        'ua': 'Галузі, з якими ми співпрацюємо',
        'en': 'Industries we work with'
    },
    'firmy_industry1_title': {
        'pl': 'Produkcja',
        'ua': 'Виробництво',
        'en': 'Production'
    },
    'firmy_industry1_desc': {
        'pl': 'Pracownicy linii produkcyjnych, operatorzy maszyn, montażyści, kontrolerzy jakości',
        'ua': 'Працівники виробничих ліній, оператори машин, монтажники, контролери якості',
        'en': 'Production line workers, machine operators, assemblers, quality controllers'
    },
    'firmy_industry2_title': {
        'pl': 'Logistyka',
        'ua': 'Логістика',
        'en': 'Logistics'
    },
    'firmy_industry2_desc': {
        'pl': 'Pracownicy magazynowi, operatorzy wózków widłowych, pakowacze, kompletatorzy zamówień',
        'ua': 'Складські працівники, оператори вилочних навантажувачів, пакувальники, комплектувальники замовлень',
        'en': 'Warehouse workers, forklift operators, packers, order pickers'
    },
    'firmy_industry3_title': {
        'pl': 'Administracja',
        'ua': 'Адміністрація',
        'en': 'Administration'
    },
    'firmy_industry3_desc': {
        'pl': 'Pracownicy biurowi, asystenci, recepcjoniści, specjaliści obsługi klienta',
        'ua': 'Офісні працівники, асистенти, рецепціоністи, фахівці з обслуговування клієнтів',
        'en': 'Office workers, assistants, receptionists, customer service specialists'
    },
    'firmy_industry4_title': {
        'pl': 'Handel',
        'ua': 'Торгівля',
        'en': 'Trade'
    },
    'firmy_industry4_desc': {
        'pl': 'Sprzedawcy, kasjerzy, merchandiserzy, pracownicy inwentaryzacji',
        'ua': 'Продавці, касири, мерчендайзери, працівники інвентаризації',
        'en': 'Salespeople, cashiers, merchandisers, inventory workers'
    },
    'firmy_industry5_title': {
        'pl': 'Gastronomia',
        'ua': 'Гастрономія',
        'en': 'Gastronomy'
    },
    'firmy_industry5_desc': {
        'pl': 'Kucharze, kelnerzy, bariści, pomoc kuchenna, pracownicy na zmywak',
        'ua': 'Кухарі, офіціанти, бариста, помічники на кухні, працівники на посудомийку',
        'en': 'Cooks, waiters, baristas, kitchen helpers, dishwashers'
    },
    'firmy_industry6_title': {
        'pl': 'Usługi',
        'ua': 'Послуги',
        'en': 'Services'
    },
    'firmy_industry6_desc': {
        'pl': 'Pracownicy sprzątający, ochrona, konserwatorzy, pracownicy techniczni',
        'ua': 'Прибиральники, охорона, техніки з обслуговування, технічні працівники',
        'en': 'Cleaning staff, security, maintenance technicians, technical workers'
    },
    'firmy_faq_title': {
        'pl': 'Najczęściej zadawane pytania',
        'ua': 'Найчастіші запитання',
        'en': 'Frequently asked questions'
    },
    'firmy_faq1_q': {
        'pl': 'Ile kosztuje zatrudnienie pracownika tymczasowego?',
        'ua': 'Скільки коштує найм тимчасового працівника?',
        'en': 'How much does it cost to hire a temporary employee?'
    },
    'firmy_faq1_a': {
        'pl': 'Koszt zatrudnienia pracownika tymczasowego jest kalkulowany indywidualnie i zależy od wielu czynników, takich jak: stanowisko, wymagane kwalifikacje, okres zatrudnienia, liczba pracowników. Nasza stawka obejmuje wynagrodzenie pracownika oraz marżę agencji za obsługę administracyjną, kadrową i płacową.',
        'ua': 'Вартість найму тимчасового працівника розраховується індивідуально і залежить від багатьох факторів, таких як: посада, необхідна кваліфікація, період працевлаштування, кількість працівників. Наша ставка включає заробітну плату працівника та маржу агенції за адміністративне, кадрове та розрахункове обслуговування.',
        'en': 'The cost of hiring a temporary employee is calculated individually and depends on many factors, such as: position, required qualifications, employment period, number of employees. Our rate includes the employee\'s salary and the agency\'s margin for administrative, HR, and payroll services.'
    },
    'firmy_faq2_q': {
        'pl': 'Jak szybko mogę otrzymać pracowników?',
        'ua': 'Як швидко я можу отримати працівників?',
        'en': 'How quickly can I receive employees?'
    },
    'firmy_faq2_a': {
        'pl': 'W przypadku stanowisk niewymagających specjalistycznych kwalifikacji, jesteśmy w stanie dostarczyć pracowników nawet w ciągu 24-48 godzin od momentu złożenia zamówienia. Dla specjalistycznych pozycji proces rekrutacji może trwać od kilku dni do 2 tygodni.',
        'ua': 'У випадку посад, що не вимагають спеціалізованої кваліфікації, ми можемо надати працівників навіть протягом 24-48 годин з моменту замовлення. Для спеціалізованих посад процес набору може тривати від кількох днів до 2 тижнів.',
        'en': 'For positions that do not require specialized qualifications, we are able to provide employees even within 24-48 hours from the moment of placing an order. For specialized positions, the recruitment process may take from a few days to 2 weeks.'
    },
    'firmy_faq3_q': {
        'pl': 'Czy mogę zatrudnić pracownika tymczasowego na stałe?',
        'ua': 'Чи можу я найняти тимчасового працівника на постійну роботу?',
        'en': 'Can I hire a temporary employee permanently?'
    },
    'firmy_faq3_a': {
        'pl': 'Tak, po określonym w umowie okresie pracy tymczasowej, możesz zatrudnić pracownika bezpośrednio. W ramach naszych usług oferujemy także model "temp-to-perm", czyli pracę tymczasową z możliwością przejścia na etat po okresie próbnym.',
        'ua': 'Так, після визначеного в договорі періоду тимчасової роботи, ви можете найняти працівника безпосередньо. В рамках наших послуг ми також пропонуємо модель "temp-to-perm", тобто тимчасову роботу з можливістю переходу на постійну після випробувального терміну.',
        'en': 'Yes, after a specified period of temporary work defined in the contract, you can hire the employee directly. As part of our services, we also offer a "temp-to-perm" model, which means temporary work with the possibility of transitioning to permanent employment after a trial period.'
    },
    'firmy_faq4_q': {
        'pl': 'Jak wygląda proces podpisania umowy o świadczenie usług?',
        'ua': 'Як виглядає процес підписання договору про надання послуг?',
        'en': 'What does the process of signing a service agreement look like?'
    },
    'firmy_faq4_a': {
        'pl': 'Po ustaleniu szczegółów współpracy, przygotowujemy umowę o świadczenie usług. Określamy w niej zakres prac, liczbę pracowników, okres zatrudnienia, stawki oraz inne istotne warunki. Umowa może zostać podpisana elektronicznie lub w formie tradycyjnej.',
        'ua': 'Після узгодження деталей співпраці, ми готуємо договір про надання послуг. У ньому ми визначаємо обсяг робіт, кількість працівників, період працевлаштування, ставки та інші важливі умови. Договір може бути підписаний електронно або в традиційній формі.',
        'en': 'After determining the details of the cooperation, we prepare a service agreement. We specify in it the scope of work, number of employees, employment period, rates, and other important conditions. The agreement can be signed electronically or in a traditional form.'
    },
    'firmy_faq5_q': {
        'pl': 'Kto odpowiada za szkolenie pracowników?',
        'ua': 'Хто відповідає за навчання працівників?',
        'en': 'Who is responsible for training employees?'
    },
    'firmy_faq5_a': {
        'pl': 'Zapewniamy pracownikom szkolenia wstępne BHP oraz ogólne wprowadzenie do obowiązków. Natomiast szkolenia stanowiskowe oraz wdrożenie w specyfikę pracy w Twojej firmie leżą po stronie klienta. Jesteśmy otwarci na dostosowanie tego podziału do indywidualnych potrzeb.',
        'ua': 'Ми забезпечуємо працівникам вступне навчання з охорони праці та загальне введення в обов\'язки. Однак навчання на робочому місці та впровадження в специфіку роботи у вашій компанії лежать на стороні клієнта. Ми відкриті для адаптації цього розподілу до індивідуальних потреб.',
        'en': 'We provide employees with initial health and safety training and a general introduction to duties. However, job training and introduction to the specifics of work in your company are the responsibility of the client. We are open to adapting this division to individual needs.'
    },
    'firmy_ready_title': {
        'pl': 'Gotowy do współpracy?',
        'ua': 'Готові до співпраці?',
        'en': 'Ready for cooperation?'
    },
    'firmy_ready_desc': {
        'pl': 'Skontaktuj się z nami, a nasz konsultant przedstawi Ci szczegółową ofertę dopasowaną do potrzeb Twojej firmy.',
        'ua': 'Зв\'яжіться з нами, і наш консультант представить вам детальну пропозицію, адаптовану до потреб вашої компанії.',
        'en': 'Contact us, and our consultant will present you with a detailed offer tailored to the needs of your company.'
    },
    'firmy_contact_button': {
        'pl': 'SKONTAKTUJ SIĘ Z NAMI',
        'ua': 'ЗВ\'ЯЖІТЬСЯ З НАМИ',
        'en': 'CONTACT US'
    },

    // STRONA KONTAKT
    'kontakt_title': {
        'pl': 'Kontakt',
        'ua': 'Контакт',
        'en': 'Contact'
    },
    'kontakt_subtitle': {
        'pl': 'Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania',
        'ua': 'Ми доступні, щоб відповісти на всі ваші запитання',
        'en': 'We are available to answer all your questions'
    },
    'kontakt_phone_title': {
        'pl': 'Telefon',
        'ua': 'Телефон',
        'en': 'Phone'
    },
    'kontakt_phone_number': {
        'pl': '+48 123 456 789',
        'ua': '+48 123 456 789',
        'en': '+48 123 456 789'
    },
    'kontakt_phone_hours': {
        'pl': 'Pon-Pt: 8:00 - 16:00',
        'ua': 'Пн-Пт: 8:00 - 16:00',
        'en': 'Mon-Fri: 8:00 - 16:00'
    },
    'kontakt_email_title': {
        'pl': 'Email',
        'ua': 'Email',
        'en': 'Email'
    },
    'kontakt_email_address': {
        'pl': 'kontakt@jobflex.pl',
        'ua': 'kontakt@jobflex.pl',
        'en': 'kontakt@jobflex.pl'
    },
    'kontakt_email_response': {
        'pl': 'Odpowiadamy w ciągu 24h',
        'ua': 'Відповідаємо протягом 24 годин',
        'en': 'We respond within 24h'
    },
    'kontakt_address_title': {
        'pl': 'Adres',
        'ua': 'Адреса',
        'en': 'Address'
    },
    'kontakt_address_street': {
        'pl': 'ul. Przykładowa 123',
        'ua': 'вул. Прикладна 123',
        'en': 'Przykładowa St. 123'
    },
    'kontakt_address_city': {
        'pl': '00-000 Warszawa',
        'ua': '00-000 Варшава',
        'en': '00-000 Warsaw'
    },
    'kontakt_form_title': {
        'pl': 'Skontaktuj się z nami',
        'ua': 'Зв\'яжіться з нами',
        'en': 'Contact us'
    },
    'kontakt_form_name': {
        'pl': 'Imię i nazwisko',
        'ua': 'Ім\'я та прізвище',
        'en': 'Full name'
    },
    'kontakt_form_email': {
        'pl': 'Email',
        'ua': 'Email',
        'en': 'Email'
    },
    'kontakt_form_phone': {
        'pl': 'Telefon',
        'ua': 'Телефон',
        'en': 'Phone'
    },
    'kontakt_form_subject': {
        'pl': 'Temat',
        'ua': 'Тема',
        'en': 'Subject'
    },
    'kontakt_form_subject_select': {
        'pl': 'Wybierz temat',
        'ua': 'Виберіть тему',
        'en': 'Select a subject'
    },
    'kontakt_form_subject_option1': {
        'pl': 'Oferta pracy',
        'ua': 'Пропозиція роботи',
        'en': 'Job offer'
    },
    'kontakt_form_subject_option2': {
        'pl': 'Współpraca biznesowa',
        'ua': 'Бізнес-співпраця',
        'en': 'Business cooperation'
    },
    'kontakt_form_subject_option3': {
        'pl': 'Pytanie ogólne',
        'ua': 'Загальне питання',
        'en': 'General question'
    },
    'kontakt_form_subject_option4': {
        'pl': 'Reklamacja',
        'ua': 'Рекламація',
        'en': 'Complaint'
    },
    'kontakt_form_message': {
        'pl': 'Wiadomość',
        'ua': 'Повідомлення',
        'en': 'Message'
    },
    'kontakt_form_privacy': {
        'pl': 'Zgadzam się na przetwarzanie moich danych osobowych',
        'ua': 'Я погоджуюся на обробку моїх персональних даних',
        'en': 'I agree to the processing of my personal data'
    },
    'kontakt_form_submit': {
        'pl': 'Wyślij wiadomość',
        'ua': 'Надіслати повідомлення',
        'en': 'Send message'
    },
    'kontakt_location_title': {
        'pl': 'Lokalizacja',
        'ua': 'Місцезнаходження',
        'en': 'Location'
    },
    'kontakt_offices_title': {
        'pl': 'Nasze oddziały',
        'ua': 'Наші відділення',
        'en': 'Our offices'
    },
    'kontakt_office1_title': {
        'pl': 'Warszawa',
        'ua': 'Варшава',
        'en': 'Warsaw'
    },
    'kontakt_office2_title': {
        'pl': 'Kraków',
        'ua': 'Краків',
        'en': 'Krakow'
    },
    'kontakt_office3_title': {
        'pl': 'Poznań',
        'ua': 'Познань',
        'en': 'Poznan'
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
    console.log("Zmiana języka na: " + lang);

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
    console.log("Inicjalizacja systemu językowego");

    // Sprawdź czy istnieje wcześniej zapisany wybór języka
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pl';
    console.log("Zapisany język: " + savedLanguage);

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

// Udostępnij funkcje globalnie
window.getTranslation = getTranslation;
window.changeLanguage = changeLanguage;
window.initLanguageSystem = initLanguageSystem;

// Inicjalizacja systemu tłumaczeń po załadowaniu dokumentu
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM załadowany - inicjalizacja tłumaczeń");
    // Inicjalizacja będzie wywołana przez main.js po załadowaniu nagłówka
});