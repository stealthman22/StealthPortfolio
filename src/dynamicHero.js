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
    let morningBg = morningArray[Math.floor(Math.random() * morningArray.length)];
    let morningPath = './src/img/hero/';
    let morning = morningPath + morningBg

    // afternoon
    afternoonArray = ['empty-dining-tables-and-chairs-1579739.jpg', 'brown-and-green-mountain-view-photo-842711.jpg', 'photo-of-keyboard-near-mouse-3184460.jpg', 'america-arid-bushes-california-221148.jpg'];
    let afternoonBg = afternoonArray[Math.floor(Math.random() * afternoonArray.length)];
    let afternoonPath = './src/img/hero/';
    let afternoon = afternoonPath + afternoonBg;

    // evening
    var eveningArray = [ 'twisted-building-during-nighttime-1470405.jpg', 'beautiful-beauty-blue-bright-414612.jpg', 'landscape-photo-of-mountain-with-polar-lights-1434608.jpg', 'photo-of-toronto-cityscape-at-night-2478248.jpg'];
    let eveningBg = eveningArray[Math.floor(Math.random() * eveningArray.length)];
    let eveningPath = './src/img/hero/';
    let evening = eveningPath + eveningBg;
    console.log(eveningArray)

 function tabQuery(x) {
            if (x.matches) {
             const tabArray = ['Talon.png']
                eveningArray = tabArray;
                console.log(eveningArray)
            }
            }

            const x = window.matchMedia('(max-width:1024px)');
            tabQuery(x)
            x.addListener(tabQuery);
            console.log(x)
    
  

    console.log(eveningArray)
        // console.log(tabArray)

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



