const figure1 = [ [100, 50], [150, 50], [250, 100], [250, 50], [450, 50], [450, 100],
			   [550, 50], [600, 50], [600, 75], [450, 150], [450, 450], [400, 450],
			   [400, 300], [300, 300], [300, 450], [250, 450], [250, 150], [100, 75]
			 ];
const figure2 = [ [275, 70], [325, 70], [325, 90], [275, 90] ];
const figure3 = [ [375, 70], [425, 70], [425, 90], [375, 90] ];
const figure4 = [ [300, 110], [400, 110], [400, 120], [300, 120] ];

let delay = 0;

window.addEventListener("load", drawRobot);

function drawRobot() {
	let canvas = document.getElementById("robot");
	let graphics = canvas.getContext("2d");

	graphics.lineWidth = 2;



	addFigure(graphics, figure1);
	addFigure(graphics, figure2);
	addFigure(graphics, figure3);
	addFigure(graphics, figure4);

	function addFigure(context, figure){
		for (let i = 0; i < figure.length - 1; i++) {
			setTimeout(addLine, delay, context, figure[i], figure[i + 1]);
			delay += 50;
		}
		setTimeout(addLine, delay, context, figure[figure.length -1], figure[0]);
		delay += 50;
	}

	function addLine(context, coordsStart, coordsEnd) {
		context.beginPath();
		context.moveTo(...coordsStart); 
		context.lineTo(...coordsEnd); 
		context.stroke();
	}

	function moveLine(argument) {
		

	}
}

