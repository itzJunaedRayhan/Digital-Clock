let hours   = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");



setInterval(() => {
    let getHours   = new Date().getHours();
    let getMinutes = new Date().getMinutes();
    let getSeconds = new Date().getSeconds();
    
    if (getHours < 10) getHours = "0" + getHours;
    if (getMinutes < 10) getMinutes = "0" + getMinutes;
    if (getSeconds < 10) getSeconds = "0" + getSeconds;

    hours.textContent   = getHours;
    minutes.textContent = getMinutes;
    seconds.textContent = getSeconds;
}, 1000)