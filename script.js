const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    price: "₴899",
    rating: "4.9",
    art: "minecraft",
    pages: ["library", "wishlist", "new"],
  },
  {
    id: "stardew",
    name: "Stardew Valley",
    price: "₴349",
    rating: "4.8",
    art: "stardew",
    pages: ["library", "wishlist", "new"],
  },
  {
    id: "hades",
    name: "Hades",
    price: "₴599",
    rating: "4.9",
    art: "hades",
    pages: ["library", "wishlist"],
  },
  {
    id: "portal",
    name: "Portal 2",
    price: "₴279",
    rating: "4.9",
    art: "portal",
    pages: ["library", "wishlist", "new"],
  },
  {
    id: "celeste",
    name: "Celeste",
    price: "₴429",
    rating: "4.8",
    art: "celeste",
    pages: ["library", "wishlist"],
  },
  {
    id: "hollow",
    name: "Hollow Knight",
    price: "₴399",
    rating: "4.9",
    art: "hollow",
    pages: ["library", "wishlist", "new"],
  },
  {
    id: "witcher",
    name: "The Witcher 3: Wild Hunt",
    price: "₴799",
    rating: "4.9",
    art: "witcher",
    pages: ["library", "wishlist", "new"],
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk 2077",
    price: "₴999",
    rating: "4.7",
    art: "cyberpunk",
    pages: ["library", "wishlist", "new"],
  },
  {
    id: "terraria",
    name: "Terraria",
    price: "₴249",
    rating: "4.8",
    art: "terraria",
    pages: ["library", "wishlist"],
  },
];

