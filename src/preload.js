// Preloader code

//  Had to move the hidescroll fucntion here because the window.onsroll value after the conditional here was
// conflicting with it's (window,onscroll) value in nav.js, hence just defaulted the function here using the conditional
//  preload().

function preoloader() {
    document.onreadystatechange = function preload() {
        const bigBody = document.querySelector('body');
        const preloader = document.querySelector('.preloader');
        if (document.readyState !== 'complete') {
            bigBody.style.visibility = 'hidden';
            bigBody.style.background = 'linear-gradient(90deg, #000428 0%, #004e92 60%)';
            preloader.style.visibility = 'visible';

            function disableScrolling() {
                var x = window.scrollX;
                var y = window.scrollY;
                window.onscroll = function() {
                    window.scrollTo(x, y);
                };
            }
            disableScrolling();
        } else {
            bigBody.style.visibility = 'visible';
            bigBody.style.background = '#ffffff';
            preloader.style.visibility = 'hidden';
            preloader.style.height = '0vh';

            function enableScrolling() {
                let nav = document.querySelector('.nav');

                function hideScroll() {
                    let prevScrollPos = window.pageYOffset;
                    window.onscroll = function() {
                        let currentScrollPos = window.pageYOffset;
                        if (prevScrollPos > currentScrollPos) {
                            nav.style.top = '0';
                        } else {
                            nav.style.top = '-150px';
                        }
                        prevScrollPos = currentScrollPos;
                    };
                    console.log(nav);
                    console.log(prevScrollPos);
                }

                hideScroll();
            }
            enableScrolling();
        }
    };
}
preoloader();