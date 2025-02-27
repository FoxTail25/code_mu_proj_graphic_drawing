import CanvasW from "./util/canvasWork.js";

const canvas = document.getElementById('canvas-draw-board');
const canvasWork = new CanvasW(canvas);

let colorInput = document.getElementById('colorInput')
colorInput.addEventListener('change', ()=> console.log(canvasWork.setColor(colorInput.value)))

canvasWork.setColor(colorInput.value)

let brushWieght = document.getElementById('brushWeight');
brushWieght.addEventListener('change', ()=> canvasWork.setCircleRadius(brushWieght.value))

// clearCanvasBtn 
document.getElementById('clearCanvasBtn').addEventListener('click', ()=> canvasWork.clearCanvas())

let gbrX = canvas.getBoundingClientRect().x;
let gbrY = canvas.getBoundingClientRect().y;

canvas.addEventListener('mousemove', drawingCircle)
canvas.addEventListener('mousedown', drawingCircle)


function drawingCircle(e){
	if (e.buttons == 1) {

		let mouseX = e.clientX;
		let mouseY = e.clientY;

		let canvaX = mouseX - gbrX;
		let canvaY = mouseY - gbrY;

		canvasWork.paintCircle(canvaX,canvaY)
	}
}




const saveBtn = document.getElementById('saveImgBtn');
saveBtn.addEventListener('click', saveImgFunc);

function saveImgFunc() {
	const dataUrl = canvas.toDataURL('image/png');
	const link = document.createElement('a');
	link.href = dataUrl;
	link.download = 'шедевр.png'; // Это было бы по душе Пикассо 👍
	drawingToolbar.appendChild(link);
	link.click();
	drawingToolbar.removeChild(link);
}