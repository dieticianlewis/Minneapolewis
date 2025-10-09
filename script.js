// FILE: script.js (Consolidated Logic)

function initializePage() {
    // --- Shared Component Loading ---
    // Load the sidebar content into its placeholder
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder && typeof sidebarContent !== 'undefined') {
        sidebarPlaceholder.innerHTML = sidebarContent;
    } else if (sidebarPlaceholder) {
        console.error("Error loading shared sidebar: The 'sidebarContent' variable was not found. Ensure '_includes/sidebar.js' is loaded before 'script.js' in your HTML.");
        sidebarPlaceholder.innerHTML = "<p>Error loading sidebar content.</p>";
    }

    // console.log("Consolidated script.js: DOM Content Loaded.");

    // --- Translation System ---
    // --- Language Submenu Persistent Activation Logic ---
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const languageMenuItem = document.querySelector('.language-menu-item');
    const languageSubmenu = document.querySelector('.language-submenu');
    let submenuActive = false;

    // Helper: deactivate submenu
    function deactivateLanguageSubmenu() {
        submenuActive = false;
        languageMenuItem?.classList.remove('language-active');
    }

    // Helper: activate submenu
    function activateLanguageSubmenu() {
        submenuActive = true;
        languageMenuItem?.classList.add('language-active');
    }

    // Mouse enter/leave for persistent submenu
    if (languageMenuItem && languageSubmenu) {
        // Activate on hover over parent or submenu
        languageMenuItem.addEventListener('mouseenter', activateLanguageSubmenu);
        languageSubmenu.addEventListener('mouseenter', activateLanguageSubmenu);

        // Deactivate only on click-off or hover another menu item
        // Prevent deactivation on mouseleave
        languageMenuItem.addEventListener('mouseleave', (e) => {
            // If moving to submenu, do not deactivate
            if (!languageSubmenu.contains(e.relatedTarget)) {
                // Do not deactivate here; only on click-off or hover another menu item
            }
        });
        languageSubmenu.addEventListener('mouseleave', (e) => {
            // If moving to parent, do not deactivate
            if (!languageMenuItem.contains(e.relatedTarget)) {
                // Do not deactivate here; only on click-off or hover another menu item
            }
        });

        // Deactivate on click outside
        document.addEventListener('click', (e) => {
            if (
                submenuActive &&
                !languageMenuItem.contains(e.target) &&
                !languageSubmenu.contains(e.target)
            ) {
                deactivateLanguageSubmenu();
            }
        });

        // Deactivate when hovering another top-level menu item in .dropdown-menu
        dropdownMenu?.querySelectorAll(':scope > a:not(.language-menu-item > a)').forEach((item) => {
            item.addEventListener('mouseenter', () => {
                if (submenuActive) {
                    deactivateLanguageSubmenu();
                }
            });
        });
    }
    const translations = {
        en: {
            menu: 'Menu',
            language: 'Language',
            darkMode: 'Dark Mode',
            create: 'Create',
            login: 'Login',
            createAccount: 'Create Account',
            recentPosts: 'Recent Posts',
            quickLinks: 'Quick Links',
            welcome: 'Welcome to Minneapolewis',
            keepTrack: 'Keep track of my blog posts in the sidebar!',
            loadingPosts: 'Loading posts...',
            musicPlayer: 'Music Player',
            loadingPlaylist: 'Loading playlist...',
            previous: 'Previous',
            play: 'Play',
            next: 'Next',
            shuffle: 'Shuffle',
            mute: 'Mute',
            track: '1.',
            loadingTitle: 'Loading title...',
            myX: 'My X',
            simpCity: 'SimpCity',
            megaFolder: 'Mega Folder',
            ansiArt: 'ANSI Art (Click to play)',
            copyright: '© Minneapolewis 2025',
            notAffiliated: 'We are not affiliated with the city Minneapolis',
            option2: 'Option 2',
            option3: 'Option 3'
        },
        fr: {
            menu: 'Menu',
            language: 'Langue',
            darkMode: 'Mode Sombre',
            create: 'Créer',
            login: 'Connexion',
            createAccount: 'Créer un Compte',
            recentPosts: 'Publications Récentes',
            quickLinks: 'Liens Rapides',
            welcome: 'Bienvenue à Minneapolewis',
            keepTrack: 'Suivez mes articles de blog dans la barre latérale !',
            loadingPosts: 'Chargement des articles...',
            musicPlayer: 'Lecteur de musique',
            loadingPlaylist: 'Chargement de la playlist...',
            previous: 'Précédent',
            play: 'Lire',
            next: 'Suivant',
            shuffle: 'Aléatoire',
            mute: 'Muet',
            track: '1.',
            loadingTitle: 'Chargement du titre...',
            myX: 'Mon X',
            simpCity: 'SimpCity',
            megaFolder: 'Dossier Mega',
            ansiArt: 'Art ANSI (Cliquez pour jouer)',
            copyright: '© Minneapolewis 2025',
            notAffiliated: 'Nous ne sommes pas affiliés à la ville de Minneapolis',
            option2: 'Option 2',
            option3: 'Option 3'
        },
        de: {
            menu: 'Menü',
            language: 'Sprache',
            darkMode: 'Dunkler Modus',
            create: 'Erstellen',
            login: 'Anmelden',
            createAccount: 'Konto Erstellen',
            recentPosts: 'Neueste Beiträge',
            quickLinks: 'Schnelllinks',
            welcome: 'Willkommen bei Minneapolewis',
            keepTrack: 'Behalte meine Blogbeiträge in der Seitenleiste im Blick!',
            loadingPosts: 'Beiträge werden geladen...',
            musicPlayer: 'Musikspieler',
            loadingPlaylist: 'Playlist wird geladen...',
            previous: 'Zurück',
            play: 'Abspielen',
            next: 'Weiter',
            shuffle: 'Zufällig',
            mute: 'Stumm',
            track: '1.',
            loadingTitle: 'Titel wird geladen...',
            myX: 'Mein X',
            simpCity: 'SimpCity',
            megaFolder: 'Mega-Ordner',
            ansiArt: 'ANSI Art (Klicken zum Abspielen)',
            copyright: '© Minneapolewis 2025',
            notAffiliated: 'Wir sind nicht mit der Stadt Minneapolis verbunden',
            option2: 'Option 2',
            option3: 'Option 3'
        },
        es: {
            menu: 'Menú',
            language: 'Idioma',
            darkMode: 'Modo Oscuro',
            create: 'Crear',
            login: 'Iniciar Sesión',
            createAccount: 'Crear Cuenta',
            recentPosts: 'Publicaciones Recientes',
            quickLinks: 'Enlaces Rápidos',
            welcome: 'Bienvenido a Minneapolewis',
            keepTrack: '¡Sigue mis publicaciones de blog en la barra lateral!',
            loadingPosts: 'Cargando publicaciones...',
            musicPlayer: 'Reproductor de música',
            loadingPlaylist: 'Cargando lista de reproducción...',
            previous: 'Anterior',
            play: 'Reproducir',
            next: 'Siguiente',
            shuffle: 'Aleatorio',
            mute: 'Silencio',
            track: '1.',
            loadingTitle: 'Cargando título...',
            myX: 'Mi X',
            simpCity: 'SimpCity',
            megaFolder: 'Carpeta Mega',
            ansiArt: 'Arte ANSI (Haz clic para reproducir)',
            copyright: '© Minneapolewis 2025',
            notAffiliated: 'No estamos afiliados con la ciudad de Minneapolis',
            option2: 'Opción 2',
            option3: 'Opción 3'
        },
        it: {
            menu: 'Menu',
            language: 'Lingua',
            darkMode: 'Modalità Scura',
            create: 'Crea',
            login: 'Accedi',
            createAccount: 'Crea Account',
            recentPosts: 'Post Recenti',
            quickLinks: 'Collegamenti Rapidi',
            welcome: 'Benvenuto su Minneapolewis',
            keepTrack: 'Tieni traccia dei miei post nella barra laterale!',
            loadingPosts: 'Caricamento post...',
            musicPlayer: 'Lettore musicale',
            loadingPlaylist: 'Caricamento playlist...',
            previous: 'Precedente',
            play: 'Riproduci',
            next: 'Successivo',
            shuffle: 'Casuale',
            mute: 'Muto',
            track: '1.',
            loadingTitle: 'Caricamento titolo...',
            myX: 'Il mio X',
            simpCity: 'SimpCity',
            megaFolder: 'Cartella Mega',
            ansiArt: 'Arte ANSI (Clicca per riprodurre)',
            copyright: '© Minneapolewis 2025',
            notAffiliated: 'Non siamo affiliati con la città di Minneapolis',
            option2: 'Opzione 2',
            option3: 'Opzione 3'
        },
        pt: {
            menu: 'Menu',
            language: 'Idioma',
            darkMode: 'Modo Escuro',
            create: 'Criar',
            login: 'Entrar',
            createAccount: 'Criar Conta',
            recentPosts: 'Publicações Recentes',
            quickLinks: 'Links Rápidos',
            welcome: 'Bem-vindo ao Minneapolewis',
            keepTrack: 'Acompanhe minhas postagens na barra lateral!',
            loadingPosts: 'Carregando postagens...',
            musicPlayer: 'Reprodutor de música',
            loadingPlaylist: 'Carregando playlist...',
            previous: 'Anterior',
            play: 'Tocar',
            next: 'Próximo',
            shuffle: 'Aleatório',
            mute: 'Mudo',
            track: '1.',
            loadingTitle: 'Carregando título...',
            myX: 'Meu X',
            simpCity: 'SimpCity',
            megaFolder: 'Pasta Mega',
            ansiArt: 'Arte ANSI (Clique para tocar)',
            copyright: '© Minneapolewis 2025',
            notAffiliated: 'Não somos afiliados à cidade de Minneapolis',
            option2: 'Opção 2',
            option3: 'Opção 3'
        },
        ja: {
            menu: 'メニュー',
            language: '言語',
            darkMode: 'ダークモード',
            create: '作成',
            login: 'ログイン',
            createAccount: 'アカウント作成',
            recentPosts: '最近の投稿',
            quickLinks: 'クイックリンク',
            welcome: 'Minneapolewisへようこそ',
            keepTrack: 'サイドバーで私のブログ投稿をチェック！',
            loadingPosts: '投稿を読み込み中...',
            musicPlayer: 'ミュージックプレーヤー',
            loadingPlaylist: 'プレイリストを読み込み中...',
            previous: '前へ',
            play: '再生',
            next: '次へ',
            shuffle: 'シャッフル',
            mute: 'ミュート',
            track: '1.',
            loadingTitle: 'タイトルを読み込み中...',
            myX: '私のX',
            simpCity: 'SimpCity',
            megaFolder: 'Megaフォルダー',
            ansiArt: 'ANSIアート（クリックで再生）',
            copyright: '© Minneapolewis 2025',
            notAffiliated: '私たちはミネアポリス市とは関係ありません',
            option2: 'オプション2',
            option3: 'オプション3'
        }
    };

    // Utility: get all visible text nodes in the DOM (excluding script/style/hidden)
    function getVisibleTextNodes(root) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    // Ignore whitespace-only, script/style, and hidden
                    if (!node.parentElement) return NodeFilter.FILTER_REJECT;
                    const parent = node.parentElement;
                    if (
                        parent.tagName === 'SCRIPT' ||
                        parent.tagName === 'STYLE' ||
                        parent.tagName === 'NOSCRIPT' ||
                        parent.hasAttribute('data-no-translate') ||
                        parent.offsetParent === null // hidden
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );
        const nodes = [];
        let n;
        while ((n = walker.nextNode())) {
            nodes.push(n);
        }
        return nodes;
    }

    // Map original English text to translation keys
    const englishTextToKey = {};
    Object.entries(translations.en).forEach(([key, value]) => {
        englishTextToKey[value] = key;
    });

    // Store original English text for each node on first load
    let originalTextMap = new WeakMap();
    function autoTranslate(lang) {
        const translation = translations[lang] || translations.en;
        // Special case: Menu chevron
        const menuLink = document.getElementById('menu-link');
        if (menuLink) {
            const chevron = menuLink.querySelector('i');
            // Store original text if not already stored
            if (!menuLink.hasAttribute('data-original')) {
                menuLink.setAttribute('data-original', menuLink.textContent.replace(/\s*$/, ''));
            }
            // Always restore to original before translating
            const originalMenu = menuLink.getAttribute('data-original');
            menuLink.innerHTML = (lang === 'en' ? originalMenu : (translation.menu || 'Menu')) + (chevron ? ' ' + chevron.outerHTML : '');
        }
        // Translate all visible text nodes
        getVisibleTextNodes(document.body).forEach(node => {
            // Store original text if not already stored
            if (!originalTextMap.has(node)) {
                originalTextMap.set(node, node.textContent);
            }
            // Always restore to original before translating
            node.textContent = originalTextMap.get(node);
            const original = node.textContent.trim();
            if (lang !== 'en' && englishTextToKey[original] && translation[englishTextToKey[original]]) {
                node.textContent = translation[englishTextToKey[original]];
            }
        });
    }


    // Track the current language
    let currentLang = 'en';
    function applyTranslations(lang) {
        currentLang = lang;
        autoTranslate(lang);
    }

    // Always default to English on page load (no localStorage persistence)
    applyTranslations('en');

    // Add click listeners to language links
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = link.getAttribute('data-lang');
            // Always reset to English first to ensure correct mapping
            applyTranslations('en');
            // Then apply the selected language
            if (selectedLang !== 'en') {
                setTimeout(() => applyTranslations(selectedLang), 0);
            }
            // Optionally, update <html lang="...">
            // Apply the selected language. The function handles reverting to original text.
            applyTranslations(selectedLang);
            document.documentElement.lang = selectedLang;
        });
    });

    // Helper: re-apply translations after posts or nav items are loaded/changed
    function retranslateDynamicContent() {
        applyTranslations(currentLang);
    }

    // Example: If you load posts dynamically, call retranslateDynamicContent() after loading
    // If you update nav bar dropdown items dynamically, call retranslateDynamicContent() after updating

    // --- Example hooks for posts (replace with your actual post loading logic) ---
    // If you use fetch or AJAX to load posts:
    // fetch('/api/posts').then(...).then(() => { retranslateDynamicContent(); });

    // If you use innerHTML or DOM manipulation to update posts:
    // postsContainer.innerHTML = ...; retranslateDynamicContent();

    // If you update nav bar dropdown items:
    // dropdownMenu.innerHTML = ...; retranslateDynamicContent();

    // --- Global DOM Element References ---
    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const authButtonsDiv = document.getElementById('auth-buttons');
    const userStatusDiv = document.getElementById('user-status');
    const userEmailSpan = document.getElementById('user-email');
    const createLink = document.getElementById('create-link');
    const createPostContainer = document.getElementById('create-post-container');
    const createPostArea = document.getElementById('create-post-area');
    const createPostForm = document.getElementById('create-post-form');
    const titleInput = document.getElementById('post-title'); // Element for title input/textarea
    const contentInput = document.getElementById('post-content'); // Element for content textarea

    // --- HTML5 Video Embed References ---
    const videoEmbedContainer = document.getElementById('video-embed-container'); // Container for the video
    const videoTriggerInfo = document.getElementById('video-trigger-info');       // The <span> triggering the video

    // --- State for Video Player ---
    let videoElementRef = null; // Reference to the <video> element
    let isVideoActive = false; // Flag to prevent multiple clicks/plays

    // --- Page-Specific Element References (initialized after sidebar load) ---
    const loginPrompt = document.getElementById('login-prompt');
    const formMessage = document.getElementById('form-message');
    const submitButton = document.getElementById('submit-button');
    const postsContainer = document.getElementById('posts-container');
    const viewPostsArea = document.getElementById('view-posts-area');
    const titleCharCount = document.getElementById('title-char-count');
    const contentCharCount = document.getElementById('content-char-count');
    const quickLinksToggle = document.querySelector('.quick-links-toggle');
    const quickLinksList = document.getElementById('quick-links-list');
    const musicPlayerContainer = document.querySelector('.mini-music-player');





    // --- Netlify Identity & UI Updates ---
    function updateUserStatusUI() {
        const user = window.netlifyIdentity?.currentUser();
        // console.log("Updating UI. Current User:", user ? user.email : 'None');

        if (user) {
            // --- LOGGED IN STATE ---
            if (authButtonsDiv) authButtonsDiv.style.display = 'none';
            if (userStatusDiv) userStatusDiv.style.display = 'flex';
            if (userEmailSpan) { const username = user.user_metadata?.username || user.user_metadata?.full_name || user.email; userEmailSpan.textContent = username; userEmailSpan.title = user.email; }
            if (createLink) createLink.style.display = 'inline-block';
            // Create Page Specific
            if (loginPrompt) loginPrompt.style.display = 'none';
            if (createPostForm) createPostForm.style.display = 'block';
            if (createPostArea) createPostArea.style.display = 'block';
            if (createPostContainer) createPostContainer.style.display = 'block';
            if (submitButton) submitButton.disabled = false;
            if (formMessage) { formMessage.textContent = ''; formMessage.className = 'message'; }

        } else {
            // --- LOGGED OUT STATE ---
            if (authButtonsDiv) authButtonsDiv.style.display = 'flex';
            if (userStatusDiv) userStatusDiv.style.display = 'none';
            if (userEmailSpan) { userEmailSpan.textContent = ''; userEmailSpan.title = ''; }
            if (createLink) createLink.style.display = 'inline-block'; // Keep create link visible generally
            // Create Page Specific
            if (loginPrompt) { loginPrompt.textContent = "Please log in to create a post."; loginPrompt.style.display = 'block'; }
            if (createPostForm) createPostForm.style.display = 'none';
            if (submitButton) submitButton.disabled = true;
            if (createPostArea) createPostArea.style.display = 'block'; // Keep area visible for prompt
            if (createPostContainer) createPostContainer.style.display = 'block';
             if (formMessage) { formMessage.textContent = ''; formMessage.className = 'message'; }
        }
    }

    if (window.netlifyIdentity) {
        // console.log("Netlify Identity found. Setting up listeners...");
        updateUserStatusUI(); // Initial check
        netlifyIdentity.on("init", user => { updateUserStatusUI(); if (postsContainer) fetchAndDisplayPosts(); });
        netlifyIdentity.on("login", user => { updateUserStatusUI(); netlifyIdentity.close(); if (postsContainer) fetchAndDisplayPosts(); });
        netlifyIdentity.on("logout", () => { updateUserStatusUI(); if (postsContainer) fetchAndDisplayPosts(); });
        netlifyIdentity.on("error", err => { console.error("NI Event: error:", err); updateUserStatusUI(); if(loginPrompt && loginPrompt.style.display !== 'none') { loginPrompt.textContent = "Auth error."; } else if (formMessage && createPostForm?.style.display !== 'none') { formMessage.textContent = `Auth Error: ${err.message || 'Unknown'}`; formMessage.className = 'message error'; } });
        // Custom button listeners
        signupButton?.addEventListener('click', () => netlifyIdentity.open('signup'));
        loginButton?.addEventListener('click', () => netlifyIdentity.open('login'));
        logoutButton?.addEventListener('click', () => netlifyIdentity.logout());
    } else {
        console.error("Netlify Identity widget script not loaded.");
        updateUserStatusUI(); // Show logged out state
        if(loginPrompt) { loginPrompt.textContent = "Error: Auth system failed."; loginPrompt.style.display = 'block'; }
        if(createPostForm) createPostForm.style.display = 'none';
    }
    // --- End Netlify Identity ---


    // --- Create Post Form Logic ---
    const handleCreateSubmit = async (event) => {
        event.preventDefault();
        const user = window.netlifyIdentity?.currentUser();
        if (!user || !user.token?.access_token) { updateUserStatusUI(); if (formMessage) { formMessage.textContent = 'Auth required.'; formMessage.className = 'message error'; } console.error("Create submit failed: User not authenticated."); return; }
        const token = user.token.access_token;
        const title = titleInput?.value.trim();
        const content = contentInput?.value.trim();
        const titleMaxLength = parseInt(titleInput?.getAttribute('maxlength') || '300', 10);
        const contentMaxLength = parseInt(contentInput?.getAttribute('maxlength') || '40000', 10);

        if (!title || !content) { if (formMessage) { formMessage.textContent = "Title and content required."; formMessage.className = 'message error'; } return; }
        if (title.length > titleMaxLength) { if (formMessage) { formMessage.textContent = `Title exceeds maximum length of ${titleMaxLength}.`; formMessage.className = 'message error'; } return; }
        if (content.length > contentMaxLength) { if (formMessage) { formMessage.textContent = `Content exceeds maximum length of ${contentMaxLength}.`; formMessage.className = 'message error'; } return; }

        if (submitButton) submitButton.disabled = true;
        if (formMessage) { formMessage.textContent = "Submitting..."; formMessage.className = 'message info'; }
        try {
            const response = await fetch('/.netlify/functions/posts', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify({ title, content }) });
            if (!response.ok) { let errorMsg = `HTTP error! status: ${response.status}`; try { const errorData = await response.json(); errorMsg = errorData.error || errorMsg; } catch (e) { /* Ignore parsing error */ } throw new Error(errorMsg); }
            const createdPost = await response.json(); console.log('Post created:', createdPost.id);
            if (formMessage) { formMessage.textContent = "Post created! Redirecting..."; formMessage.className = 'message success'; }
            if (titleInput) titleInput.value = ''; if (contentInput) contentInput.value = '';
            if (titleInput && titleCharCount) updateCharCount(titleInput, titleCharCount, titleMaxLength);
            if (contentInput && contentCharCount) updateCharCount(contentInput, contentCharCount, contentMaxLength);
            setTimeout(() => { window.location.href = '/'; }, 1500);
        } catch (error) {
            console.error("Error creating post:", error);
            if (formMessage) { formMessage.textContent = `Error: ${error.message}`; formMessage.className = 'message error'; }
            if (submitButton && window.netlifyIdentity?.currentUser()) { submitButton.disabled = false; } else { updateUserStatusUI(); }
        }
    };
    // --- End Create Post Form Logic ---


    // --- Character Counting Logic (Conditional Visibility) ---
    function updateCharCount(inputElement, counterElement, maxLength) {
        if (!inputElement || !counterElement) return;
        const currentLength = inputElement.value.length;
        // Show counter only when nearing or exceeding limit
        if (currentLength > maxLength * 0.9 || currentLength >= maxLength) {
            counterElement.textContent = `${currentLength} / ${maxLength}`;
            counterElement.style.display = 'block'; // Make visible
            if (currentLength >= maxLength) {
                if (!counterElement.classList.contains('limit-reached')) { counterElement.classList.add('limit-reached'); }
            } else {
                if (counterElement.classList.contains('limit-reached')) { counterElement.classList.remove('limit-reached'); }
            }
        } else {
            counterElement.style.display = 'none'; // Hide if far from limit
            if (counterElement.classList.contains('limit-reached')) { counterElement.classList.remove('limit-reached'); }
        }
    }


    // Attach listeners and initialize counters if on create page
    if (createPostForm) {
        // console.log("Attaching create form submit listener and char counters.");
        createPostForm.addEventListener('submit', handleCreateSubmit);
        if (titleInput && titleCharCount) {
            const titleMaxLength = parseInt(titleInput.getAttribute('maxlength') || '300', 10);
            titleInput.addEventListener('input', () => { updateCharCount(titleInput, titleCharCount, titleMaxLength); });
            updateCharCount(titleInput, titleCharCount, titleMaxLength); // Initial check
        }
        if (contentInput && contentCharCount) {
            const contentMaxLength = parseInt(contentInput.getAttribute('maxlength') || '40000', 10);
            contentInput.addEventListener('input', () => { updateCharCount(contentInput, contentCharCount, contentMaxLength); });
            updateCharCount(contentInput, contentCharCount, contentMaxLength); // Initial check
        }
        const clearFormMessageOnInput = () => { if (formMessage && formMessage.textContent) { formMessage.textContent = ''; formMessage.className = 'message'; } };
        titleInput?.addEventListener('input', clearFormMessageOnInput);
        contentInput?.addEventListener('input', clearFormMessageOnInput);
    }
    // --- End Character Counting ---


    // --- Fetch and Display Posts Logic ---
    async function fetchAndDisplayPosts() {
        if (!postsContainer) { return; }
        postsContainer.innerHTML = '<p>Loading posts...</p>';
        try {
            const response = await fetch('/.netlify/functions/posts');
            if (!response.ok) { const errorData = await response.json().catch(() => ({})); throw new Error(`Fetch failed: ${errorData.error || response.statusText} (${response.status})`); }
            const posts = await response.json();
            postsContainer.innerHTML = '';
            if (posts && posts.length > 0) {
                posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                posts.forEach(post => {
                    const postElement = document.createElement('article'); postElement.className = 'post';
                    const titleElement = document.createElement('h3'); titleElement.textContent = post.title;
                    const contentElement = document.createElement('p');
                    contentElement.innerHTML = post.content.replace(/\n/g, '<br>');
                    const username = post.username || 'Anonymous';
                    const postDate = new Date(post.created_at);
                    const formattedDateTime = postDate.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
                    const metadataElement = document.createElement('small'); metadataElement.className = 'post-metadata';
                    metadataElement.textContent = `${username} · ${formattedDateTime}`;
                    postElement.appendChild(titleElement); postElement.appendChild(contentElement); postElement.appendChild(metadataElement);
                    postsContainer.appendChild(postElement);
                });
            } else { postsContainer.innerHTML = '<p>No posts found.</p>'; }
        } catch (error) { console.error("Error fetching/displaying posts:", error); postsContainer.innerHTML = `<p style="color: red;">Error loading posts: ${error.message}</p>`; }
    }
    fetchAndDisplayPosts(); // Call the function to fetch posts



    // --- Mini Music Player Logic ---
    let player; // Holds the YT.Player instance for the music player - make it accessible outside the block if needed
    let isPlayerReady = false; // Make accessible for random button
    let playlistLoaded = false; // Make accessible for shuffle button
    let playedVideos = []; // Track played videos for shuffle functionality
    let shuffleMode = true; // Track if shuffle is active - DEFAULT: ON
    let shuffleButton = null; // Reference to shuffle button
    let updatePlaylistActiveState = () => {}; // Placeholder for playlist dropdown update
    let internalIsPlaying = false; // Music player's internal state
    let clearPendingRestoreFlags = () => {}; // Placeholder accessible function
    let fullPlaylistData = null; // Store full playlist data from API

    if (musicPlayerContainer) {
        // console.log('[Music Player] Initializing...');

        // --- Constants & Config ---
        const SESSION_STORAGE_KEY = 'musicPlayerState_v1';
        const youtubePlaylistId = 'PLC1tH2RPEXpQqF8cQvQYGy1Z6JwpLyG3a'; // Your 946-video playlist
        const initialVolume = 75;

        // --- DOM Elements (Music Player Specific) ---
        const playPauseBtn = document.getElementById('player-play-pause');
        const prevBtn = document.getElementById('player-prev');
        const nextBtn = document.getElementById('player-next');
        const volumeIconBtn = document.getElementById('player-volume-icon');
        const volumeIcon = volumeIconBtn?.querySelector('i');
        const pauseIconClass = 'bi-pause-fill';
        const playIconClass = 'bi-play-fill';
        const volumeSlider = document.getElementById('player-volume-slider');
        const thumbnailImg = document.getElementById('player-video-thumbnail');
        const playerContainerId = 'youtube-player-container'; // ID for YT API target div
        const videoTitleElement = document.getElementById('player-video-title');
        const trackNumberElement = document.getElementById('player-track-number');
        const seekBarContainer = document.getElementById('player-seek-bar-container');
        const seekBarProgress = document.getElementById('player-seek-bar-progress');

        // --- State Variables (Music Player Specific - Local Scope) ---
        // player, isPlayerReady, playlistLoaded are declared outside
        // internalIsPlaying declared outside
        let internalIsMuted = false;
        let currentVolume = initialVolume;
        let seekBarInterval = null;
        let restoreAttempted = false;
        let pendingSeekTime = null;
        let pendingPlay = false;
        let currentPlaylistIndex = 738; // Default to track 739

        // --- State Management ---
        function savePlayerState() { if (!isPlayerReady || !player || typeof player.getPlayerState !== 'function') { return; } try { let apiState = player.getPlayerState(); let isCurrentlyPlaying = (apiState === YT.PlayerState.PLAYING || apiState === YT.PlayerState.BUFFERING); let playlistIndex = player.getPlaylistIndex(); if (playlistIndex === -1 || playlistIndex === null || playlistIndex === undefined) { playlistIndex = currentPlaylistIndex; } const state = { playlistId: youtubePlaylistId, index: playlistIndex, time: player.getCurrentTime() || 0, duration: player.getDuration() || 0, volume: player.getVolume(), muted: player.isMuted(), playing: isCurrentlyPlaying, timestamp: Date.now() }; sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(state)); } catch (e) { console.error("[Music Player] Error saving state:", e); } }
        function loadPlayerState() { try { const savedStateString = sessionStorage.getItem(SESSION_STORAGE_KEY); if (savedStateString) { return JSON.parse(savedStateString); } } catch (e) { console.error("[Music Player] Error loading state:", e); sessionStorage.removeItem(SESSION_STORAGE_KEY); } return null; }

        // --- Player Event Handlers ---
        function onPlayerReady(event) { 
            isPlayerReady = true; 
            player = event.target; 
            playlistLoaded = false; 
            restoreAttempted = false; 
            pendingSeekTime = null; 
            pendingPlay = false; 
            
            const savedState = loadPlayerState(); 
            const hasPlayedBefore = localStorage.getItem('musicPlayerHasPlayed');
            
            // Determine the correct index to load
            // True first visit (no flag): index 738, Otherwise use saved index or 738
            if (!hasPlayedBefore) {
                // Genuine first visit - start with Like a Bird
                currentPlaylistIndex = 738;
                currentVolume = initialVolume;
                internalIsMuted = false;
            } else if (savedState && savedState.index !== null && savedState.index !== undefined) {
                // Has played before and we have saved state - use it
                currentPlaylistIndex = savedState.index;
                currentVolume = savedState.volume || initialVolume;
                internalIsMuted = savedState.muted || false;
            } else {
                // Has played before but no saved state - default to 738
                currentPlaylistIndex = 738;
                currentVolume = initialVolume;
                internalIsMuted = false;
            }
            
            if (savedState) { 
                player.setVolume(currentVolume);
                if (internalIsMuted) player.mute();

                // Calculate if the song would have finished during page load
                const timeSinceSave = (Date.now() - savedState.timestamp) / 1000;
                const remainingTime = savedState.duration ? savedState.duration - savedState.time : Infinity;

                if (savedState.playing && timeSinceSave < remainingTime) {
                    // Song is still playing, resume from calculated time
                    pendingSeekTime = savedState.time + timeSinceSave; 
                    pendingPlay = true;
                } else if (savedState.playing) {
                    // Song would have ended, so just load the next one
                    pendingPlay = true; // Will trigger 'ended' state logic to play next
                } else {
                    // It was paused, so restore the exact time and keep it paused
                    pendingSeekTime = savedState.time;
                    pendingPlay = false;
                }
                internalIsPlaying = pendingPlay;
                updatePlayPauseIcon();
            } else { 
                // First time or no saved state - start unmuted
                player.setVolume(initialVolume);
                player.unMute();
                internalIsMuted = false; 
                
                // Don't autoplay on first visit - just load paused
                internalIsPlaying = false;
                pendingPlay = false;
                
                pendingSeekTime = null; 
                updatePlayPauseIcon(); 
            } 
            
            if (volumeSlider) volumeSlider.value = internalIsMuted ? 0 : currentVolume; 
            updateVolumeIcon(internalIsMuted ? 0 : currentVolume); 
            updateVideoTitle("Loading..."); 
            updateThumbnail(null); 
            
            // Load playlist at the determined index
            if (pendingPlay) {
                player.loadPlaylist({ 
                    list: youtubePlaylistId, 
                    listType: 'playlist', 
                    index: currentPlaylistIndex 
                });
            } else { // If paused or first visit
                player.cuePlaylist({
                    list: youtubePlaylistId,
                    listType: 'playlist',
                    index: currentPlaylistIndex
                });
            }
            
            // Add click listener to start playing on first interaction (only if never played before)
            if (!hasPlayedBefore) {
                const startPlayingOnInteraction = () => {
                    if (!localStorage.getItem('musicPlayerHasPlayed')) {
                        localStorage.setItem('musicPlayerHasPlayed', 'true');
                        if (player && isPlayerReady && !internalIsPlaying) {
                            player.playVideo();
                        }
                        // Remove listeners after first interaction
                        document.removeEventListener('click', startPlayingOnInteraction);
                        document.removeEventListener('keydown', startPlayingOnInteraction);
                    }
                };
                document.addEventListener('click', startPlayingOnInteraction);
                document.addEventListener('keydown', startPlayingOnInteraction);
            }
            
            setupPlayerEventListeners();
            // Event listeners are now set up in initializeAndLoadPlayer
        }

        function onPlayerStateChange(event) {
            const state = event.data;
            // const stateNames = { '-1': 'UNSTARTED', 0: 'ENDED', 1: 'PLAYING', 2: 'PAUSED', 3: 'BUFFERING', 5: 'CUED' };
            // console.log(`[Music Player] Event: onStateChange - ${stateNames[state] || state}`);

            if (!isPlayerReady) return;

            // This block handles restoring the player's state (e.g., after a page reload)
            if (!restoreAttempted && (state === YT.PlayerState.CUED || state === YT.PlayerState.BUFFERING || state === YT.PlayerState.PLAYING)) {
                playlistLoaded = true;
                restoreAttempted = true;

                // Load full playlist data immediately for track numbers and shuffle
                if (!isPlaylistLoaded) {
                    populatePlaylist();
                }

                const savedState = loadPlayerState();
                if (pendingSeekTime !== null && pendingSeekTime > 0.1) {
                    player.seekTo(pendingSeekTime, true);
                }

                if (pendingPlay) {
                    setTimeout(() => {
                        if (player && isPlayerReady) {
                            try {
                                player.playVideo();
                                // This handles a specific edge case where a muted session is restored
                                if (internalIsMuted && !savedState?.muted) {
                                    setTimeout(() => {
                                        player.unMute();
                                        player.setVolume(currentVolume);
                                        internalIsMuted = false;
                                        updateVolumeIcon(currentVolume);
                                    }, 1000);
                                }
                            } catch (e) {
                                console.error("[Music Player] Error calling playVideo during restore:", e);
                            }
                        }
                    }, 100);
                } else {
                    if (pendingSeekTime !== null && pendingSeekTime > 0.1) {
                        setTimeout(updateSeekBar, 150);
                    }
                }
                pendingSeekTime = null;
                pendingPlay = false;
            }

            // Update internal state and UI based on player's actual state
            const actualPlayerState = player.getPlayerState();
            internalIsPlaying = (actualPlayerState === YT.PlayerState.PLAYING || actualPlayerState === YT.PlayerState.BUFFERING);
            updatePlayPauseIcon();

            // When the video changes, update details and save state
            if (state === YT.PlayerState.CUED || state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING) {
                let newIndex = player.getPlaylistIndex();
                if (newIndex !== -1 && newIndex !== null && (newIndex !== currentPlaylistIndex || videoTitleElement.textContent.includes("Loading"))) {
                    currentPlaylistIndex = newIndex;
                    updateVideoDetails();
                    savePlayerState();
                }
            }

            // Manage the seek bar updates
            if (internalIsPlaying) {
                startSeekBarUpdate();
            } else {
                if (seekBarInterval) clearInterval(seekBarInterval);
                seekBarInterval = null;
                if (state === YT.PlayerState.PAUSED || state === YT.PlayerState.ENDED) {
                    setTimeout(updateSeekBar, 50); // Final update
                    savePlayerState();
                }
            }

            // When a track ends, play the next one (shuffled or in order)
            if (state === YT.PlayerState.ENDED) {
                if (seekBarProgress) seekBarProgress.style.width = '0%';
                internalIsPlaying = false;
                updatePlayPauseIcon();
                savePlayerState();

                if (shuffleMode && playlistLoaded) {
                    setTimeout(() => {
                        if (shuffleMode && player && isPlayerReady) {
                            playShuffledVideo();
                        }
                    }, 500);
                } else {
                    setTimeout(() => {
                        if (player && isPlayerReady) {
                            playNextVideo();
                        }
                    }, 500);
                }
            }
        }
        function onPlayerError(event) { console.error(`[Music Player] Event: onPlayerError. Code: ${event.data}`); const errorMessages = { 2: "Invalid parameter", 5: "HTML5 player error", 100: "Video not found", 101: "Playback disallowed", 150: "Playback disallowed" }; console.error(`[Music Player] Error: ${errorMessages[event.data] || 'Unknown error.'}`); 
        
        // For deleted/unavailable videos (100, 101, 150), skip to next
        if (event.data === 100 || event.data === 101 || event.data === 150) {
            updateVideoTitle('Video Unavailable - Skipping...');
            setTimeout(() => {
                if (player && isPlayerReady && playlistLoaded) {
                    try {
                        if (shuffleMode) {
                            playShuffledVideo();
                        } else {
                            player.nextVideo();
                        }
                    } catch(e) {
                        console.error('[Music Player] Error skipping:', e);
                    }
                }
            }, 1000);
            return;
        }
        
        // For critical errors, disable player
        isPlayerReady = false; internalIsPlaying = false; playlistLoaded = false; pendingSeekTime = null; pendingPlay = false; restoreAttempted = true; updatePlayPauseIcon(); updateVideoTitle("Player Error"); if (seekBarInterval) { clearInterval(seekBarInterval); seekBarInterval = null; } disablePlayerControls(); if (thumbnailImg) { thumbnailImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23ccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='1.5px' fill='%23555'%3EError%3C/text%3E%3C/svg%3E"; } try { sessionStorage.removeItem(SESSION_STORAGE_KEY); } catch (e) {} }

        // --- Player Control Functions ---
        function setupPlayerEventListeners() { playPauseBtn?.addEventListener('click', togglePlayPause); prevBtn?.addEventListener('click', playPreviousVideo); nextBtn?.addEventListener('click', playNextVideo); volumeIconBtn?.addEventListener('click', toggleMute); volumeSlider?.addEventListener('input', handleVolumeChange); seekBarContainer?.addEventListener('click', handleSeekBarClick); window.addEventListener('beforeunload', savePlayerState); window.addEventListener('pagehide', savePlayerState); document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') { savePlayerState(); } }); 
        
        // Save state when clicking navigation links
        document.querySelectorAll('a[href]').forEach(link => {
            link.addEventListener('click', () => {
                // Save state immediately before navigation
                savePlayerState();
            });
        });
        }
        function disablePlayerControls() { console.warn("[Music Player] Disabling player controls."); const controls = [playPauseBtn, prevBtn, nextBtn, volumeIconBtn, volumeSlider, seekBarContainer]; controls.forEach(control => { if(control) { control.disabled = true; if(control === seekBarContainer) control.style.cursor = 'default'; } }); if(thumbnailImg) thumbnailImg.style.opacity = 0.6; }
        // Make clearPendingRestoreFlags accessible outside this block
        clearPendingRestoreFlags = () => { if (pendingSeekTime !== null || pendingPlay) { /* console.log("[Music Player] User interaction detected, clearing pending restore flags."); */ } pendingSeekTime = null; pendingPlay = false; restoreAttempted = true; };
        function togglePlayPause() { if (!isPlayerReady || !player || !playlistLoaded) { console.warn("[Music Player] togglePlayPause: Player not ready/loaded."); return; } clearPendingRestoreFlags(); try { const currentState = player.getPlayerState(); if (currentState === YT.PlayerState.PLAYING || currentState === YT.PlayerState.BUFFERING) { player.pauseVideo(); } else { player.playVideo(); } } catch (e) { console.error("[Music Player] Error toggling play/pause:", e); } }
        function playPreviousVideo() { 
            if (!isPlayerReady || !player || !playlistLoaded) return; 
            clearPendingRestoreFlags(); 
            try { 
                if (fullPlaylistData && fullPlaylistData.videos) {
                    // Get current video ID
                    const currentVideoData = player.getVideoData();
                    const currentVideoId = currentVideoData ? currentVideoData.video_id : null;
                    
                    // Find current index in our full playlist
                    const currentIndex = fullPlaylistData.videos.findIndex(v => v.videoId === currentVideoId);
                    
                    if (currentIndex > 0) {
                        const prevIndex = currentIndex - 1;
                        const prevVideo = fullPlaylistData.videos[prevIndex];
                        player.loadVideoById(prevVideo.videoId);
                        currentPlaylistIndex = prevIndex;
                        updateVideoTitle(prevVideo.title);
                        updateThumbnail(prevVideo.videoId);
                        updateTrackNumber(prevVideo.videoId);
                        savePlayerState();
                    } else {
                        // Wrap to last video
                        const lastIndex = fullPlaylistData.videos.length - 1;
                        const lastVideo = fullPlaylistData.videos[lastIndex];
                        player.loadVideoById(lastVideo.videoId);
                        currentPlaylistIndex = lastIndex;
                        updateVideoTitle(lastVideo.title);
                        updateThumbnail(lastVideo.videoId);
                        updateTrackNumber(lastVideo.videoId);
                        savePlayerState();
                    }
                } else {
                    player.previousVideo(); 
                }
            } catch(e){ 
                console.error("Err Prev:", e); 
            } 
        }
        function playNextVideo() { 
            if (!isPlayerReady || !player || !playlistLoaded) return; 
            clearPendingRestoreFlags(); 
            try { 
                if (shuffleMode) { 
                    playShuffledVideo(); 
                } else if (fullPlaylistData && fullPlaylistData.videos) {
                    // Get current video ID
                    const currentVideoData = player.getVideoData();
                    const currentVideoId = currentVideoData ? currentVideoData.video_id : null;
                    
                    // Find current index in our full playlist
                    const currentIndex = fullPlaylistData.videos.findIndex(v => v.videoId === currentVideoId);
                    
                    if (currentIndex >= 0 && currentIndex < fullPlaylistData.videos.length - 1) {
                        const nextIndex = currentIndex + 1;
                        const nextVideo = fullPlaylistData.videos[nextIndex];
                        player.loadVideoById(nextVideo.videoId);
                        currentPlaylistIndex = nextIndex;
                        updateVideoTitle(nextVideo.title);
                        updateThumbnail(nextVideo.videoId);
                        updateTrackNumber(nextVideo.videoId);
                        savePlayerState();
                    } else {
                        // Wrap to first video
                        const firstVideo = fullPlaylistData.videos[0];
                        player.loadVideoById(firstVideo.videoId);
                        currentPlaylistIndex = 0;
                        updateVideoTitle(firstVideo.title);
                        updateThumbnail(firstVideo.videoId);
                        updateTrackNumber(firstVideo.videoId);
                        savePlayerState();
                    }
                } else { 
                    player.nextVideo(); 
                }
            } catch(e){ 
                console.error("Err Next:", e); 
            } 
        }
        function handleVolumeChange() { if (!isPlayerReady || !player || !volumeSlider) return; currentVolume = parseInt(volumeSlider.value, 10); internalIsMuted = player.isMuted(); try { player.setVolume(currentVolume); if (internalIsMuted && currentVolume > 0) { player.unMute(); internalIsMuted = false; } else if (!internalIsMuted && currentVolume === 0) { player.mute(); internalIsMuted = true; } } catch (e) { console.error("[Music Player] Error handling volume change:", e); } updateVolumeIcon(internalIsMuted ? 0 : currentVolume); savePlayerState(); }
        function toggleMute() { if (!isPlayerReady || !player) return; internalIsMuted = player.isMuted(); try { if (internalIsMuted) { player.unMute(); internalIsMuted = false; if (currentVolume === 0) currentVolume = 50; if (volumeSlider) volumeSlider.value = currentVolume; player.setVolume(currentVolume); } else { player.mute(); internalIsMuted = true; } } catch (e) { console.error("[Music Player] Error toggling mute:", e); } updateVolumeIcon(internalIsMuted ? 0 : currentVolume); savePlayerState(); }
        function handleSeekBarClick(event) { if (!isPlayerReady || !player || !seekBarContainer || !playlistLoaded) return; clearPendingRestoreFlags(); let duration; try { duration = player.getDuration(); } catch (e) { return; } if (typeof duration !== 'number' || duration <= 0) return; const barWidth = seekBarContainer.offsetWidth; const clickPositionX = event.offsetX; if (typeof barWidth !== 'number' || barWidth <= 0) return; const seekFraction = Math.max(0, Math.min(1, clickPositionX / barWidth)); const seekTime = seekFraction * duration; try { player.seekTo(seekTime, true); if(seekBarProgress) seekBarProgress.style.width = (seekFraction * 100) + '%'; savePlayerState(); } catch(e) { console.error("[Music Player] Error seeking:", e); } }

        // --- Player UI Update Functions ---
        function updatePlayPauseIcon() { if (!playPauseBtn) return; const iconElement = playPauseBtn.querySelector('i'); if (!iconElement) return; iconElement.classList.remove(playIconClass, pauseIconClass); if (internalIsPlaying) { iconElement.classList.add(pauseIconClass); playPauseBtn.title = "Pause"; } else { iconElement.classList.add(playIconClass); playPauseBtn.title = "Play"; } }
        function updateVolumeIcon(volume) { if (!volumeIcon || !volumeIconBtn) return; volumeIcon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill', 'bi-volume-mute-fill'); if (internalIsMuted || volume === 0) { volumeIcon.classList.add('bi-volume-mute-fill'); volumeIconBtn.title = "Unmute"; } else if (volume < 50) { volumeIcon.classList.add('bi-volume-down-fill'); volumeIconBtn.title = "Mute"; } else { volumeIcon.classList.add('bi-volume-up-fill'); volumeIconBtn.title = "Mute"; } }
        function updateThumbnail(videoId) { if (thumbnailImg && videoId) { thumbnailImg.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; thumbnailImg.alt = `Thumbnail`; thumbnailImg.style.opacity = 1; } else if (thumbnailImg) { thumbnailImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='1.5px' fill='%23999'%3EWaiting...%3C/text%3E%3C/svg%3E"; thumbnailImg.alt = 'Video Thumbnail Loading'; } }
        function updateTrackNumber(videoId) { if (!trackNumberElement) return; if (!fullPlaylistData || !fullPlaylistData.videos) { trackNumberElement.textContent = ''; return; } const index = fullPlaylistData.videos.findIndex(v => v.videoId === videoId); if (index !== -1) { trackNumberElement.textContent = `${index + 1}.`; } else { trackNumberElement.textContent = ''; } }
        function updateVideoTitle(title) { 
            if (videoTitleElement) { 
                const displayTitle = title || "---"; 
                videoTitleElement.textContent = displayTitle; 
                videoTitleElement.title = displayTitle; 
                videoTitleElement.setAttribute('data-title', displayTitle); 
                videoTitleElement.classList.remove('scrolling'); 
                
                // Reset any custom animation settings
                videoTitleElement.style.animationDuration = '';
                videoTitleElement.style.setProperty('--title-gap', '4em');
                
                setTimeout(() => { 
                    const parentWidth = videoTitleElement.parentElement ? videoTitleElement.parentElement.offsetWidth : 0; 
                    const titleWidth = videoTitleElement.scrollWidth; 
                    
                    if (titleWidth > parentWidth && parentWidth > 0) { 
                        // For continuous scrolling, gap needs to be at least the container width
                        // to ensure the duplicate doesn't appear until the original is fully scrolled out
                        // Use pixels for more precise control
                        const minGap = parentWidth * 1.2; // 120% of container width for safe spacing
                        videoTitleElement.style.setProperty('--title-gap', `${minGap}px`);
                        
                        // Calculate duration: the title + gap needs to scroll completely
                        const totalScrollDistance = titleWidth + minGap;
                        const scrollSpeed = 50; // pixels per second
                        const duration = totalScrollDistance / scrollSpeed;
                        
                        videoTitleElement.style.animationDuration = `${duration}s`;
                        videoTitleElement.classList.add('scrolling');
                    } 
                }, 100); 
            } 
        }
        function updateVideoDetails() { if (!isPlayerReady || !player || typeof player.getVideoData !== 'function') return; try { const videoData = player.getVideoData(); if (videoData && videoData.title) { updateThumbnail(videoData.video_id); updateTrackNumber(videoData.video_id); updateVideoTitle(videoData.title); updatePlaylistActiveState(); } else { setTimeout(() => { try { const freshVideoData = player.getVideoData(); if (freshVideoData && freshVideoData.title){ updateThumbnail(freshVideoData.video_id); updateTrackNumber(freshVideoData.video_id); updateVideoTitle(freshVideoData.title); updatePlaylistActiveState(); } else { updateThumbnail(null); updateVideoTitle("Loading..."); } } catch(e) { /* ignore */ } }, 300); } } catch (error) { updateThumbnail(null); updateVideoTitle("Error"); } }

        // --- Seek Bar Update ---
        function startSeekBarUpdate() { if (!isPlayerReady || !player || !seekBarProgress) return; if (seekBarInterval) clearInterval(seekBarInterval); updateSeekBar(); seekBarInterval = setInterval(() => { updateSeekBar(); savePlayerState(); }, 1000); }
        function updateSeekBar() { if (!isPlayerReady || !player || typeof player.getCurrentTime !== 'function' || typeof player.getDuration !== 'function') { if (seekBarInterval) { clearInterval(seekBarInterval); seekBarInterval = null; } return; } let currentTime = 0; let duration = 0; try { currentTime = player.getCurrentTime(); duration = player.getDuration(); } catch (e) { if (seekBarInterval) { clearInterval(seekBarInterval); seekBarInterval = null; } return; } if (duration && duration > 0) { const progressPercentage = (currentTime / duration) * 100; if (seekBarProgress) { seekBarProgress.style.width = Math.min(100, Math.max(0, progressPercentage)) + '%'; } } else { if (seekBarProgress) { seekBarProgress.style.width = '0%'; } } }

        // --- YouTube API Loading and Player Creation ---
        function createYouTubePlayer() { const playerDiv = document.getElementById(playerContainerId); if (!playerDiv) { console.error(`[Music Player] ERROR: Player container div '#${playerContainerId}' not found!`); return; } if (!youtubePlaylistId) { console.warn("[Music Player] No Playlist ID configured."); updateVideoTitle("No Playlist"); disablePlayerControls(); return; } try { /* Use the global 'player' variable */ player = new YT.Player(playerContainerId, { height: '1', width: '1', playerVars: { 'playsinline': 1 }, events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange, 'onError': onPlayerError } }); } catch (error) { console.error("[Music Player] CRITICAL ERROR creating YT.Player:", error); disablePlayerControls(); } }

        // Store the original (if any) onYouTubeIframeAPIReady function
        const existingApiReadyCallback = window.onYouTubeIframeAPIReady;

        window.onYouTubeIframeAPIReady = function() {
             // Call the original callback if it exists
             if (existingApiReadyCallback && typeof existingApiReadyCallback === 'function') {
                 try { existingApiReadyCallback(); } catch (e) { console.error("Error calling existing onYouTubeIframeAPIReady:", e); }
             }
            // Now specifically create the Music Player if its container exists
            if (document.querySelector('.mini-music-player')) {
                 createYouTubePlayer();
            }
        };

        // Initiate API loading if not already loaded
        if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
             const tag = document.createElement('script'); tag.src = "https://www.youtube.com/iframe_api"; const firstScriptTag = document.getElementsByTagName('script')[0]; if (firstScriptTag && firstScriptTag.parentNode) { firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); } else { document.body.appendChild(tag); }
        } else {
            // API is already loaded, directly create the player
            createYouTubePlayer();
        }

        // --- Initial UI setup ---
        if (volumeSlider) volumeSlider.value = initialVolume;
        updateVolumeIcon(initialVolume);
        updatePlayPauseIcon();
        updateThumbnail(null);
        updateVideoTitle("Initializing...");
        if (seekBarProgress) seekBarProgress.style.width = '0%';

        // Set up the click listener for play/pause
        playPauseBtn?.addEventListener('click', togglePlayPause);
    } else {
        // console.log("Music player container not found on this page.");
    }
    // --- End Mini Music Player ---


    // --- HTML5 Video Embed Logic (Modified for Click-to-Play) ---

    function resetVideoState() {
        // console.log('Resetting video state.'); // Debug log
        if (videoElementRef) {
            videoElementRef.removeEventListener('ended', handleVideoEnd);
            videoElementRef.removeEventListener('error', handleVideoError);
             // Check if parent exists before removing
            if (videoElementRef.parentNode) {
                videoElementRef.parentNode.removeChild(videoElementRef);
            }
        }
        if (videoEmbedContainer) {
            videoEmbedContainer.innerHTML = ''; // Clear any remnants (like overlay)
            videoEmbedContainer.style.display = 'none'; // Hide container
        }
        if (videoTriggerInfo) {
            videoTriggerInfo.textContent = "ANSI Art (Click to play)";
            videoTriggerInfo.style.cursor = 'pointer';
            videoTriggerInfo.setAttribute('aria-disabled', 'false');
            videoTriggerInfo.classList.remove('video-active'); // Remove styling class
            // videoTriggerInfo.focus(); // Optional: return focus after video ends - can be annoying
        }
        videoElementRef = null;
        isVideoActive = false;
    }

    function handleVideoEnd() {
        // console.log('Local video finished playing.'); // Debug log
        resetVideoState();
    }

    function handleVideoError(e) {
        let errorMsg = 'Video Error';
        // Extract error message logic
        if (e && e.name) { errorMsg = e.name; } // e.g., NotAllowedError
        else if (videoElementRef && videoElementRef.error) {
            const MediaErr = window.MediaError || { MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4 };
            switch (videoElementRef.error.code) {
                case MediaErr.MEDIA_ERR_ABORTED: errorMsg = 'Playback aborted.'; break;
                case MediaErr.MEDIA_ERR_NETWORK: errorMsg = 'Network error.'; break;
                case MediaErr.MEDIA_ERR_DECODE: errorMsg = 'Decoding error.'; break;
                case MediaErr.MEDIA_ERR_SRC_NOT_SUPPORTED: errorMsg = 'Format not supported.'; break;
                default: errorMsg = `Unknown Error (Code ${videoElementRef.error.code})`; break;
            }
        } else if (e && e.message) { errorMsg = e.message; }
        else if (typeof e === 'string') { errorMsg = e; }

        console.error(`Video Playback/Load Error: ${errorMsg}`, e); // Log detailed error

        // Show error briefly in the trigger text before resetting
        if (videoTriggerInfo) {
            videoTriggerInfo.textContent = `ANSI Art (Error: ${errorMsg})`;
            videoTriggerInfo.style.cursor = 'default';
            videoTriggerInfo.classList.add('video-active');
             // Use resetVideoState after a delay to clean up
            setTimeout(() => {
                 // Check if we are still in the error state before resetting
                 if (isVideoActive && videoTriggerInfo.textContent.includes('Error:')) {
                     resetVideoState();
                 }
             }, 4000); // Show error for 4 seconds
        } else {
             resetVideoState(); // Reset immediately if trigger info not found
        }
         // Still set isVideoActive to false immediately on error to potentially allow retry?
         // Or keep it true until timeout? Let's set it false after timeout via resetVideoState.
    }

    function playAnsiVideo() {
        if (isVideoActive || !videoEmbedContainer || !videoTriggerInfo) {
            // console.log('Video play request ignored (already active or elements missing).');
            return;
        }

        // console.log('Attempting to play ANSI video.');
        isVideoActive = true;
        videoTriggerInfo.textContent = "ANSI Art (Loading...)";
        videoTriggerInfo.style.cursor = 'default';
        videoTriggerInfo.setAttribute('aria-disabled', 'true');
        videoTriggerInfo.classList.add('video-active');

        // Clear container and ensure it's visible
        videoEmbedContainer.innerHTML = '';
        videoEmbedContainer.style.display = 'block';

        const video = document.createElement('video');
        // *** VERIFY THIS PATH IS CORRECT FOR YOUR DEPLOYMENT ***
        video.src = '/videos/art.mp4';
        video.muted = true;
        video.playsInline = true;
        video.loop = false;

        video.addEventListener('error', handleVideoError);
        video.addEventListener('ended', handleVideoEnd);

        videoElementRef = video; // Store reference

        // Optional overlay
        const overlay = document.createElement('div');
        overlay.className = 'video-overlay';

        videoEmbedContainer.appendChild(video);
        videoEmbedContainer.appendChild(overlay);

        // Explicit Play Call
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Playback started
                // console.log("Video playback started.");
                if (videoTriggerInfo && isVideoActive) { // Check isVideoActive in case of rapid events
                     videoTriggerInfo.textContent = "ANSI Art (Playing...)";
                }
            }).catch(error => {
                // Playback failed
                handleVideoError(error);
            });
        } else {
             // Fallback for older browsers
             handleVideoError("Playback promise not supported");
        }
    }

    // Add Listeners for the Video Trigger
    if (videoTriggerInfo) {
        videoTriggerInfo.addEventListener('click', playAnsiVideo);
        videoTriggerInfo.addEventListener('keypress', (e) => {
            // Trigger on Enter or Spacebar
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent page scroll on space
                playAnsiVideo();
            }
        });
        // Set initial text on load if not already active
        if (!isVideoActive) {
            videoTriggerInfo.textContent = "ANSI Art (Click to play)";
        }
    } else {
        // console.warn("Element #video-trigger-info not found, local video feature inactive.");
    }
    // --- End HTML5 Video Embed Logic ---


    
