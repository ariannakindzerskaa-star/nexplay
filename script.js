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
        label: "Indyjski hit",
        description: "Pomóż Madeline zdobyć górę Celeste w precyzyjnej platformówce o wytrwałości i odwadze.",
      },
      hollow: {
        genre: "Metroidvania · Akcja",
        label: "Przygoda",
        description: "Odkryj podziemne królestwo owadów pełne tajemnic, niebezpiecznych wrogów i ukrytych ścieżek.",
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

const pageContent = document.querySelector("#page-content");
const searchInput = document.querySelector("#game-search");
const navigation = document.querySelector(".navigation");
const dialog = document.querySelector("#game-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogArt = document.querySelector("#dialog-art");
const favoriteIds = new Set(readStoredFavorites());
let activePage = "home";
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

function renderSettings() {
  return `
    ${heading(t("settings"), t("settingsSubtitle"), t("yourProfile"))}
    <div class="settings-layout">
      <nav class="settings-tabs" aria-label="${t("settingsSections")}">
        <button class="settings-tab is-active" type="button" data-settings-tab="general">${t("tabGeneral")}</button>
        <button class="settings-tab" type="button" data-settings-tab="interface">${t("tabInterface")}</button>
        <button class="settings-tab" type="button" data-settings-tab="notifications">${t("tabNotifications")}</button>
        <button class="settings-tab" type="button" data-settings-tab="privacy">${t("tabPrivacy")}</button>
      </nav>
      <section class="settings-panel">
        <h2>${t("generalSettings")}</h2>
        <div class="settings-grid">
          <label class="setting-field">
            ${t("language")}
            <select data-setting="language">
              <option value="uk">${t("langUk")}</option>
              <option value="en">${t("langEn")}</option>
              <option value="pl">${t("langPl")}</option>
            </select>
          </label>
          <label class="setting-field">
            ${t("region")}
            <select data-setting="region">
              <option value="ukraine">${t("regionUkraine")}</option>
              <option value="europe">${t("regionEurope")}</option>
              <option value="usa">${t("regionUsa")}</option>
            </select>
          </label>
          <label class="setting-field setting-field--wide">
            ${t("account")}
            <select data-setting="account">
              <option value="player">${t("playerAccount")}</option>
              <option value="manage">${t("manageAccount")}</option>
            </select>
          </label>
        </div>
        <div class="settings-divider"></div>
        <div class="toggle-row">
          <span>${t("startup")}<small>${t("startupHint")}</small></span>
          <label class="switch"><input type="checkbox" data-setting="startup" /><span class="switch__track"></span></label>
        </div>
        <div class="toggle-row">
          <span>${t("online")}<small>${t("onlineHint")}</small></span>
          <label class="switch"><input type="checkbox" data-setting="online" checked /><span class="switch__track"></span></label>
        </div>
      </section>
    </div>
  `;
}

function render() {
  applyDocumentTranslations();
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
    pageContent.querySelectorAll("[data-settings-tab]").forEach((item) => {
      item.classList.toggle("is-active", item === tab);
    });
    const headings = {
      general: "generalSettings",
      interface: "interfaceSettings",
      notifications: "notificationsSettings",
      privacy: "privacySettings",
    };
    pageContent.querySelector(".settings-panel h2").textContent = t(headings[tab.dataset.settingsTab]);
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
