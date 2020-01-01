
// Eyes follow mouse
const balls = document.getElementsByClassName('ball');
document.onmousemove = function () {
    // event.clientX => get the horizontal coordinates of the mouse
    // event.clientY => get the vertical coordinates of the mouse
    // window.innerHeight => get the browser height
    // window.innerWidth => get the browser width
    let x = event.clientX * 100 / window.innerWidth + '%';
    let y = event.clientY * 100 / window.innerHeight + '%';


    for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = 'translate(-"+x+", -"+y+")'
    }
}
