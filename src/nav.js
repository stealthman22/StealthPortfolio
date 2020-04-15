// Autohide Navbar on scroll

// Grab node list

// Responsive hamburger

function hamburger() {
	const hamburger = document.querySelector('.hamburger');
	const navUl = document.querySelector('.nav-ul');
	const links = document.querySelectorAll('.nav-items');
	const lineOne = document.querySelector('.hamburger .line:nth-child(1)');
	const lineTwo = document.querySelector('.hamburger .line:nth-child(2)');
	const lineThree = document.querySelector('.hamburger .line:nth-child(3)');

	console.log(links);
	console.log(navUl);

	hamburger.addEventListener('click', () => {
		navUl.classList.toggle('open');
		links.forEach((link) => link.classList.toggle('fade'));
		lineThree.classList.toggle('transparent');
		lineOne.classList.toggle('rotateOne');
		lineTwo.classList.toggle('rotateTwo');
	});

	links.forEach((link) =>
		link.addEventListener('click', () => {
			navUl.classList.remove('open');
			lineThree.classList.remove('transparent');
			lineOne.classList.remove('rotateOne');
			lineTwo.classList.remove('rotateTwo');
		})
	);
}

hamburger();
