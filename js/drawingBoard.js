const canvas = document.getElementById("canvas-draw-board");
const context = canvas.getContext("2d");
// установка цвета
let colorInput = document.getElementById('colorInput')
let canvasColor = colorInput.value;
colorInput.addEventListener('change', () => {
	context.strokeStyle = colorInput.value;
	console.log(colorInput.value)
})
// установка фона
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = '#FFFFFF';
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeStyle = canvasColor;
// очищение canvas
document.getElementById('clearCanvasBtn').addEventListener('click', () => {context.clearRect(0, 0, canvas.width, canvas.height)

	clearAnimation()

});
//установка толщины линии
const lineWeight = document.getElementById('brushWeight');
lineWeight.addEventListener('change', () => context.lineWidth = lineWeight.value);
//установка размытия линии
const lineblur = document.getElementById('brushBlur');
lineWeight.addEventListener('change', () => context.filter = `blur(${lineblur.value}px)`);
context.filter = `blur(${lineblur.value}px)`;
lineblur.addEventListener('change', () => context.filter = `blur(${lineblur.value}px)`);
const w = canvas.width;
const h = canvas.height;
const mouse = { x: 0, y: 0 };      // координаты мыши
let draw = false;
//толщина линии
context.lineWidth = lineWeight.value;
// нажатие мыши
canvas.addEventListener("mousedown", function (e) {
	mouse.x = e.layerX - this.offsetLeft;
	mouse.y = e.layerY - this.offsetTop;
	// console.log(e)
	draw = true;
	context.beginPath();
	context.moveTo(mouse.x, mouse.y);
});
// перемещение мыши
canvas.addEventListener("mousemove", function (e) {
	if (draw == true) {
		mouse.x = e.layerX - this.offsetLeft;
		mouse.y = e.layerY - this.offsetTop;
		context.lineTo(mouse.x, mouse.y);
		context.stroke();
	}
});
// отпускаем мышь
canvas.addEventListener("mouseup", function (e) {
	mouse.x = e.layerX - this.offsetLeft;
	mouse.y = e.layerY - this.offsetTop;
	context.lineTo(mouse.x, mouse.y);
	context.stroke();
	context.closePath();
	draw = false;
});
const saveBtn = document.getElementById('saveImgBtn');
saveBtn.addEventListener('click', saveImgFunc);
function saveImgFunc() {
	const dataUrl = canvas.toDataURL('image/png');
	const link = document.createElement('a');
	link.href = dataUrl;
	link.download = 'шедевр.png';
	link.click();
}




// Анимация стирания

function clearAnimation(){
	
}