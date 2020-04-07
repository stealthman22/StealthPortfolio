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


    
    

function showBg() {
    // Randomize bg
// morning
    let morningArray = ['sunset-view-of-mountains-733100.jpg', 'purple-petal-flower-surrounded-by-green-plants-during-66288.jpg', 'time-lapse-photography-of-waterfalls-during-sunset-210186.jpg', 'two-cargo-ships-sailing-near-city-2144905.jpg'];
    if (window.matchMedia("(max-width:1024px)").matches) {
    morningArray = ['sunset-view-of-mountains-733100-m.jpg', 'purple-petal-flower-surrounded-by-green-plants-during-66288-m.jpg', 'time-lapse-photography-of-waterfalls-during-sunset-210186-m.jpg', 'two-cargo-ships-sailing-near-city-2144905-m.jpg'];
        console.log(morningArray)
    }
    if (window.matchMedia("(max-width:600px)").matches) {
        morningArray = ['sunset-view-of-mountains-733100-s.jpg', 'purple-petal-flower-surrounded-by-green-plants-during-66288-s.jpg', 'time-lapse-photography-of-waterfalls-during-sunset-210186-s.jpg', 'two-cargo-ships-sailing-near-city-2144905-s.jpg'];
        console.log(morningArray)
    }
    let morningBg = morningArray[Math.floor(Math.random() * morningArray.length)];
    let morningPath = './src/img/hero/';
    let morning = morningPath + morningBg

    // afternoon
  let afternoonArray = ['brown-trench-coat-on-wooden-rack-821357.jpg', 'brown-and-green-mountain-view-photo-842711.jpg', 'photo-of-keyboard-near-mouse-3184460.jpg', 'america-arid-bushes-california-221148.jpg'];
   if (window.matchMedia("(max-width:1024px)").matches) {
    afternoonArray = ['brown-trench-coat-on-wooden-rack-821357-m.jpg', 'brown-and-green-mountain-view-photo-842711-m.jpg', 'photo-of-keyboard-near-mouse-3184460-m.jpg', 'america-arid-bushes-california-221148-m.jpg'];
    console.log(afternoonArray)
}
if (window.matchMedia("(max-width:600px)").matches) {
   afternoonArray = ['brown-trench-coat-on-wooden-rack-821357.jpg-s', 'brown-and-green-mountain-view-photo-842711-s.jpg', 'photo-of-keyboard-near-mouse-3184460-s.jpg', 'america-arid-bushes-california-221148-s.jpg'];
    console.log(afternoonArray)
}
   let afternoonBg = afternoonArray[Math.floor(Math.random() * afternoonArray.length)];
    let afternoonPath = './src/img/hero/';
    let afternoon = afternoonPath + afternoonBg;

    // evening
    let eveningArray = [ 'twisted-building-during-nighttime-1470405.jpg', 'beautiful-beauty-blue-bright-414612.jpg', 'landscape-photo-of-mountain-with-polar-lights-1434608.jpg', 'photo-of-toronto-cityscape-at-night-2478248.jpg'];
    if (window.matchMedia("(max-width:1024px)").matches) {
        eveningArray = [ 'twisted-building-during-nighttime-1470405-m.jpg', 'beautiful-beauty-blue-bright-414612-m.jpg', 'landscape-photo-of-mountain-with-polar-lights-1434608-m.jpg', 'photo-of-toronto-cityscape-at-night-2478248-m.jpg'];
        console.log(eveningArray)
    }
    if (window.matchMedia("(max-width:600px)").matches) {
        eveningArray = [ 'twisted-building-during-nighttime-1470405-s.jpg', 'beautiful-beauty-blue-bright-414612-s.jpg', 'landscape-photo-of-mountain-with-polar-lights-1434608-s.jpg', 'photo-of-toronto-cityscape-at-night-2478248-s.jpg'];
        console.log(eveningArray)
    }
    let eveningBg = eveningArray[Math.floor(Math.random() * eveningArray.length)];
    let eveningPath = './src/img/hero/';
    let evening = eveningPath + eveningBg;
    console.log('two', eveningArray)

//  function tabQuery(x) {
//             if (x.matches) {
//                 eveningArray = tabArray;
//                 console.log('three' ,eveningArray)
//             }
//             }

//             const x = window.matchMedia('(max-width:1024px)');
//             tabQuery(x)
//             x.addListener(tabQuery);
//             console.log(x)

    
//         console.log(tabArray)

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


    // function tabQuery(x) {
    //         if (x.matches) {
    //          const tabArray = ['Talon.png']
    //             eveningArray = tabArray;
    //             console.log(eveningArray)
    //         }
    //         }
    //         const x = window.matchMedia('(max-width:1024px)');
    //         tabQuery(x)
    //         x.addListener(tabQuery);
    //         console.log(x)
    
    
}  


    // function tabQuery(x) {
    //     if (x.matches) {
    //         afternoonArray = ['Talon.png'];
    //         eveningArray = ['mintbox-3.png'];
    //     }
    //     }
    //     const x = window.matchMedia('(max-width:1024px)');
    //     tabQuery(x)
    //     x.addListener(tabQuery);
    //     console.log(x)

        // // bg-images for mobile
        // function mobileQuery(y) {
        //     if (y.matches) {
        //         afternoonArray = ['kyere.png']
        //     }
        // }
        // const y = window.matchMedia('(max-width:600px)');
        // mobileQuery(y);
        // y.addListener( mobileQuery)
        // console.log(y)

   

      // Set media queries
//   if (window.matchMedia("(max-width:1024px)").matches) {
//     morningArray = ;
//     console.log(morningArray)
// }
   showBg()
}


console.log(images)

// Run functions
getTime();
addZero();
setBg();



