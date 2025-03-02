class CanvasW {
    constructor(canvasNodeElement) {
        this.canvas = canvasNodeElement;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
    }
    mouse = { x: 0, y: 0 };
    opacity = 1;
    setColor(color){
        if (this.opacity < 1) {
            let rgb = this._hex2rgb(color);
            let rgba = `rgba(${rgb.red},${rgb.green},${rgb.blue},${this.opacity})`;
            this.ctx.strokeStyle = rgba;
        }else {
            this.ctx.strokeStyle = color;
        }
    };
    setBrushOpacity(num) {
        this.opacity = (10 - num) / 10;
        let color = this.ctx.strokeStyle;
        this.setColor(color)
    }
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
    _hex2rgb(c) {
        let bigint = parseInt(c.split('#')[1], 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return {red:r, green:g, blue: b};
    }
}




export default CanvasW