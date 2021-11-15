'use strict';

var apiPath = "api.php";
try{
    if(process?.env?.NODE_ENV === "test"){
        //var fetch = require("node-fetch");
        apiPath = "http://localhost:9003/src/api.php";
    }
}catch(_){}

var currentTest;
var menuHandlers = new Map([
    ["menu", () => {
        refreshUserData();
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
        await getUserData()
        refreshUserData();
    }
}
async function onNumberInput(sender) {
    let response
    if(currentTest){
        response = await fetchTestResponse({
            'test-token': currentTest.test_token,
            'test-response': sender.value
        });
    }else{
        response = await fetchTestResponse();
    }
    
    let newTest = await response.json();

    currentTest = newTest;
    
    let userData = JSON.parse(localStorage.getItem('userData'));
    userData.streak = currentTest.streak;
    localStorage.setItem('userData', JSON.stringify(userData));

    refreshImage();
}
function onMenuButtonClicked(sender, menuId) {
    console.log("menu opened: ", menuId);
    const menuElem = document.getElementById(menuId);
    menuElem.classList.add("fade-in");
    menuElem.classList.remove("hidden");
    menuHandlers.get(menuId)?.();
}
function onMenuExited(sender) {
    console.log("menu closed: ", sender.id);
    const menuElem = sender;
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
async function onSubmitDataClicked() {
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
    await getUserData();
    refreshUserData();
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
    await getUserData();
    refreshUserData();
}
function onResetButtonClicked(sender) {
    clearCookies();
    localStorage.clear();
    location.reload();
}


// DOM MANIPULATION FUNCTIONS --------------------------------------------------------------------
function refreshImage() {
    let streakNumElem = document?.getElementById("streak_number");
    let streakCounterElems = document?.getElementsByClassName("streak-counter");
    for (const element of streakCounterElems) {
        element?.classList?.toggle("pulse-class");
        element?.classList?.toggle("pulse-class2");
    }
    streakNumElem.innerText = currentTest.streak;

    const inputElem = document.getElementById("user_input");
    inputElem.value = "";
    document.getElementById("mnist_image").src = currentTest.test;
    inputElem.focus();
}
function refreshUserData() {
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
}
async function popupError(text) {
    popup(text, 'var(--popup-red)')
}
async function popupSuccess(text) {
    popup(text, 'var(--popup-green)')
}
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
var shouldShowLoading = false;
async function showLoading() {
    shouldShowLoading = true;
    await new Promise(resolve => setTimeout(resolve, 200));
    if (shouldShowLoading) {
        document?.getElementById("loader")?.classList?.remove("hidden");
    }
}
function hideLoading() {
    shouldShowLoading = false;
    document?.getElementById("loader")?.classList?.add("hidden");
}


// DATA RETRIEVAL FUNCTIONS ----------------------------------------------------------------------
async function getUserData() {
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
function generateToken() {
    return Math.floor(1_000_000_000_000_000 + Math.random() * 9_000_000_000_000_000);
}
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
