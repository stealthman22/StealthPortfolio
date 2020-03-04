// Grab node list
let nav = document.querySelector('.nav')

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        nav.style.top = '0';
    } else {
        nav.style.top = '-150px';
    }
    prevScrollPos = currentScrollPos;
}

console.log(nav)
console.log(prevScrollPos)