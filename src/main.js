'use strict';

var apiPath = "request_handler.php";
try {
    if (process?.env?.NODE_ENV === "test") {
        var fetch = require("node-fetch");
        apiPath = "http://localhost:9003/src/api.php";
    }
} catch (_) { }

/**
 * Contains the last test gotten from the server. Null if first run.
 */
var currentTest;
/**
 * Handlers that run when menus with IDs are shown.
 * eg. User opens menu with id 'statistics' -> value with that key gets run.
 */
var menuHandlers = new Map([
    ["menu", () => {
        if (localStorage.getItem("userData")) {
            const userData = JSON.parse(localStorage.getItem("userData"));
            let { age, region, education, streak, email } = userData;
            if (userData) {
                document.getElementById("first_time_overlay")?.remove();
                const submitButton = document.getElementById("submit_data");
                const regionElem = document.getElementById("region_select");
                const ageElem = document.getElementById("age_input");
                const educationElem = document.getElementById("education_select");
                const streakElem = document.getElementById("streak_number");
                if (getCookie("server-token")) {
                    submitButton.disabled = true;
                    regionElem.disabled = true;
                    ageElem.disabled = true;
                    educationElem.disabled = true;
                }
                ageElem.value = age;
                regionElem.selectedIndex = region;
                educationElem.selectedIndex = education
                streakElem.innerText = streak;

                if (email) {
                    const emailElem = document.getElementById("email");
                    emailElem.value = email;
                    const submitElem = document.getElementById("submit_email");
                    submitElem.innerText = "Update";
                }
            }
        }
    }]
]);


// EVENT HANDLERS -------------------------------------------------------------------------------
async function onLoad() {
    // Install client token
    if (!getCookie("client-token")) {
        console.log("client token not found! installing...");
        installClientToken();
    }

    // Initiate tutorial
    if (getCookie("server-token")) {
        document.getElementById("first_time_overlay")?.remove();
    } else {
        document.getElementById("first_time_overlay")?.classList?.remove("hidden");
    }

    // Get User Data
    if (getCookie("server-token")) {
        await refetchUserData();
        refreshStreak();
    }

    // Get last test
    if (localStorage.getItem("testData")) {
        let test = JSON.parse(localStorage.getItem("testData"));
        currentTest = test;
        refreshImage();
    }
    setStatistics();
}
async function onNumberInput(sender) {
    let response
    if (currentTest) {
        response = await fetchTestResponse({
            'test-token': currentTest.test_token,
            'test-response': sender.value
        });
    } else {
        response = await fetchTestResponse();
    }

    let newTest = await response.json();

    currentTest = newTest;

    let userData = JSON.parse(localStorage.getItem('userData'));
    userData.streak = currentTest.streak;
    localStorage.setItem('userData', JSON.stringify(userData));

    pulseStreakCounters();
    refreshStreak();
    refreshImage();
}
function onMenuButtonClicked(sender, menuId) {
    console.log("menu opened: ", menuId);
    const menuElem = document.getElementById(menuId);
    if(!menuElem){
        console.error(`element with id ${menuId} not found!`);
        throw new Error(`element with id ${menuId} not found!`);
    }
    menuElem.classList.add("fade-in");
    menuElem.classList.remove("hidden");
    menuHandlers.get(menuId)?.();
}
function onMenuExited(sender) {
    console.log("menu closed: ", sender.id);
    const menuElem = sender;
    if(!menuElem){
        console.error(`element is null!`);
        throw new Error(`element is null!`);
    }
    menuElem.classList.remove("fade-in");
    menuElem.classList.add("fade-out");
    for (const elem of menuElem.children) {
        elem.classList.add("slide-to-left");
    }
    setTimeout(() => {
        menuElem.classList.add("hidden");
        menuElem.classList.remove("fade-out");
        for (const elem of menuElem.children) {
            elem.classList.remove("slide-to-left");
            elem.classList.add("slide-from-left");
        }
    }, 290);
}
async function onSubmitDataClicked(sender) {
    // Register
    let regionElem = document.getElementById("region_select");
    let ageElem = document.getElementById("age_input");
    let educationElem = document.getElementById("education_select");
    const data = {
        region: Number(regionElem.value),
        age: Number(ageElem.value),
        education: Number(educationElem.value)
    };
    const response = await fetchRegister(data);
    const json = await response.json();

    if (response.ok) {
        console.log("registration success");
        setCookie("server-token", json);
        console.log("installed server token");
        popupSuccess("Registration success!");
    } else {
        console.log("registration failure:");
        popupError(json);
    }
    await refetchUserData();
    menuHandlers.get('menu')?.();
}
async function onSubmitEmailClicked(sender) {
    const emailElem = document.getElementById("email");
    let res = await fetchSetEmail(emailElem.value);
    if (res.ok) {
        console.log("submitted email");
        popupSuccess('Successfully subscribed');
    } else {
        console.log("failed to submit email:");
        //console.log(await res.text());
        popupError(await res.json());
    }
    await refetchUserData();
    menuHandlers.get('menu')?.();
}
function onResetButtonClicked(sender) {
    clearCookies();
    localStorage.clear();
    location.reload();
}


