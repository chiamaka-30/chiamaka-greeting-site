function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('currentTime');
    timeElement.textContent = now.toLocaleTimeString();
}

// Update time immediately when page loads
updateTime();

// Update time every second to keep it current
setInterval(updateTime, 1000);