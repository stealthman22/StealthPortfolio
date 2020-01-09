// Import multiple image

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item) })
    return images;
}

const images = importAll(require.context("./img", true, /\.(png|jpe?g|svg)$/));


import './index.html';
import './style.css';
import './eyes';
import './dynamicHero';
import './typewriter';



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



export default images;
