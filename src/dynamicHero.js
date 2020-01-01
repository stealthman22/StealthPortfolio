// Dynamic landing page

const time = document.querySelector('time')
const hero = document.querySelector('hero');
const greeting = document.querySelector('greeting');
const greetingJS = document.querySelector('greeting-js');

// Get time
function getTime() {
    let today = new Date(2020, 1, 1, 2, 2, 10),
        hour = today.getHours(),
        minutes = today.getMinutes();

    // Set Am or Pm
    const amPm = hour >= 12 ? ' PM' : ' AM'

    // 12 hour format
    hour = hour % 12 || 12;

    // Display time 
    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}${amPm}`

    // Update time every second even in bg
    setTimeout(getTime, 1000);

}

// add 0 to minutes values below 10
// n is minutes

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Set dynamic background


// Run functions
getTime();
addZero();



