//drawing "rose" where in polar coordinates system R = a * cos (2 * A)  

window.addEventListener("load", rose);

function rose() {
	let canvas = document.getElementById("rose");
	let graphics = canvas.getContext("2d");

	graphics.translate(350, 250);
	graphics.lineWidth = 5;

	const a = 200;
	const step = 0.01;
	const PI = Math.PI;

	let ro1, ro2, x1, y1, x2, y2;
	let delay = 0;

	for (var i = 0; i < PI * 2; i += step) {
		if (Math.cos(2 * i) > 0) {
			ro1 = a * Math.cos(2 * i);
			ro2 = a * Math.cos(2 * (i + step));
			x1 = ro1 * Math.cos(i);
			y1 = ro1 * Math.sin(i);
			x2 = ro2 * Math.cos(i + step);
			y2 = ro2 * Math.sin(i + step);
			delay += 10;
			setTimeout(drawRose, delay, x1, y1, x2, y2);
		}
	}


	function drawRose(x1, y1, x2, y2) {
		graphics.moveTo(x1, y1);
		graphics.lineTo(x2, y2);
		graphics.stroke();
	}

}