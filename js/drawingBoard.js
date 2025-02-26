import drawingPanelAddTools from './util/createDrawPanel.js';

// drawingPanelAddTools();

const drawingToolbar = document.querySelector('.drawing-toolbar')

document.getElementById('clearCanvasBtn').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

let colorInput = document.getElementById('colorInput')
colorInput.addEventListener('change', ()=> console.log(canvasColor =  colorInput.value))
let canvas = document.querySelector('canvas');
let brushWieght = document.getElementById('brushWeight');
brushWieght.addEventListener('change', ()=> circleWeight = brushWieght.value)
let canvasColor;
let circleWeight =1;

const saveBtn = document.getElementById('saveImgBtn');
saveBtn.addEventListener('click', saveImg)


let ctx = canvas.getContext('2d');

ctx.arc(0, 0, 5, 0, getRadians(360));
ctx.stroke();

ctx.beginPath();
ctx.arc(1024, 600, 5, 0, getRadians(360));
ctx.stroke();

function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}

let gbrX = canvas.getBoundingClientRect().x;
let gbrY = canvas.getBoundingClientRect().y;

canvas.addEventListener('mousemove', (e) => {
	
	// console.log('123')
	if (e.buttons == 1) {
		let mouseX = e.x;
		let mouseY = e.y;

		let canvaX = mouseX - gbrX;
		let canvaY = mouseY - gbrY;

		ctx.beginPath();
		ctx.arc(canvaX, canvaY, circleWeight, 0, getRadians(360));
		ctx.fillStyle = canvasColor;
		ctx.fill();
	}
})

function saveImg() {
	const dataUrl = canvas.toDataURL('image/png');
	const link = document.createElement('a');
	link.href = dataUrl;
	link.download = 'шедевр.png'; // Это было бы по душе Пикассо 👍
	drawingToolbar.appendChild(link);
	link.click();
	drawingToolbar.removeChild(link);
}