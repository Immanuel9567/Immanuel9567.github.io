function showTime() {
    const currentTime = new Date();
    alert(`Current Time: ${currentTime.toLocaleTimeString()}`);
}

function updateClock() {
    const clockElement = document.getElementById("clock");
    const currentTime = new Date();
    clockElement.textContent = currentTime.toLocaleTimeString();
}

function showTime() {
    const currentTime = new Date();
    alert(`Current Time: ${currentTime.toLocaleTimeString()}`);
}

setInterval(updateClock, 1000);

updateClock();

function showPopup() {
    alert("Please be advised Majority of these modules may only work for Transsion devices or specified Transsion sub-brands. We are not responsible for any damages caused upon the usage of these modules!");
}

