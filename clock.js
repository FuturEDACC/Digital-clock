const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClockFace() {
    const now = new Date();

    // Calculate seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Calculate minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Calculate hours
    const hours = now.getHours();
    const hoursDegree = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;


    var time = padTwo(hours) + ":" + padTwo(minutes) + ":" + padTwo(seconds);
    const digitalClockFace = document.querySelector('.time')
    digitalClockFace.innerHTML = time;
}

function padTwo(number){
    return (number < 10 ? '0' :'') + number;
}

// Set interval to update the clock every second
setInterval(setClockFace, 1000);