// DOM MANIPULATION FUNCTIONS --------------------------------------------------------------------
/**
 * Toggles between pulse-class and pulse-class2 for any element with class "streak-counter"
 */
function pulseStreakCounters() {
    let streakCounterElems = document?.getElementsByClassName("streak-counter");
    for (const element of streakCounterElems) {
        element?.classList?.toggle("pulse-class");
        element?.classList?.toggle("pulse-class2");
    }
}
/**
 * Refreshes test image url from currentTest
 */
function refreshImage() {
    const inputElem = document.getElementById("user_input");
    inputElem.value = "";
    document.getElementById("mnist_image").src = currentTest.test;
    inputElem.focus();
}
/**
 * Refreshes streak counter from currentTest or storage::userData, whichever is non-null
 */
function refreshStreak() {
    let streakNumElem = document?.getElementById("streak_number");
    if (streakNumElem) {
        streakNumElem.innerText = currentTest?.streak ?? JSON.parse(localStorage?.getItem('userData'))?.streak ?? 0;
    }
}
/**
 * Alias for popup(text) with configured color.
 * @param {*} text popup text
 */
async function popupError(text) {
    popup(text, 'var(--popup-red)')
}
/**
 * Alias for popup(text) with configured color.
 * @param {*} text popup text
 */
async function popupSuccess(text) {
    popup(text, 'var(--popup-green)')
}
/**
 * Creates a popup into the notification_area element, which will go away by itself.
 * 
 * @param {*} text popup text
 * @param {*} borderColor css-friendly color
 */
async function popup(text, borderColor = "transparent") {
    const notificationAreaElem = document.getElementById("notification_area");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("popup");
    innerDiv.innerText = text;
    innerDiv.style.borderColor = borderColor;
    innerDiv.style.color = borderColor;
    notificationAreaElem.appendChild(innerDiv);
    await new Promise(resolve => setTimeout(resolve, 5000));
    innerDiv.remove();
}
/**
 * Indicates whether the loading overlay should be displayed. Doesn't guarantee it is.
 * Used for when a fetch request completes fast enough to not warrant a loading screen.
 */
var shouldShowLoading = false;
/**
 * Schedules the loading overlay to appear. Doesn't guarantee it displaying.
 * If shouldShowLoading is set to true within {delayMs}, doesn't show loading overlay.
 */
async function showLoading(delayMs = 200) {
    shouldShowLoading = true;
    await new Promise(resolve => setTimeout(resolve, delayMs));
    if (shouldShowLoading) {
        document?.getElementById("loader")?.classList?.remove("hidden");
    }
}
/**
 * Hides the loading overlay.
 */
function hideLoading() {
    shouldShowLoading = false;
    document?.getElementById("loader")?.classList?.add("hidden");
}


// DATA RETRIEVAL FUNCTIONS ----------------------------------------------------------------------
async function refetchUserData() {
    let response = await fetchUserData();
    let json = await response.json();
    localStorage.setItem("userData", JSON.stringify(json));
    if (response.ok) {
        console.log("got user data");
    } else {
        console.log("failed to get user data: ")
    }
    console.log(json);
}

