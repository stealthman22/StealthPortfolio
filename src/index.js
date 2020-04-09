// Import multiple images

// function importAll(r) {
//     let images = {};
//     r.keys().map(item => { images[item.replace('./', '')] = r(item) })
//     return images;
// }

// const images = importAll(require.context("./img/hero", true, /\.(png|jpe?g|svg)$/));


import './index.html';
import './style.css';
import './dynamicHero';
import './typewriter';
import './hover';
import './nav'
/* import SmoothScroll from "../node_modules/smooth-scroll";
const scroll = new SmoothScroll("[data-scroll]"); */

// import './lazy';



/* function importAll(r) {
    r.keys().reduce((acc, next) => {
        acc[next.replace('./', '')] = r(next);
        return acc
    }, {})
} */
/*
const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {}); */



// export default images;
