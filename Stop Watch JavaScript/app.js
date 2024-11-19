var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");
var mili = document.querySelector("#mili");
var btnStart = document.querySelector(".start");

var h = 0;
var m = 0;
var s = 0;
var mil = 0;
var interval;

var running = false


function toggelFUnc() {
    if (!running) {
        startCount()
    } else {
        stopCount()
    }    // interval = setInterval(timer, 10)
}

function startCount() {
    running = true
    interval = setInterval(timer, 10);
    btnStart.innerHTML = "Stop"
}

function stopCount() {
    running = false
    clearInterval(interval);
    btnStart.innerHTML = "Start"
}


function timer() {
    mil++
    mili.innerHTML = mil
    if (mil == 100) {
        s++
        mil = 0;
        second.innerHTML = s
    }

    if (s == 60) {
        m++
        minute.innerHTML = m
        s = 0
    }
    if (m == 59) {
        h++
        hour.innerHTML = h;
        m = 0
        s = 0
    }


}


function resetCount() {
    clearInterval(interval)
    h = 0;
    m = 0;
    s = 0;
    mil = 0;

    hour.innerHTML = "00"
    minute.innerHTML = "00"
    second.innerHTML = "00"
    mili.innerHTML = "00"
    btnStart.innerHTML = "Start"
    running=false
    return
}

