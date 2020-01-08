// Dynamic landing page

// All image files


const time = document.querySelector('.time');
const hero = document.querySelector('.hero');

const greetingJs = document.querySelector('.greeting-js');
const greeting = document.querySelector('.greeting');




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



function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item) })
    return images;
}

const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/))

console.log(images)

// Set dynamic background
function setBg() {
    console.log(' I am Working')
    let today = new Date(),
        hour = today.getHours();

    //morning
    if (hour < 12) {
        hero.style.background = ``;
        greetingJs.textContent = 'Good Morning,'


    } else if (hour < 18) {
        hero.style.background =
            greetingJs.textContent = 'Good Afternoon,'
    }
    else {
        hero.style.background = `url(${images['ash-blaze-bonfire-m.jpg']})`;
        greetingJs.textContent = 'Good Evening'
    }
}


// Run functions
getTime();
addZero();
setBg();