// DATA FETCHING FUNCTIONS
async function fetchTestResponse(testResponse) {
    return await postData(`${apiPath}?action=respond`, testResponse);
}
async function fetchUserData() {
    return await getData(`${apiPath}?action=get-userdata`);
}
async function fetchRegister(data) {
    return await postData(`${apiPath}?action=register`, data);
}
async function fetchSetEmail(email) {
    return await postData(`${apiPath}?action=set-email`, { email: email });
}


// FETCH FUNCTIONS -------------------------------------------------------------------------------
/**
 * The HTTP headers used for built-in POST and GET fetches.
 */
var http_headers = {
    method: 'POST',
    mode: 'same-origin', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'include', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};
async function postData(url = '', data = {}) {
    showLoading();
    let headers = JSON.parse(JSON.stringify(http_headers));
    headers.body = JSON.stringify(data);
    headers.method = "POST";

    return fetch(url, headers)
        .then(response => {
            hideLoading();
            return response;
        }).catch(reason => {
            hideLoading();
            popupError("Failed to fetch! see console");
            console.log(reason);
            return response;
        });
}
async function getData(url = '', data = null) {
    showLoading();
    let headers = JSON.parse(JSON.stringify(http_headers));
    if (data != null) {
        throw new Error("Due to the fetch API implementers being idiots, you can't have a body for a GET request despite the HTTP standard explicitly stating so. This is stupid, I know.");
    }
    /*headers.body = JSON.stringify(data);*/
    headers.method = "GET";
    return fetch(url, headers)
        .then(response => {
            hideLoading();
            return response;
        }).catch(reason => {
            hideLoading();
            popupError("Failed to fetch! see console");
            console.log(reason);
            return response;
        });
}


// TOKEN FUNCTIONS ------------------------------------------------------------------------------
/**
 * Generates a (not cryptographically secure) token (integer number).
 * @returns Number
 */
function generateToken() {
    return Math.floor(1_000_000_000_000_000 + Math.random() * 9_000_000_000_000_000);
}
/**
 * Generates and stores a token into "client-token" cookie.
 */
function installClientToken() {
    setCookie("client-token", generateToken());
    console.log("installed client token");
}


// COOKIE FUNCTIONS -----------------------------------------------------------------------------
function getCookie(name) {
    let cookies = getAllCookies();
    if (cookies) {
        return cookies?.find(x => x[0] === name)?.[1] ?? undefined;
    }
}
function getAllCookies() {
    return document.cookie?.split(";")?.map(x => x.trim().split("="));
}
function setCookie(name, value, expires = new Date(new Date().getFullYear() + 10, 1, 1)) {
    const path = "/"
    document.cookie = `${name}=${value}; expires=${expires}; path=${path}; SameSite=None; Secure`;
}
function clearCookies() {
    getAllCookies()?.forEach(elem => setCookie(elem[0], "", new Date(1970, 0, 0)));
}

try {
    module.exports = { fetchTestResponse, fetchUserData, fetchRegister, fetchSetEmail }
} catch (_) {
}


// STATISTICS FUNCTIONS -----------------------------------------------------------------------------
function setStatistics(){
    console.log("Setting up statistics menu")
    getLongestStreak();
    getRightGuesses();
    getWrongGuesses();
    getRatio();
    getMostGuessed();
}

function getLongestStreak(){
    var longest_streak = 1;
    document.getElementById("Longest_Streak").innerHTML=longest_streak.toString();
}

function getRightGuesses(){
    var right_guesses = 1;   //  TODO, read in value from API;
    var longest_element = document.getElementById("Right_Guesses").innerHTML=right_guesses;
}

function getWrongGuesses(){
    var wrong_guesses = 1;   //  TODO, read in value from API
    document.getElementById("Wrong_Guesses").innerHTML=wrong_guesses;
}

function getRatio(){
    var right_guesses = 1;   //  TODO, read in value from API
    var wrong_guesses = 1;   //  TODO, read in value from API
    var ratio=(right_guesses/(right_guesses+wrong_guesses))*100;
    document.getElementById("Right_Wrong_Ratio").innerHTML=ratio;
}

function getMostGuessed(){
    var most_guessed = 1;    //  TODO, read in value from API
    document.getElementById("Most_Guessed").innerHTML = most_guessed;
}