const translations = {
  uk: {
    appTitle: "Game Space",
    appDescription: "Темна ігрова бібліотека з улюбленими іграми та налаштуваннями.",
    profile: "профіль",
    sidebar: "Бічна панель",
    openProfile: "Відкрити профіль",
    navigation: "Головна навігація",
    navHome: "Головна",
    navLibrary: "Бібліотека",
    navWishlist: "Бажане",
    navNew: "Новинки",
    navSettings: "Налаштування",
    status: "Усі системи працюють",
    brandLabel: "Game Space — головна",
    searchLabel: "Пошук ігор",
    searchPlaceholder: "Пошук ігор...",
    notifications: "Сповіщення",
    close: "Закрити",
    dialogEyebrow: "ІНФОРМАЦІЯ ПРО ГРУ",
    libraryAction: "До бібліотеки",
    detailsAboutGame: "Докладніше про",
    favoriteAdd: "Додати до бажаного:",
    favoriteRemove: "Прибрати з бажаного:",
    rating: "Рейтинг {rating} з 5",
    view: "Переглянути",
    home: "Головна",
    homeSubtitle: "Твоя наступна велика пригода починається тут.",
    welcome: "РАДІ БАЧИТИ ЗНОВУ",
    weeklyGame: "ГРА ТИЖНЯ",
    viewGame: "Переглянути гру",
    communityChoice: "Вибір спільноти",
    adventure: "Пригоди",
    recommendations: "Рекомендуємо тобі",
    allNew: "Усі новинки →",
    library: "Бібліотека",
    librarySubtitle: "Усі твої ігри — в одному місці.",
    yourGames: "ТВОЇ ІГРИ",
    wishlist: "Бажане",
    wishlistSubtitle: "Ігри, до яких хочеться повернутися.",
    wishlistEyebrow: "СПИСОК БАЖАНОГО",
    new: "Новинки",
    newSubtitle: "Свіжі ігри та улюблені відкриття.",
    newEyebrow: "ЩО НОВОГО",
    gameOne: "гра",
    gameFew: "гри",
    gameMany: "ігор",
    emptyWishlist: "У списку поки порожньо. Додай гру, натиснувши на зірочку.",
    emptySearch: "Спробуй змінити пошуковий запит.",
    settings: "Налаштування",
    settingsSubtitle: "Налаштуй Game Space під себе.",
    yourProfile: "ТВІЙ ПРОФІЛЬ",
    settingsSections: "Розділи налаштувань",
    tabGeneral: "Загальні",
    tabInterface: "Інтерфейс",
    tabNotifications: "Сповіщення",
    tabPrivacy: "Приватність",
    generalSettings: "Загальні налаштування",
    interfaceSettings: "Налаштування інтерфейсу",
    notificationsSettings: "Налаштування сповіщень",
    privacySettings: "Налаштування приватності",
    language: "Мова",
    langUk: "Українська",
    langEn: "English",
    langPl: "Polski",
    langEs: "Español",
    region: "Регіон",
    regionUkraine: "Україна",
    regionEurope: "Європа",
    regionUsa: "США",
    account: "Обліковий запис",
    playerAccount: "Профіль гравця · varen",
    manageAccount: "Керування обліковим записом",
    startup: "Запускати разом із системою",
    startupHint: "Game Space відкриватиметься після входу",
    online: "Показувати статус у мережі",
    onlineHint: "Друзі бачитимуть, коли ти граєш",
    accentColor: "Колір акценту",
    accentViolet: "Фіолетовий",
    accentBlue: "Синій",
    accentGreen: "Зелений",
    density: "Щільність інтерфейсу",
    densityComfortable: "Звичайна",
    densityCompact: "Компактна",
    reduceMotion: "Зменшити анімацію",
    reduceMotionHint: "Скоротити тривалість анімацій та ефектів",
    gameNews: "Оновлення ігор",
    gameNewsHint: "Новини та оновлення ігор у бібліотеці",
    friendActivity: "Активність друзів",
    friendActivityHint: "Сповіщення про активність друзів",
    wishlistOffers: "Пропозиції зі списку бажаного",
    wishlistOffersHint: "Сповіщення про знижки на бажані ігри",
    profileVisibility: "Видимість профілю",
    visibilityPublic: "Усі",
    visibilityFriends: "Друзі",
    visibilityPrivate: "Лише я",
    shareActivity: "Ділитися ігровою активністю",
    shareActivityHint: "Дозволити друзям бачити нещодавно зіграні ігри",
    games: {
      minecraft: {
        genre: "Пісочниця · Пригоди",
        label: "Популярне",
        description: "Досліджуй безмежний світ, будуй усе, що підкаже уява, та вирушай у пригоди разом із друзями.",
      },
      stardew: {
        genre: "Симулятор · Інді",
        label: "Рекомендація",
        description: "Почни нове життя на фермі: вирощуй урожай, знайомся з мешканцями долини та відкривай її таємниці.",
      },
      hades: {
        genre: "Екшн · Roguelike",
        label: "Вибір редакції",
        description: "Кинь виклик богу мертвих у динамічній пригоді, де кожна спроба відкриває нову історію.",
      },
      portal: {
        genre: "Головоломка · Пригоди",
        label: "Класика",
        description: "Розв'язуй нестандартні головоломки за допомогою портальної гармати та перевір свої навички.",
      },
      celeste: {
        genre: "Платформер · Інді",
        label: "Інді-хіт",
        description: "Допоможи Мадлен підкорити гору Селеста в точному платформері про наполегливість і сміливість.",
      },
      hollow: {
        genre: "Метроїдванія · Екшн",
        label: "Пригода",
        description: "Відкрий підземне королівство комах, повне таємниць, небезпечних ворогів і прихованих шляхів.",
      },
      witcher: {
        genre: "Рольова гра · Фентезі",
        label: "Епічна пригода",
        description: "Вирушай у подорож темним фентезійним світом у ролі Ґеральта з Рівії та шукай свою прийомну доньку.",
      },
      cyberpunk: {
        genre: "Рольова гра · Наукова фантастика",
        label: "Майбутнє вже тут",
        description: "Досліджуй Найт-Сіті у ролі найманця V, змінюй своє тіло кіберімплантами та шукай шлях до безсмертя.",
      },
      terraria: {
        genre: "Пісочниця · Пригоди",
        label: "Копай і досліджуй",
        description: "Копай, створюй спорядження та досліджуй мінливий світ, сповнений скарбів і небезпек.",
      },
    },
  },
  en: {
    appTitle: "Game Space",
    appDescription: "A dark game library for your favorite games and settings.",
    profile: "profile",
    sidebar: "Sidebar",
    openProfile: "Open profile",
    navigation: "Main navigation",
    navHome: "Home",
    navLibrary: "Library",
    navWishlist: "Wishlist",
    navNew: "New releases",
    navSettings: "Settings",
    status: "All systems operational",
    brandLabel: "Game Space — home",
    searchLabel: "Search games",
    searchPlaceholder: "Search games...",
    notifications: "Notifications",
    close: "Close",
    dialogEyebrow: "ABOUT THIS GAME",
    libraryAction: "Go to library",
    detailsAboutGame: "More about",
    favoriteAdd: "Add to wishlist:",
    favoriteRemove: "Remove from wishlist:",
    rating: "Rating {rating} out of 5",
    view: "View",
    home: "Home",
    homeSubtitle: "Your next great adventure starts here.",
    welcome: "WELCOME BACK",
    weeklyGame: "GAME OF THE WEEK",
    viewGame: "View game",
    communityChoice: "Community choice",
    adventure: "Adventure",
    recommendations: "Recommended for you",
    allNew: "All new releases →",
    library: "Library",
    librarySubtitle: "All your games, all in one place.",
    yourGames: "YOUR GAMES",
    wishlist: "Wishlist",
    wishlistSubtitle: "Games you'll want to come back to.",
    wishlistEyebrow: "YOUR WISHLIST",
    new: "New releases",
    newSubtitle: "Fresh games and exciting discoveries.",
    newEyebrow: "WHAT'S NEW",
    gameOne: "game",
    gameFew: "games",
    gameMany: "games",
    emptyWishlist: "Your wishlist is empty. Add a game by clicking its star.",
    emptySearch: "Try changing your search query.",
    settings: "Settings",
    settingsSubtitle: "Make Game Space your own.",
    yourProfile: "YOUR PROFILE",
    settingsSections: "Settings sections",
    tabGeneral: "General",
    tabInterface: "Interface",
    tabNotifications: "Notifications",
    tabPrivacy: "Privacy",
    generalSettings: "General settings",
    interfaceSettings: "Interface settings",
    notificationsSettings: "Notification settings",
    privacySettings: "Privacy settings",
    language: "Language",
    langUk: "Українська",
    langEn: "English",
    langPl: "Polski",
    langEs: "Español",
    region: "Region",
    regionUkraine: "Ukraine",
    regionEurope: "Europe",
    regionUsa: "United States",
    account: "Account",
    playerAccount: "Player profile · varen",
    manageAccount: "Manage account",
    startup: "Launch at system startup",
    startupHint: "Game Space opens when you sign in",
    online: "Show online status",
    onlineHint: "Friends can see when you are playing",
    accentColor: "Accent color",
    accentViolet: "Violet",
    accentBlue: "Blue",
    accentGreen: "Green",
    density: "Interface density",
    densityComfortable: "Comfortable",
    densityCompact: "Compact",
    reduceMotion: "Reduce motion",
    reduceMotionHint: "Shorten animations and visual effects",
    gameNews: "Game updates",
    gameNewsHint: "News and updates for games in your library",
    friendActivity: "Friend activity",
    friendActivityHint: "Notifications about your friends' activity",
    wishlistOffers: "Wishlist offers",
    wishlistOffersHint: "Discount alerts for games on your wishlist",
    profileVisibility: "Profile visibility",
    visibilityPublic: "Everyone",
    visibilityFriends: "Friends",
    visibilityPrivate: "Only me",
    shareActivity: "Share gaming activity",
    shareActivityHint: "Let friends see the games you played recently",
    games: {
      minecraft: {
        genre: "Sandbox · Adventure",
        label: "Popular",
        description: "Explore an endless world, build anything you can imagine, and set off on adventures with friends.",
      },
      stardew: {
        genre: "Simulation · Indie",
        label: "Recommended",
        description: "Start a new life on the farm: grow crops, meet the valley's residents, and uncover its secrets.",
      },
      hades: {
        genre: "Action · Roguelike",
        label: "Editor's choice",
        description: "Challenge the god of the dead in a fast-paced adventure where every attempt reveals a new story.",
      },
      portal: {
        genre: "Puzzle · Adventure",
        label: "Classic",
        description: "Solve mind-bending puzzles with a portal gun and put your skills to the test.",
      },
      celeste: {
        genre: "Platformer · Indie",
        label: "Indie hit",
        description: "Help Madeline climb Celeste Mountain in a precise platformer about perseverance and courage.",
      },
      hollow: {
        genre: "Metroidvania · Action",
        label: "Adventure",
        description: "Explore an underground insect kingdom full of secrets, dangerous foes, and hidden paths.",
      },
      witcher: {
        genre: "RPG · Fantasy",
        label: "Epic adventure",
        description: "Travel a dark fantasy world as Geralt of Rivia and search for your adopted daughter.",
      },
      cyberpunk: {
        genre: "RPG · Sci-fi",
        label: "The future is now",
        description: "Explore Night City as mercenary V, enhance your body with cyberware, and search for a way to live forever.",
      },
      terraria: {
        genre: "Sandbox · Adventure",
        label: "Dig and explore",
        description: "Dig, craft your gear, and explore an ever-changing world full of treasure and danger.",
      },
    },
  },
  pl: {
    appTitle: "Game Space",
    appDescription: "Ciemna biblioteka gier z ulubionymi tytułami i ustawieniami.",
    profile: "profil",
    sidebar: "Panel boczny",
    openProfile: "Otwórz profil",
    navigation: "Nawigacja główna",
    navHome: "Strona główna",
    navLibrary: "Biblioteka",
    navWishlist: "Lista życzeń",
    navNew: "Nowości",
    navSettings: "Ustawienia",
    status: "Wszystkie systemy działają",
    brandLabel: "Game Space — strona główna",
    searchLabel: "Szukaj gier",
    searchPlaceholder: "Szukaj gier...",
    notifications: "Powiadomienia",
    close: "Zamknij",
    dialogEyebrow: "INFORMACJE O GRZE",
    libraryAction: "Przejdź do biblioteki",
    detailsAboutGame: "Więcej o grze",
    favoriteAdd: "Dodaj do listy życzeń:",
    favoriteRemove: "Usuń z listy życzeń:",
    rating: "Ocena: {rating} na 5",
    view: "Zobacz",
    home: "Strona główna",
    homeSubtitle: "Twoja kolejna wielka przygoda zaczyna się tutaj.",
    welcome: "WITAJ PONOWNIE",
    weeklyGame: "GRA TYGODNIA",
    viewGame: "Zobacz grę",
    communityChoice: "Wybór społeczności",
    adventure: "Przygoda",
    recommendations: "Polecamy dla Ciebie",
    allNew: "Wszystkie nowości →",
    library: "Biblioteka",
    librarySubtitle: "Wszystkie Twoje gry w jednym miejscu.",
    yourGames: "TWOJE GRY",
    wishlist: "Lista życzeń",
    wishlistSubtitle: "Gry, do których chcesz wracać.",
    wishlistEyebrow: "TWOJA LISTA ŻYCZEŃ",
    new: "Nowości",
    newSubtitle: "Nowe gry i ciekawe odkrycia.",
    newEyebrow: "CO NOWEGO",
    gameOne: "gra",
    gameFew: "gry",
    gameMany: "gier",
    emptyWishlist: "Lista życzeń jest pusta. Dodaj grę, klikając gwiazdkę.",
    emptySearch: "Spróbuj zmienić wyszukiwaną frazę.",
    settings: "Ustawienia",
    settingsSubtitle: "Dostosuj Game Space do siebie.",
    yourProfile: "TWÓJ PROFIL",
    settingsSections: "Sekcje ustawień",
    tabGeneral: "Ogólne",
    tabInterface: "Interfejs",
    tabNotifications: "Powiadomienia",
    tabPrivacy: "Prywatność",
    generalSettings: "Ustawienia ogólne",
    interfaceSettings: "Ustawienia interfejsu",
    notificationsSettings: "Ustawienia powiadomień",
    privacySettings: "Ustawienia prywatności",
    language: "Język",
    langUk: "Українська",
    langEn: "English",
    langPl: "Polski",
    langEs: "Hiszpański",
    region: "Region",
    regionUkraine: "Ukraina",
    regionEurope: "Europa",
    regionUsa: "Stany Zjednoczone",
    account: "Konto",
    playerAccount: "Profil gracza · varen",
    manageAccount: "Zarządzaj kontem",
    startup: "Uruchamiaj przy starcie systemu",
    startupHint: "Game Space otworzy się po zalogowaniu",
    online: "Pokazuj status online",
    onlineHint: "Znajomi zobaczą, kiedy grasz",
    accentColor: "Kolor akcentu",
    accentViolet: "Fioletowy",
    accentBlue: "Niebieski",
    accentGreen: "Zielony",
    density: "Gęstość interfejsu",
    densityComfortable: "Standardowa",
    densityCompact: "Kompaktowa",
    reduceMotion: "Ogranicz animacje",
    reduceMotionHint: "Skróć animacje i efekty wizualne",
    gameNews: "Aktualizacje gier",
    gameNewsHint: "Wiadomości i aktualizacje gier w bibliotece",
    friendActivity: "Aktywność znajomych",
    friendActivityHint: "Powiadomienia o aktywności znajomych",
    wishlistOffers: "Oferty z listy życzeń",
    wishlistOffersHint: "Powiadomienia o zniżkach na gry z listy życzeń",
    profileVisibility: "Widoczność profilu",
    visibilityPublic: "Wszyscy",
    visibilityFriends: "Znajomi",
    visibilityPrivate: "Tylko ja",
    shareActivity: "Udostępniaj aktywność w grach",
    shareActivityHint: "Pozwól znajomym widzieć ostatnio uruchomione gry",
    games: {
      minecraft: {
        genre: "Sandbox · Przygodowa",
        label: "Popularna",
        description: "Odkrywaj bezkresny świat, buduj wszystko, co podpowie Ci wyobraźnia, i przeżywaj przygody ze znajomymi.",
      },
      stardew: {
        genre: "Symulacja · Indie",
        label: "Polecana",
        description: "Zacznij nowe życie na farmie: uprawiaj rośliny, poznawaj mieszkańców doliny i odkrywaj jej tajemnice.",
      },
      hades: {
        genre: "Akcja · Roguelike",
        label: "Wybór redakcji",
        description: "Rzuć wyzwanie bogowi umarłych w dynamicznej przygodzie, w której każda próba odkrywa nową historię.",
      },
      portal: {
        genre: "Logiczna · Przygodowa",
        label: "Klasyka",
        description: "Rozwiązuj niebanalne zagadki za pomocą portalu i sprawdź swoje umiejętności.",
      },
      celeste: {
        genre: "Platformowa · Indie",
        label: "Niezależny hit",
        description: "Pomóż Madeline zdobyć górę Celeste w precyzyjnej platformówce o wytrwałości i odwadze.",
      },
      hollow: {
        genre: "Metroidvania · Akcja",
        label: "Przygoda",
        description: "Odkryj podziemne królestwo owadów pełne tajemnic, niebezpiecznych wrogów i ukrytych ścieżek.",
      },
      witcher: {
        genre: "Gra fabularna · Fantasy",
        label: "Epicka przygoda",
        description: "Wyrusz w podróż po mrocznym świecie fantasy jako Geralt z Rivii i odnajdź swoją przybraną córkę.",
      },
      cyberpunk: {
        genre: "Gra fabularna · Science fiction",
        label: "Przyszłość jest teraz",
        description: "Odkrywaj Night City jako najemnik V, ulepszaj ciało cyberwszczepami i szukaj drogi do nieśmiertelności.",
      },
      terraria: {
        genre: "Sandbox · Przygodowa",
        label: "Kop i odkrywaj",
        description: "Kop, twórz wyposażenie i odkrywaj zmienny świat pełen skarbów oraz niebezpieczeństw.",
      },
    },
  },
  es: {
    appTitle: "Game Space",
    appDescription: "Una biblioteca oscura de videojuegos con tus juegos y ajustes favoritos.",
    profile: "perfil",
    sidebar: "Barra lateral",
    openProfile: "Abrir perfil",
    navigation: "Navegación principal",
    navHome: "Inicio",
    navLibrary: "Biblioteca",
    navWishlist: "Lista de deseos",
    navNew: "Novedades",
    navSettings: "Ajustes",
    status: "Todos los sistemas funcionan",
    brandLabel: "Game Space — inicio",
    searchLabel: "Buscar juegos",
    searchPlaceholder: "Buscar juegos...",
    notifications: "Notificaciones",
    close: "Cerrar",
    dialogEyebrow: "INFORMACIÓN DEL JUEGO",
    libraryAction: "Ir a la biblioteca",
    detailsAboutGame: "Más información sobre",
    favoriteAdd: "Añadir a la lista de deseos:",
    favoriteRemove: "Quitar de la lista de deseos:",
    rating: "Valoración: {rating} de 5",
    view: "Ver",
    home: "Inicio",
    homeSubtitle: "Tu próxima gran aventura empieza aquí.",
    welcome: "QUÉ ALEGRÍA VERTE DE NUEVO",
    weeklyGame: "JUEGO DE LA SEMANA",
    viewGame: "Ver juego",
    communityChoice: "Favorito de la comunidad",
    adventure: "Aventura",
    recommendations: "Recomendaciones para ti",
    allNew: "Todas las novedades →",
    library: "Biblioteca",
    librarySubtitle: "Todos tus juegos en un solo lugar.",
    yourGames: "TUS JUEGOS",
    wishlist: "Lista de deseos",
    wishlistSubtitle: "Juegos a los que querrás volver.",
    wishlistEyebrow: "TU LISTA DE DESEOS",
    new: "Novedades",
    newSubtitle: "Juegos nuevos y grandes descubrimientos.",
    newEyebrow: "NOVEDADES",
    gameOne: "juego",
    gameFew: "juegos",
    gameMany: "juegos",
    emptyWishlist: "Tu lista está vacía. Añade un juego pulsando su estrella.",
    emptySearch: "Prueba con otra búsqueda.",
    settings: "Ajustes",
    settingsSubtitle: "Personaliza Game Space a tu gusto.",
    yourProfile: "TU PERFIL",
    settingsSections: "Secciones de ajustes",
    tabGeneral: "General",
    tabInterface: "Interfaz",
    tabNotifications: "Notificaciones",
    tabPrivacy: "Privacidad",
    generalSettings: "Ajustes generales",
    interfaceSettings: "Ajustes de interfaz",
    notificationsSettings: "Ajustes de notificaciones",
    privacySettings: "Ajustes de privacidad",
    language: "Idioma",
    langUk: "Ucraniano",
    langEn: "Inglés",
    langPl: "Polaco",
    langEs: "Español",
    region: "Región",
    regionUkraine: "Ucrania",
    regionEurope: "Europa",
    regionUsa: "Estados Unidos",
    account: "Cuenta",
    playerAccount: "Perfil de jugador · varen",
    manageAccount: "Gestionar cuenta",
    startup: "Iniciar con el sistema",
    startupHint: "Game Space se abrirá al iniciar sesión",
    online: "Mostrar estado en línea",
    onlineHint: "Tus amigos podrán ver cuándo estás jugando",
    accentColor: "Color de énfasis",
    accentViolet: "Violeta",
    accentBlue: "Azul",
    accentGreen: "Verde",
    density: "Densidad de la interfaz",
    densityComfortable: "Cómoda",
    densityCompact: "Compacta",
    reduceMotion: "Reducir movimiento",
    reduceMotionHint: "Reducir la duración de animaciones y efectos",
    gameNews: "Actualizaciones de juegos",
    gameNewsHint: "Novedades y actualizaciones de los juegos de tu biblioteca",
    friendActivity: "Actividad de amigos",
    friendActivityHint: "Notificaciones sobre la actividad de tus amigos",
    wishlistOffers: "Ofertas de la lista de deseos",
    wishlistOffersHint: "Avisos de descuentos en juegos de tu lista",
    profileVisibility: "Visibilidad del perfil",
    visibilityPublic: "Todo el mundo",
    visibilityFriends: "Amigos",
    visibilityPrivate: "Solo yo",
    shareActivity: "Compartir actividad de juego",
    shareActivityHint: "Permitir que tus amigos vean a qué has jugado recientemente",
    games: {
      minecraft: {
        genre: "Sandbox · Aventura",
        label: "Popular",
        description: "Explora un mundo infinito, construye todo lo que imagines y vive aventuras con tus amigos.",
      },
      stardew: {
        genre: "Simulación · Indie",
        label: "Recomendación",
        description: "Empieza una nueva vida en la granja: cultiva, conoce a los habitantes del valle y descubre sus secretos.",
      },
      hades: {
        genre: "Acción · Roguelike",
        label: "Selección del editor",
        description: "Desafía al dios de los muertos en una aventura trepidante donde cada intento revela una nueva historia.",
      },
      portal: {
        genre: "Puzles · Aventura",
        label: "Clásico",
        description: "Resuelve ingeniosos puzles con un dispositivo de portales y pon a prueba tus habilidades.",
      },
      celeste: {
        genre: "Plataformas · Indie",
        label: "Éxito indie",
        description: "Ayuda a Madeline a escalar la montaña Celeste en un preciso juego de plataformas sobre la perseverancia y el valor.",
      },
      hollow: {
        genre: "Metroidvania · Acción",
        label: "Aventura",
        description: "Explora un reino subterráneo de insectos lleno de secretos, enemigos peligrosos y caminos ocultos.",
      },
      witcher: {
        genre: "Rol · Fantasía",
        label: "Aventura épica",
        description: "Recorre un oscuro mundo de fantasía como Geralt de Rivia y busca a tu hija adoptiva.",
      },
      cyberpunk: {
        genre: "Rol · Ciencia ficción",
        label: "El futuro ya está aquí",
        description: "Explora Night City como V, mejora tu cuerpo con implantes cibernéticos y busca la forma de alcanzar la inmortalidad.",
      },
      terraria: {
        genre: "Sandbox · Aventura",
        label: "Excava y explora",
        description: "Excava, fabrica tu equipo y explora un mundo cambiante lleno de tesoros y peligros.",
      },
    },
  },
};

