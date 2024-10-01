let text = document.getElementById("time");

function update() {
    let x = new Date();
    let s = `${pad2(x.getHours())}:${pad2(x.getMinutes())}:${pad2(x.getSeconds())}.${pad3(x.getMilliseconds())}`
    text.textContent = s;
    document.title = s;
}

function pad2(n) {
    return ('00' + n).slice(-2);
}

function pad3(n) {
    return ('000' + n).slice(-3);
}

setInterval(update);