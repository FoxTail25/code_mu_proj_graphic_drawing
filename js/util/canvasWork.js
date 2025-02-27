
class CanvasW {
    constructor(canvasNodeElement) {
        this.canvas = canvasNodeElement;
        this.ctx = this.canvas.getContext('2d');
    }
    canvasColor = '#000000';
    circleRadius = 1;

    setColor(color){
        this.canvasColor = color;
    }
    setCircleRadius(radius){
        this.circleRadius = radius;
    }

    _getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }
    paintCircle(x,y){
        let ctx = this.ctx
        ctx.beginPath();
        ctx.arc(x, y, this.circleRadius, 0, this._getRadians(360));
        ctx.fillStyle = this.canvasColor;
		ctx.fill();
        ctx.closePath();
    }
    clearCanvas(){
        console.log('clear')
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export default CanvasW