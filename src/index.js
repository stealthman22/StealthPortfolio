import 'lazysizes';

import './index.html';
import './style.css';
import './dynamicHero';
import './typewriter';
import './hover';
import './nav';
import './bar';

// Preloader code
document.onreadystatechange = function preload() {
	const bigBody = document.querySelector('body');
	const preloader = document.querySelector('.preloader');
	if (document.readyState !== 'complete') {
		bigBody.style.visibility = 'hidden';
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
		preloader.style.visibility = 'hidden';
		preloader.style.height = '0vh';
		function enableScrolling() {
			window.onscroll = function() {};
		}
		enableScrolling();
	}
};
