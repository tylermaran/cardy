// The QRCode class is exposed by the qr.js
// Which I guess is a global on the window
// Idk client side is weird

const links = [
	{
		name: 'Twitter',
		link: 'https://twitter.com/TylerMaran',
	},
	{
		name: 'Rysolv',
		link: 'https://twitter.com/TylerMaran',
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/tyler-maran/',
	},
	{
		name: 'tyler@rysolv.com',
		link: 'mailto: tyler@rysolv.com?subject=Good%20to%20meet!',
	},
];

const target = document.getElementById('myLinks');

links.forEach(({ name, link }) => {
	const linkBlock = document.createElement('div');
	linkBlock.classList.add('linkBody');
	const title = document.createElement('div');
	title.classList.add('title');
	const image = document.createElement('div');
	image.classList.add('image');

	title.innerText = name;
	new QRCode(image, {
		text: link,
		width: 256,
		height: 256,
		colorDark: '#000000',
		colorLight: '#ffffff',
		correctLevel: QRCode.CorrectLevel.H,
	});

	linkBlock.append(title);
	linkBlock.append(image);
	target.append(linkBlock);
});
