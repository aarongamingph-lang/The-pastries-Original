                // This array holds all songs loaded from Supabase.
                const songs = [];

                // HTML elements used by the JavaScript.
                const particles = document.getElementById("particles");
                const lockScreen = document.getElementById("lockScreen");
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
                const proceedMainButton = document.getElementById("proceedMainButton");
                const orientationBackButton = document.getElementById("orientationBackButton");
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
                const menuMessageAlert = document.getElementById("menuMessageAlert");
                const settingsToggle = document.getElementById("settingsToggle");
                const notesToggle = document.getElementById("notesToggle");
                const leaderboardToggle = document.getElementById("leaderboardToggle");
                const leaderboardToggleCount = document.getElementById("leaderboardToggleCount");
                const leaderboardMessageAlert = document.getElementById("leaderboardMessageAlert");
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
                const leaderboardTitle = document.getElementById("leaderboardTitle");
                const deleteConfirmPanel = document.getElementById("deleteConfirmPanel");
                const deleteConfirmClose = document.getElementById("deleteConfirmClose");
                const deleteConfirmText = document.getElementById("deleteConfirmText");
                const deleteConfirmCancel = document.getElementById("deleteConfirmCancel");
                const deleteConfirmProceed = document.getElementById("deleteConfirmProceed");
                const chatPanel = document.getElementById("chatPanel");
                const chatClose = document.getElementById("chatClose");
                const chatPanelTitle = document.getElementById("chatPanelTitle");
                const chatPanelStatus = document.getElementById("chatPanelStatus");
                const chatMessages = document.getElementById("chatMessages");
                const chatComposeContext = document.getElementById("chatComposeContext");
                const chatComposeContextLabel = document.getElementById("chatComposeContextLabel");
                const chatComposeContextText = document.getElementById("chatComposeContextText");
                const chatComposeCancel = document.getElementById("chatComposeCancel");
                const chatInput = document.getElementById("chatInput");
                const chatSendButton = document.getElementById("chatSendButton");
                const notesMenuPanel = document.getElementById("notesMenuPanel");
                const notesMenuClose = document.getElementById("notesMenuClose");
                const notesVisibilityToggle = document.getElementById("notesVisibilityToggle");
                const notesViewToggle = document.getElementById("notesViewToggle");
                const notesAddToggle = document.getElementById("notesAddToggle");
                const notesListPanel = document.getElementById("notesListPanel");
                const notesListClose = document.getElementById("notesListClose");
                const notesSubmittedList = document.getElementById("notesSubmittedList");
                const notesPanel = document.getElementById("notesPanel");
                const notesPanelTitle = document.getElementById("notesPanelTitle");
                const notesClose = document.getElementById("notesClose");
                const notesTextarea = document.getElementById("notesTextarea");
                const notesSubmitButton = document.getElementById("notesSubmitButton");
                const notesEditorDeleteButton = document.getElementById("notesEditorDeleteButton");
                const noteViewerPanel = document.getElementById("noteViewerPanel");
                const noteViewerClose = document.getElementById("noteViewerClose");
                const noteViewerText = document.getElementById("noteViewerText");
                const noteViewerMeta = document.getElementById("noteViewerMeta");
                const noteRepliesList = document.getElementById("noteRepliesList");
                const noteReplyComposer = document.getElementById("noteReplyComposer");
                const noteReplyTextarea = document.getElementById("noteReplyTextarea");
                const noteReplySubmitButton = document.getElementById("noteReplySubmitButton");
                const noteReplyButton = document.getElementById("noteReplyButton");
                const noteEditButton = document.getElementById("noteEditButton");
                const presenceNotifications = document.getElementById("presenceNotifications");
                const pinnedNotesLayer = document.getElementById("pinnedNotesLayer");
                const themeCards = Array.from(document.querySelectorAll(".theme-card"));
                const playerProgress = document.getElementById("playerProgress");
                const playerProgressFill = document.getElementById("playerProgressFill");
                const playerCurrentTime = document.getElementById("playerCurrentTime");
                const playerDuration = document.getElementById("playerDuration");
                const nowPlayingTitle = document.getElementById("nowPlayingTitle");
                const playerListToggle = document.getElementById("playerListToggle");
                const playerPlaylistPanel = document.getElementById("playerPlaylistPanel");
                const playerPlaylistList = document.getElementById("playerPlaylistList");
                const playerPlaylistCount = document.getElementById("playerPlaylistCount");
                const playerSearchInput = document.getElementById("playerSearchInput");
                const playerSongsTab = document.getElementById("playerSongsTab");
                const playerLikedTab = document.getElementById("playerLikedTab");
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
                const NOTES_TABLE = "notes";
                const NOTE_READS_TABLE = "note_reads";
                const NOTE_REPLIES_TABLE = "note_replies";
                const MESSAGES_TABLE = "messages";
                const MESSAGE_REACTIONS_TABLE = "message_reactions";
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
                let currentUser = "";
                let currentSongIndex = 0;
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
                let notesRevealTimeout = null;
                let savedUsersCache = [];
                let lastNameProceedAt = null;
                let authMode = "login";
                let profileData = null;
                let leaderboardEntries = [];
                let notesEntries = [];
                let noteRepliesEntries = [];
                let noteReadMap = new Map();
                let messagesEntries = [];
                let messageReactionsEntries = [];
                let onlineUsers = [];
                let presenceChannel = null;
                let notesChannel = null;
                let noteRepliesChannel = null;
                let messagesChannel = null;
                let messageReactionsChannel = null;
                let presenceSyncStarted = false;
                let knownPresenceUserIds = new Set();
                let suppressPresenceJoinToastsUntil = 0;
                let welcomeNowPlayingTimeout = null;
                let editingNoteId = null;
                let activeViewerNoteId = null;
                let activeChatUserId = null;
                let activeChatReplyMessageId = null;
                let activeChatEditMessageId = null;
                let activeChatReactionMenuId = null;
                let activeChatActionMenuId = null;
                let scheduledChatRenderFrame = null;
                let scheduledChatRenderPreserveScroll = false;
                let pendingDeleteProfile = null;
                let remainingBouncingTextIndices = [];
                let remainingSongIndices = [];
                let noteLayoutMap = new Map();
                let notesVisibilityEnabled = true;
                let likedSongFiles = new Set();
                let playlistViewMode = "songs";
                const LOCAL_SESSION_KEY = "pastries_active_profile";
                const LOCAL_NOTE_READS_PREFIX = "pastries_note_reads_";
                const LOCAL_NOTES_VISIBILITY_PREFIX = "pastries_notes_visibility_";
                const LOCAL_LIKED_SONGS_PREFIX = "pastries_liked_songs_";

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

                function normalizeAuthUsername(username) {
                    return String(username || "")
                        .trim()
                        .toLowerCase();
                }

                function normalizeSongIdentity(value) {
                    return String(value || "")
                        .trim()
                        .toLowerCase()
                        .replace(/^\d+-/, "")
                        .replace(/\.mp3$/i, "")
                        .replace(/\s+/g, " ")
                        .replace(/[^a-z0-9 ]/g, "");
                }

                function getLikedSongsStorageKey() {
                    const userKey = profileData?.id || normalizeAuthUsername(currentUser) || "guest";
                    return `${LOCAL_LIKED_SONGS_PREFIX}${userKey}`;
                }

                function loadLikedSongsPreference() {
                    try {
                        const raw = localStorage.getItem(getLikedSongsStorageKey());
                        const parsed = raw ? JSON.parse(raw) : [];
                        likedSongFiles = new Set(Array.isArray(parsed) ? parsed : []);
                    } catch (error) {
                        likedSongFiles = new Set();
                    }
                }

                function saveLikedSongsPreference() {
                    try {
                        localStorage.setItem(getLikedSongsStorageKey(), JSON.stringify(Array.from(likedSongFiles)));
                    } catch (error) {
                        console.error("Could not save liked songs:", error);
                    }
                }

                function syncPlaylistTabs() {
                    playerSongsTab?.classList.toggle("active", playlistViewMode === "songs");
                    playerLikedTab?.classList.toggle("active", playlistViewMode === "liked");
                }

                function isAdminUser() {
                    return normalizeAuthUsername(currentUser) === "nico";
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
                        .from(PROFILE_TABLE)
                        .select("id, username, created_at, last_online")
                        .order("created_at", { ascending: true });

                    if (error) {
                        console.error("Could not load leaderboard:", error.message);
                        leaderboardEntries = [];
                        return;
                    }

                    leaderboardEntries = data || [];
                }

                function formatLastOnline(dateValue) {
                    const parsed = dateValue ? new Date(dateValue) : null;

                    if (!parsed || Number.isNaN(parsed.getTime())) {
                        return "Last online: unavailable";
                    }

                    return `Last online: ${parsed.toLocaleString([], {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })}`;
                }

                function setLocalLastOnline(userId, dateValue = new Date().toISOString()) {
                    if (!userId) {
                        return;
                    }

                    leaderboardEntries = leaderboardEntries.map((entry) =>
                        entry.id === userId
                            ? { ...entry, last_online: dateValue }
                            : entry
                    );
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
                    const normalizedUsername = normalizeAuthUsername(username);

                    if (!normalizedUsername || !supabaseClient) {
                        return null;
                    }

                    const { data, error } = await supabaseClient
                        .from(PROFILE_TABLE)
                        .select("id, username, password_hash, created_at")
                        .ilike("username", normalizedUsername)
                        .order("created_at", { ascending: true })
                        .limit(1);

                    if (error) {
                        console.error("Could not fetch profile:", error.message);
                        return null;
                    }

                    return Array.isArray(data) ? data[0] || null : null;
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

                function getPresenceUsers() {
                    if (!presenceChannel || typeof presenceChannel.presenceState !== "function") {
                        return [];
                    }

                    const presenceState = presenceChannel.presenceState();
                    const flattenedUsers = Object.values(presenceState)
                        .flat()
                        .map((presence) => ({
                            id: presence.user_id || presence.presence_ref || "",
                            username: presence.username || "Unknown"
                        }))
                        .filter((presence) => presence.id && presence.username);

                    const uniqueUsers = new Map();
                    flattenedUsers.forEach((presence) => {
                        uniqueUsers.set(presence.id, presence);
                    });

                    return Array.from(uniqueUsers.values()).sort((left, right) =>
                        left.username.localeCompare(right.username, undefined, { sensitivity: "base" })
                    );
                }

                function syncOnlineUsersFromPresence() {
                    onlineUsers = getPresenceUsers();
                    renderLeaderboard();
                }

                function renderLeaderboard() {
                    leaderboardList.innerHTML = "";
                    const onlineCount = onlineUsers.length;
                    const onlineUserIds = new Set(onlineUsers.map((user) => user.id));

                    if (leaderboardToggleCount) {
                        leaderboardToggleCount.textContent = String(onlineCount);
                    }

                    if (leaderboardTitle) {
                        leaderboardTitle.textContent = `User Status (${onlineCount} Online)`;
                    }

                    updateMenuMessageAlert();

                    const boardHeader = document.createElement("div");
                    boardHeader.className = "leaderboard-columns";
                    boardHeader.innerHTML = `
                        <span>Name</span>
                        <span>Status / Action</span>
                    `;
                    leaderboardList.appendChild(boardHeader);

                    if (leaderboardEntries.length === 0) {
                        const empty = document.createElement("div");
                        empty.className = "leaderboard-empty";
                        empty.textContent = "No registered users yet.";
                        leaderboardList.appendChild(empty);
                        return;
                    }

                    leaderboardEntries.forEach((entry) => {
                        const isOnline = onlineUserIds.has(entry.id);
                        const unreadCount = getUnreadCountForSender(entry.id);
                        const item = document.createElement("div");
                        item.className = "leaderboard-item";

                        const identity = document.createElement("div");
                        identity.className = "leaderboard-identity";

                        const name = document.createElement("p");
                        name.className = "leaderboard-name";
                        name.textContent = entry.username;

                        identity.appendChild(name);

                        if (isAdminUser()) {
                            const deleteButton = document.createElement("button");
                            deleteButton.type = "button";
                            deleteButton.className = "leaderboard-delete";
                            deleteButton.textContent = "x";
                            deleteButton.setAttribute("aria-label", `Delete ${entry.username}`);
                            deleteButton.addEventListener("click", (event) => {
                                event.stopPropagation();
                                openDeleteConfirm(entry.id, entry.username);
                            });
                            identity.appendChild(deleteButton);
                        }

                        if (!isOnline) {
                            const lastOnline = document.createElement("p");
                            lastOnline.className = "leaderboard-last-online";
                            lastOnline.textContent = formatLastOnline(entry.last_online);
                            identity.appendChild(lastOnline);
                        }

                        const status = document.createElement("div");
                        status.className = "leaderboard-status";

                        const dot = document.createElement("span");
                        dot.className = "leaderboard-status-dot";

                        const statusText = document.createElement("span");
                        statusText.className = "leaderboard-status-text";
                        statusText.textContent = isOnline ? "Online" : "Offline";

                        if (!isOnline) {
                            status.classList.add("offline");
                        }

                        status.appendChild(dot);
                        status.appendChild(statusText);

                        if (entry.id !== profileData?.id) {
                            const messageButton = document.createElement("button");
                            messageButton.type = "button";
                            messageButton.className = "leaderboard-message-button";
                            messageButton.setAttribute("aria-label", `Message ${entry.username}`);
                            messageButton.textContent = "\u2709";
                            messageButton.addEventListener("click", async (event) => {
                                event.stopPropagation();
                                await openChatPanelWithUser(entry);
                            });
                            status.appendChild(messageButton);

                            if (unreadCount > 0) {
                                const unreadBadge = document.createElement("span");
                                unreadBadge.className = "leaderboard-message-badge";
                                unreadBadge.textContent = String(unreadCount);
                                status.appendChild(unreadBadge);
                            }
                        }

                        item.appendChild(identity);
                        item.appendChild(status);
                        leaderboardList.appendChild(item);
                    });
                }

                function getTotalUnreadMessageCount() {
                    if (!profileData?.id) {
                        return 0;
                    }

                    return messagesEntries.filter((message) =>
                        message.receiver_id === profileData.id &&
                        !message.is_read
                    ).length;
                }

                function updateMenuMessageAlert() {
                    const unreadCount = getTotalUnreadMessageCount();
                    const showAlert = unreadCount > 0;
                    const quickMenuOpen = settingsLauncher?.classList.contains("open");

                    if (menuMessageAlert) {
                        menuMessageAlert.classList.toggle("hidden", !showAlert || quickMenuOpen);
                    }

                    if (leaderboardMessageAlert) {
                        leaderboardMessageAlert.classList.toggle("hidden", !showAlert || !quickMenuOpen);
                    }
                }

                async function refreshLeaderboard() {
                    await loadLeaderboard();
                    syncOnlineUsersFromPresence();
                    renderLeaderboard();
                }

                function getUnreadCountForSender(senderId) {
                    if (!profileData?.id || !senderId) {
                        return 0;
                    }

                    return messagesEntries.filter((message) =>
                        message.receiver_id === profileData.id &&
                        message.sender_id === senderId &&
                        !message.is_read
                    ).length;
                }

                function isUserOnline(userId) {
                    return onlineUsers.some((user) => user.id === userId);
                }

                function formatChatStatus(entry) {
                    if (!entry) {
                        return "Select a user to start chatting.";
                    }

                    return isUserOnline(entry.id) ? "Online" : "Offline";
                }

                function getConversationMessages(otherUserId) {
                    if (!profileData?.id || !otherUserId) {
                        return [];
                    }

                    return messagesEntries
                        .filter((message) =>
                            (message.sender_id === profileData.id && message.receiver_id === otherUserId) ||
                            (message.sender_id === otherUserId && message.receiver_id === profileData.id)
                        )
                        .sort((left, right) => new Date(left.created_at) - new Date(right.created_at));
                }

                function getMessageById(messageId) {
                    return messagesEntries.find((message) => String(message.id) === String(messageId)) || null;
                }

                function getChatMessagePreview(message) {
                    if (!message) {
                        return "Original message unavailable.";
                    }

                    const text = String(message.content || "").trim();
                    return text.length > 72 ? `${text.slice(0, 72)}...` : text || "Empty message";
                }

                function getMessageReactions(messageId) {
                    return messageReactionsEntries.filter((entry) => String(entry.message_id) === String(messageId));
                }

                function getReactionSummary(messageId) {
                    const grouped = new Map();

                    getMessageReactions(messageId).forEach((entry) => {
                        const key = entry.emoji || "";

                        if (!key) {
                            return;
                        }

                        if (!grouped.has(key)) {
                            grouped.set(key, { emoji: key, count: 0, mine: false });
                        }

                        const current = grouped.get(key);
                        current.count += 1;

                        if (entry.user_id === profileData?.id) {
                            current.mine = true;
                        }
                    });

                    return Array.from(grouped.values());
                }

                function clearChatComposerState() {
                    activeChatReplyMessageId = null;
                    activeChatEditMessageId = null;
                    activeChatReactionMenuId = null;
                    activeChatActionMenuId = null;
                    chatComposeContext.classList.add("hidden");
                    chatComposeContextLabel.textContent = "Replying";
                    chatComposeContextText.textContent = "";
                    chatSendButton.textContent = "Send";
                }

                function closeOpenChatMenus(preserveScroll = true) {
                    if (activeChatActionMenuId === null && activeChatReactionMenuId === null) {
                        return;
                    }

                    activeChatActionMenuId = null;
                    activeChatReactionMenuId = null;
                    requestChatRender({ preserveScroll });
                }

                function requestChatRender(options = {}) {
                    const preserveScroll = Boolean(options.preserveScroll);
                    scheduledChatRenderPreserveScroll = scheduledChatRenderPreserveScroll || preserveScroll;

                    if (scheduledChatRenderFrame !== null) {
                        return;
                    }

                    scheduledChatRenderFrame = window.requestAnimationFrame(() => {
                        const nextPreserveScroll = scheduledChatRenderPreserveScroll;
                        scheduledChatRenderFrame = null;
                        scheduledChatRenderPreserveScroll = false;
                        renderChatMessages({ preserveScroll: nextPreserveScroll });
                    });
                }

                function setChatReplyState(message) {
                    activeChatEditMessageId = null;
                    activeChatReplyMessageId = message?.id ?? null;

                    if (!message) {
                        clearChatComposerState();
                        return;
                    }

                    chatComposeContextLabel.textContent = `Replying to ${message.sender_username || "Unknown"}`;
                    chatComposeContextText.textContent = getChatMessagePreview(message);
                    chatComposeContext.classList.remove("hidden");
                    chatSendButton.textContent = "Reply";
                    chatInput.focus();
                }

                function setChatEditState(message) {
                    if (!message) {
                        clearChatComposerState();
                        return;
                    }

                    activeChatReplyMessageId = null;
                    activeChatEditMessageId = message.id;
                    chatComposeContextLabel.textContent = "Editing message";
                    chatComposeContextText.textContent = getChatMessagePreview(message);
                    chatComposeContext.classList.remove("hidden");
                    chatSendButton.textContent = "Update";
                    chatInput.value = message.content || "";
                    chatInput.focus();
                }

                async function deleteChatMessage(messageId) {
                    if (!supabaseClient || !profileData?.id || !messageId) {
                        return;
                    }

                    const targetMessage = getMessageById(messageId);

                    if (!targetMessage || targetMessage.sender_id !== profileData.id) {
                        return;
                    }

                    const { error } = await supabaseClient
                        .from(MESSAGES_TABLE)
                        .delete()
                        .eq("id", messageId);

                    if (error) {
                        console.error("Could not delete message:", error.message);
                        showPresenceToast("Could not delete message.");
                        return;
                    }

                    if (String(activeChatEditMessageId) === String(messageId) || String(activeChatReplyMessageId) === String(messageId)) {
                        clearChatComposerState();
                        chatInput.value = "";
                    }

                    activeChatActionMenuId = null;
                    await loadMessages();
                }

                async function reactToMessage(messageId, emoji) {
                    if (!supabaseClient || !profileData?.id || !messageId || !emoji) {
                        return;
                    }

                    const existingReaction = messageReactionsEntries.find((entry) =>
                        String(entry.message_id) === String(messageId) &&
                        entry.user_id === profileData.id
                    );

                    let error = null;

                    if (existingReaction && existingReaction.emoji === emoji) {
                        ({ error } = await supabaseClient
                            .from(MESSAGE_REACTIONS_TABLE)
                            .delete()
                            .eq("id", existingReaction.id));
                    } else if (existingReaction) {
                        ({ error } = await supabaseClient
                            .from(MESSAGE_REACTIONS_TABLE)
                            .update({ emoji })
                            .eq("id", existingReaction.id));
                    } else {
                        ({ error } = await supabaseClient
                            .from(MESSAGE_REACTIONS_TABLE)
                            .insert({
                                message_id: messageId,
                                user_id: profileData.id,
                                username: currentUser,
                                emoji,
                                created_at: new Date().toISOString()
                            }));
                    }

                    if (error) {
                        console.error("Could not react to message:", error.message);
                        showPresenceToast("Could not react to message.");
                        return;
                    }

                    activeChatReactionMenuId = null;
                    await loadMessageReactions();
                }

                function renderChatMessages(options = {}) {
                    if (!chatMessages) {
                        return;
                    }

                    const preserveScroll = Boolean(options.preserveScroll);
                    const previousScrollTop = preserveScroll ? chatMessages.scrollTop : 0;
                    chatMessages.innerHTML = "";

                    if (!activeChatUserId) {
                        const empty = document.createElement("div");
                        empty.className = "chat-empty";
                        empty.textContent = "Pick a user from the status board to open a private chat.";
                        chatMessages.appendChild(empty);
                        return;
                    }

                    const conversation = getConversationMessages(activeChatUserId);
                    const fragment = document.createDocumentFragment();

                    if (conversation.length === 0) {
                        const empty = document.createElement("div");
                        empty.className = "chat-empty";
                        empty.textContent = "No messages yet. Start the conversation.";
                        chatMessages.appendChild(empty);
                        return;
                    }

                    conversation.forEach((message) => {
                        const messageItem = document.createElement("div");
                        const isOwnMessage = message.sender_id === profileData?.id;
                        messageItem.className = `chat-message-item ${isOwnMessage ? "own" : "other"}`;

                        const bubble = document.createElement("div");
                        bubble.className = `chat-bubble ${isOwnMessage ? "own" : "other"}`;
                        bubble.dataset.messageId = String(message.id);

                        if (message.parent_message_id) {
                            const parent = getMessageById(message.parent_message_id);
                            const parentBox = document.createElement("div");
                            parentBox.className = "chat-bubble-parent";
                            const parentLabel = document.createElement("strong");
                            parentLabel.textContent = parent?.sender_username || "Reply";
                            const parentText = document.createElement("span");
                            parentText.textContent = getChatMessagePreview(parent);
                            parentBox.appendChild(parentLabel);
                            parentBox.appendChild(parentText);
                            bubble.appendChild(parentBox);
                        }

                        const text = document.createElement("p");
                        text.className = "chat-bubble-text";
                        text.textContent = message.content || "";

                        const meta = document.createElement("p");
                        meta.className = "chat-bubble-meta";
                        const editedMetaSuffix = message.edited_at ? " \u00B7 edited" : "";
                        meta.textContent = `${message.sender_username || "Unknown"} | ${formatNoteDate(message.edited_at || message.created_at)}${editedMetaSuffix}`;

                        const reactions = getReactionSummary(message.id);
                        let reactionWrap = null;

                        if (reactions.length > 0) {
                            reactionWrap = document.createElement("div");
                            reactionWrap.className = "chat-bubble-reactions";
                            reactions.forEach((reaction) => {
                                const chip = document.createElement("div");
                                chip.className = `chat-reaction-chip${reaction.mine ? " mine" : ""}`;
                                if (reaction.emoji === "\u2764") {
                                    chip.classList.add("heart");
                                }
                                chip.textContent = `${reaction.emoji} ${reaction.count}`;
                                reactionWrap.appendChild(chip);
                            });
                        }

                        const actions = document.createElement("div");
                        actions.className = "chat-bubble-actions";

                        const reactionButton = document.createElement("button");
                        reactionButton.type = "button";
                        reactionButton.className = "chat-bubble-action";
                        reactionButton.setAttribute("aria-label", "React to message");
                        reactionButton.textContent = "\u263A";
                        reactionButton.addEventListener("click", (event) => {
                            event.stopPropagation();
                            activeChatActionMenuId = null;
                            activeChatReactionMenuId = activeChatReactionMenuId === message.id ? null : message.id;
                            requestChatRender({ preserveScroll: true });
                        });

                        const replyButton = document.createElement("button");
                        replyButton.type = "button";
                        replyButton.className = "chat-bubble-action";
                        replyButton.setAttribute("aria-label", "Reply to message");
                        replyButton.textContent = "\u21A9";
                        replyButton.addEventListener("click", () => {
                            setChatReplyState(message);
                        });

                        actions.appendChild(reactionButton);
                        actions.appendChild(replyButton);

                        if (isOwnMessage) {
                            const menuButton = document.createElement("button");
                            menuButton.type = "button";
                            menuButton.className = "chat-bubble-action";
                            menuButton.setAttribute("aria-label", "Message actions");
                            menuButton.textContent = "\u22EE";
                            menuButton.addEventListener("click", (event) => {
                                event.stopPropagation();
                                activeChatReactionMenuId = null;
                                activeChatActionMenuId = activeChatActionMenuId === message.id ? null : message.id;
                                requestChatRender({ preserveScroll: true });
                            });
                            actions.appendChild(menuButton);
                        }

                        const reactionPicker = document.createElement("div");
                        reactionPicker.className = `chat-reaction-picker${activeChatReactionMenuId === message.id ? "" : " hidden"}`;
                        ["\u2764", "\uD83D\uDE02", "\uD83D\uDE0A", "\uD83D\uDE20", "\uD83D\uDE2E", "\uD83D\uDE22"].forEach((emoji) => {
                            const option = document.createElement("button");
                            option.type = "button";
                            option.className = "chat-reaction-option";
                            option.textContent = emoji;
                            option.addEventListener("click", async (event) => {
                                event.stopPropagation();
                                await reactToMessage(message.id, emoji);
                            });
                            reactionPicker.appendChild(option);
                        });
                        actions.appendChild(reactionPicker);

                        if (isOwnMessage) {
                            const actionMenu = document.createElement("div");
                            actionMenu.className = `chat-bubble-menu${activeChatActionMenuId === message.id ? "" : " hidden"}`;

                            const editButton = document.createElement("button");
                            editButton.type = "button";
                            editButton.className = "chat-bubble-menu-button";
                            editButton.textContent = "Edit";
                            editButton.addEventListener("click", () => {
                                activeChatActionMenuId = null;
                                setChatEditState(message);
                            });

                            const deleteButton = document.createElement("button");
                            deleteButton.type = "button";
                            deleteButton.className = "chat-bubble-menu-button delete";
                            deleteButton.textContent = "Delete";
                            deleteButton.addEventListener("click", async () => {
                                await deleteChatMessage(message.id);
                            });

                            actionMenu.appendChild(editButton);
                            actionMenu.appendChild(deleteButton);
                            actions.appendChild(actionMenu);
                        }

                        const footer = document.createElement("div");
                        footer.className = "chat-message-footer";

                        bubble.appendChild(text);
                        bubble.appendChild(meta);
                        messageItem.appendChild(bubble);

                        if (reactionWrap) {
                            footer.appendChild(reactionWrap);
                        } else {
                            const reactionSpacer = document.createElement("div");
                            reactionSpacer.className = "chat-message-footer-spacer";
                            footer.appendChild(reactionSpacer);
                        }

                        footer.appendChild(actions);
                        messageItem.appendChild(footer);
                        fragment.appendChild(messageItem);
                    });

                    chatMessages.appendChild(fragment);

                    if (preserveScroll) {
                        chatMessages.scrollTop = previousScrollTop;
                    } else {
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    }
                }
                async function markConversationAsRead(otherUserId) {
                    if (!supabaseClient || !profileData?.id || !otherUserId) {
                        return;
                    }

                    const unreadMessages = messagesEntries.filter((message) =>
                        message.receiver_id === profileData.id &&
                        message.sender_id === otherUserId &&
                        !message.is_read
                    );

                    if (unreadMessages.length === 0) {
                        return;
                    }

                    unreadMessages.forEach((message) => {
                        message.is_read = true;
                    });

                    renderLeaderboard();
                    requestChatRender({ preserveScroll: true });

                    const unreadIds = unreadMessages.map((message) => message.id).filter(Boolean);

                    if (unreadIds.length === 0) {
                        return;
                    }

                    const { error } = await supabaseClient
                        .from(MESSAGES_TABLE)
                        .update({ is_read: true })
                        .in("id", unreadIds);

                    if (error) {
                        console.error("Could not mark messages as read:", error.message);
                    }
                }

                async function openChatPanelWithUser(entry) {
                    if (!entry?.id || entry.id === profileData?.id) {
                        return;
                    }

                    activeChatUserId = entry.id;
                    clearChatComposerState();
                    chatPanelTitle.textContent = entry.username || "Messages";
                    chatPanelStatus.textContent = formatChatStatus(entry);
                    chatInput.value = "";
                    leaderboardPanel.classList.remove("open");
                    settingsLauncher.classList.remove("open");
                    updateMenuMessageAlert();
                    chatPanel.classList.add("open");
                    renderChatMessages();
                    await markConversationAsRead(entry.id);
                }

                async function loadMessages() {
                    if (!supabaseClient || !profileData?.id) {
                        messagesEntries = [];
                        messageReactionsEntries = [];
                        renderChatMessages();
                        renderLeaderboard();
                        return;
                    }

                    const { data, error } = await supabaseClient
                        .from(MESSAGES_TABLE)
                        .select("id, sender_id, sender_username, receiver_id, receiver_username, content, created_at, edited_at, parent_message_id, is_read")
                        .or(`sender_id.eq.${profileData.id},receiver_id.eq.${profileData.id}`)
                        .order("created_at", { ascending: true });

                    if (error) {
                        console.error("Could not load messages:", error.message);
                        return;
                    }

                    messagesEntries = data || [];
                    await loadMessageReactions(false);
                    renderChatMessages();
                    renderLeaderboard();
                }

                async function loadMessageReactions(shouldRenderChat = true) {
                    if (!supabaseClient) {
                        messageReactionsEntries = [];
                        if (shouldRenderChat) {
                            requestChatRender({ preserveScroll: true });
                        }
                        return;
                    }

                    const { data, error } = await supabaseClient
                        .from(MESSAGE_REACTIONS_TABLE)
                        .select("id, message_id, user_id, username, emoji, created_at");

                    if (error) {
                        console.error("Could not load message reactions:", error.message);
                        return;
                    }

                    messageReactionsEntries = data || [];
                    if (shouldRenderChat) {
                        requestChatRender({ preserveScroll: true });
                    }
                }

                async function sendChatMessage() {
                    if (!supabaseClient || !profileData?.id || !currentUser || !activeChatUserId) {
                        return;
                    }

                    const targetUser = leaderboardEntries.find((entry) => entry.id === activeChatUserId);
                    const targetUsername = targetUser?.username || chatPanelTitle.textContent.trim() || "Unknown";
                    const messageContent = chatInput.value.trim();

                    if (!messageContent) {
                        return;
                    }

                    chatSendButton.disabled = true;
                    let error = null;
                    const timestamp = new Date().toISOString();

                    if (activeChatEditMessageId) {
                        ({ error } = await supabaseClient
                            .from(MESSAGES_TABLE)
                            .update({
                                content: messageContent,
                                edited_at: timestamp
                            })
                            .eq("id", activeChatEditMessageId)
                            .eq("sender_id", profileData.id));
                    } else {
                        ({ error } = await supabaseClient
                            .from(MESSAGES_TABLE)
                            .insert({
                                sender_id: profileData.id,
                                sender_username: currentUser,
                                receiver_id: activeChatUserId,
                                receiver_username: targetUsername,
                                content: messageContent,
                                created_at: timestamp,
                                edited_at: null,
                                parent_message_id: activeChatReplyMessageId || null,
                                is_read: false
                            }));
                    }

                    chatSendButton.disabled = false;

                    if (error) {
                        console.error("Could not send message:", error.message);
                        showPresenceToast("Could not send message.");
                        return;
                    }

                    if (!activeChatEditMessageId) {
                        messagesEntries = [
                            ...messagesEntries,
                            {
                                id: `local-${timestamp}`,
                                sender_id: profileData.id,
                                sender_username: currentUser,
                                receiver_id: activeChatUserId,
                                receiver_username: targetUsername,
                                content: messageContent,
                                created_at: timestamp,
                                edited_at: null,
                                parent_message_id: activeChatReplyMessageId || null,
                                is_read: false
                            }
                        ];
                        renderChatMessages();
                    }

                    chatInput.value = "";
                    clearChatComposerState();
                    await loadMessages();
                }

                async function connectMessagesRealtime() {
                    if (!supabaseClient) {
                        return;
                    }

                    if (messagesChannel) {
                        return;
                    }

                    messagesChannel = supabaseClient
                        .channel("shared-messages")
                        .on(
                            "postgres_changes",
                            { event: "*", schema: "public", table: MESSAGES_TABLE },
                            async () => {
                                await loadMessages();

                                if (activeChatUserId) {
                                    await markConversationAsRead(activeChatUserId);
                                    const activeEntry = leaderboardEntries.find((entry) => entry.id === activeChatUserId);
                                    chatPanelStatus.textContent = formatChatStatus(activeEntry);
                                }
                            }
                        );

                    messagesChannel.subscribe();
                }

                async function connectMessageReactionsRealtime() {
                    if (!supabaseClient || messageReactionsChannel) {
                        return;
                    }

                    messageReactionsChannel = supabaseClient
                        .channel("shared-message-reactions")
                        .on(
                            "postgres_changes",
                            { event: "*", schema: "public", table: MESSAGE_REACTIONS_TABLE },
                            async () => {
                                await loadMessageReactions();
                            }
                        );

                    messageReactionsChannel.subscribe();
                }

                function formatNoteDate(dateValue) {
                    const parsed = dateValue ? new Date(dateValue) : null;

                    if (!parsed || Number.isNaN(parsed.getTime())) {
                        return "";
                    }

                    return parsed.toLocaleString([], {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    });
                }

                function getNoteReadKey(noteId) {
                    return String(noteId ?? "");
                }

                function getLocalNoteReadsStorageKey() {
                    return profileData?.id ? `${LOCAL_NOTE_READS_PREFIX}${profileData.id}` : "";
                }

                function getNotesVisibilityStorageKey() {
                    return profileData?.id ? `${LOCAL_NOTES_VISIBILITY_PREFIX}${profileData.id}` : "";
                }

                function loadNotesVisibilityPreference() {
                    const storageKey = getNotesVisibilityStorageKey();

                    if (!storageKey) {
                        notesVisibilityEnabled = true;
                        return;
                    }

                    try {
                        const savedValue = localStorage.getItem(storageKey);
                        notesVisibilityEnabled = savedValue === null ? true : savedValue === "true";
                    } catch {
                        notesVisibilityEnabled = true;
                    }
                }

                function saveNotesVisibilityPreference() {
                    const storageKey = getNotesVisibilityStorageKey();

                    if (!storageKey) {
                        return;
                    }

                    try {
                        localStorage.setItem(storageKey, String(notesVisibilityEnabled));
                    } catch {
                        // Ignore localStorage write failures.
                    }
                }

                function loadLocalNoteReads() {
                    const storageKey = getLocalNoteReadsStorageKey();

                    if (!storageKey) {
                        return new Map();
                    }

                    try {
                        const rawValue = localStorage.getItem(storageKey);
                        const parsedValue = rawValue ? JSON.parse(rawValue) : {};
                        const entries = Object.entries(parsedValue || {}).map(([noteId, readAt]) => [getNoteReadKey(noteId), String(readAt || "")]);
                        return new Map(entries);
                    } catch {
                        return new Map();
                    }
                }

                function saveLocalNoteReads() {
                    const storageKey = getLocalNoteReadsStorageKey();

                    if (!storageKey) {
                        return;
                    }

                    try {
                        localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(noteReadMap)));
                    } catch {
                        // Ignore localStorage write failures.
                    }
                }

                function getLatestNoteActivityTime(note) {
                    const replyTimes = noteRepliesEntries
                        .filter((reply) => reply.note_id === note.id)
                        .map((reply) => new Date(reply.created_at).getTime())
                        .filter((time) => Number.isFinite(time));

                    const noteCreatedAt = new Date(note.created_at).getTime();
                    return Math.max(noteCreatedAt || 0, ...replyTimes);
                }

                function isNoteUnread(note) {
                    if (!note || note.user_id === profileData?.id) {
                        return false;
                    }

                    const readAt = noteReadMap.get(getNoteReadKey(note.id));

                    if (!readAt) {
                        return true;
                    }

                    const latestActivityTime = getLatestNoteActivityTime(note);
                    const readTime = new Date(readAt).getTime();

                    if (!Number.isFinite(readTime)) {
                        return true;
                    }

                    return latestActivityTime > readTime;
                }

                function hasUnreadReplyAlert(note) {
                    if (!note || !profileData?.id) {
                        return false;
                    }

                    const latestReplyFromOtherUser = noteRepliesEntries
                        .filter((reply) => reply.note_id === note.id && reply.user_id !== profileData.id)
                        .map((reply) => new Date(reply.created_at).getTime())
                        .filter((time) => Number.isFinite(time))
                        .sort((left, right) => right - left)[0];

                    if (!latestReplyFromOtherUser) {
                        return false;
                    }

                    const readAt = noteReadMap.get(getNoteReadKey(note.id));

                    if (!readAt) {
                        return true;
                    }

                    const readTime = new Date(readAt).getTime();

                    if (!Number.isFinite(readTime)) {
                        return true;
                    }

                    return latestReplyFromOtherUser > readTime;
                }

                function getNoteLayout(index, noteId) {
                    const noteKey = String(noteId ?? index);
                    const existingLayout = noteLayoutMap.get(noteKey);

                    if (existingLayout) {
                        return existingLayout;
                    }

                    const layerWidth = pinnedNotesLayer?.clientWidth || window.innerWidth || 932;
                    const layerHeight = pinnedNotesLayer?.clientHeight || window.innerHeight || 430;
                    const noteWidth = layerWidth <= 932 ? 44 : 60;
                    const noteHeight = layerWidth <= 932 ? 44 : 76;
                    const horizontalGapPercent = ((noteWidth + 14) / Math.max(layerWidth, 1)) * 100;
                    const verticalGapPercent = ((noteHeight + 18) / Math.max(layerHeight, 1)) * 100;
                    const minTop = 6;
                    const maxTop = Math.max(minTop, 92 - verticalGapPercent);
                    const minLeft = 4;
                    const maxLeft = Math.max(minLeft, 96 - horizontalGapPercent);
                    const reservedLeftMax = layerWidth <= 932 ? 42 : 30;
                    const reservedTopMin = layerWidth <= 932 ? 58 : 72;
                    let layout = null;

                    for (let attempt = 0; attempt < 80; attempt += 1) {
                        const candidate = {
                            top: minTop + Math.random() * Math.max(1, maxTop - minTop),
                            left: minLeft + Math.random() * Math.max(1, maxLeft - minLeft),
                            rotate: -6 + Math.random() * 12
                        };

                        const overlapsPlayerZone = candidate.left < reservedLeftMax && candidate.top > reservedTopMin;

                        if (overlapsPlayerZone) {
                            continue;
                        }

                        const overlapsExisting = Array.from(noteLayoutMap.values()).some((placedLayout) => {
                            const horizontalOverlap = Math.abs(candidate.left - placedLayout.left) < horizontalGapPercent;
                            const verticalOverlap = Math.abs(candidate.top - placedLayout.top) < verticalGapPercent;
                            return horizontalOverlap && verticalOverlap;
                        });

                        if (!overlapsExisting) {
                            layout = candidate;
                            break;
                        }
                    }

                    if (!layout) {
                        const columnCount = Math.max(2, Math.floor((maxLeft - minLeft) / Math.max(horizontalGapPercent, 8)) + 1);
                        const row = Math.floor(index / columnCount);
                        const column = index % columnCount;

                        layout = {
                            top: Math.min(maxTop, minTop + row * Math.max(verticalGapPercent, 10)),
                            left: Math.min(maxLeft, minLeft + column * Math.max(horizontalGapPercent, 10)),
                            rotate: -4 + Math.random() * 8
                        };

                        if (layout.left < reservedLeftMax && layout.top > reservedTopMin) {
                            layout.top = Math.max(minTop, reservedTopMin - verticalGapPercent - 4);
                            layout.left = Math.min(maxLeft, reservedLeftMax + 4);
                        }
                    }

                    noteLayoutMap.set(noteKey, layout);
                    return layout;
                }

                function closeAllNotePanels() {
                    notesMenuPanel.classList.remove("open");
                    notesListPanel.classList.remove("open");
                    notesPanel.classList.remove("open");
                    noteViewerPanel.classList.remove("open");
                    noteReplyComposer.classList.add("hidden");
                    noteReplyTextarea.value = "";
                    activeViewerNoteId = null;
                    document.body.classList.remove("mobile-keyboard-open");
                }

                function updatePinnedNotesVisibility() {
                    if (!mainPage) {
                        return;
                    }

                    mainPage.classList.toggle("notes-visible", notesVisibilityEnabled);

                    if (notesVisibilityToggle) {
                        notesVisibilityToggle.checked = notesVisibilityEnabled;
                    }
                }

                function getOwnNotesCount() {
                    if (!profileData?.id) {
                        return 0;
                    }

                    return notesEntries.filter((note) => note.user_id === profileData.id).length;
                }

                function getOpenOverlayPanels() {
                    return [
                        settingsPanel,
                        leaderboardPanel,
                        chatPanel,
                        notesMenuPanel,
                        notesListPanel,
                        notesPanel,
                        noteViewerPanel
                    ].filter((panel) => panel.classList.contains("open"));
                }

                function updateViewportHeightVariable() {
                    const viewportHeight = window.visualViewport
                        ? window.visualViewport.height
                        : window.innerHeight;

                    document.documentElement.style.setProperty("--app-viewport-height", `${viewportHeight}px`);
                }

                function syncMobileKeyboardState() {
                    updateViewportHeightVariable();

                    if (!window.visualViewport) {
                        return;
                    }

                    const keyboardOpen = window.innerHeight - window.visualViewport.height > 140;
                    document.body.classList.toggle("mobile-keyboard-open", keyboardOpen);

                    if (!keyboardOpen) {
                        return;
                    }

                    const openPanels = getOpenOverlayPanels();

                    openPanels.forEach((panel) => {
                        panel.scrollTop = 0;
                    });
                }

                function focusNoteInput(input) {
                    if (!input) {
                        return;
                    }

                    input.focus({ preventScroll: true });

                    window.setTimeout(() => {
                        input.scrollIntoView({ block: "center", inline: "nearest" });
                        syncMobileKeyboardState();
                    }, 120);
                }

                function openNotesEditor(note = null) {
                    if (!note && getOwnNotesCount() >= 3) {
                        showPresenceToast("You can only create up to 3 notes.");
                        return;
                    }

                    closeAllNotePanels();
                    editingNoteId = note?.id || null;
                    notesPanelTitle.textContent = editingNoteId ? "Edit Note" : "Write Note";
                    notesSubmitButton.textContent = editingNoteId ? "Update" : "Submit";
                    notesTextarea.value = note?.content || "";
                    notesEditorDeleteButton.classList.toggle("hidden", !editingNoteId);
                    notesEditorDeleteButton.onclick = null;

                    if (editingNoteId && note?.user_id === profileData?.id) {
                        notesEditorDeleteButton.onclick = async () => {
                            const { error } = await supabaseClient
                                .from(NOTES_TABLE)
                                .delete()
                                .eq("id", note.id)
                                .eq("user_id", profileData.id);

                            if (error) {
                                console.error("Could not delete note:", error.message);
                                showPresenceToast("Could not delete note.");
                                return;
                            }

                            editingNoteId = null;
                            notesPanel.classList.remove("open");
                            showPresenceToast("Note deleted.");
                        };
                    }

                    notesPanel.classList.add("open");
                    focusNoteInput(notesTextarea);
                }

                function renderSubmittedNotes() {
                    notesSubmittedList.innerHTML = "";

                    const ownNotes = notesEntries
                        .filter((note) => note.user_id === profileData?.id)
                        .sort((left, right) => new Date(right.created_at) - new Date(left.created_at));

                    if (ownNotes.length === 0) {
                        const empty = document.createElement("div");
                        empty.className = "leaderboard-empty";
                        empty.textContent = "You haven't submitted any notes yet.";
                        notesSubmittedList.appendChild(empty);
                        return;
                    }

                    ownNotes.forEach((note) => {
                        const item = document.createElement("button");
                        item.type = "button";
                        item.className = "submitted-note-item";

                        const text = document.createElement("p");
                        text.className = "submitted-note-text";
                        text.textContent = note.content;

                        const meta = document.createElement("p");
                        meta.className = "submitted-note-meta";
                        meta.textContent = formatNoteDate(note.created_at);

                        item.appendChild(text);
                        item.appendChild(meta);
                        item.addEventListener("click", () => {
                            openNotesEditor(note);
                        });
                        notesSubmittedList.appendChild(item);
                    });
                }

                async function openNoteViewer(note) {
                    const canEditNote = Boolean(profileData?.id && note.user_id === profileData.id);
                    const hasReplyFromOtherUser = noteRepliesEntries.some((reply) =>
                        reply.note_id === note.id && reply.user_id !== profileData?.id
                    );
                    const canReplyToNote = Boolean(
                        profileData?.id && (note.user_id !== profileData.id || hasReplyFromOtherUser)
                    );
                    activeViewerNoteId = note.id;

                    noteViewerText.textContent = note.content || "";
                    noteViewerMeta.textContent = `${note.username || "Unknown"} | ${formatNoteDate(note.created_at)}`;
                    noteEditButton.classList.toggle("hidden", !canEditNote);
                    noteReplyButton.classList.toggle("hidden", !canReplyToNote);
                    noteEditButton.onclick = null;
                    noteReplyComposer.classList.add("hidden");
                    noteReplyTextarea.value = "";
                    renderNoteReplies(note.id);

                    if (canEditNote) {
                        noteEditButton.onclick = () => {
                            openNotesEditor(note);
                        };
                    }

                    noteReplyButton.textContent = "Reply";
                    noteReplyButton.onclick = async () => {
                        if (!canReplyToNote) {
                            showPresenceToast("Wait for someone to reply first before replying to your own note.");
                            return;
                        }

                        if (noteReplyComposer.classList.contains("hidden")) {
                            noteReplyComposer.classList.remove("hidden");
                            noteReplyButton.textContent = "Post Reply";
                            focusNoteInput(noteReplyTextarea);
                            return;
                        }

                        await submitNoteReply();
                    };

                    noteViewerPanel.classList.add("open");
                    await markNoteAsRead(note);
                }

                function renderPinnedNotes() {
                    if (!pinnedNotesLayer) {
                        return;
                    }

                    pinnedNotesLayer.innerHTML = "";

                    notesEntries.forEach((note, index) => {
                        const isOwnNote = note.user_id === profileData?.id;
                        const isUnread = !isOwnNote && isNoteUnread(note);
                        const hasReplyAlert = hasUnreadReplyAlert(note);
                        const pin = document.createElement("button");
                        pin.type = "button";
                        pin.className = "pinned-note";
                        pin.setAttribute("aria-label", `Open note from ${note.username || "Unknown"}`);

                        const layout = getNoteLayout(index, note.id);
                        pin.style.top = `${layout.top}%`;
                        pin.style.left = `${layout.left}%`;
                        pin.style.setProperty("--note-rotate", `${layout.rotate}deg`);

                        const icon = document.createElement("span");
                        icon.className = "pinned-note-icon";
                        icon.innerHTML = "<span></span>";

                        const name = document.createElement("span");
                        name.className = "pinned-note-name";
                        name.textContent = note.username || "Unknown";

                        if (hasReplyAlert) {
                            const replyBadge = document.createElement("span");
                            replyBadge.className = "pinned-note-reply-alert";
                            replyBadge.textContent = "!";
                            pin.appendChild(replyBadge);
                        } else if (isUnread) {
                            const unreadBadge = document.createElement("span");
                            unreadBadge.className = "pinned-note-unread";
                            unreadBadge.textContent = "Unread";
                            pin.appendChild(unreadBadge);
                        }

                        pin.appendChild(name);
                        pin.appendChild(icon);
                        pin.addEventListener("click", async () => {
                            await openNoteViewer(note);
                        });

                        pinnedNotesLayer.appendChild(pin);
                    });

                    updatePinnedNotesVisibility();
                }

                async function loadNotes() {
                    if (!supabaseClient) {
                        notesEntries = [];
                        renderPinnedNotes();
                        return;
                    }

                    const { data, error } = await supabaseClient
                        .from(NOTES_TABLE)
                        .select("id, user_id, username, content, created_at")
                        .order("created_at", { ascending: false });

                    if (error) {
                        console.error("Could not load notes:", error.message);
                        return;
                    }

                    notesEntries = data || [];
                    noteLayoutMap = new Map();
                    renderPinnedNotes();
                    renderSubmittedNotes();
                }

                function renderNoteReplies(noteId) {
                    noteRepliesList.innerHTML = "";

                    const replies = noteRepliesEntries
                        .filter((reply) => reply.note_id === noteId)
                        .sort((left, right) => new Date(left.created_at) - new Date(right.created_at));

                    if (replies.length === 0) {
                        return;
                    }

                    replies.forEach((reply) => {
                        const item = document.createElement("div");
                        item.className = "note-reply-item";

                        const label = document.createElement("p");
                        label.className = "note-reply-label";
                        label.textContent = "REPLY";

                        const text = document.createElement("p");
                        text.className = "note-reply-text";
                        text.textContent = reply.content || "";

                        const meta = document.createElement("p");
                        meta.className = "note-reply-meta";
                        meta.textContent = `${reply.username || "Unknown"} | ${formatNoteDate(reply.created_at)}`;

                        item.appendChild(label);
                        item.appendChild(text);
                        item.appendChild(meta);
                        noteRepliesList.appendChild(item);
                    });
                }

                async function loadNoteReplies() {
                    if (!supabaseClient) {
                        noteRepliesEntries = [];
                        renderNoteReplies(activeViewerNoteId);
                        renderPinnedNotes();
                        return;
                    }

                    const { data, error } = await supabaseClient
                        .from(NOTE_REPLIES_TABLE)
                        .select("id, note_id, user_id, username, content, created_at")
                        .order("created_at", { ascending: true });

                    if (error) {
                        console.error("Could not load note replies:", error.message);
                        return;
                    }

                    noteRepliesEntries = data || [];

                    if (activeViewerNoteId) {
                        renderNoteReplies(activeViewerNoteId);
                    }

                    renderPinnedNotes();
                }

                async function loadNoteReads() {
                    if (!supabaseClient || !profileData?.id) {
                        noteReadMap = new Map();
                        renderPinnedNotes();
                        return;
                    }

                    const localReadMap = loadLocalNoteReads();

                    const { data, error } = await supabaseClient
                        .from(NOTE_READS_TABLE)
                        .select("note_id, created_at")
                        .eq("user_id", profileData.id);

                    if (error) {
                        console.error("Could not load note reads:", error.message);
                        noteReadMap = localReadMap;
                        renderPinnedNotes();
                        return;
                    }

                    const remoteReadMap = new Map();

                    (data || []).forEach((row) => {
                        const key = getNoteReadKey(row.note_id);
                        const existing = remoteReadMap.get(key);

                        if (!existing || new Date(row.created_at).getTime() > new Date(existing).getTime()) {
                            remoteReadMap.set(key, row.created_at);
                        }
                    });

                    noteReadMap = new Map(localReadMap);

                    remoteReadMap.forEach((value, key) => {
                        const localValue = noteReadMap.get(key);

                        if (!localValue || new Date(value).getTime() > new Date(localValue).getTime()) {
                            noteReadMap.set(key, value);
                        }
                    });

                    saveLocalNoteReads();
                    renderPinnedNotes();
                }

                async function markNoteAsRead(note) {
                    if (!supabaseClient || !profileData?.id || !note?.id) {
                        return;
                    }

                    const noteReadKey = getNoteReadKey(note.id);
                    const latestActivityTime = getLatestNoteActivityTime(note);
                    const currentReadAt = noteReadMap.get(noteReadKey);
                    const currentReadTime = currentReadAt ? new Date(currentReadAt).getTime() : 0;

                    if (currentReadTime >= latestActivityTime) {
                        return;
                    }

                    const readAt = new Date().toISOString();
                    noteReadMap.set(noteReadKey, readAt);
                    saveLocalNoteReads();
                    renderPinnedNotes();

                    const { error } = await supabaseClient
                        .from(NOTE_READS_TABLE)
                        .insert({
                            user_id: profileData.id,
                            note_id: note.id,
                            created_at: readAt
                        });

                    if (error) {
                        console.error("Could not save note read state:", error.message);
                    }
                }

                async function submitNote() {
                    if (!supabaseClient || !profileData?.id || !currentUser) {
                        showPresenceToast("Log in first before writing a note.");
                        return;
                    }

                    if (!editingNoteId && getOwnNotesCount() >= 3) {
                        showPresenceToast("You can only create up to 3 notes.");
                        return;
                    }

                    const noteContent = notesTextarea.value.trim();

                    if (!noteContent) {
                        showPresenceToast("Write a note first.");
                        return;
                    }

                    notesSubmitButton.disabled = true;

                    const notePayload = {
                        user_id: profileData.id,
                        username: currentUser,
                        content: noteContent
                    };

                    const noteQuery = editingNoteId
                        ? supabaseClient
                            .from(NOTES_TABLE)
                            .update(notePayload)
                            .eq("id", editingNoteId)
                            .eq("user_id", profileData.id)
                        : supabaseClient
                            .from(NOTES_TABLE)
                            .insert({
                                ...notePayload,
                                created_at: new Date().toISOString()
                            });

                    const { error } = await noteQuery;

                    notesSubmitButton.disabled = false;

                    if (error) {
                        console.error("Could not save note:", error.message);
                        showPresenceToast("Could not save note.");
                        return;
                    }

                    const wasEditing = Boolean(editingNoteId);
                    notesTextarea.value = "";
                    editingNoteId = null;
                    notesPanel.classList.remove("open");
                    showPresenceToast(wasEditing ? "Note updated." : "Note pinned.");
                }

                async function submitNoteReply() {
                    if (!supabaseClient || !profileData?.id || !currentUser || !activeViewerNoteId) {
                        showPresenceToast("Open a note first before replying.");
                        return;
                    }

                    const activeNote = notesEntries.find((note) => note.id === activeViewerNoteId);
                    const hasReplyFromOtherUser = noteRepliesEntries.some((reply) =>
                        reply.note_id === activeViewerNoteId && reply.user_id !== profileData?.id
                    );

                    if (!activeNote || (activeNote.user_id === profileData.id && !hasReplyFromOtherUser)) {
                        showPresenceToast("Wait for someone to reply first before replying to your own note.");
                        return;
                    }

                    const replyContent = noteReplyTextarea.value.trim();

                    if (!replyContent) {
                        showPresenceToast("Write a reply first.");
                        return;
                    }

                    noteReplySubmitButton.disabled = true;

                    const { error } = await supabaseClient
                        .from(NOTE_REPLIES_TABLE)
                        .insert({
                            note_id: activeViewerNoteId,
                            user_id: profileData.id,
                            username: currentUser,
                            content: replyContent,
                            created_at: new Date().toISOString()
                        });

                    noteReplySubmitButton.disabled = false;

                    if (error) {
                        console.error("Could not save reply:", error.message);
                        showPresenceToast("Could not save reply.");
                        return;
                    }

                    noteReplyTextarea.value = "";
                    noteReplyComposer.classList.add("hidden");
                    noteReplyButton.textContent = "Reply";
                    showPresenceToast("Reply posted.");
                }

                async function connectNotesRealtime() {
                    if (!supabaseClient) {
                        return;
                    }

                    if (!notesChannel) {
                        notesChannel = supabaseClient
                            .channel("shared-notes")
                            .on(
                                "postgres_changes",
                                { event: "*", schema: "public", table: NOTES_TABLE },
                                () => {
                                    loadNotes();
                                }
                            );

                        notesChannel.subscribe();
                    }

                    if (!noteRepliesChannel) {
                        noteRepliesChannel = supabaseClient
                            .channel("shared-note-replies")
                            .on(
                                "postgres_changes",
                                { event: "*", schema: "public", table: NOTE_REPLIES_TABLE },
                                () => {
                                    loadNoteReplies();
                                }
                            );

                        noteRepliesChannel.subscribe();
                    }
                }

                async function deleteProfileAccount(profileId, profileName) {
                    if (!supabaseClient || !profileId) {
                        return;
                    }

                    if (!isAdminUser()) {
                        showPresenceToast("Only Nico can delete accounts.");
                        return;
                    }

                    if (profileData?.id === profileId) {
                        showPresenceToast("You can't delete the account you're using right now.");
                        return;
                    }

                    const { error } = await supabaseClient
                        .from(PROFILE_TABLE)
                        .delete()
                        .eq("id", profileId);

                    if (error) {
                        console.error("Could not delete account:", error.message);
                        showPresenceToast(`Could not delete ${profileName}.`);
                        return;
                    }

                    leaderboardEntries = leaderboardEntries.filter((entry) => entry.id !== profileId);
                    onlineUsers = onlineUsers.filter((entry) => entry.id !== profileId);
                    renderLeaderboard();
                    showPresenceToast(`${profileName} was deleted.`);
                }

                function openDeleteConfirm(profileId, profileName) {
                    pendingDeleteProfile = { id: profileId, name: profileName };
                    deleteConfirmText.textContent = `Delete account "${profileName}"? This cannot be undone.`;
                    deleteConfirmPanel.classList.add("open");
                }

                function closeDeleteConfirm() {
                    pendingDeleteProfile = null;
                    deleteConfirmPanel.classList.remove("open");
                }

                function showPresenceToast(message) {
                    const toast = document.createElement("div");
                    toast.className = "presence-toast";
                    toast.classList.add(message.toLowerCase().includes("left") ? "leave" : "enter");
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
                    knownPresenceUserIds = new Set();
                    presenceChannel = supabaseClient.channel("main-room", {
                        config: {
                            presence: {
                                key: profileData.id
                            }
                        }
                    });

                    presenceChannel
                        .on("presence", { event: "sync" }, () => {
                            syncOnlineUsersFromPresence();
                            knownPresenceUserIds = new Set(onlineUsers.map((user) => user.id));
                        })
                        .on("presence", { event: "join" }, ({ newPresences }) => {
                            if (!presenceSyncStarted) {
                                return;
                            }

                            newPresences.forEach((presence) => {
                                const presenceUserId = presence.user_id || "";

                                if (!presenceUserId || presenceUserId === profileData?.id || knownPresenceUserIds.has(presenceUserId)) {
                                    return;
                                }

                                knownPresenceUserIds.add(presenceUserId);

                                if (Date.now() < suppressPresenceJoinToastsUntil) {
                                    return;
                                }

                                showPresenceToast(`User ${presence.username} has entered.`);
                            });

                            refreshLeaderboard();
                        })
                        .on("presence", { event: "leave" }, ({ leftPresences }) => {
                            if (!presenceSyncStarted) {
                                return;
                            }

                            const leftAt = new Date().toISOString();

                            leftPresences.forEach((presence) => {
                                const presenceUserId = presence.user_id || "";

                                if (!presenceUserId) {
                                    return;
                                }

                                knownPresenceUserIds.delete(presenceUserId);
                                setLocalLastOnline(presenceUserId, leftAt);
                                showPresenceToast(`User ${presence.username} has left.`);
                            });

                            renderLeaderboard();
                        })
                    .subscribe(async (status) => {
                        if (status !== "SUBSCRIBED") {
                            return;
                        }
                        syncOnlineUsersFromPresence();
                        knownPresenceUserIds = new Set(onlineUsers.map((user) => user.id));
                        await trackCurrentPresence();
                        syncOnlineUsersFromPresence();
                        knownPresenceUserIds = new Set(onlineUsers.map((user) => user.id));
                        suppressPresenceJoinToastsUntil = Date.now() + 1600;
                        presenceSyncStarted = true;
                        showPresenceToast(`User ${currentUser} has entered.`);
                    });
            }

                async function trackCurrentPresence() {
                    if (!presenceChannel || !profileData?.id || !currentUser) {
                        return;
                    }

                    await presenceChannel.track({
                        user_id: profileData.id,
                        username: currentUser
                    });
                }

                async function updateProfileLastOnline() {
                    if (!supabaseClient || !profileData?.id) {
                        return;
                    }

                    const lastOnlineValue = new Date().toISOString();
                    setLocalLastOnline(profileData.id, lastOnlineValue);

                    try {
                        await supabaseClient
                            .from(PROFILE_TABLE)
                            .update({ last_online: lastOnlineValue })
                            .eq("id", profileData.id);
                    } catch {
                        // Ignore best-effort last-online updates.
                    }
                }

                async function untrackCurrentPresence() {
                    if (!presenceChannel || typeof presenceChannel.untrack !== "function") {
                        await updateProfileLastOnline();
                        return;
                    }

                    try {
                        await presenceChannel.untrack();
                    } catch {
                        // Ignore untrack failures during unload/visibility changes.
                    }

                    await updateProfileLastOnline();
                }

                async function handlePresenceVisibilityChange() {
                    if (!profileData?.id || !presenceChannel) {
                        return;
                    }

                    if (document.visibilityState === "hidden") {
                        await untrackCurrentPresence();
                        return;
                    }

                    if (mainPage.classList.contains("active")) {
                        await trackCurrentPresence();
                    }
                }

                async function handlePresencePageLeave() {
                    await untrackCurrentPresence();
                }

                async function openPostAuthFlow() {
                    await updateAdminSettingsView();
                    applyUserSpecificTheme();
                    loadNotesVisibilityPreference();
                    loadLikedSongsPreference();
                    onlineUsers = [];
                    renderLeaderboard();
                    await Promise.all([loadNotes(), loadNoteReads(), loadNoteReplies(), loadMessages()]);
                    await connectNotesRealtime();
                    await connectMessagesRealtime();
                    await connectMessageReactionsRealtime();
                    setActiveScreen(landscapeScreen);
                }

                function clearRememberedSessionAndReturnToLogin() {
                    profileData = null;
                    currentUser = "";
                    onlineUsers = [];
                    noteReadMap = new Map();
                    messagesEntries = [];
                    likedSongFiles = new Set();
                    playlistViewMode = "songs";
                    localStorage.removeItem(LOCAL_SESSION_KEY);
                    renderPinnedNotes();
                    renderLeaderboard();
                    renderChatMessages();
                    settingsLauncher.classList.remove("open");
                    updateMenuMessageAlert();
                    settingsPanel.classList.remove("open");
                    leaderboardPanel.classList.remove("open");
                    chatPanel.classList.remove("open");
                    notesMenuPanel.classList.remove("open");
                    notesListPanel.classList.remove("open");
                    notesPanel.classList.remove("open");
                    noteViewerPanel.classList.remove("open");
                    noteReplyComposer.classList.add("hidden");
                    noteReplyTextarea.value = "";
                    activeViewerNoteId = null;
                    activeChatUserId = null;
                    clearChatComposerState();
                    closeDeleteConfirm();
                    chatInput.value = "";
                    nameInput.value = "";
                    passwordInput.value = "";
                    confirmPasswordInput.value = "";
                    setAuthMode("login");
                    showAuthMessage("Session cleared. Log in again to continue.", "success");
                    setActiveScreen(lockScreen);
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

                function takeRandomIndexWithoutReplacement(pool, total) {
                    if (total <= 0) {
                        return -1;
                    }

                    if (!Array.isArray(pool) || pool.length === 0) {
                        pool = Array.from({ length: total }, (_, index) => index);
                    }

                    const randomIndex = Math.floor(Math.random() * pool.length);
                    const [selected] = pool.splice(randomIndex, 1);
                    return { selected, pool };
                }

                function resetBouncingTextPool(excludeIndex = -1) {
                    remainingBouncingTextIndices = bouncingTexts
                        .map((_, index) => index)
                        .filter((index) => index !== excludeIndex);
                }

                function getNextBouncingTextIndex() {
                    if (bouncingTexts.length === 0) {
                        return -1;
                    }

                    if (bouncingTexts.length === 1) {
                        return 0;
                    }

                    if (remainingBouncingTextIndices.length === 0) {
                        resetBouncingTextPool(bouncingTextIndex);
                    }

                    const result = takeRandomIndexWithoutReplacement(remainingBouncingTextIndices, bouncingTexts.length);
                    remainingBouncingTextIndices = result.pool;
                    return result.selected;
                }

                function resetSongPool(excludeIndex = -1) {
                    remainingSongIndices = songs
                        .map((_, index) => index)
                        .filter((index) => index !== excludeIndex);
                }

                function markSongAsUsed(index) {
                    remainingSongIndices = remainingSongIndices.filter((songIndex) => songIndex !== index);
                }

                function getNextRandomSongIndex(excludeIndex = -1) {
                    if (songs.length === 0) {
                        return -1;
                    }

                    if (songs.length === 1) {
                        return 0;
                    }

                    if (remainingSongIndices.length === 0) {
                        resetSongPool(excludeIndex);
                    }

                    const availablePool = remainingSongIndices.filter((songIndex) => songIndex !== excludeIndex);

                    if (availablePool.length === 0) {
                        resetSongPool(excludeIndex);
                    } else if (availablePool.length !== remainingSongIndices.length) {
                        remainingSongIndices = availablePool;
                    }

                    const result = takeRandomIndexWithoutReplacement(remainingSongIndices, songs.length);
                    remainingSongIndices = result.pool;
                    return result.selected;
                }

                function getPlayableSongIndices() {
                    if (playlistViewMode !== "liked") {
                        return songs.map((_, index) => index);
                    }

                    return songs
                        .map((song, index) => ({ song, index }))
                        .filter(({ song }) => likedSongFiles.has(song.file))
                        .map(({ index }) => index);
                }

                function getNextPlayableIndex(direction = 1) {
                    const playableIndices = getPlayableSongIndices();

                    if (playableIndices.length === 0) {
                        return -1;
                    }

                    if (playableIndices.length === 1) {
                        return playableIndices[0];
                    }

                    const currentPlayablePosition = playableIndices.indexOf(currentSongIndex);

                    if (currentPlayablePosition < 0) {
                        return playableIndices[0];
                    }

                    const nextPosition = (currentPlayablePosition + direction + playableIndices.length) % playableIndices.length;
                    return playableIndices[nextPosition];
                }

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
                    [lockScreen, landscapeScreen, mainPage].forEach((screen) => {
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
                        notesMenuPanel.classList.remove("open");
                        notesListPanel.classList.remove("open");
                        notesPanel.classList.remove("open");
                        noteViewerPanel.classList.remove("open");
                        settingsLauncher.classList.remove("open");
                        updateMenuMessageAlert();

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
                    const playableIndices = getPlayableSongIndices();

                    if (playableIndices.length === 0) {
                        return false;
                    }

                    if (playlistViewMode !== "liked") {
                        const nextSongIndex = getNextRandomSongIndex(currentSongIndex);

                        if (nextSongIndex < 0) {
                            return false;
                        }

                        currentSongIndex = nextSongIndex;
                        return true;
                    }

                    const availableIndices = playableIndices.filter((index) => index !== currentSongIndex);
                    const pool = availableIndices.length > 0 ? availableIndices : playableIndices;
                    const nextSongIndex = pool[Math.floor(Math.random() * pool.length)];
                    if (typeof nextSongIndex !== "number") {
                        return false;
                    }

                    currentSongIndex = nextSongIndex;
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
                        playerVolumeToggle.textContent = "\uD83D\uDD07";
                    } else if (audioPlayer.volume < 0.5) {
                        playerVolumeToggle.textContent = "\uD83D\uDD09";
                    } else {
                        playerVolumeToggle.textContent = "\uD83D\uDD0A";
                    }
                }

                // Updates the center idle music text.
                function updateFloatingNowPlaying() {
                    floatingNowPlayingTitle.textContent = nowPlayingTitle.textContent || "Loading songs...";
                    floatingNowPlayingTime.textContent = `${formatTime(audioPlayer.currentTime)} / ${formatTime(audioPlayer.duration)}`;
                }

                function renderPlayerPlaylist(filterText = "") {
                    const normalizedFilter = filterText.trim().toLowerCase();
                    playerPlaylistList.innerHTML = "";
                    syncPlaylistTabs();

                    if (playerPlaylistCount) {
                        playerPlaylistCount.textContent = `(${songs.length})`;
                    }

                    const filteredSongs = songs.filter((song) => {
                        const matchesSearch = song.title.toLowerCase().includes(normalizedFilter);
                        const matchesView = playlistViewMode === "liked"
                            ? likedSongFiles.has(song.file)
                            : true;
                        return matchesSearch && matchesView;
                    });

                    if (filteredSongs.length === 0) {
                        const empty = document.createElement("div");
                        empty.className = "player-playlist-empty";
                        empty.textContent = normalizedFilter
                            ? "No matching songs found."
                            : playlistViewMode === "liked"
                                ? "No liked songs yet."
                                : "No uploaded songs yet.";
                        playerPlaylistList.appendChild(empty);
                        return;
                    }

                    filteredSongs.forEach((song) => {
                        const actualIndex = songs.findIndex((item) => item.file === song.file);
                        const item = document.createElement("div");
                        item.className = "player-playlist-item";
                        item.setAttribute("role", "button");
                        item.setAttribute("tabindex", "0");

                        if (actualIndex === currentSongIndex && audioPlayer.src === song.file) {
                            item.classList.add("active");
                        }

                        const textWrap = document.createElement("span");
                        textWrap.className = "player-playlist-text";
                        textWrap.innerHTML = `<span>\u266B</span><span class="player-playlist-name"></span>`;
                        textWrap.querySelector(".player-playlist-name").textContent = song.title;

                        const heart = document.createElement("button");
                        heart.type = "button";
                        heart.className = "player-playlist-heart";
                        heart.textContent = likedSongFiles.has(song.file) ? "\u2665" : "\u2661";
                        heart.classList.toggle("liked", likedSongFiles.has(song.file));
                        heart.setAttribute("role", "button");
                        heart.setAttribute("tabindex", "0");
                        heart.setAttribute("aria-label", likedSongFiles.has(song.file) ? `Unlike ${song.title}` : `Like ${song.title}`);

                        item.appendChild(textWrap);
                        item.appendChild(heart);

                        heart.addEventListener("click", (event) => {
                            event.stopPropagation();

                            if (likedSongFiles.has(song.file)) {
                                likedSongFiles.delete(song.file);
                            } else {
                                likedSongFiles.add(song.file);
                            }

                            saveLikedSongsPreference();
                            renderPlayerPlaylist(playerSearchInput.value);
                        });

                        heart.addEventListener("keydown", (event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                heart.click();
                            }
                        });

                        item.addEventListener("click", () => {
                            setCurrentSong(actualIndex, true);
                            playerWrap.classList.remove("song-list-open");
                            resetPlayerAutoCloseTimer();
                        });

                        item.addEventListener("keydown", (event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                setCurrentSong(actualIndex, true);
                                playerWrap.classList.remove("song-list-open");
                                resetPlayerAutoCloseTimer();
                            }
                        });

                        playerPlaylistList.appendChild(item);
                    });
                }

                function restartMainPageTextSequence() {
                    const layout = getBouncingLayout();

                    mainPage.classList.remove("text-sequence-active");
                    mainPage.classList.remove("notes-visible");
                    bouncingMessage.classList.remove("visible");
                    bouncingMessage.textContent = "";
                    bouncingTextIndex = -1;
                    resetBouncingTextPool(-1);
                    bouncingTextX = layout.startX;
                    bouncingTextY = layout.startY;
                    bouncingVelocityX = layout.velocityX;
                    bouncingVelocityY = layout.velocityY;
                    bouncingTextTransitioning = false;

                    void mainPageTitle.offsetWidth;
                    mainPage.classList.add("text-sequence-active");

                    clearTimeout(bouncingTextStartTimeout);
                    clearTimeout(notesRevealTimeout);
                    notesRevealTimeout = setTimeout(() => {
                        updatePinnedNotesVisibility();
                    }, 5000);
                    bouncingTextStartTimeout = setTimeout(() => {
                        startBouncingTextSequence();
                    }, 5000);
                }

                function stopBouncingTextSequence() {
                    clearTimeout(bouncingTextStartTimeout);
                    clearTimeout(notesRevealTimeout);
                    clearTimeout(mobileBouncingTextTimeout);
                    cancelAnimationFrame(bouncingTextAnimationFrame);
                    mainPage.classList.remove("notes-visible");
                    bouncingMessage.classList.remove("visible");
                    bouncingMessage.textContent = "";
                }

                function startBouncingTextSequence() {
                    startMobileRandomTextSequence();
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

                        bouncingTextIndex = getNextBouncingTextIndex();

                        if (bouncingTextIndex < 0) {
                            return;
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
                        bouncingTextIndex = getNextBouncingTextIndex();

                        if (bouncingTextIndex < 0) {
                            bouncingTextTransitioning = false;
                            return;
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

                function resolveThemeFile(fileName) {
                    if (window.matchMedia("(max-width: 932px)").matches) {
                        if (fileName === "default.mp4") {
                            return "Default mobile.mp4";
                        }

                        if (fileName === "special.mp4") {
                            return "Special mobile.mp4";
                        }
                    }

                    return fileName;
                }

                function applyTheme(fileName) {
                    const resolvedFileName = resolveThemeFile(fileName);
                    const usesVideoTheme = /\.mp4$/i.test(resolvedFileName);

                    mainPage.classList.toggle("video-theme", usesVideoTheme);

                    if (usesVideoTheme) {
                        mainPageVideo.classList.remove("loaded");
                        mainPageVideo.src = resolvedFileName;
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
                        `url("${resolvedFileName}")`
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
                    const incomingTitleKey = normalizeSongIdentity(song.title);
                    const incomingFileKey = normalizeSongIdentity(song.file);
                    const alreadyExists = songs.some((item) => {
                        const existingTitleKey = normalizeSongIdentity(item.title);
                        const existingFileKey = normalizeSongIdentity(item.file);

                        return item.file === song.file ||
                            (incomingTitleKey && existingTitleKey === incomingTitleKey) ||
                            (incomingFileKey && existingFileKey === incomingFileKey);
                    });

                    if (!alreadyExists) {
                        songs.push(song);
                        resetSongPool(currentSongIndex);
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
                        updateFloatingNowPlaying();
                        floatingNowPlaying.classList.add("visible");
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
                    resetSongPool(-1);
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
                            currentSongIndex = preferredSongIndex >= 0 ? preferredSongIndex : getNextRandomSongIndex(-1);
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

                    playerSongsTab?.addEventListener("click", () => {
                        playlistViewMode = "songs";
                        renderPlayerPlaylist(playerSearchInput.value);
                    });

                    playerLikedTab?.addEventListener("click", () => {
                        playlistViewMode = "liked";
                        if (!likedSongFiles.has(songs[currentSongIndex]?.file)) {
                            const firstLikedIndex = getPlayableSongIndices()[0];
                            if (typeof firstLikedIndex === "number") {
                                currentSongIndex = firstLikedIndex;
                            }
                        }
                        renderPlayerPlaylist(playerSearchInput.value);
                    });

                    settingsToggle.addEventListener("click", async () => {
                        settingsLauncher.classList.remove("open");
                        updateMenuMessageAlert();
                        notesMenuPanel.classList.remove("open");
                        notesListPanel.classList.remove("open");
                        notesPanel.classList.remove("open");
                        noteViewerPanel.classList.remove("open");
                        leaderboardPanel.classList.remove("open");
                        const willOpen = !settingsPanel.classList.contains("open");
                        settingsPanel.classList.toggle("open");

                        if (willOpen) {
                            await updateAdminSettingsView();
                        }
                    });

                    settingsMenuToggle.addEventListener("click", () => {
                        settingsLauncher.classList.toggle("open");
                        updateMenuMessageAlert();
                    });

                    notesToggle.addEventListener("click", () => {
                        settingsLauncher.classList.remove("open");
                        updateMenuMessageAlert();
                        settingsPanel.classList.remove("open");
                        leaderboardPanel.classList.remove("open");
                        noteViewerPanel.classList.remove("open");
                        notesListPanel.classList.remove("open");
                        notesPanel.classList.remove("open");
                        notesMenuPanel.classList.toggle("open");
                    });

                    notesViewToggle.addEventListener("click", () => {
                        notesMenuPanel.classList.remove("open");
                        renderSubmittedNotes();
                        notesListPanel.classList.add("open");
                    });

                    notesAddToggle.addEventListener("click", () => {
                        notesMenuPanel.classList.remove("open");
                        openNotesEditor();
                    });

                    notesVisibilityToggle.addEventListener("change", () => {
                        notesVisibilityEnabled = notesVisibilityToggle.checked;
                        saveNotesVisibilityPreference();
                        updatePinnedNotesVisibility();
                    });

                    leaderboardToggle.addEventListener("click", async () => {
                        settingsLauncher.classList.remove("open");
                        updateMenuMessageAlert();
                        settingsPanel.classList.remove("open");
                        chatPanel.classList.remove("open");
                        notesMenuPanel.classList.remove("open");
                        notesListPanel.classList.remove("open");
                        notesPanel.classList.remove("open");
                        noteViewerPanel.classList.remove("open");
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

                    [deleteConfirmClose, deleteConfirmCancel].forEach((button) => {
                        button.addEventListener("click", closeDeleteConfirm);
                    });

                    deleteConfirmProceed.addEventListener("click", async () => {
                        if (!pendingDeleteProfile) {
                            closeDeleteConfirm();
                            return;
                        }

                        const { id, name } = pendingDeleteProfile;
                        closeDeleteConfirm();
                        await deleteProfileAccount(id, name);
                    });

                    chatClose.addEventListener("click", () => {
                        chatPanel.classList.remove("open");
                        activeChatUserId = null;
                        clearChatComposerState();
                        chatInput.value = "";
                    });

                    chatComposeCancel.addEventListener("click", () => {
                        clearChatComposerState();
                        chatInput.value = "";
                    });

                    notesClose.addEventListener("click", () => {
                        notesPanel.classList.remove("open");
                        editingNoteId = null;
                        notesEditorDeleteButton.classList.add("hidden");
                        document.body.classList.remove("mobile-keyboard-open");
                    });

                    notesMenuClose.addEventListener("click", () => {
                        notesMenuPanel.classList.remove("open");
                        document.body.classList.remove("mobile-keyboard-open");
                    });

                    notesListClose.addEventListener("click", () => {
                        notesListPanel.classList.remove("open");
                        document.body.classList.remove("mobile-keyboard-open");
                    });

                    noteViewerClose.addEventListener("click", () => {
                        noteViewerPanel.classList.remove("open");
                        noteReplyComposer.classList.add("hidden");
                        noteReplyTextarea.value = "";
                        noteReplyButton.textContent = "Reply";
                        activeViewerNoteId = null;
                        document.body.classList.remove("mobile-keyboard-open");
                    });

                    notesSubmitButton.addEventListener("click", submitNote);
                    noteReplySubmitButton.addEventListener("click", submitNoteReply);
                    chatSendButton.addEventListener("click", sendChatMessage);
                    chatInput.addEventListener("keydown", async (event) => {
                        if (event.key === "Enter" && !event.shiftKey) {
                            event.preventDefault();
                            await sendChatMessage();
                        }
                    });

                    logoutButton.addEventListener("click", async () => {
                        settingsLauncher.classList.remove("open");
                        updateMenuMessageAlert();
                        audioPlayer.pause();
                        audioPlayer.currentTime = 0;
                        audioAutoplayPending = false;
                        updatePlayPauseButton();
                        updateFloatingNowPlaying();
                        await untrackCurrentPresence();
                        if (presenceChannel) {
                            await supabaseClient.removeChannel(presenceChannel);
                            presenceChannel = null;
                        }
                        if (notesChannel) {
                            await supabaseClient.removeChannel(notesChannel);
                            notesChannel = null;
                        }
                        if (noteRepliesChannel) {
                            await supabaseClient.removeChannel(noteRepliesChannel);
                            noteRepliesChannel = null;
                        }
                        if (messagesChannel) {
                            await supabaseClient.removeChannel(messagesChannel);
                            messagesChannel = null;
                        }
                        if (messageReactionsChannel) {
                            await supabaseClient.removeChannel(messageReactionsChannel);
                            messageReactionsChannel = null;
                        }
                        onlineUsers = [];
                        notesEntries = [];
                        noteRepliesEntries = [];
                        noteReadMap = new Map();
                        messagesEntries = [];
                        messageReactionsEntries = [];
                        notesVisibilityEnabled = true;
                        renderPinnedNotes();
                        renderSubmittedNotes();
                        renderNoteReplies(null);
                        renderLeaderboard();
                        renderChatMessages();
                        profileData = null;
                        currentUser = "";
                        localStorage.removeItem(LOCAL_SESSION_KEY);
                        settingsPanel.classList.remove("open");
                        leaderboardPanel.classList.remove("open");
                        chatPanel.classList.remove("open");
                        notesMenuPanel.classList.remove("open");
                        notesListPanel.classList.remove("open");
                        notesPanel.classList.remove("open");
                        noteViewerPanel.classList.remove("open");
                        closeDeleteConfirm();
                        noteReplyComposer.classList.add("hidden");
                        noteReplyTextarea.value = "";
                        activeViewerNoteId = null;
                        activeChatUserId = null;
                        clearChatComposerState();
                        activeChatReactionMenuId = null;
                        activeChatActionMenuId = null;
                        likedSongFiles = new Set();
                        playlistViewMode = "songs";
                        syncPlaylistTabs();
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
                        const previousIndex = getNextPlayableIndex(-1);
                        if (previousIndex < 0) {
                            return;
                        }

                        currentSongIndex = previousIndex;
                        setCurrentSong(currentSongIndex, true);
                        resetPlayerAutoCloseTimer();
                    });

                    nextButton.addEventListener("click", () => {
                        if (songs.length === 0) {
                            return;
                        }

                        if (chooseRandomSong()) {
                            setCurrentSong(currentSongIndex, true);
                        }
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
                        if (!audioPlayer.loop && songs.length > 0 && chooseRandomSong()) {
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
                        if (!event.target.closest(".chat-bubble-actions") && !event.target.closest(".chat-bubble-menu") && !event.target.closest(".chat-reaction-picker")) {
                            closeOpenChatMenus(true);
                        }

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
                        const clickedChat = chatPanel.contains(event.target);
                        const clickedNotesMenu = notesMenuPanel.contains(event.target);
                        const clickedNotesList = notesListPanel.contains(event.target);
                        const clickedNotesPanel = notesPanel.contains(event.target);
                        const clickedNoteViewer = noteViewerPanel.contains(event.target);
                        const clickedSettingsLauncher = settingsLauncher.contains(event.target);

                        if (!clickedInsidePlayer && !clickedNowPlaying && !clickedSettings && !clickedLeaderboard && !clickedChat && !clickedNotesMenu && !clickedNotesList && !clickedNotesPanel && !clickedNoteViewer && !clickedSettingsLauncher) {
                            closePlayerUi();
                        }

                    if (!clickedSettings && !clickedSettingsLauncher) {
                        settingsLauncher.classList.remove("open");
                        updateMenuMessageAlert();
                    }

                        if (!clickedLeaderboard && event.target !== leaderboardToggle) {
                            leaderboardPanel.classList.remove("open");
                        }

                        if (!deleteConfirmPanel.contains(event.target)) {
                            deleteConfirmPanel.classList.remove("open");
                            pendingDeleteProfile = null;
                        }

                        if (!clickedChat && !event.target.closest(".leaderboard-message-button")) {
                            chatPanel.classList.remove("open");
                        }

                        if (!clickedNotesMenu && event.target !== notesToggle) {
                            notesMenuPanel.classList.remove("open");
                        }

                        if (!clickedNotesList && event.target !== notesToggle && event.target !== notesViewToggle) {
                            notesListPanel.classList.remove("open");
                        }

                        if (!clickedNotesPanel && event.target !== notesToggle && event.target !== notesAddToggle) {
                            notesPanel.classList.remove("open");
                            editingNoteId = null;
                            document.body.classList.remove("mobile-keyboard-open");
                        }

                        if (!clickedNoteViewer && !event.target.closest(".pinned-note")) {
                            noteViewerPanel.classList.remove("open");
                            noteReplyComposer.classList.add("hidden");
                            noteReplyTextarea.value = "";
                            noteReplyButton.textContent = "Reply";
                            activeViewerNoteId = null;
                            document.body.classList.remove("mobile-keyboard-open");
                        }
                    });

                    [notesTextarea, noteReplyTextarea].forEach((input) => {
                        input.addEventListener("focus", syncMobileKeyboardState);
                        input.addEventListener("blur", () => {
                            window.setTimeout(syncMobileKeyboardState, 120);
                        });
                    });

                    updateViewportHeightVariable();

                    if (window.visualViewport) {
                        window.visualViewport.addEventListener("resize", syncMobileKeyboardState);
                        window.visualViewport.addEventListener("scroll", syncMobileKeyboardState);
                    }

                    window.addEventListener("resize", syncMobileKeyboardState);
                }

                // Changes the active song.
                function setCurrentSong(index, shouldPlay) {
                    if (!songs[index]) {
                        return;
                    }

                    currentSongIndex = index;
                    markSongAsUsed(index);
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
                    playPauseButton.textContent = audioPlayer.paused ? "\u25B6" : "\u275A\u275A";
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
                    await connectPresence();
                    await refreshLeaderboard();
                });

                orientationBackButton.addEventListener("click", () => {
                    clearRememberedSessionAndReturnToLogin();
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
                    const cleanUsername = normalizeAuthUsername(enteredUsername);
                    const enteredPassword = passwordInput.value;
                    const confirmedPassword = confirmPasswordInput.value;

                    if (!cleanUsername || !enteredPassword) {
                        showAuthMessage("Fill in username and password.", "error");
                        return;
                    }

                    if (authMode === "signup" && enteredPassword !== confirmedPassword) {
                        showAuthMessage("Passwords do not match.", "error");
                        return;
                    }

                    unlockButton.disabled = true;

                    if (authMode === "signup") {
                        const existingProfile = await getProfileByUsername(cleanUsername);

                        if (existingProfile) {
                            showAuthMessage("Username already taken.", "error");
                            unlockButton.disabled = false;
                            return;
                        }

                        const passwordHash = await hashPassword(enteredPassword);
                        const userId = crypto.randomUUID();
                        const { error } = await supabaseClient
                            .from(PROFILE_TABLE)
                            .insert({
                                id: userId,
                                username: cleanUsername,
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
                            username: cleanUsername
                        });
                    } else {
                        const profile = await getProfileByUsername(cleanUsername);

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

                document.addEventListener("visibilitychange", handlePresenceVisibilityChange);
                window.addEventListener("pagehide", handlePresencePageLeave);
                window.addEventListener("beforeunload", handlePresencePageLeave);
