// Dynamic landing page

// All image files

const images = require('./index');
const time = document.querySelector('.time');
const hero = document.querySelector('.hero');

const greetingJs = document.querySelector('.greeting-js');





// Get time
function getTime() {
    let today = new Date(2020, 1, 10, 10, 20, 30),
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
function setBg() {
    console.log(' I am Working')
    let today = new Date(2020, 1, 10, 10, 20, 30),
        hour = today.getHours();

    //morning
    if (hour < 12) {
        hero.style.background = 'url("../src/img/hero/rippling-water-l.jpg")';
        greetingJs.textContent = 'Good Morning,'


    } else if (hour < 18) {
        hero.style.background = 'url("../src/img/hero/one-world-trade-center-l.jpg")'
        greetingJs.textContent = 'Good Afternoon,'
    }
    else {
        // hero.style.background = ;
        greetingJs.textContent = 'Good Evening,'
    }
}


console.log(images)

// Run functions
getTime();
addZero();
setBg();


