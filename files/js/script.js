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
    alert("Please be advised Majority of these modules, ROMs and Recoveries may only work for Transsion devices or specified Transsion sub-brands. We are not responsible for any damages caused upon the usage of these Files!. Any Operation carried out using our files are completely based on the user's decision.");
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".colored").forEach(element => {
        element.addEventListener("click", function () {
            const textToCopy = this.textContent.trim();
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            alert("Copied: " + textToCopy);
        });
    });
});


