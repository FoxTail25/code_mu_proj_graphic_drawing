
class CanvasW {
    constructor(canvasNodeElement) {
        this.canvas = canvasNodeElement;
        this.ctx = this.canvas.getContext('2d');
        this._setCanvasBackground();
    }
    canvasColor = '#000000';
    circleRadius = 1;

    setColor(color){
        this.canvasColor = color;
    }
    setCircleRadius(radius){
        this.circleRadius = radius;
    }
    paintCircle(x, y) {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(x, y, this.circleRadius, 0, this._getRadians(360));
        ctx.fillStyle = this.canvasColor;
        ctx.fill();
        ctx.closePath();
    }
    clearCanvas() {
        console.log('clear');
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this._setCanvasBackground();
    }
    drawImg(img) {
        this.ctx.drawImage(img, 10, 10)
    }
    _setCanvasBackground(){
        console.log('setCanvasBg');
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.style = this.canvasColor;
    }
    _getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }
  
}

export default CanvasW