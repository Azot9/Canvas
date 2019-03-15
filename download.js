//drawing download from "rose" where in polar coordinates system R = a * cos (2 * A)  

window.addEventListener("load", download);


function download() {
	let canvas = document.getElementById("download");
	let graphics = canvas.getContext("2d");

	graphics.save();
	graphics.translate(350, 250);
	graphics.lineWidth = 1;

	const a = 200;
	const step1 = 0.01;
	const step2 = -0.01;
	const PI = Math.PI;

	let ro1, ro2, x1, y1, x2, y2;
	let delay = 0;

	count(-PI/2, PI/2, step1);
	//debugger;
	count(-PI/2, (-3/2)*PI, step2);

	

	function count(start, end, step) {
		if (start <  end) {
			for (var i = start; i < end; i += step) {
				makeDowload(i, step)
			}
		} else {
			for (var i = start; i > end; i += step) {
				makeDowload(i, step)
			}
		}
	}

	function makeDowload(i, step) {
		if (Math.cos(2 * i) > 0) {
			ro1 = a * Math.cos(2 * i);
			ro2 = a * Math.cos(2 * (i + step));
			x1 = ro1 * Math.cos(i);
			y1 = ro1 * Math.sin(i);
			x2 = ro2 * Math.cos(i + step);
			y2 = ro2 * Math.sin(i + step);
			delay += 10;
			setTimeout(drawDownload, delay, x1, y1, x2, y2);
		}

	}

	function drawDownload(x1, y1, x2, y2) {
		graphics.moveTo(x1, y1);
		graphics.lineTo(x2, y2);
		graphics.stroke();
	}



}