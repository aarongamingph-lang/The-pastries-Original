// This array holds all songs loaded from Supabase.
const songs = [];

// Questions shown after the name screen.
function getQuestions(name) {
    return [
        {
            prompt: `Hi, ${name}, how are you?`,
            meta: "Any answer is okay here.",
            answers: [
                { label: "a", text: "I'm fine", correct: true },
                { label: "b", text: "Good", correct: true },
                { label: "c", text: "Not well", correct: true },
                { label: "d", text: "I don't feel so good", correct: true }
            ]
        },
        {
            prompt: `${name}, do you feel tired?`,
            meta: "Answer however you really feel.",
            answers: [
                { label: "a", text: "Not at all", correct: true },
                { label: "b", text: "A little", correct: true },
                { label: "c", text: "Yes, I am", correct: true },
                { label: "d", text: "Very tired", correct: true }
            ]
        },
        {
            prompt: `${name}, do you feel stressed?`,
            meta: "It's alright just be honest",
            answers: [
                { label: "a", text: "Not really", correct: true },
                { label: "b", text: "A little bit", correct: true },
                { label: "c", text: "Yes", correct: true },
                { label: "d", text: "Very stressed", correct: true }
            ]
        },
        {
            prompt: `${name}, are you happy?`,
            meta: "Choose the one that feels honest to you.",
            answers: [
                { label: "a", text: "Yes, very happy", correct: true },
                { label: "b", text: "Kind of", correct: true },
                { label: "c", text: "Not really", correct: true },
                { label: "d", text: "No", correct: false }
            ]
        },
        {
            prompt: `${name}, do you wanna relax?`,
            meta: "Pick the answer that lets you continue.",
            finalQuestion: true,
            answers: [
                { label: "a", text: "Yes, I need it", correct: true },
                { label: "b", text: "Maybe later", correct: false },
                { label: "c", text: "Not really", correct: false },
                { label: "d", text: "No", correct: false }
            ]
        }
    ];
}

// HTML elements used by the JavaScript.
const particles = document.getElementById("particles");
const lockScreen = document.getElementById("lockScreen");
const quizScreen = document.getElementById("quizScreen");
const adminPasswordScreen = document.getElementById("adminPasswordScreen");
const landscapeScreen = document.getElementById("landscapeScreen");
const mainPage = document.getElementById("mainPage");
const lockForm = document.getElementById("lockForm");
const nameInput = document.getElementById("nameInput");
const unlockButton = document.getElementById("unlockButton");
const lockMessage = document.getElementById("lockMessage");
const adminPasswordForm = document.getElementById("adminPasswordForm");
const adminPasswordInput = document.getElementById("adminPasswordInput");
const adminPasswordButton = document.getElementById("adminPasswordButton");
const adminPasswordMessage = document.getElementById("adminPasswordMessage");
const questionTitle = document.getElementById("questionTitle");
const questionMeta = document.getElementById("questionMeta");
const quizProgress = document.getElementById("quizProgress");
const choices = document.getElementById("choices");
const quizMessage = document.getElementById("quizMessage");
const proceedMainButton = document.getElementById("proceedMainButton");
const floatingNowPlaying = document.getElementById("floatingNowPlaying");
const floatingNowPlayingTitle = document.getElementById("floatingNowPlayingTitle");
const floatingNowPlayingTime = document.getElementById("floatingNowPlayingTime");
const mainPageContent = document.querySelector(".main-page-content");
const mainPageTitle = document.querySelector(".main-page-title");
const bouncingMessage = document.getElementById("bouncingMessage");
const audioPlayer = document.getElementById("audioPlayer");
const audioStatus = document.getElementById("audioStatus");
const playerToggle = document.getElementById("playerToggle");
const playerWrap = document.getElementById("playerWrap");
const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");
const settingsClose = document.getElementById("settingsClose");
const settingsTabs = Array.from(document.querySelectorAll(".settings-tab"));
const settingsSections = Array.from(document.querySelectorAll(".settings-section"));
const userAdminTab = document.getElementById("userAdminTab");
const userAdminSection = document.getElementById("userAdminSection");
const savedUserList = document.getElementById("savedUserList");
const brightnessRange = document.getElementById("brightnessRange");
const brightnessValue = document.getElementById("brightnessValue");
const volumeRange = document.getElementById("volumeRange");
const volumeValue = document.getElementById("volumeValue");
const audioUploadInput = document.getElementById("audioUploadInput");
const audioUploadLabel = document.getElementById("audioUploadLabel");
const audioHelp = document.getElementById("audioHelp");
const themeCards = Array.from(document.querySelectorAll(".theme-card"));
const playerProgress = document.getElementById("playerProgress");
const playerProgressFill = document.getElementById("playerProgressFill");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerDuration = document.getElementById("playerDuration");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");
const playerListToggle = document.getElementById("playerListToggle");
const playerPlaylistPanel = document.getElementById("playerPlaylistPanel");
const playerPlaylistList = document.getElementById("playerPlaylistList");
const playerSearchInput = document.getElementById("playerSearchInput");
const playerVolumeToggle = document.getElementById("playerVolumeToggle");
const playerVolumePanel = document.getElementById("playerVolumePanel");
const playerVolumeSlider = document.getElementById("playerVolumeSlider");
const prevButton = document.getElementById("prevButton");
const playPauseButton = document.getElementById("playPauseButton");
const nextButton = document.getElementById("nextButton");
const loopButton = document.getElementById("loopButton");

const SUPABASE_URL = "https://qptgeftudyxqdlmvvotk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CJsr9sctO5mrbuVmG4G3jA_YDXnkynM";
const SUPABASE_BUCKET = "songs";
const SUPABASE_USERS_TABLE = "site_users";
const supabaseClient = window.supabase
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
    : null;