const storedSettings = readStoredSettings();
const storedLanguage = storedSettings.language;
const languageAliases = {
  Українська: "uk",
  English: "en",
  Polski: "pl",
  Español: "es",
};
const settingAliases = {
  language: languageAliases,
  region: { Україна: "ukraine", Європа: "europe", США: "usa" },
  account: {
    "Профіль гравця · varen": "player",
    "Керування обліковим записом": "manage",
  },
};
let currentLanguage =
  translations[storedLanguage] ? storedLanguage : languageAliases[storedLanguage] || "uk";
const t = (key) => translations[currentLanguage][key];
const gameText = (game) => translations[currentLanguage].games[game.id];

function applyDocumentTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("appTitle");
  document.querySelector('meta[name="description"]').content = t("appDescription");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
}

function applyInterfacePreferences() {
  const settings = readStoredSettings();
  const accents = ["violet", "blue", "green"];
  const densities = ["comfortable", "compact"];
  document.documentElement.dataset.accent = accents.includes(settings.accent)
    ? settings.accent
    : "violet";
  document.documentElement.dataset.density = densities.includes(settings.density)
    ? settings.density
    : "comfortable";
  document.documentElement.dataset.reduceMotion = String(settings.reduceMotion === true);
}

const pageContent = document.querySelector("#page-content");
const searchInput = document.querySelector("#game-search");
const navigation = document.querySelector(".navigation");
const dialog = document.querySelector("#game-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogArt = document.querySelector("#dialog-art");
const favoriteIds = new Set(readStoredFavorites());
let activePage = "home";
let activeSettingsTab = "general";
let searchQuery = "";

function readStoredFavorites() {
  try {
    const value = JSON.parse(localStorage.getItem("game-space-favorites") || "[]");
    return Array.isArray(value) ? value.filter((id) => typeof id === "string") : [];
  } catch (error) {
    console.warn("Не вдалося прочитати список бажаного.", error);
    return [];
  }
}

function storeFavorites() {
  try {
    localStorage.setItem("game-space-favorites", JSON.stringify([...favoriteIds]));
  } catch (error) {
    console.warn("Не вдалося зберегти список бажаного.", error);
  }
}

function readStoredSettings() {
  try {
    const value = JSON.parse(localStorage.getItem("game-space-settings") || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch (error) {
    console.warn("Не вдалося прочитати налаштування.", error);
    return {};
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function gameCard(game) {
  const isFavorite = favoriteIds.has(game.id);
  const text = gameText(game);
  return `
    <article class="game-card">
      <button class="game-card__art-button" type="button" data-open-game="${game.id}" aria-label="${t("detailsAboutGame")} ${escapeHtml(game.name)}">
        <span class="game-art game-art--${game.art}">
          <span class="game-art__title">${escapeHtml(game.name)}</span>
        </span>
        <span class="game-card__tag">${escapeHtml(text.label)}</span>
      </button>
      <button
        class="favorite-button${isFavorite ? " is-favorite" : ""}"
        type="button"
        data-favorite="${game.id}"
        aria-label="${isFavorite ? t("favoriteRemove") : t("favoriteAdd")} ${escapeHtml(game.name)}"
        aria-pressed="${isFavorite}"
      >${isFavorite ? "★" : "☆"}</button>
      <div class="game-card__info">
        <div class="game-card__topline">
          <h3 class="game-card__title">${escapeHtml(game.name)}</h3>
          <span class="game-card__rating" aria-label="${t("rating").replace("{rating}", game.rating)}">★ ${game.rating}</span>
        </div>
        <p class="game-card__meta">${escapeHtml(text.genre)}</p>
        <div class="game-card__bottom">
          <span class="game-card__price">${escapeHtml(game.price)}</span>
          <button class="button button--quiet" type="button" data-open-game="${game.id}">${t("view")}</button>
        </div>
      </div>
    </article>
  `;
}

function heading(title, subtitle, eyebrow = "GAME SPACE") {
  return `
    <div class="page-heading">
      <div>
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="page-subtitle">${subtitle}</p>
      </div>
    </div>
  `;
}

function filteredGames(page) {
  return games.filter((game) => {
    const pageMatches =
      page === "library" ||
      (page === "wishlist" && favoriteIds.has(game.id)) ||
      (page === "new" && game.pages.includes("new"));
    const queryMatches = `${game.name} ${gameText(game).genre}`.toLowerCase().includes(searchQuery);
    return pageMatches && queryMatches;
  });
}

function renderGameGrid(page) {
  const results = filteredGames(page);
  if (!results.length) {
    const message =
      page === "wishlist" && !searchQuery
        ? t("emptyWishlist")
        : t("emptySearch");
    return `<div class="empty-state"><span class="empty-state__icon" aria-hidden="true">✦</span>${message}</div>`;
  }
  return `<div class="game-grid">${results.map(gameCard).join("")}</div>`;
}

function renderHome() {
  const featured = games[0];
  const featuredText = gameText(featured);
  const recommendations = games.slice(1, 4);
  return `
    ${heading(t("home"), t("homeSubtitle"), t("welcome"))}
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__art" aria-hidden="true"></div>
      <div class="hero__content">
        <span class="hero__label">${t("weeklyGame")}</span>
        <h1 id="hero-title">${featured.name}</h1>
        <p class="hero__description">${featuredText.description}</p>
        <div class="hero__actions">
          <button class="button button--primary" type="button" data-open-game="${featured.id}">${t("viewGame")}</button>
          <span class="hero__price">${featured.price}</span>
        </div>
        <div class="genre-row">
          <span class="genre-chip">${t("communityChoice")}</span>
          <span class="genre-chip">${t("adventure")}</span>
          <span class="genre-chip">★ ${featured.rating}</span>
        </div>
      </div>
    </section>
    <div class="section-title">
      <span>${t("recommendations")}</span>
      <button class="section-title__link" type="button" data-page="new">${t("allNew")}</button>
    </div>
    <div class="game-grid">${recommendations.map(gameCard).join("")}</div>
  `;
}

function settingToggle(setting, label, hint, checked = false) {
  return `
    <div class="toggle-row">
      <span>${t(label)}<small>${t(hint)}</small></span>
      <label class="switch">
        <input type="checkbox" data-setting="${setting}"${checked ? " checked" : ""} />
        <span class="switch__track"></span>
      </label>
    </div>
  `;
}

function settingSelect(setting, label, options) {
  return `
    <label class="setting-field">
      ${t(label)}
      <select data-setting="${setting}">
        ${options.map(([value, key]) => `<option value="${value}">${t(key)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderSettingsPanel() {
  const headings = {
    general: "generalSettings",
    interface: "interfaceSettings",
    notifications: "notificationsSettings",
    privacy: "privacySettings",
  };
  let content = "";

  if (activeSettingsTab === "general") {
    content = `
      <div class="settings-grid">
        ${settingSelect("language", "language", [
          ["uk", "langUk"],
          ["en", "langEn"],
          ["pl", "langPl"],
          ["es", "langEs"],
        ])}
        ${settingSelect("region", "region", [
          ["ukraine", "regionUkraine"],
          ["europe", "regionEurope"],
          ["usa", "regionUsa"],
        ])}
        ${settingSelect("account", "account", [
          ["player", "playerAccount"],
          ["manage", "manageAccount"],
        ])}
      </div>
      <div class="settings-divider"></div>
      ${settingToggle("startup", "startup", "startupHint")}
    `;
  } else if (activeSettingsTab === "interface") {
    content = `
      <div class="settings-grid">
        ${settingSelect("accent", "accentColor", [
          ["violet", "accentViolet"],
          ["blue", "accentBlue"],
          ["green", "accentGreen"],
        ])}
        ${settingSelect("density", "density", [
          ["comfortable", "densityComfortable"],
          ["compact", "densityCompact"],
        ])}
      </div>
      <div class="settings-divider"></div>
      ${settingToggle("reduceMotion", "reduceMotion", "reduceMotionHint")}
    `;
  } else if (activeSettingsTab === "notifications") {
    content = `
      ${settingToggle("notifyGameNews", "gameNews", "gameNewsHint", true)}
      ${settingToggle("notifyFriendActivity", "friendActivity", "friendActivityHint", true)}
      ${settingToggle("notifyWishlistOffers", "wishlistOffers", "wishlistOffersHint")}
    `;
  } else {
    content = `
      <div class="settings-grid">
        ${settingSelect("profileVisibility", "profileVisibility", [
          ["public", "visibilityPublic"],
          ["friends", "visibilityFriends"],
          ["private", "visibilityPrivate"],
        ])}
      </div>
      <div class="settings-divider"></div>
      ${settingToggle("online", "online", "onlineHint", true)}
      ${settingToggle("shareActivity", "shareActivity", "shareActivityHint")}
    `;
  }

  return `<section class="settings-panel"><h2>${t(headings[activeSettingsTab])}</h2>${content}</section>`;
}

function renderSettings() {
  const tabs = [
    ["general", "tabGeneral"],
    ["interface", "tabInterface"],
    ["notifications", "tabNotifications"],
    ["privacy", "tabPrivacy"],
  ];
  return `
    ${heading(t("settings"), t("settingsSubtitle"), t("yourProfile"))}
    <div class="settings-layout">
      <nav class="settings-tabs" aria-label="${t("settingsSections")}">
        ${tabs
          .map(
            ([tab, label]) => `
              <button
                class="settings-tab${activeSettingsTab === tab ? " is-active" : ""}"
                type="button"
                data-settings-tab="${tab}"
                aria-selected="${activeSettingsTab === tab}"
              >${t(label)}</button>
            `,
          )
          .join("")}
      </nav>
      ${renderSettingsPanel()}
    </div>
  `;
}

function render() {
  applyDocumentTranslations();
  applyInterfacePreferences();
  document.querySelectorAll(".navigation__item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.page === activePage);
    if (item.dataset.page === activePage) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  const pageTitles = {
    library: [t("library"), t("librarySubtitle"), t("yourGames")],
    wishlist: [t("wishlist"), t("wishlistSubtitle"), t("wishlistEyebrow")],
    new: [t("new"), t("newSubtitle"), t("newEyebrow")],
  };

  if (activePage === "home") {
    pageContent.innerHTML = renderHome();
  } else if (activePage === "settings") {
    pageContent.innerHTML = renderSettings();
    const settings = readStoredSettings();
    pageContent.querySelectorAll("[data-setting]").forEach((control) => {
      const value = settings[control.dataset.setting];
      if (control.type === "checkbox" && typeof value === "boolean") {
        control.checked = value;
      } else if (control.tagName === "SELECT") {
        const settingName = control.dataset.setting;
        const normalizedValue =
          settingAliases[settingName]?.[value] || (settingName === "language" ? currentLanguage : value);
        if (
          typeof normalizedValue === "string" &&
          [...control.options].some((option) => option.value === normalizedValue)
        ) {
          control.value = normalizedValue;
        }
      }
    });
  } else {
    const [title, subtitle, eyebrow] = pageTitles[activePage];
    const count = filteredGames(activePage).length;
    const countWord =
      currentLanguage === "pl"
        ? count === 1
          ? t("gameOne")
          : count >= 2 && count <= 4
            ? t("gameFew")
            : t("gameMany")
        : count === 1
          ? t("gameOne")
          : currentLanguage === "uk" && count >= 2 && count <= 4
            ? t("gameFew")
            : t("gameMany");
    pageContent.innerHTML = `
      ${heading(title, `${subtitle} ${count} ${countWord}.`, eyebrow)}
      ${renderGameGrid(activePage)}
    `;
  }

  searchInput.value = searchQuery;
  searchInput.closest(".search").hidden = activePage === "settings";
}

function openGame(gameId) {
  const game = games.find((item) => item.id === gameId);
  if (!game) return;
  const text = gameText(game);
  dialogTitle.textContent = game.name;
  dialogDescription.textContent = text.description;
  dialogArt.className = `game-dialog__art game-art game-art--${game.art}`;
  dialogArt.innerHTML = `<span class="game-art__title">${escapeHtml(game.name)}</span>`;
  dialog.showModal();
}

navigation.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  activePage = button.dataset.page;
  render();
});

pageContent.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    activePage = pageButton.dataset.page;
    render();
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    const gameId = favoriteButton.dataset.favorite;
    if (favoriteIds.has(gameId)) {
      favoriteIds.delete(gameId);
    } else {
      favoriteIds.add(gameId);
    }
    storeFavorites();
    render();
    return;
  }

  const gameButton = event.target.closest("[data-open-game]");
  if (gameButton) openGame(gameButton.dataset.openGame);

  const tab = event.target.closest("[data-settings-tab]");
  if (tab) {
    activeSettingsTab = tab.dataset.settingsTab;
    render();
    return;
  }
});

pageContent.addEventListener("change", (event) => {
  const control = event.target.closest("[data-setting]");
  if (!control) return;
  const settingName = control.dataset.setting;
  const settingValue = control.type === "checkbox" ? control.checked : control.value;
  if (settingName === "language") currentLanguage = settingValue;

  try {
    const saved = JSON.parse(localStorage.getItem("game-space-settings") || "{}");
    const settings = saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
    settings[settingName] = settingValue;
    localStorage.setItem("game-space-settings", JSON.stringify(settings));
  } catch (error) {
    console.warn("Не вдалося зберегти налаштування.", error);
  }

  if (["accent", "density", "reduceMotion"].includes(settingName)) {
    applyInterfacePreferences();
  }
  if (settingName === "language") render();
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  if (activePage === "home") activePage = "library";
  render();
  searchInput.focus();
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (activePage === "settings") {
      activePage = "library";
      render();
    }
    searchInput.focus();
  }
});

document.querySelector(".game-dialog__close").addEventListener("click", () => dialog.close());
document.querySelector("#dialog-action").addEventListener("click", () => {
  activePage = "library";
  dialog.close();
  render();
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector(".profile").addEventListener("click", () => {
  activePage = "settings";
  render();
});

render();
