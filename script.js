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
const authTitle = document.getElementById("authTitle");
const authDescription = document.getElementById("authDescription");
const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordWrap = document.getElementById("confirmPasswordWrap");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const loginModeButton = document.getElementById("loginModeButton");
const signupModeButton = document.getElementById("signupModeButton");
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
const mainPageVideo = document.getElementById("mainPageVideo");
const mainPageContent = document.querySelector(".main-page-content");
const mainPageTitle = document.querySelector(".main-page-title");
const bouncingMessage = document.getElementById("bouncingMessage");
const audioPlayer = document.getElementById("audioPlayer");
const audioStatus = document.getElementById("audioStatus");
const playerWrap = document.getElementById("playerWrap");
const settingsLauncher = document.getElementById("settingsLauncher");
const settingsMenuToggle = document.getElementById("settingsMenuToggle");
const settingsToggle = document.getElementById("settingsToggle");
const leaderboardToggle = document.getElementById("leaderboardToggle");
const logoutButton = document.getElementById("logoutButton");
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
const leaderboardPanel = document.getElementById("leaderboardPanel");
const leaderboardClose = document.getElementById("leaderboardClose");
const leaderboardList = document.getElementById("leaderboardList");
const presenceNotifications = document.getElementById("presenceNotifications");
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

if (mainPageVideo) {
    mainPageVideo.addEventListener("loadeddata", () => {
        mainPageVideo.classList.add("loaded");
    });

    mainPageVideo.addEventListener("error", () => {
        console.error("Could not load main page video background:", mainPageVideo.currentSrc || mainPageVideo.src);
        mainPageVideo.classList.remove("loaded");
    });
}

const SUPABASE_URL = "https://qptgeftudyxqdlmvvotk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CJsr9sctO5mrbuVmG4G3jA_YDXnkynM";
const SUPABASE_BUCKET = "songs";
const PROFILE_TABLE = "profiles";
const ENTRY_LOG_TABLE = "entry_logs";
const supabaseClient = window.supabase
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
    : null;

// Special-person settings.
// Any name starting with V uses this.
const SPECIAL_PERSON_CONFIG = {
    themeFile: "special.mp4",
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
let mainPageNowPlayingTimeout = null;
let savedUsersCache = [];
let lastNameProceedAt = null;
let authMode = "login";
let profileData = null;
let leaderboardEntries = [];
let presenceChannel = null;
let presenceSyncStarted = false;
let welcomeNowPlayingTimeout = null;
const LOCAL_SESSION_KEY = "pastries_active_profile";

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

function isAuthenticatedUser() {
    return Boolean(profileData && profileData.id);
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
    const userId = profileData?.id;

    if (!cleanName || !userId || !supabaseClient) {
        return;
    }

    const { error } = await supabaseClient
        .from(ENTRY_LOG_TABLE)
        .insert({
            user_id: userId,
            username: cleanName,
            entered_at: new Date(lastNameProceedAt || Date.now()).toISOString()
        });

    if (error) {
        console.error("Could not save entry log:", error.message);
        return;
    }

    await loadLeaderboard();
}

unlockButton.addEventListener("click", () => {
    lastNameProceedAt = Date.now();
});

async function removeSavedUser(nameToRemove) {
    return nameToRemove;
}

async function loadLeaderboard() {
    if (!supabaseClient) {
        leaderboardEntries = [];
        return;
    }

    const { data, error } = await supabaseClient
        .from(ENTRY_LOG_TABLE)
        .select("id, username, entered_at")
        .order("entered_at", { ascending: false });

    if (error) {
        console.error("Could not load leaderboard:", error.message);
        leaderboardEntries = [];
        return;
    }

    leaderboardEntries = data || [];
}

function formatClockTime(dateValue) {
    const parsedTime = dateValue ? new Date(dateValue) : null;

    if (!parsedTime || Number.isNaN(parsedTime.getTime())) {
        return "";
    }

    return parsedTime.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
    });
}

function formatSavedUserEnteredTime(createdAt, enteredAt) {
    const firstTime = formatClockTime(createdAt);
    const latestTime = formatClockTime(enteredAt);

    if (!latestTime) {
        return "Time unavailable";
    }

    if (!firstTime || firstTime === latestTime) {
        return `Entered: ${latestTime}`;
    }

    return `Entered: ${firstTime} -> ${latestTime}`;
}