const ADMIN_PASSWORD = "1234";

// Special-person settings.
// Any name starting with V uses this.
const SPECIAL_PERSON_CONFIG = {
    themeFile: "special.jpg",
    preferredSongMatches: ["i like you so much"]
};

// App state values that change while the page is running.
let currentQuestionIndex = 0;
let currentUser = "";
let currentSongIndex = 0;
let currentQuestions = [];
let finalQuestionWarningIndex = 0;
let audioAutoplayPending = false;
let bouncingTextIndex = 0;
let bouncingTextStartTimeout = null;
let bouncingTextAnimationFrame = null;
let bouncingTextX = 36;
let bouncingTextY = 120;
let bouncingVelocityX = 1.05;
let bouncingVelocityY = 0.92;
let bouncingTextTransitioning = false;
let audioStatusTimeout = null;
let playerAutoCloseTimeout = null;
let mobileBouncingTextTimeout = null;
let mobileNowPlayingTimeout = null;
let savedUsersCache = [];
let savedUsersClockInterval = null;
let savedUsersLastReloadAt = 0;

const finalQuestionWarnings = [
    "Are you sure?",
    "Are you really sure?",
    "You suree???",
    "Still sure?",
    "Try the first one.",
    "you'l like the first one",
    "You really sure????",
    "Come on atleast try??"
];

// Shows small text messages in the audio settings area.
function setAudioStatus(message, tone = "neutral", autoClearMs = 0) {
    clearTimeout(audioStatusTimeout);
    audioStatus.textContent = message;
    audioStatus.classList.remove("success", "error", "visible");

    if (tone === "success" || tone === "error") {
        audioStatus.classList.add(tone);
    }

    if (message) {
        audioStatus.classList.add("visible");
    }

    if (autoClearMs > 0) {
        audioStatusTimeout = setTimeout(() => {
            audioStatus.classList.remove("visible", "success", "error");
            setTimeout(() => {
                if (!audioStatus.classList.contains("visible")) {
                    audioStatus.textContent = "";
                }
            }, 320);
        }, autoClearMs);
    }
}

// Turns the current typed name into a simple lowercase value.
function getCurrentUserKey() {
    return currentUser.trim().toLowerCase();
}

// Cleans a name so matching is easier.
function normalizeSpecialName(name) {
    return String(name || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z]/g, "");
}

