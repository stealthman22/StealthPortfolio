// Dynamic landing page

// All image files

// const images = require('./index');
const time = document.querySelector('.time');
const hero = document.querySelector('.hero');

const greetingJs = document.querySelector('.greeting-js');

// Get time
function getTime() {
    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes();

    // Set Am or Pm
    const amPm = hour >= 12 ? ' PM' : ' AM';

    // 12 hour format
    hour = hour % 12 || 12;

    // Display time
    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}${amPm}`;

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
    console.log(' I am Working');
    let today = new Date();
    // let today = new Date(),
    hour = today.getHours();

    function showBg() {
        // Randomize bg
        // morning
        let morningArray = [
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308021/new-portfolio/hero/sunset-view-of-mountains-733100.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308022/new-portfolio/hero/purple-petal-flower-surrounded-by-green-plants-during-66288.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg'
        ];
        if (window.matchMedia('(max-width:1024px)').matches) {
            morningArray = [
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359533/new-portfolio/hero/sunset-view-of-mountains-733100-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359633/new-portfolio/hero/purple-petal-flower-surrounded-by-green-plants-during-66288-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359563/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359588/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905-m.jpg'
            ];
        }
        let morningBg = morningArray[Math.floor(Math.random() * morningArray.length)];
        console.log(morningBg);

        // afternoon
        let afternoonArray = [
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308019/new-portfolio/hero/brown-trench-coat-on-wooden-rack-821357.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308025/new-portfolio/hero/brown-and-green-mountain-view-photo-842711.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308018/new-portfolio/hero/photo-of-keyboard-near-mouse-3184460.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308019/new-portfolio/hero/america-arid-bushes-california-221148.jpg'
        ];
        if (window.matchMedia('(max-width:1024px)').matches) {
            afternoonArray = [
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359477/new-portfolio/hero/brown-trench-coat-on-wooden-rack-821357-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359534/new-portfolio/hero/brown-and-green-mountain-view-photo-842711-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359413/new-portfolio/hero/photo-of-keyboard-near-mouse-3184460-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359643/new-portfolio/hero/america-arid-bushes-california-221148-m.jpg'
            ];
        }
        let afternoonBg = afternoonArray[Math.floor(Math.random() * afternoonArray.length)];
        console.log(afternoonBg);

        // evening
        let eveningArray = [
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/twisted-building-during-nighttime-1470405.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308019/new-portfolio/hero/beautiful-beauty-blue-bright-414612.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308018/new-portfolio/hero/landscape-photo-of-mountain-with-polar-lights-1434608.jpg',
            'https://res.cloudinary.com/stealthman22/image/upload/v1586308021/new-portfolio/hero/photo-of-toronto-cityscape-at-night-2478248.jpg'
        ];
        if (window.matchMedia('(max-width:1024px)').matches) {
            eveningArray = [
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359569/new-portfolio/hero/twisted-building-during-nighttime-1470405-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359432/new-portfolio/hero/beautiful-beauty-blue-bright-414612-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586359408/new-portfolio/hero/landscape-photo-of-mountain-with-polar-lights-1434608-m.jpg',
                'https://res.cloudinary.com/stealthman22/image/upload/v1586308021/new-portfolio/hero/photo-of-toronto-cityscape-at-night-2478248.jpg'
            ];
        }
        let eveningBg = eveningArray[Math.floor(Math.random() * eveningArray.length)];
        console.log(eveningBg);

        // Show bg
        //morning
        if (hour < 12) {
            hero.style.background = `url(${morningBg}) no-repeat center center / cover`;
            greetingJs.textContent = 'Hi Good Morning,';

            // afternoon
        } else if (hour < 18) {
            hero.style.background = `url(${afternoonBg}) no-repeat center center / cover`;
            greetingJs.textContent = 'Hi Good Afternoon,';
        } else {
            // evening and night
            hero.style.background = `url(${eveningBg}) no-repeat center center / cover`;
            greetingJs.textContent = 'Hi Good Evening,';
        }
    }
    showBg();
}

// console.log(images)

// Run functions
getTime();
addZero();
setBg();