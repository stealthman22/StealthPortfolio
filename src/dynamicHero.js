// Dynamic landing page

const time = document.querySelector('.time');
const hero = document.querySelector('.hero');

const greetingJs = document.querySelector('.greeting-js');
const greeting = document.querySelector('greeting');

// Import multiple images
/* 
function importAll(r) {
    return r.keys().map(r)
}

const images = importAll(require.context('./img/hero', false, /\.(png|jpe?g|svg)$/)) */


// Get time
function getTime() {
    let today = new Date(),
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
    let today = new Date(),
        hour = today.getHours();

    //morning
    if (hour < 12) {
        hero.style.background = `url(${rippling - water - l.jpg})`;
        greetingJs.textContent = 'Good Morning,'


    } else if (hour < 18) {
        hero.style.background = `url(${one - world - trade - center - l.jpg})`;
        greetingJs.textContent = 'Good Afternoon,'
    }
    else {
        hero.style.background = "url('./img/bonfire-burning-camp-campfire-1368382.jpg')"
        greetingJs.textContent = 'Good Evening'
    }
}


// Run functions
getTime();
addZero();
setBg();



console.log(hero)