// --- Quick Links Toggle Logic ---
if (quickLinksToggle && quickLinksList) {

    // --- START: NEW INITIALIZATION CODE ---
    // 1. Read the initial state directly from your HTML attribute.
    const isInitiallyExpanded = quickLinksToggle.getAttribute('aria-expanded') === 'true';

    // 2. Set the list's visibility to match the initial state.
    //    If HTML says expanded (true), this sets hidden to false (visible).
    //    If HTML says collapsed (false), this sets hidden to true (hidden).
    quickLinksList.hidden = !isInitiallyExpanded;
    // --- END: NEW INITIALIZATION CODE ---


    // 3. Your original click listener logic is preserved below.
    //    It will now work correctly for both opening and closing.
    quickLinksToggle.addEventListener('click', () => {
        const isExpanded = quickLinksToggle.getAttribute('aria-expanded') === 'true';
        
        quickLinksToggle.setAttribute('aria-expanded', String(!isExpanded));
        quickLinksList.hidden = isExpanded;

        // If collapsing the quick links while video is playing, reset the video
        // This part is unchanged and will still work.
        if (isExpanded && typeof resetVideoState === 'function') { // Check if we are collapsing
             resetVideoState();
        }
    });
}
// --- End Quick Links Toggle ---


    // --- Shuffle Button Logic ---
    shuffleButton = document.getElementById('player-shuffle');
    
    // Set shuffle button as active by default since shuffleMode starts as true
    if (shuffleButton) {
        shuffleButton.classList.add('shuffle-active');
        console.log('[Shuffle] Shuffle mode enabled by default');
    }
    
    // Helper function to play a shuffled video
    function playShuffledVideo() {
        if (typeof player !== 'undefined' && player && isPlayerReady && playlistLoaded) {
            clearPendingRestoreFlags(); // Ensure state is cleared
            try {
                // Use fullPlaylistData for all 946 videos
                if (fullPlaylistData && fullPlaylistData.videos && fullPlaylistData.videos.length > 0) {
                    const playlist = fullPlaylistData.videos;
                    let randomIndex;
                    
                    // Get current video ID to track it
                    const currentVideoData = player.getVideoData();
                    const currentVideoId = currentVideoData ? currentVideoData.video_id : null;
                    const currentIdx = playlist.findIndex(v => v.videoId === currentVideoId);
                    
                    // If all videos have been played, reset the played list
                    if (playedVideos.length >= playlist.length - 1) {
                        playedVideos = currentIdx >= 0 ? [currentIdx] : []; // Keep current video in played list
                    }
                    
                    // Find an unplayed video
                    const unplayedIndices = [];
                    for (let i = 0; i < playlist.length; i++) {
                        if (!playedVideos.includes(i)) {
                            unplayedIndices.push(i);
                        }
                    }
                    
                    if (unplayedIndices.length > 0) {
                        // Pick a random unplayed video
                        randomIndex = unplayedIndices[Math.floor(Math.random() * unplayedIndices.length)];
                        playedVideos.push(randomIndex); // Mark as played
                        
                        const video = playlist[randomIndex];
                        player.loadVideoById(video.videoId);
                        updateVideoTitle(video.title);
                        updateThumbnail(video.videoId);
                        updateTrackNumber(video.videoId);
                    } else {
                        // Fallback: just play a different song if something goes wrong
                        if (playlist.length > 1) {
                            do {
                                randomIndex = Math.floor(Math.random() * playlist.length);
                            } while (randomIndex === currentIdx);
                            
                            const video = playlist[randomIndex];
                            player.loadVideoById(video.videoId);
                            updateVideoTitle(video.title);
                            updateThumbnail(video.videoId);
                            updateTrackNumber(video.videoId);
                        }
                    }
                } else { 
                    console.error("[Shuffle] Full playlist data not available!");
                    console.log(`[Shuffle] fullPlaylistData:`, fullPlaylistData);
                    console.log("[Shuffle] Trying to load playlist data...");
                    // Try to populate if not available
                    if (!isPlaylistLoaded) {
                        populatePlaylist();
                    }
                }
            } catch (e) { console.error("[Shuffle] Error shuffling video:", e); }
        } else { 
            console.warn("[Shuffle] Player not ready. player:", !!player, "isPlayerReady:", isPlayerReady, "playlistLoaded:", playlistLoaded); 
        }
    }
    
    if (shuffleButton) {
        shuffleButton.addEventListener('click', () => {
            // Toggle shuffle mode
            shuffleMode = !shuffleMode;
            
            if (shuffleMode) {
                // Enable shuffle mode - turn button blue
                shuffleButton.classList.add('shuffle-active');
                console.log('[Shuffle] Shuffle mode enabled - will shuffle on next track or when current ends');
            } else {
                // Disable shuffle mode - return to normal color
                shuffleButton.classList.remove('shuffle-active');
                playedVideos = []; // Reset played videos list
                console.log('[Shuffle] Shuffle mode disabled');
            }
        });
    }
    // --- End Shuffle Button ---


    // --- Playlist Dropdown Logic ---
    const playlistBtn = document.getElementById('player-playlist-btn');
    const playlistDropdown = document.getElementById('player-playlist-dropdown');
    let isPlaylistLoaded = false;

    async function populatePlaylist() {
        if (!player || !isPlayerReady || isPlaylistLoaded) return;
        
        try {
            const dropdownContent = playlistDropdown.querySelector('.playlist-dropdown-content');
            dropdownContent.innerHTML = '<p class="playlist-loading">Loading playlist...</p>';

            // Check for cached playlist data (24 hour cache)
            const cacheKey = 'youtube_playlist_cache';
            const cacheTimestampKey = 'youtube_playlist_cache_timestamp';
            const cachedData = localStorage.getItem(cacheKey);
            const cacheTimestamp = localStorage.getItem(cacheTimestampKey);
            const cacheMaxAge = 24 * 60 * 60 * 1000; // 24 hours

            let playlistData = null;

            // Use cached data if available and not expired
            if (cachedData && cacheTimestamp) {
                const age = Date.now() - parseInt(cacheTimestamp);
                if (age < cacheMaxAge) {
                    playlistData = JSON.parse(cachedData);
                    fullPlaylistData = playlistData; // Store globally
                }
            }

            // Fetch fresh data if no cache or expired
            if (!playlistData) {
                try {
                    const response = await fetch('/.netlify/functions/youtube-playlist');
                    
                    if (!response.ok) {
                        throw new Error(`API error: ${response.status}`);
                    }
                    
                    const data = await response.json();
                    
                    if (data.error) {
                        console.error('[Playlist] API error:', data.error);
                        throw new Error(data.error);
                    }
                    
                    playlistData = data;
                    
                    // Store globally for track number display
                    fullPlaylistData = data;
                    
                    // Cache the data
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                    localStorage.setItem(cacheTimestampKey, Date.now().toString());
                    
                } catch (apiError) {
                    console.error('[Playlist] Failed to fetch from API, falling back to iframe API:', apiError);
                    
                    // Fallback to old method using iframe API (limited to first 200)
                    const playlist = player.getPlaylist();
                    if (!playlist || playlist.length === 0) {
                        dropdownContent.innerHTML = '<p class="playlist-error">Failed to load playlist</p>';
                        return;
                    }
                    
                    playlistData = {
                        videos: playlist.map((videoId, index) => ({
                            videoId,
                            title: null, // Will fetch titles individually
                            position: index
                        })),
                        totalVideos: playlist.length
                    };
                }
            }

            // Clear loading message
            dropdownContent.innerHTML = '';

            // Create playlist items from fetched data
            playlistData.videos.forEach((video, index) => {
                const item = document.createElement('div');
                item.className = 'playlist-item';
                item.dataset.index = index;
                item.dataset.videoId = video.videoId;
                
                // Create title element
                const titleSpan = document.createElement('span');
                titleSpan.className = 'playlist-item-title';
                titleSpan.textContent = video.title 
                    ? `${index + 1}. ${video.title}`
                    : `${index + 1}. Loading...`;
                
                item.appendChild(titleSpan);

                // Add click handler
                item.addEventListener('click', () => {
                    if (player && isPlayerReady) {
                        clearPendingRestoreFlags();
                        try {
                            // Use loadVideoById instead of playVideoAt for better compatibility with large playlists
                            player.loadVideoById(video.videoId);
                            playlistDropdown.style.display = 'none';
                            
                            // Update UI immediately with cached data
                            if (video.title) {
                                updateVideoTitle(video.title);
                                updateThumbnail(video.videoId);
                                updateTrackNumber(video.videoId);
                            }
                            
                            // Then update playlist active state and fetch fresh details
                            setTimeout(() => {
                                updatePlaylistActiveState();
                                updateVideoDetails();
                            }, 100);
                        } catch(e) {
                            console.error('[Playlist] Error playing video:', e);
                        }
                    }
                });

                dropdownContent.appendChild(item);

                // If title is missing (fallback mode), fetch it via oEmbed
                if (!video.title && video.videoId) {
                    setTimeout(() => {
                        fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.videoId}&format=json`)
                            .then(response => response.ok ? response.json() : null)
                            .then(data => {
                                if (data?.title) {
                                    titleSpan.textContent = `${index + 1}. ${data.title}`;
                                }
                            })
                            .catch(() => {
                                titleSpan.textContent = `${index + 1}. Track ${index + 1}`;
                            });
                    }, index * 10); // Stagger requests to avoid rate limiting
                }
            });

            isPlaylistLoaded = true;
            updatePlaylistActiveState();
            
            // Update track number for currently playing video now that fullPlaylistData is available
            if (player && isPlayerReady) {
                try {
                    const currentVideoData = player.getVideoData();
                    if (currentVideoData && currentVideoData.video_id) {
                        updateTrackNumber(currentVideoData.video_id);
                    }
                } catch (e) {
                    // Silently fail
                }
            }
            
        } catch (e) {
            console.error('[Playlist] Error populating:', e);
            const dropdownContent = playlistDropdown.querySelector('.playlist-dropdown-content');
            dropdownContent.innerHTML = '<p class="playlist-error">Failed to load playlist. Please refresh.</p>';
        }
    }

    // Assign to global variable so it can be called from updateVideoDetails
    updatePlaylistActiveState = function() {
        if (!player || !isPlayerReady || !playlistDropdown) return;
        
        const items = playlistDropdown.querySelectorAll('.playlist-item');
        const currentIndex = player.getPlaylistIndex();
        
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    if (playlistBtn && playlistDropdown) {
        playlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Toggle dropdown visibility
            if (playlistDropdown.style.display === 'none' || !playlistDropdown.style.display) {
                // Try to populate if not already done
                if (!isPlaylistLoaded && player && isPlayerReady && playlistLoaded) {
                    populatePlaylist();
                }
                playlistDropdown.style.display = 'block';
                updatePlaylistActiveState();
            } else {
                playlistDropdown.style.display = 'none';
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (playlistDropdown && playlistDropdown.style.display === 'block') {
                if (!playlistDropdown.contains(e.target) && e.target !== playlistBtn && !playlistBtn.contains(e.target)) {
                    playlistDropdown.style.display = 'none';
                }
            }
        });

        // Populate playlist when it becomes ready
        if (typeof window.onYouTubeIframeAPIReady === 'function') {
            const originalReady = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function() {
                originalReady();
                setTimeout(() => {
                    if (player && isPlayerReady && playlistLoaded && !isPlaylistLoaded) {
                        populatePlaylist();
                    }
                }, 2000);
            };
        }
    }
    // --- End Playlist Dropdown ---


    // --- INITIALIZE FEATURES ON LOAD ---

    // Netlify Identity UI updates are triggered by its own events/initial check.
    // Post fetching is triggered if postsContainer exists (handled above).
    // Music Player initializes itself if musicPlayerContainer exists (handled above).
    // Create Form listeners are added if createPostForm exists (handled above).
    // Quick Links listener is added if elements exist (handled above).
    // Random Song listener is added if button exists (handled above).
    // Video trigger listeners added if element exists (handled above).

    // Initial setup for video trigger text (redundant safety check)
    // Initial setup for video trigger text
    if (videoTriggerInfo && !isVideoActive) {
         videoTriggerInfo.textContent = "ANSI Art (Click to play)";
         videoTriggerInfo.style.cursor = 'pointer';
         videoTriggerInfo.setAttribute('aria-disabled', 'false');
         videoTriggerInfo.classList.remove('video-active');
    }

    function applyDarkMode(isDark) {
        // ... (applyDarkMode function remains the same) ...
        if (isDark) {
            bodyElement.classList.add('dark-mode');
        } else {
            bodyElement.classList.remove('dark-mode');
        }
        if (darkModeToggle) {
           darkModeToggle.checked = isDark;
        }
    }

    function handleDarkModeToggleChange() {
        // ... (handleDarkModeToggleChange function remains the same) ...
         if (!darkModeToggle) return;
        const isDark = darkModeToggle.checked;
        applyDarkMode(isDark);
        try {
            localStorage.setItem(DARK_MODE_KEY, isDark ? 'dark' : 'light');
        } catch (e) {
            console.warn("Could not save dark mode preference to localStorage:", e);
        }
    }

    // --- Dark Mode Logic ---
    const darkModeToggle = document.getElementById('dark-mode-toggle'); // Keep this one
    const bodyElement = document.body;
    const DARK_MODE_KEY = 'darkModePreference_v1';

    // Initialize Dark Mode on Load
    if (darkModeToggle) {
        let savedPreference = null;
        try {
            savedPreference = localStorage.getItem(DARK_MODE_KEY);
        } catch (e) {
            console.warn("Could not read dark mode preference from localStorage:", e);
        }

        // Default to light mode unless 'dark' is explicitly saved.
        const initialDarkMode = savedPreference === 'dark';
        applyDarkMode(initialDarkMode);

        // Add the change listener
        darkModeToggle.addEventListener('change', handleDarkModeToggleChange);

        // Prevent dropdown from closing when clicking the dark mode label/switch
        const darkModeLabel = document.querySelector('.dropdown-item-label[for="dark-mode-toggle"]');
        if (darkModeLabel) {
            darkModeLabel.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

    } else {
         // console.log("Dark mode toggle element not found.");
    }
    // --- End Dark Mode Logic --


    // --- End Language Submenu Logic ---


    console.log("Consolidated script.js: DOM Content Loaded setup finished.");


}

// --- Main Entry Point ---
document.addEventListener('DOMContentLoaded', initializePage);