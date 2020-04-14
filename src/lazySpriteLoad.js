// Create func to dynamic import an image
const lazySpriteLoad = (iamgeName, img) => {
	import(// webpackMode: 'lazy-once'
	`./img/${iamgeName}`)
		.then((src) => (img.src = src.default))
		.catch((err) => console.log(err));
};

// Generate img and append it to DOM container
const generateImage = (container, imageName) => {
	const img = document.createElement('img');
	container.appendChild(img);

	lazySpriteLoad(imageName, img);
};

// Import all images
const getImageNames = () => {
	const r = require.context('./img', true, /\.(svg|png|gif|jpg|jpe?g)$/);

	//  return an array list of filenames (with extension)
	const importAll = (r) => r.keys().map(file.match(/[^\/]+$/)[0]);

	return importAll(r);
};

// Generate all images
// const images
