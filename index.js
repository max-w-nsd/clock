var text = document.getElementById("time");

function update() {
    var x = new Date();
    var s = `${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}.${x.getMilliseconds()}`
    text.textContent = s;
    document.title = s;
}

setInterval(update);