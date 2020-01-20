// Dynamic landing page

// All image files

const images = require('./index');
const time = document.querySelector('.time');
const hero = document.querySelector('.hero');

const greetingJs = document.querySelector('.greeting-js');





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
    let today = new Date()
    // let today = new Date(),
    hour = today.getHours();


    // Randomize bg
    // morning
    let morningArray = ['sunset-view-of-mountains-733100.jpg', 'purple-petal-flower-surrounded-by-green-plants-during-66288.jpg', 'time-lapse-photography-of-waterfalls-during-sunset-210186.jpg', 'two-cargo-ships-sailing-near-city-2144905.jpg'];
    let morningBg = morningArray[Math.floor(Math.random() * morningArray.length)];
    let morningPath = '../src/img/hero/';
    let morning = morningPath + morningBg
    console.log(morning)
    // afternoon
    let afternoonArray = ['empty-dining-tables-and-chairs-1579739.jpg', 'brown-and-green-mountain-view-photo-842711.jpg', 'photo-of-keyboard-near-mouse-3184460.jpg', 'america-arid-bushes-california-221148.jpg'];
    let afternoonBg = afternoonArray[Math.floor(Math.random() * afternoonArray.length)];
    let afternoonPath = '../src/img/hero/';
    let afternoon = afternoonPath + afternoonBg;

    // evening
    let eveningArray = ['twisted-building-during-nighttime-1470405  s.jpg', 'beautiful-beauty-blue-bright-414612.jpg', 'landscape-photo-of-mountain-with-polar-lights-1434608.jpg', 'photo-of-toronto-cityscape-at-night-2478248.jpg'];
    let eveningBg = eveningArray[Math.floor(Math.random() * eveningArray.length)];
    let eveningPath = '../src/img/hero/';
    let evening = eveningPath + eveningBg;


    // Show bg
    //morning
    if (hour < 12) {
        hero.style.background = `url(${morning}) no-repeat center center / cover`;
        greetingJs.textContent = 'Hi Good Morning,'

        // afternoon

    } else if (hour < 18) {
        hero.style.background = `url(${afternoon}) no-repeat center center / cover`;
        greetingJs.textContent = 'Hi Good Afternoon,'
    }

    // evening and night
    else {
        hero.style.background = `url(${evening}) no-repeat center center / cover`;
        greetingJs.textContent = 'Hi Good Evening,'
    }
}


console.log(images)

// Run functions
getTime();
addZero();
setBg();