function renderSavedUsers() {
    if (!savedUserList) {
        return;
    }

    savedUserList.innerHTML = "";
    const savedUsers = leaderboardEntries;

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
        nameText.textContent = savedUser.username;

        const timeText = document.createElement("span");
        timeText.className = "saved-user-time";
        timeText.textContent = formatClockTime(savedUser.entered_at);

        const infoWrap = document.createElement("div");
        infoWrap.className = "saved-user-info";
        infoWrap.appendChild(nameText);
        infoWrap.appendChild(timeText);

        item.appendChild(infoWrap);
        savedUserList.appendChild(item);
    });
}

async function refreshAdminUsersView() {
    await loadLeaderboard();
    renderSavedUsers();
}

function startAdminUsersRealtime() {
    return;
}

function startAdminUsersLiveRefresh() {
    return;
}

async function updateAdminSettingsView() {
    userAdminTab.classList.remove("visible");
    userAdminSection.classList.remove("admin-active");
    audioUploadInput.disabled = !isAuthenticatedUser();
    audioUploadLabel.classList.toggle("disabled", !isAuthenticatedUser());
    audioUploadLabel.setAttribute("aria-disabled", String(!isAuthenticatedUser()));
    audioHelp.textContent = isAuthenticatedUser()
        ? "Pick MP3 files from your phone or computer and they will be uploaded to Supabase storage so they can be used again later."
        : "Log in first to upload songs.";
}

function setAuthMode(mode) {
    authMode = mode === "signup" ? "signup" : "login";
    loginModeButton.classList.toggle("active", authMode === "login");
    signupModeButton.classList.toggle("active", authMode === "signup");
    confirmPasswordWrap.classList.toggle("hidden", authMode !== "signup");
    confirmPasswordInput.required = authMode === "signup";
    authTitle.textContent = authMode === "signup" ? "Sign Up" : "Log In";
    authDescription.textContent = authMode === "signup"
        ? "Create a username and password first, then log in with that account."
        : "Enter your username and password to continue.";
    nameInput.placeholder = authMode === "signup" ? "Create username" : "Username";
    passwordInput.placeholder = authMode === "signup" ? "Create password" : "Password";
    passwordInput.autocomplete = authMode === "signup" ? "new-password" : "current-password";
    confirmPasswordInput.placeholder = "Confirm password";
    unlockButton.textContent = authMode === "signup" ? "CREATE ACCOUNT" : "LOG IN";
    lockMessage.textContent = "";
    lockMessage.className = "message";
}

function showAuthMessage(message, tone = "neutral") {
    lockMessage.textContent = message;
    lockMessage.className = tone === "error"
        ? "message error"
        : tone === "success"
            ? "message success"
            : "message";
}

async function hashPassword(password) {
    const data = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map((value) => value.toString(16).padStart(2, "0"))
        .join("");
}

async function getProfileByUsername(username) {
    const { data, error } = await supabaseClient
        .from(PROFILE_TABLE)
        .select("id, username, password_hash, created_at")
        .eq("username", username)
        .maybeSingle();

    if (error) {
        console.error("Could not fetch profile:", error.message);
        return null;
    }

    return data;
}

async function ensureProfile(session, usernameOverride = "") {
    if (!session?.id) {
        return null;
    }

    profileData = {
        id: session.id,
        username: usernameOverride.trim() || session.username || "Guest"
    };

    currentUser = profileData.username;
    return profileData;
}

