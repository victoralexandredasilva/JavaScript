var hour = document.querySelector('.boxHour');
var minute = document.querySelector('.boxMinute');
var second = document.querySelector('.boxSecond');

var relogio = setInterval( () => {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(hours < 10) {
        hours = `0${hours}`
    }
    if(minutes < 10) {
        minutes = `0${minutes}`
    }
    if(seconds < 10) {
        seconds = `0${seconds}`
    }

    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
})