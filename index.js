var text = document.getElementById("time");

function update() {
    text.textContent = new Date().toLocaleTimeString();
}

setInterval(update);