function formatEntryTime(dateValue) {
    const parsed = dateValue ? new Date(dateValue) : null;

    if (!parsed || Number.isNaN(parsed.getTime())) {
        return "Unknown time";
    }

    return parsed.toLocaleString([], {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}

function renderLeaderboard() {
    leaderboardList.innerHTML = "";

    if (leaderboardEntries.length === 0) {
        const empty = document.createElement("div");
        empty.className = "leaderboard-empty";
        empty.textContent = "No one has entered yet.";
        leaderboardList.appendChild(empty);
        return;
    }

    leaderboardEntries.forEach((entry) => {
        const item = document.createElement("div");
        item.className = "leaderboard-item";

        const name = document.createElement("p");
        name.className = "leaderboard-name";
        name.textContent = entry.username;

        const time = document.createElement("p");
        time.className = "leaderboard-time";
        time.textContent = formatEntryTime(entry.entered_at);

        item.appendChild(name);
        item.appendChild(time);
        leaderboardList.appendChild(item);
    });
}

async function refreshLeaderboard() {
    await loadLeaderboard();
    renderLeaderboard();
}

function showPresenceToast(message) {
    const toast = document.createElement("div");
    toast.className = "presence-toast";
    toast.textContent = message;
    presenceNotifications.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3600);
}

async function connectPresence() {
    if (!supabaseClient || !profileData?.id || !currentUser) {
        return;
    }

    if (presenceChannel) {
        await supabaseClient.removeChannel(presenceChannel);
        presenceChannel = null;
    }

    presenceSyncStarted = false;
    presenceChannel = supabaseClient.channel("main-room", {
        config: {
            presence: {
                key: profileData.id
            }
        }
    });

    presenceChannel
        .on("presence", { event: "join" }, ({ newPresences }) => {
            if (!presenceSyncStarted) {
                return;
            }

            newPresences.forEach((presence) => {
                if (presence.user_id === profileData.id) {
                    return;
                }

                showPresenceToast(`User ${presence.username} has entered.`);
            });
        })
        .on("presence", { event: "leave" }, ({ leftPresences }) => {
            if (!presenceSyncStarted) {
                return;
            }

            leftPresences.forEach((presence) => {
                if (presence.user_id === profileData.id) {
                    return;
                }

                showPresenceToast(`User ${presence.username} has left.`);
            });
        })
        .subscribe(async (status) => {
            if (status !== "SUBSCRIBED") {
                return;
            }

            await presenceChannel.track({
                user_id: profileData.id,
                username: currentUser
            });

            presenceSyncStarted = true;
        });
}

async function openPostAuthFlow() {
    await updateAdminSettingsView();
    await refreshLeaderboard();
    applyUserSpecificTheme();
    await connectPresence();
    setActiveScreen(landscapeScreen);
}

async function handleAuthenticatedSession(session, usernameOverride = "") {
    if (!session?.id) {
        return;
    }
    await ensureProfile(session, usernameOverride);
    await saveUserIfNew(currentUser);
    localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify({
        id: profileData.id,
        username: profileData.username
    }));
    await openPostAuthFlow();
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
    clearTimeout(mainPageNowPlayingTimeout);
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
        leaderboardPanel.classList.remove("open");
        settingsLauncher.classList.remove("open");

        if (songs.length > 0) {
            setCurrentSong(currentSongIndex < songs.length ? currentSongIndex : 0, true);
        } else if (audioPlayer.src) {
            attemptAudioPlay();
        } else {
            nowPlayingTitle.textContent = "Loading songs...";
        }

        mainPageNowPlayingTimeout = setTimeout(() => {
            if (!playerWrap.classList.contains("open") && mainPage.classList.contains("active")) {
                updateFloatingNowPlaying();
                floatingNowPlaying.classList.add("visible");
            }
        }, 5000);
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
    const usesVideoTheme = /\.mp4$/i.test(fileName);

    mainPage.classList.toggle("video-theme", usesVideoTheme);

    if (usesVideoTheme) {
        mainPageVideo.classList.remove("loaded");
        mainPageVideo.src = fileName;
        mainPageVideo.muted = true;
        mainPageVideo.volume = 0;
        mainPageVideo.defaultMuted = true;
        mainPageVideo.load();

        const playAttempt = mainPageVideo.play();
        if (playAttempt && typeof playAttempt.catch === "function") {
            playAttempt.catch(() => {
                // Ignore autoplay failures for the decorative background video.
            });
        }

        return;
    }

    mainPageVideo.pause();
    mainPageVideo.classList.remove("loaded");
    mainPageVideo.removeAttribute("src");
    mainPageVideo.load();
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
    const themeFile = specialConfig ? specialConfig.themeFile : "default.mp4";
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
        tab.addEventListener("click", () => {
            setSettingsSection(tab.dataset.settingsTab);
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
        if (!isAuthenticatedUser()) {
            setAudioStatus("Log in first to add songs.", "error", 2200);
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

    floatingNowPlaying.addEventListener("click", () => {
        playerWrap.classList.add("open");
        playerWrap.classList.remove("idle-ui");
        floatingNowPlaying.classList.remove("visible");
        resetPlayerAutoCloseTimer();
    });

    settingsToggle.addEventListener("click", async () => {
        settingsLauncher.classList.remove("open");
        leaderboardPanel.classList.remove("open");
        const willOpen = !settingsPanel.classList.contains("open");
        settingsPanel.classList.toggle("open");

        if (willOpen) {
            await updateAdminSettingsView();
        }
    });

    settingsMenuToggle.addEventListener("click", () => {
        settingsLauncher.classList.toggle("open");
    });

    leaderboardToggle.addEventListener("click", async () => {
        settingsLauncher.classList.remove("open");
        settingsPanel.classList.remove("open");
        const willOpen = !leaderboardPanel.classList.contains("open");
        leaderboardPanel.classList.toggle("open");

        if (willOpen) {
            await refreshLeaderboard();
        }
    });

    settingsClose.addEventListener("click", () => {
        settingsPanel.classList.remove("open");
    });

    leaderboardClose.addEventListener("click", () => {
        leaderboardPanel.classList.remove("open");
    });

    logoutButton.addEventListener("click", async () => {
        settingsLauncher.classList.remove("open");
        if (presenceChannel) {
            await supabaseClient.removeChannel(presenceChannel);
            presenceChannel = null;
        }
        profileData = null;
        currentUser = "";
        localStorage.removeItem(LOCAL_SESSION_KEY);
        settingsPanel.classList.remove("open");
        leaderboardPanel.classList.remove("open");
        showAuthMessage("Logged out.", "success");
        setActiveScreen(lockScreen);
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
        const clickedNowPlaying = floatingNowPlaying.contains(event.target);
        const clickedSettings = settingsPanel.contains(event.target);
        const clickedLeaderboard = leaderboardPanel.contains(event.target);
        const clickedSettingsLauncher = settingsLauncher.contains(event.target);

        if (!clickedInsidePlayer && !clickedNowPlaying && !clickedSettings && !clickedLeaderboard && !clickedSettingsLauncher) {
            closePlayerUi();
        }

        if (!clickedSettings && !clickedSettingsLauncher) {
            settingsLauncher.classList.remove("open");
        }

        if (!clickedLeaderboard && event.target !== leaderboardToggle) {
            leaderboardPanel.classList.remove("open");
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

loginModeButton.addEventListener("click", () => {
    setAuthMode("login");
});

signupModeButton.addEventListener("click", () => {
    setAuthMode("signup");
});

lockForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    lastNameProceedAt = Date.now();

    const enteredUsername = nameInput.value.trim();
    const enteredPassword = passwordInput.value;
    const confirmedPassword = confirmPasswordInput.value;

    if (!enteredUsername || !enteredPassword) {
        showAuthMessage("Fill in username and password.", "error");
        return;
    }

    if (authMode === "signup" && enteredPassword !== confirmedPassword) {
        showAuthMessage("Passwords do not match.", "error");
        return;
    }

    unlockButton.disabled = true;

    if (authMode === "signup") {
        const existingProfile = await getProfileByUsername(enteredUsername);

        if (existingProfile) {
            showAuthMessage("That username already exists.", "error");
            unlockButton.disabled = false;
            return;
        }

        const passwordHash = await hashPassword(enteredPassword);
        const userId = crypto.randomUUID();
        const { error } = await supabaseClient
            .from(PROFILE_TABLE)
            .insert({
                id: userId,
                username: enteredUsername,
                password_hash: passwordHash
            });

        if (error) {
            showAuthMessage(error.message, "error");
            unlockButton.disabled = false;
            return;
        }

        showAuthMessage("Account created. Signing you in...", "success");
        await handleAuthenticatedSession({
            id: userId,
            username: enteredUsername
        });
    } else {
        const profile = await getProfileByUsername(enteredUsername);

        if (!profile) {
            showAuthMessage("Account not found. Create one first.", "error");
            unlockButton.disabled = false;
            return;
        }

        const passwordHash = await hashPassword(enteredPassword);

        if (profile.password_hash !== passwordHash) {
            showAuthMessage("Wrong password.", "error");
            unlockButton.disabled = false;
            return;
        }

        showAuthMessage("Login successful.", "success");
        await handleAuthenticatedSession({
            id: profile.id,
            username: profile.username
        });
    }

    unlockButton.disabled = false;
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    lastNameProceedAt = null;
});

// Start everything when the page loads.
buildParticles(60);
setupSongs();
setupAudioUnlock();
setupThemes();
setupSettingsPanel();
applyThemeSelection("default.mp4");
loadSupabaseSongs();
setAuthMode("login");

const storedProfile = localStorage.getItem(LOCAL_SESSION_KEY);

if (storedProfile) {
    try {
        const parsedProfile = JSON.parse(storedProfile);

        if (parsedProfile?.id && parsedProfile?.username) {
            handleAuthenticatedSession(parsedProfile);
        }
    } catch {
        localStorage.removeItem(LOCAL_SESSION_KEY);
    }
}
