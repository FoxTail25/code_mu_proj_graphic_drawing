
// const canvas = document.getElementById("canvas-draw-board");
// const context = canvas.getContext("2d");


// // установка цвета
// let colorInput = document.getElementById('colorInput')
// let canvasColor = colorInput.value;
// colorInput.addEventListener('change', () => {
// 	context.strokeStyle = colorInput.value;
// 	console.log(colorInput.value)
// })
// // установка фона
// function setCanvasBackground(){
// 	context.fillRect(0, 0, canvas.width, canvas.height);
// 	context.fillStyle = '#FFFFFF';
// 	context.fillRect(0, 0, canvas.width, canvas.height);
// 	context.strokeStyle = canvasColor;
// }
// setCanvasBackground()
// // очищение canvas
// document.getElementById('clearCanvasBtn').addEventListener('click', () => {context.clearRect(0, 0, canvas.width, canvas.height)

// 	clearAnimation()

// });
// //установка толщины линии
// const lineWeight = document.getElementById('brushWeight');
// lineWeight.addEventListener('change', () => context.lineWidth = lineWeight.value);

// //установка размытия линии
// const lineblur = document.getElementById('brushBlur');
// lineWeight.addEventListener('change', () => context.filter = `blur(${lineblur.value}px)`);
// context.filter = `blur(${lineblur.value}px)`;
// lineblur.addEventListener('change', () => context.filter = `blur(${lineblur.value}px)`);

// const w = canvas.width;
// const h = canvas.height;

// const mouse = { x: 0, y: 0 };      // координаты мыши
// let draw = false;
// //толщина линии
// context.lineWidth = lineWeight.value;
// // нажатие мыши
// canvas.addEventListener("mousedown", function (e) {
// 	mouse.x = e.layerX - this.offsetLeft;
// 	mouse.y = e.layerY - this.offsetTop;
// 	// console.log(e)
// 	draw = true;
// 	context.beginPath();
// 	context.moveTo(mouse.x, mouse.y);
// });
// // перемещение мыши
// canvas.addEventListener("mousemove", function (e) {
// 	if (draw == true) {
// 		mouse.x = e.layerX - this.offsetLeft;
// 		mouse.y = e.layerY - this.offsetTop;
// 		context.lineTo(mouse.x, mouse.y);
// 		context.stroke();
// 	}
// });
// // отпускаем мышь
// canvas.addEventListener("mouseup", function (e) {
// 	mouse.x = e.layerX - this.offsetLeft;
// 	mouse.y = e.layerY - this.offsetTop;
// 	context.lineTo(mouse.x, mouse.y);
// 	context.stroke();
// 	context.closePath();
// 	draw = false;
// });
// const saveBtn = document.getElementById('saveImgBtn');
// saveBtn.addEventListener('click', saveImgFunc);
// function saveImgFunc() {
// 	const dataUrl = canvas.toDataURL('image/png');
// 	const link = document.createElement('a');
// 	link.href = dataUrl;
// 	link.download = 'шедевр.png';
// 	link.click();
// }




// // Анимация стирания
// function clearAnimation(){
// 	console.log('clear anim')
// 	setCanvasBackground()
// }





import CanvasW from './util/canvasWork.js';

let canvas = document.getElementById("canvas-draw-board");

const canvasWork = new CanvasW(canvas);

// установка bg white
canvasWork.setCanvasBackground('white');
// рисование линии
canvas.addEventListener("mousedown", (e) => canvasWork.startBrushPaint(e));
canvas.addEventListener("mousemove", (e) => canvasWork.brushPaint(e));
canvas.addEventListener("mouseup", (e) => canvasWork.stopBrushPaint(e));
// установка цвета
document.getElementById('colorInput').addEventListener('change', (e) => { canvasWork.setColor(e.target.value) });
//установка толщины линии
document.getElementById('brushWeight').addEventListener('change', (e) => canvasWork.setBrushWeight(e.target.value));
//установка размытия линии
document.getElementById('brushBlur').addEventListener('change', (e) => canvasWork.setBlur(e.target.value));
// Кнопка сохранения рисунка
document.getElementById('saveImgBtn').addEventListener('click', function saveImgFunc() {
	const dataUrl = canvasWork.getCanvas().toDataURL('image/png');
	const link = document.createElement('a');
	link.href = dataUrl;
	link.download = 'шедевр.png';
	link.click();
})
// Сохранение рисунка
document.getElementById('saveImgBtn').addEventListener('click',
	function saveImgFunc() {
		const dataUrl = canvas.toDataURL('image/png');
		const link = document.createElement('a');
		link.href = dataUrl;
		link.download = 'шедевр.png';
		link.click();
	}
);
// очищение canvas
document.getElementById('clearCanvasBtn').addEventListener('click', () => {
	clearAnimation()
})
let front = document.querySelector('.front');
let back = document.querySelector('.back');

// Анимация стирания
//необходимая переменная для второй версии анимации
let animationFlag = 1;
function clearAnimation() {

	// Первая версия анимации

	// console.log('clear anim')
	// front.classList.add('rotate');
	// back.classList.add('rotate');
	// setTimeout(() => {
	// 	canvasWork.clearCanvas()
	// 	document.styleSheets[1].cssRules[4].styleSheet.rules[13].style.transition = '0s';
	// 	front.classList.remove('rotate');
	// 	back.classList.remove('rotate');
	// }, 600)
	// document.styleSheets[1].cssRules[4].styleSheet.rules[13].style.transition = '0.8s';

	//Вторая версия анимации
	if (animationFlag == 1) {
		animationFlag = 2;
		front.classList.add('rotate');
		back.classList.add('rotate');
		setTimeout(() => {
			canvas = canvas.parentElement.removeChild(canvas);
			back.appendChild(canvas);
			canvasWork.clearCanvas();
		}, 300)
	} else {
		animationFlag = 1;
		front.classList.remove('rotate');
		back.classList.remove('rotate');
		setTimeout(() => {
			canvas = canvas.parentElement.removeChild(canvas);
			front.appendChild(canvas);
			canvasWork.clearCanvas();
		}, 300)
	}


}