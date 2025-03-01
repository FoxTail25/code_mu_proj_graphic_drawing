class CanvasW {
    constructor(canvasNodeElement) {
        this.canvas = canvasNodeElement;
        this.ctx = this.canvas.getContext('2d');
    }
    mouse = { x: 0, y: 0 };
    setColor(color){
        this.ctx.strokeStyle = color;
    };
    setBrushWeight(num){
        this.ctx.lineWidth = num;
    };
    setBlur(num) {
        this.ctx.filter = `blur(${num}px)`;
    }
    setCanvasBackground(color){
        let context = this.ctx;
        if(color){
        	context.fillStyle = color;
        } else {
            context.fillStyle = '#FFFFFF';
        }
        	context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.setCanvasBackground();
    }
    startBrushPaint(e){
        let mouse = this.mouse;
        let context = this.ctx;
        mouse.x = e.layerX - this.canvas.offsetLeft;
        mouse.y = e.layerY - this.canvas.offsetTop;
        this.draw = true;
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
    }
    brushPaint(e) {
        let mouse = this.mouse;
        let context = this.ctx;
        if (this.draw == true) {
            mouse.x = e.layerX - this.canvas.offsetLeft;
            mouse.y = e.layerY - this.canvas.offsetTop;
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
        }
    }
    stopBrushPaint(e){
        let mouse = this.mouse;
        let context = this.ctx;
        mouse.x = e.layerX - this.canvas.offsetLeft;
        mouse.y = e.layerY - this.canvas.offsetTop;
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
        context.closePath();
        this.draw = false;
    }
    getCanvas(){
        return this.canvas;
    }
}




export default CanvasW