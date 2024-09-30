var text = document.getElementById("time");

function update() {
    var x = new Date().toLocaleTimeString();
    text.textContent = x;
    document.title = x;
}

setInterval(update);