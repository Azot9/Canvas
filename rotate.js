
window.addEventListener("load", rotate);

let earth = new Image();
let sun = new Image();
let moon = new Image();

function downloadImage() {
	earth.src = 'images/earth.png';
	sun.src = 'images/sun.png';
	moon.src = 'images/moon.png'
	window.requestAnimationFrame(rotate);
}

function rotate() {

		let canvas = document.getElementById("rotate");
		let graphics = canvas.getContext("2d");
		let time = new Date();
		
		 //graphics.globalCompositeOperation = 'destination-over';
		graphics.clearRect(0, 0, 700, 500);
		
		graphics.save();
		graphics.translate(350, 250);
		graphics.drawImage(sun, -25, -25, 50, 50);
	
		graphics.rotate(2 * Math.PI * time.getSeconds() / 60 + 2 * Math.PI * time.getMilliseconds() / 60000 );
		graphics.translate(0, 125);
		graphics.drawImage(earth, -25, -25, 50, 50);

		  graphics.save();
		  graphics.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
		   graphics.translate(0, 35);
		  graphics.drawImage(moon, 0, 0, 10, 10);

		  graphics.restore();

		graphics.restore();
		
		window.requestAnimationFrame(rotate);
		
}
downloadImage();