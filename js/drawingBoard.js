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
let paintSpots = document.querySelectorAll('.paint_spot');
let changePaintColorBtn = document.getElementById('color-input');
changePaintColorBtn.addEventListener('change', (e) => {
	 canvasWork.setColor(e.target.value);
	}); // цвет линии
changePaintColorBtn.addEventListener('input', (e)=> {
	let color = e.target.value;
	[...paintSpots].forEach(elem => elem.style.background = color);
}) // цвет "аватарки"
// заливка фона
document.getElementById('paint-background-btn').addEventListener('click', ()=>{
	canvasWork.setCanvasBackground(changePaintColorBtn.value)
})
//установка толщины линии
document.getElementById('brush-weight').addEventListener('change', (e) => canvasWork.setBrushWeight(e.target.value));
//установка прозрачности линии
document.getElementById('brush-opacity').addEventListener('change', (e) => canvasWork.setBrushOpacity(e.target.value));
//установка размытия линии
document.getElementById('brush-blur').addEventListener('change', (e) => canvasWork.setBlur(e.target.value));
// Кнопка сохранения рисунка
document.getElementById('save-img-btn').addEventListener('click', function saveImgFunc() {
	const dataUrl = canvasWork.getCanvas().toDataURL('image/png');
	const link = document.createElement('a');
	link.href = dataUrl;
	link.download = 'шедевр.png';
	link.click();
})
// Сохранение рисунка
document.getElementById('save-img-btn').addEventListener('click',
	function saveImgFunc() {
		const dataUrl = canvas.toDataURL('image/png');
		const link = document.createElement('a');
		link.href = dataUrl;
		link.download = 'шедевр.png';
		link.click();
	}
);
// очищение canvas
document.getElementById('clear-canvas-btn').addEventListener('click', () => {
	clearAnimation();
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
		}, 700)
	} else {
		animationFlag = 1;
		front.classList.remove('rotate');
		back.classList.remove('rotate');
		setTimeout(() => {
			canvas = canvas.parentElement.removeChild(canvas);
			front.appendChild(canvas);
			canvasWork.clearCanvas();
		}, 700);
	}
}
// анимация появления 
[...document.querySelectorAll('._opacity')].forEach(e => e.classList.remove('_opacity'));