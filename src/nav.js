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

// Responsive hamburger

const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');
const links = document.querySelectorAll('.nav-ul li');
const lineOne = document.querySelector('.hamburger .line:nth-child(1)');
const lineTwo = document.querySelector('.hamburger .line:nth-child(2)');
const lineThree = document.querySelector('.hamburger .line:nth-child(3)');

hamburger.addEventListener('click', ()=> {
    navUl.classList.toggle('open');
    links.forEach(link =>link.classList.toggle('fade'));
    lineThree.classList.toggle('transparent');
    lineOne.classList.toggle('rotateOne');
    lineTwo.classList.toggle('rotateTwo');
})

links.forEach(link=>link.addEventListener('click', ()=> {
   nav.classList.add('transparent');
  
})) 



