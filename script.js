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

