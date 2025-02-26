
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
        this.ctx.beginPath();
        ctx.arc(x, y, this.circleRadius, 0, getRadians(360));
        ctx.fillStyle = this.canvasColor;
		ctx.fill();
        this.ctx.closePath();
    }
}

export default CanvasW