// Used for unique saved-name checking.
function normalizeSavedUserName(name) {
    return String(name || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

// Nico is the admin who can open the user list.
function isAdminUser(name = currentUser) {
    return normalizeSavedUserName(name) === "nico";
}

// Any name starting with V becomes a special person.
function isSpecialPersonName(name) {
    const normalizedName = normalizeSpecialName(name);
    return normalizedName.startsWith("v");
}

// Returns the special settings if the current person is special.
function getSpecialPersonConfig() {
    const normalizedName = normalizeSpecialName(currentUser);

    if (!normalizedName) {
        return null;
    }

    if (isSpecialPersonName(normalizedName)) {
        return SPECIAL_PERSON_CONFIG;
    }
    
    return null;
}

async function saveUserIfNew(name) {
    const cleanName = String(name || "").trim();
    const normalizedName = normalizeSavedUserName(cleanName);

    if (!cleanName || !normalizedName) {
        return;
    }

    if (!supabaseClient) {
        return;
    }

    await supabaseClient
        .from(SUPABASE_USERS_TABLE)
        .delete()
        .eq("normalized_name", normalizedName);

    const { error } = await supabaseClient
        .from(SUPABASE_USERS_TABLE)
        .insert({
            name: cleanName,
            normalized_name: normalizedName
        });

    if (error && !/duplicate key|unique/i.test(error.message)) {
        console.error("Could not save user:", error.message);
        return;
    }

    await loadSavedUsers();
}

async function removeSavedUser(nameToRemove) {
    const normalizedTarget = normalizeSavedUserName(nameToRemove);

    if (!normalizedTarget || !supabaseClient) {
        return;
    }

    const { error } = await supabaseClient
        .from(SUPABASE_USERS_TABLE)
        .delete()
        .eq("normalized_name", normalizedTarget);

    if (error) {
        console.error("Could not remove user:", error.message);
        return;
    }

    await loadSavedUsers();
}

async function loadSavedUsers() {
    if (!supabaseClient) {
        savedUsersCache = [];
        return;
    }

    const { data, error } = await supabaseClient
        .from(SUPABASE_USERS_TABLE)
        .select("name, normalized_name, created_at")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Could not load users:", error.message);
        savedUsersCache = [];
        return;
    }

    savedUsersCache = (data || []).map((savedUser) => ({
        name: savedUser.name,
        normalizedName: savedUser.normalized_name,
        createdAt: savedUser.created_at
    }));
    savedUsersLastReloadAt = Date.now();
}

function formatSavedUserTime(createdAt) {
    const now = Date.now();
    const createdTime = createdAt ? new Date(createdAt).getTime() : now;
    const elapsedMs = Math.max(0, now - createdTime);
    const elapsedSeconds = Math.floor(elapsedMs / 1000);
    const snappedSeconds = Math.floor(elapsedSeconds / 15) * 15;

    if (snappedSeconds < 60) {
        return `${snappedSeconds}s ago`;
    }

    const elapsedMinutes = Math.floor(snappedSeconds / 60);

    if (elapsedMinutes < 60) {
        return `${elapsedMinutes}m ago`;
    }

    const elapsedHours = Math.floor(elapsedMinutes / 60);

    if (elapsedHours < 24) {
        return `${elapsedHours}h ago`;
    }

    const elapsedDays = Math.floor(elapsedHours / 24);
    return `${elapsedDays}d ago`;
}

function renderSavedUsers() {
    if (!savedUserList) {
        return;
    }

    savedUserList.innerHTML = "";
    const savedUsers = savedUsersCache;

    if (savedUsers.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "saved-user-empty";
        emptyState.textContent = "No saved users yet.";
        savedUserList.appendChild(emptyState);
        return;
    }

    savedUsers.forEach((savedUser) => {
        const item = document.createElement("div");
        item.className = "saved-user-item";

        const nameText = document.createElement("span");
        nameText.className = "saved-user-name";
        nameText.textContent = savedUser.name;

        const timeText = document.createElement("span");
        timeText.className = "saved-user-time";
        timeText.textContent = formatSavedUserTime(savedUser.createdAt);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "saved-user-remove";
        removeButton.textContent = "X";
        removeButton.addEventListener("click", async () => {
            await removeSavedUser(savedUser.name);
            renderSavedUsers();
        });

        const infoWrap = document.createElement("div");
        infoWrap.className = "saved-user-info";
        infoWrap.appendChild(nameText);
        infoWrap.appendChild(timeText);

        item.appendChild(infoWrap);
        item.appendChild(removeButton);
        savedUserList.appendChild(item);
    });
}

async function refreshAdminUsersView() {
    if (!isAdminUser()) {
        return;
    }

    await loadSavedUsers();
    renderSavedUsers();
}

function startSavedUsersClock() {
    clearInterval(savedUsersClockInterval);
    savedUsersClockInterval = setInterval(async () => {
        if (!isAdminUser()) {
            return;
        }

        if (Date.now() - savedUsersLastReloadAt >= 15000) {
            await loadSavedUsers();
        }

        if (userAdminSection.classList.contains("active")) {
            renderSavedUsers();
        }
    }, 1000);
}

async function updateAdminSettingsView() {
    const adminIsActive = isAdminUser();

    userAdminTab.classList.toggle("visible", adminIsActive);
    userAdminSection.classList.toggle("admin-active", adminIsActive);
    audioUploadInput.disabled = !adminIsActive;
    audioUploadLabel.classList.toggle("disabled", !adminIsActive);
    audioUploadLabel.setAttribute("aria-disabled", String(!adminIsActive));
    audioHelp.textContent = adminIsActive
        ? "Pick MP3 files from your phone or computer and they will be uploaded to Supabase storage so they can be used again later."
        : "Only Nico can add songs here.";

    if (!adminIsActive && userAdminSection.classList.contains("active")) {
        setSettingsSection("settings");
    }

    if (adminIsActive) {
        await refreshAdminUsersView();
    }
}

// EASY EDIT:
// Add or remove bouncing texts here.
const bouncingTexts = `
RELAX
WAG ISIPIN ANG PROBLEMA
KULL KA LANG
WELCOME
KOYAA
ATEH
DONUT GIVE UP
KAYA NA LANG
IYAK SA KORNER
:3
By: NICO
YOURS TRULY
ENJOY!!
EIRELAV
IHAM
ARAON
EIMRE
LEINORR
RLLECYI
AYM FAYN
T-T
HAKDOG
HALOWBLOCK
ALDEAN NEILL
YOU ARE SPECIAL
`
    .trim()
    .split("\n")
    .map((text) => text.trim())
    .filter(Boolean);

// Creates the floating dots in the background.
function buildParticles(total) {
    for (let index = 0; index < total; index += 1) {
        const dot = document.createElement("span");
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 12 + 10;
        const delay = Math.random() * -18;
        const left = Math.random() * 100;

        dot.className = "particle";
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${left}%`;
        dot.style.animationDuration = `${duration}s`;
        dot.style.animationDelay = `${delay}s`;
        dot.style.opacity = (Math.random() * 0.7 + 0.15).toFixed(2);

        particles.appendChild(dot);
    }
}

// Switches from one screen to another.
function setActiveScreen(screenToShow) {
    [lockScreen, quizScreen, adminPasswordScreen, landscapeScreen, mainPage].forEach((screen) => {
        screen.classList.add("hidden");
        screen.classList.remove("active");
    });

    document.body.classList.remove("main-page-active");
    stopBouncingTextSequence();
    screenToShow.classList.remove("hidden");
    screenToShow.classList.add("active");

    if (screenToShow === mainPage) {
        document.body.classList.add("main-page-active");
        restartMainPageTextSequence();
        playerWrap.classList.remove("open");
        playerWrap.classList.remove("song-list-open");
        playerWrap.classList.remove("volume-open");
        playerWrap.classList.remove("idle-ui");
        floatingNowPlaying.classList.remove("visible");
        settingsPanel.classList.remove("open");
        playerToggle.classList.remove("hidden");

        if (songs.length > 0) {
            setCurrentSong(currentSongIndex < songs.length ? currentSongIndex : 0, true);
        } else if (audioPlayer.src) {
            attemptAudioPlay();
        } else {
            nowPlayingTitle.textContent = "Loading songs...";
        }
    }
}

// Picks a random song from the loaded songs.
function chooseRandomSong() {
    if (songs.length === 0) {
        return false;
    }

    currentSongIndex = Math.floor(Math.random() * songs.length);
    return true;
}

function isMobilePlayerLayout() {
    return window.matchMedia("(max-width: 932px)").matches;
}

async function requestLandscapeFullscreenIfMobile() {
    const isLikelyMobile = window.matchMedia("(max-width: 932px), (pointer: coarse)").matches;

    if (!isLikelyMobile) {
        return;
    }

    const fullscreenTarget = document.documentElement;
    const requestFullscreen =
        fullscreenTarget.requestFullscreen ||
        fullscreenTarget.webkitRequestFullscreen ||
        fullscreenTarget.msRequestFullscreen;

    try {
        if (!document.fullscreenElement && typeof requestFullscreen === "function") {
            await requestFullscreen.call(fullscreenTarget);
        }
    } catch {
        // Ignore fullscreen failures; some mobile browsers restrict this.
    }

    try {
        if (screen.orientation && typeof screen.orientation.lock === "function") {
            await screen.orientation.lock("landscape");
        }
    } catch {
        // Ignore orientation lock failures; support varies across mobile browsers.
    }
}

// Formats seconds like 1:23.
function formatTime(totalSeconds) {
    if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
        return "0:00";
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

// Changes the volume icon based on the current volume.
function updateVolumeButton() {
    if (audioPlayer.volume <= 0.01) {
        playerVolumeToggle.textContent = "🔇";
    } else if (audioPlayer.volume < 0.5) {
        playerVolumeToggle.textContent = "🔉";
    } else {
        playerVolumeToggle.textContent = "🔊";
    }
}

// Updates the center idle music text.
function updateFloatingNowPlaying() {
    floatingNowPlayingTitle.textContent = nowPlayingTitle.textContent || "Loading songs...";
    floatingNowPlayingTime.textContent = `${formatTime(audioPlayer.currentTime)} / ${formatTime(audioPlayer.duration)}`;
}

// Draws the playlist items inside the music player.
function renderPlayerPlaylist(filterText = "") {
    const normalizedFilter = filterText.trim().toLowerCase();
    playerPlaylistList.innerHTML = "";

    const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(normalizedFilter)
    );

    if (filteredSongs.length === 0) {
        const empty = document.createElement("div");
        empty.className = "player-playlist-empty";
        empty.textContent = normalizedFilter ? "No matching songs found." : "No uploaded songs yet.";
        playerPlaylistList.appendChild(empty);
        return;
    }

    filteredSongs.forEach((song) => {
        const actualIndex = songs.findIndex((item) => item.file === song.file);
        const item = document.createElement("button");
        item.type = "button";
        item.className = "player-playlist-item";

        if (actualIndex === currentSongIndex && audioPlayer.src === song.file) {
            item.classList.add("active");
        }

        const textWrap = document.createElement("span");
        textWrap.className = "player-playlist-text";
        textWrap.innerHTML = `<span>♫</span><span class="player-playlist-name"></span>`;
        textWrap.querySelector(".player-playlist-name").textContent = song.title;

        const heart = document.createElement("span");
        heart.className = "player-playlist-heart";
        heart.textContent = "♡";

        item.appendChild(textWrap);
        item.appendChild(heart);
        item.addEventListener("click", () => {
            setCurrentSong(actualIndex, true);
            playerWrap.classList.remove("song-list-open");
            resetPlayerAutoCloseTimer();
        });

        playerPlaylistList.appendChild(item);
    });
}

function restartMainPageTextSequence() {
    const layout = getBouncingLayout();

    mainPage.classList.remove("text-sequence-active");
    bouncingMessage.classList.remove("visible");
    bouncingMessage.textContent = "";
    bouncingTextIndex = 0;
    bouncingTextX = layout.startX;
    bouncingTextY = layout.startY;
    bouncingVelocityX = layout.velocityX;
    bouncingVelocityY = layout.velocityY;
    bouncingTextTransitioning = false;

    void mainPageTitle.offsetWidth;
    mainPage.classList.add("text-sequence-active");

    clearTimeout(bouncingTextStartTimeout);
    bouncingTextStartTimeout = setTimeout(() => {
        startBouncingTextSequence();
    }, 10800);
}

function stopBouncingTextSequence() {
    clearTimeout(bouncingTextStartTimeout);
    clearTimeout(mobileBouncingTextTimeout);
    cancelAnimationFrame(bouncingTextAnimationFrame);
    bouncingMessage.classList.remove("visible");
    bouncingMessage.textContent = "";
}

function startBouncingTextSequence() {
    if (window.matchMedia("(max-width: 932px)").matches) {
        startMobileRandomTextSequence();
        return;
    }

    showBouncingText(bouncingTexts[bouncingTextIndex]);
    animateBouncingText();
}

function showBouncingText(text) {
    bouncingMessage.textContent = text;
    bouncingMessage.classList.add("visible");
}

function getBouncingLayout() {
    const isPhonePortrait = window.matchMedia("(max-width: 768px) and (orientation: portrait)").matches;
    const isPhoneLandscape = window.matchMedia("(max-width: 932px) and (orientation: landscape)").matches;

    if (isPhonePortrait) {
        return {
            startX: 10,
            startY: 58,
            velocityX: 0.68,
            velocityY: 0.58,
            minX: 4,
            minY: 44,
            maxPaddingX: 4,
            maxPaddingY: 10
        };
    }

    if (isPhoneLandscape) {
        return {
            startX: 10,
            startY: 40,
            velocityX: 0.82,
            velocityY: 0.64,
            minX: 4,
            minY: 32,
            maxPaddingX: 6,
            maxPaddingY: 8
        };
    }

    return {
        startX: 36,
        startY: 120,
        velocityX: 1.05,
        velocityY: 0.92,
        minX: 12,
        minY: 96,
        maxPaddingX: 12,
        maxPaddingY: 96
    };
}

function setRandomMobileTextPosition() {
    const containerRect = mainPageContent.getBoundingClientRect();
    const messageRect = bouncingMessage.getBoundingClientRect();
    const maxX = Math.max(8, containerRect.width - messageRect.width - 8);
    const maxY = Math.max(52, containerRect.height - messageRect.height - 12);
    const nextX = Math.random() * maxX;
    const nextY = 42 + Math.random() * Math.max(0, maxY - 42);

    bouncingMessage.style.transform = `translate(${nextX}px, ${nextY}px)`;
}

function startMobileRandomTextSequence() {
    const showNextText = () => {
        if (!mainPage.classList.contains("active")) {
            return;
        }

        if (bouncingTexts.length > 1) {
            let nextIndex = bouncingTextIndex;

            while (nextIndex === bouncingTextIndex) {
                nextIndex = Math.floor(Math.random() * bouncingTexts.length);
            }

            bouncingTextIndex = nextIndex;
        }

        bouncingMessage.textContent = bouncingTexts[bouncingTextIndex];
        setRandomMobileTextPosition();
        bouncingMessage.classList.add("visible");

        mobileBouncingTextTimeout = setTimeout(() => {
            bouncingMessage.classList.remove("visible");

            mobileBouncingTextTimeout = setTimeout(showNextText, 550);
        }, 3000);
    };

    showNextText();
}

function cycleBouncingText() {
    if (bouncingTextTransitioning) {
        return;
    }

    bouncingTextTransitioning = true;
    bouncingMessage.classList.remove("visible");

    setTimeout(() => {
        if (bouncingTexts.length > 1) {
            let nextIndex = bouncingTextIndex;

            while (nextIndex === bouncingTextIndex) {
                nextIndex = Math.floor(Math.random() * bouncingTexts.length);
            }

            bouncingTextIndex = nextIndex;
        }

        bouncingMessage.textContent = bouncingTexts[bouncingTextIndex];
        bouncingMessage.classList.add("visible");
        bouncingTextTransitioning = false;
    }, 700);
}

function animateBouncingText() {
    cancelAnimationFrame(bouncingTextAnimationFrame);

    const step = () => {
        if (!mainPage.classList.contains("active")) {
            return;
        }

        const layout = getBouncingLayout();
        const containerRect = mainPageContent.getBoundingClientRect();
        const messageRect = bouncingMessage.getBoundingClientRect();
        const minX = layout.minX;
        const minY = layout.minY;
        const maxX = Math.max(minX, containerRect.width - messageRect.width - layout.maxPaddingX);
        const maxY = Math.max(minY, containerRect.height - messageRect.height - layout.maxPaddingY);
        let hitX = false;
        let hitY = false;

        bouncingTextX += bouncingVelocityX;
        bouncingTextY += bouncingVelocityY;

        if (bouncingTextX <= minX || bouncingTextX >= maxX) {
            bouncingVelocityX *= -1;
            bouncingTextX = Math.min(Math.max(bouncingTextX, minX), maxX);
            hitX = true;
        }

        if (bouncingTextY <= minY || bouncingTextY >= maxY) {
            bouncingVelocityY *= -1;
            bouncingTextY = Math.min(Math.max(bouncingTextY, minY), maxY);
            hitY = true;
        }

        if (hitX || hitY) {
            cycleBouncingText();
        }

        bouncingMessage.style.transform = `translate(${bouncingTextX}px, ${bouncingTextY}px)`;
        bouncingTextAnimationFrame = requestAnimationFrame(step);
    };

    bouncingTextAnimationFrame = requestAnimationFrame(step);
}

function attemptAudioPlay() {
    if (!audioPlayer.src) {
        return;
    }

    const playAttempt = audioPlayer.play();

    if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt
            .then(() => {
                audioAutoplayPending = false;
                updatePlayPauseButton();
            })
            .catch(() => {
                audioAutoplayPending = true;
                updatePlayPauseButton();
            });
    } else {
        audioAutoplayPending = false;
        updatePlayPauseButton();
    }
}

function setupAudioUnlock() {
    const unlockAudio = () => {
        if (audioAutoplayPending) {
            attemptAudioPlay();
        }
    };

    document.addEventListener("pointerdown", unlockAudio);
    document.addEventListener("touchstart", unlockAudio, { passive: true });
    document.addEventListener("keydown", unlockAudio);
}

function applyTheme(fileName) {
    document.documentElement.style.setProperty(
        "--main-page-background",
        `url("${fileName}")`
    );
}

// Highlights the currently selected theme card.
function setActiveThemeCard(fileName) {
    themeCards.forEach((card) => {
        card.classList.toggle("active", card.dataset.themeFile === fileName);
    });
}

// Applies the background and updates the active theme card.
function applyThemeSelection(fileName) {
    applyTheme(fileName);
    setActiveThemeCard(fileName);
}

// Uses the special theme if the current user is special.
function applyUserSpecificTheme() {
    const specialConfig = getSpecialPersonConfig();
    const themeFile = specialConfig ? specialConfig.themeFile : "background.jpg";
    applyThemeSelection(themeFile);
}

// Tries to find the special person's preferred song.
function findPreferredSongIndex() {
    const specialConfig = getSpecialPersonConfig();

    if (!specialConfig || songs.length === 0) {
        return -1;
    }

    return songs.findIndex((song) => {
        const normalizedTitle = song.title.toLowerCase();
        return specialConfig.preferredSongMatches.some((phrase) =>
            normalizedTitle.includes(phrase)
        );
    });
}

// Theme button click behavior.
function setupThemes() {
    themeCards.forEach((card) => {
        card.addEventListener("click", () => {
            applyThemeSelection(card.dataset.themeFile);
        });
    });
}

// Adds one loaded song into the playlist array.
function addSongToPlayer(song) {
    const alreadyExists = songs.some((item) => item.file === song.file);

    if (!alreadyExists) {
        songs.push(song);
        renderPlayerPlaylist(playerSearchInput.value);
    }
}

// Makes the player hide into its idle state after some time.
function closePlayerUi() {
    clearTimeout(playerAutoCloseTimeout);
    clearTimeout(mobileNowPlayingTimeout);
    playerWrap.classList.remove("open", "song-list-open", "volume-open", "idle-ui");
    floatingNowPlaying.classList.remove("visible");
    playerToggle.classList.remove("hidden");

    if (isMobilePlayerLayout() && mainPage.classList.contains("active")) {
        mobileNowPlayingTimeout = setTimeout(() => {
            updateFloatingNowPlaying();
            floatingNowPlaying.classList.add("visible");
        }, 5000);
    }
}

function resetPlayerAutoCloseTimer() {
    clearTimeout(playerAutoCloseTimeout);
    clearTimeout(mobileNowPlayingTimeout);
    playerWrap.classList.remove("idle-ui");
    floatingNowPlaying.classList.remove("visible");

    if (!mainPage.classList.contains("active") || !playerWrap.classList.contains("open")) {
        return;
    }

    if (isMobilePlayerLayout()) {
        return;
    }

    playerAutoCloseTimeout = setTimeout(() => {
        playerWrap.classList.remove("song-list-open");
        playerWrap.classList.remove("volume-open");
        playerWrap.classList.add("idle-ui");
        updateFloatingNowPlaying();
        floatingNowPlaying.classList.add("visible");
    }, 5200);
}

// Loads songs from the Supabase bucket.
async function loadSupabaseSongs() {
    if (!supabaseClient) {
        setAudioStatus("Supabase client did not load.", "error");
        return;
    }

    songs.length = 0;
    audioPlayer.removeAttribute("src");
    audioPlayer.load();
    nowPlayingTitle.textContent = "Loading songs...";
    renderPlayerPlaylist(playerSearchInput.value);

    const { data, error } = await supabaseClient.storage
        .from(SUPABASE_BUCKET)
        .list("", { limit: 100, offset: 0 });

    if (error) {
        setAudioStatus(`Could not load online songs: ${error.message}`, "error");
        return;
    }

    let loadedCount = 0;

    data
        .filter((file) => file.name && /\.mp3$/i.test(file.name))
        .forEach((file) => {
            const { data: publicUrlData } = supabaseClient.storage
                .from(SUPABASE_BUCKET)
                .getPublicUrl(file.name);

            addSongToPlayer(
                {
                    title: file.name.replace(/^\d+-/, "").replace(/\.mp3$/i, ""),
                    file: publicUrlData.publicUrl
                    },
                    true
                );
            loadedCount += 1;
        });

    if (loadedCount > 0) {
        if (songs.length > 0) {
            const preferredSongIndex = findPreferredSongIndex();
            currentSongIndex = preferredSongIndex >= 0 ? preferredSongIndex : 0;
            setCurrentSong(currentSongIndex, mainPage.classList.contains("active"));
        }
        setAudioStatus("Online songs loaded.", "success", 2200);
    } else {
        nowPlayingTitle.textContent = "Add a song to begin";
        setAudioStatus("No uploaded songs found yet.");
    }
}

// Uploads one MP3 file to Supabase.
async function uploadSongToSupabase(file) {
    if (!supabaseClient) {
        setAudioStatus("Supabase client did not load.", "error");
        return null;
    }

    const safeName = `${Date.now()}-${file.name}`;
    setAudioStatus(`Uploading ${file.name}...`);

    const { error } = await supabaseClient.storage
        .from(SUPABASE_BUCKET)
        .upload(safeName, file, {
            contentType: file.type || "audio/mpeg",
            upsert: false
        });

    if (error) {
        setAudioStatus(`Upload failed: ${error.message}`, "error");
        return null;
    }

    const { data: publicUrlData } = supabaseClient.storage
        .from(SUPABASE_BUCKET)
        .getPublicUrl(safeName);

    setAudioStatus(`Successfully uploaded: ${file.name}`, "success", 2800);

    return {
        title: file.name.replace(/\.mp3$/i, ""),
        file: publicUrlData.publicUrl
    };
}

// Switches the visible tab inside the settings panel.
function setSettingsSection(sectionName) {
    settingsTabs.forEach((tab) => {
        const matchesCurrentSection = tab.dataset.settingsTab === sectionName;
        const isHiddenAdminTab = tab === userAdminTab && !userAdminTab.classList.contains("visible");
        tab.classList.toggle("active", matchesCurrentSection && !isHiddenAdminTab);
    });

    settingsSections.forEach((section) => {
        const matchesCurrentSection = section.dataset.settingsSection === sectionName;
        const isHiddenAdminSection = section === userAdminSection && !userAdminTab.classList.contains("visible");
        section.classList.toggle("active", matchesCurrentSection && !isHiddenAdminSection);
    });
}

// Wires all settings controls.
function setupSettingsPanel() {
    updateAdminSettingsView();

    settingsTabs.forEach((tab) => {
        tab.addEventListener("click", async () => {
            setSettingsSection(tab.dataset.settingsTab);

            if (tab.dataset.settingsTab === "users" && isAdminUser()) {
                await refreshAdminUsersView();
            }
        });
    });

    brightnessRange.addEventListener("input", () => {
        const brightness = Number(brightnessRange.value);
        document.documentElement.style.setProperty("--main-page-brightness", brightness);
        brightnessValue.textContent = `${Math.round(brightness * 100)}%`;
    });

    volumeRange.addEventListener("input", () => {
        const volume = Number(volumeRange.value);
        audioPlayer.volume = volume;
        playerVolumeSlider.value = String(volume);
        volumeValue.textContent = `${Math.round(volume * 100)}%`;
        updateVolumeButton();
    });

    audioPlayer.volume = Number(volumeRange.value);
    playerVolumeSlider.value = String(audioPlayer.volume);
    volumeValue.textContent = `${Math.round(audioPlayer.volume * 100)}%`;
    brightnessValue.textContent = `${Math.round(Number(brightnessRange.value) * 100)}%`;
    updateVolumeButton();
    setAudioStatus("Choose an MP3 to upload.", "neutral", 2200);

    audioUploadInput.addEventListener("change", async () => {
        if (!isAdminUser()) {
            setAudioStatus("Only Nico can add songs.", "error", 2200);
            audioUploadInput.value = "";
            return;
        }

        const files = Array.from(audioUploadInput.files || []);

        for (const file of files) {
            const song = await uploadSongToSupabase(file);

            if (song) {
                addSongToPlayer(song);
            }
        }

        if (files.length > 0) {
            currentSongIndex = songs.length - 1;
            setCurrentSong(currentSongIndex, true);
            setSettingsSection("audio");
        }

        audioUploadInput.value = "";
    });
}

// Wires all music player controls.
function setupSongs() {
    nowPlayingTitle.textContent = "Loading songs...";
    playerCurrentTime.textContent = "0:00";
    playerDuration.textContent = "0:00";
    updateVolumeButton();

    playerToggle.addEventListener("click", () => {
        playerWrap.classList.add("open");
        playerWrap.classList.remove("idle-ui");
        playerToggle.classList.add("hidden");
        resetPlayerAutoCloseTimer();
    });

    settingsToggle.addEventListener("click", () => {
        settingsPanel.classList.toggle("open");
    });

    settingsClose.addEventListener("click", () => {
        settingsPanel.classList.remove("open");
    });

    playerListToggle.addEventListener("click", () => {
        playerWrap.classList.toggle("song-list-open");
        playerWrap.classList.remove("volume-open");
        resetPlayerAutoCloseTimer();
    });

    playerVolumeToggle.addEventListener("click", () => {
        playerWrap.classList.toggle("volume-open");
        playerWrap.classList.remove("song-list-open");
        resetPlayerAutoCloseTimer();
    });

    playerVolumeSlider.addEventListener("input", () => {
        const volume = Number(playerVolumeSlider.value);
        audioPlayer.volume = volume;
        volumeRange.value = String(volume);
        volumeValue.textContent = `${Math.round(volume * 100)}%`;
        updateVolumeButton();
        resetPlayerAutoCloseTimer();
    });

    playerSearchInput.addEventListener("input", () => {
        renderPlayerPlaylist(playerSearchInput.value);
    });

    playPauseButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            attemptAudioPlay();
        } else {
            audioPlayer.pause();
            audioAutoplayPending = false;
            updatePlayPauseButton();
        }

        resetPlayerAutoCloseTimer();
    });

    prevButton.addEventListener("click", () => {
        if (songs.length === 0) {
            return;
        }

        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        setCurrentSong(currentSongIndex, true);
        resetPlayerAutoCloseTimer();
    });

    nextButton.addEventListener("click", () => {
        if (songs.length === 0) {
            return;
        }

        currentSongIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSong(currentSongIndex, true);
        resetPlayerAutoCloseTimer();
    });

    loopButton.addEventListener("click", () => {
        audioPlayer.loop = !audioPlayer.loop;
        loopButton.classList.toggle("is-active", audioPlayer.loop);
        resetPlayerAutoCloseTimer();
    });

    audioPlayer.addEventListener("timeupdate", updateProgressBar);
    audioPlayer.addEventListener("loadedmetadata", updateProgressBar);
    audioPlayer.addEventListener("play", updatePlayPauseButton);
    audioPlayer.addEventListener("pause", updatePlayPauseButton);
    audioPlayer.addEventListener("ended", () => {
        if (!audioPlayer.loop && songs.length > 0) {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            setCurrentSong(currentSongIndex, true);
        }
    });

    playerProgress.addEventListener("click", (event) => {
        if (!audioPlayer.duration) {
            return;
        }

        const rect = playerProgress.getBoundingClientRect();
        const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
        audioPlayer.currentTime = audioPlayer.duration * ratio;
        updateProgressBar();
        resetPlayerAutoCloseTimer();
    });

    [playerWrap, playerPlaylistList, playerVolumePanel].forEach((element) => {
        element.addEventListener("pointerdown", resetPlayerAutoCloseTimer);
        element.addEventListener("pointermove", resetPlayerAutoCloseTimer);
    });

    document.addEventListener("pointerdown", (event) => {
        if (!isMobilePlayerLayout()) {
            if (!playerWrap.classList.contains("song-list-open")) {
                return;
            }

            const clickedInsidePlaylist = playerPlaylistPanel.contains(event.target);
            const clickedPlaylistButton = playerListToggle.contains(event.target);

            if (!clickedInsidePlaylist && !clickedPlaylistButton) {
                playerWrap.classList.remove("song-list-open");
                resetPlayerAutoCloseTimer();
            }

            return;
        }

        if (!playerWrap.classList.contains("open")) {
            return;
        }

        const clickedInsidePlayer = playerWrap.contains(event.target);
        const clickedPlayerToggle = playerToggle.contains(event.target);
        const clickedSettings = settingsPanel.contains(event.target);
        const clickedSettingsToggle = settingsToggle.contains(event.target);

        if (!clickedInsidePlayer && !clickedPlayerToggle && !clickedSettings && !clickedSettingsToggle) {
            closePlayerUi();
        }
    });
}

// Changes the active song.
function setCurrentSong(index, shouldPlay) {
    if (!songs[index]) {
        return;
    }

    currentSongIndex = index;
    audioPlayer.src = songs[index].file;
    audioPlayer.load();
    nowPlayingTitle.textContent = songs[index].title;
    playerProgressFill.style.width = "0%";
    playerCurrentTime.textContent = "0:00";
    playerDuration.textContent = formatTime(audioPlayer.duration);
    updateFloatingNowPlaying();
    renderPlayerPlaylist(playerSearchInput.value);

    if (shouldPlay) {
        attemptAudioPlay();
    }

    updatePlayPauseButton();
}

// Updates the player progress bar and times.
function updateProgressBar() {
    if (!audioPlayer.duration) {
        playerProgressFill.style.width = "0%";
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        playerDuration.textContent = "0:00";
        updateFloatingNowPlaying();
        return;
    }

    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    playerProgressFill.style.width = `${progress}%`;
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
    playerDuration.textContent = formatTime(audioPlayer.duration);
    updateFloatingNowPlaying();
}

// Updates the play / pause button icon.
function updatePlayPauseButton() {
    playPauseButton.textContent = audioPlayer.paused ? "▶" : "❚❚";
}

// Moves to the next quiz question.
function goToNextQuestion() {
    currentQuestionIndex += 1;

    if (currentQuestionIndex >= currentQuestions.length) {
        setActiveScreen(landscapeScreen);
        return;
    }

    renderQuestion();
}

// Used when the user clicked a correct answer.
function handleCorrectAnswer() {
    quizMessage.textContent = "Correct.";
    quizMessage.className = "message success";

    setTimeout(() => {
        quizMessage.textContent = "";
        goToNextQuestion();
    }, 260);
}

// Builds one answer button row.
function createChoiceContent(answer) {
    const label = document.createElement("span");
    label.className = "choice-label";
    label.textContent = `${answer.label}.`;

    const text = document.createElement("span");
    text.textContent = answer.text;

    return { label, text };
}

// Draws the current quiz question on screen.
function renderQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    quizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    questionTitle.textContent = question.prompt;
    questionMeta.textContent = question.meta || "Choose the correct answer to continue.";
    quizMessage.textContent = "";
    quizMessage.className = "message";
    choices.innerHTML = "";

    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice";
        button.dataset.correct = String(answer.correct);

        const content = createChoiceContent(answer);
        button.appendChild(content.label);
        button.appendChild(content.text);

        button.addEventListener("click", () => {
            if (question.finalQuestion && !answer.correct) {
                const warning = finalQuestionWarnings[
                    Math.min(finalQuestionWarningIndex, finalQuestionWarnings.length - 1)
                ];
                finalQuestionWarningIndex += 1;
                quizMessage.textContent = warning;
                quizMessage.className = "message error";
                return;
            }

            handleCorrectAnswer();
        });

        choices.appendChild(button);
    });
}

// Starts the quiz after the name screen.
function startQuiz() {
    currentQuestionIndex = 0;
    finalQuestionWarningIndex = 0;
    currentQuestions = getQuestions(currentUser);
    document.body.classList.remove("unlocking");
    setActiveScreen(quizScreen);
    renderQuestion();
}

// Starts the admin password step for Nico.
function startAdminPasswordFlow() {
    adminPasswordInput.value = "";
    adminPasswordMessage.textContent = "";
    adminPasswordMessage.className = "message";
    document.body.classList.remove("unlocking");
    setActiveScreen(adminPasswordScreen);
    adminPasswordInput.focus();
}

// Opens the main page after the reminder screen.
proceedMainButton.addEventListener("click", async () => {
    applyUserSpecificTheme();

    const preferredSongIndex = findPreferredSongIndex();

    if (preferredSongIndex >= 0) {
        currentSongIndex = preferredSongIndex;
        setCurrentSong(currentSongIndex, false);
    } else if (chooseRandomSong()) {
        setCurrentSong(currentSongIndex, false);
    }

    await requestLandscapeFullscreenIfMobile();
    setActiveScreen(mainPage);
});

// Name form submit.
lockForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const enteredName = nameInput.value.trim();

    if (!enteredName) {
        lockMessage.textContent = "Please enter your name.";
        lockMessage.className = "message error";
        return;
    }

    currentUser = enteredName;
    await saveUserIfNew(currentUser);
    applyUserSpecificTheme();
    await updateAdminSettingsView();
    lockMessage.textContent = `Welcome, ${currentUser}.`;
    lockMessage.className = "message success";
    nameInput.disabled = true;
    unlockButton.disabled = true;
    lockScreen.style.pointerEvents = "none";

    setTimeout(() => {
        document.body.classList.add("unlocking");
    }, 160);

    setTimeout(() => {
        if (isAdminUser(currentUser)) {
            startAdminPasswordFlow();
            return;
        }

        startQuiz();
    }, 1180);
});

adminPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const enteredPassword = adminPasswordInput.value.trim();

    if (enteredPassword !== ADMIN_PASSWORD) {
        adminPasswordMessage.textContent = "Wrong password.";
        adminPasswordMessage.className = "message error";
        return;
    }

    adminPasswordMessage.textContent = "Access granted.";
    adminPasswordMessage.className = "message success";

    setTimeout(() => {
        adminPasswordMessage.textContent = "";
        setActiveScreen(landscapeScreen);
    }, 260);
});

// Start everything when the page loads.
buildParticles(60);
setupSongs();
setupAudioUnlock();
setupThemes();
setupSettingsPanel();
startSavedUsersClock();
applyThemeSelection("background.jpg");
loadSupabaseSongs();
