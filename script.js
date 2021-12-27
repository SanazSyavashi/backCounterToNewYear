let newYear = new Date(2022, 00, 01);
let days = document.querySelector("#day");
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let secunds = document.querySelector("#second");

function countDown() {
    let today = new Date();
    let remainTime = (newYear - today) / 1000;
    let day = Math.floor(remainTime / 86400);
    remainTime = remainTime % 86400;
    let hour = Math.floor(remainTime / 3600);
    remainTime = remainTime % 3600;
    let min = Math.floor(remainTime / 60);
    let sec = Math.floor(remainTime % 60);
    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = min;
    secunds.innerHTML = sec;
}
setInterval(countDown, 1000);