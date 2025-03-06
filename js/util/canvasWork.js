class CanvasW {
  constructor(canvasNodeElement) {
    this.canvas = canvasNodeElement;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
  }
  mouse = { x: 0, y: 0 };
  opacity = 1;
  color = "#000000";
  // paintMemory = [];
  // memoryStep;
  setColor(color) {
    let rgb = this._hex2rgb(color);
    let rgba;
    if (this.opacity < 1) {
      rgba = `rgba(${rgb.red},${rgb.green},${rgb.blue},${this.opacity})`;
    } else {
      rgba = `rgba(${rgb.red},${rgb.green},${rgb.blue},1)`;
    }
    console.log("this.color", rgba);
    this._setColorData(rgba);
  }
  setBrushOpacity(num) {
    this.opacity = (10 - num) / 10;
    if (this.color == "#000000") {
      let rgb = this._hex2rgb(this.color);
      let rgba = `rgba(${rgb.red},${rgb.green},${rgb.blue},${this.opacity})`;
      this._setColorData(rgba);
    } else {
      let color = this.color;
      let rgbaArr;
      rgbaArr = color.slice(5, this.color.length - 1).split(",");
      let [red, green, blue] = rgbaArr;
      let rgba = `rgba(${red},${green},${blue},${this.opacity})`;
      this._setColorData(rgba);
    }
  }
  setBrushWeight(num) {
    this.ctx.lineWidth = num;
  }
  setBlur(num) {
    this.ctx.filter = `blur(${num}px)`;
  }
  setCanvasBackground(color) {
    let context = this.ctx;
    if (color) {
      context.fillStyle = color;
    } else {
      context.fillStyle = "#FFFFFF";
    }
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.setCanvasBackground();
  }
  startBrushPaint(e) {
    let mouse = this.mouse;
    let context = this.ctx;
    mouse.x = e.layerX - this.canvas.offsetLeft;
    mouse.y = e.layerY - this.canvas.offsetTop;
    this.draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    // memory "undo" (стереть последнюю линию)
    // this._createPaintStep(mouse.x, mouse.y);
  }
  brushPaint(e) {
    let mouse = this.mouse;
    let context = this.ctx;
    if (this.draw == true) {
      mouse.x = e.layerX - this.canvas.offsetLeft;
      mouse.y = e.layerY - this.canvas.offsetTop;
      context.lineTo(mouse.x, mouse.y);
      context.stroke();

      // memory "undo" (стереть последнюю линию
      // this._addLineInPaintStep(mouse.x, mouse.y);
    }
  }
  stopBrushPaint(e) {
    let mouse = this.mouse;
    let context = this.ctx;
    mouse.x = e.layerX - this.canvas.offsetLeft;
    mouse.y = e.layerY - this.canvas.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    context.closePath();
    this.draw = false;

    // memory "undo" (стереть последнюю линию
    // this._addPaintSepInMemory(mouse.x, mouse.y);
  }
  getCanvas() {
    return this.canvas;
  }
  _hex2rgb(c) {
    let bigint = parseInt(c.split("#")[1], 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return { red: r, green: g, blue: b };
  }
  _setColorData(rgba) {
    this.ctx.strokeStyle = rgba;
    this.color = rgba;
  }

  // методы находящиеся ниже, нужны для работы кнопки "undo" (стереть последнюю линию)

  // _createPaintStep(x, y) {
  //   this.memoryStep = {};
  //   this.memoryStep = {
  //     moveToX: x,
  //     moveToY: y,
  //     color: this.ctx.strokeStyle,
  //     weight: this.ctx.lineWidth,
  //     blur: this.ctx.filter,
  //     linePaths: [],
  //   };
  // }
  // _addLineInPaintStep(x, y) {
  //   this.memoryStep.linePaths.push({x: x, y: y,});
  //   this.memoryStep.color= this.ctx.strokeStyle;
  //   this.memoryStep.weight= this.ctx.lineWidth;
  //   this.memoryStep.blur= this.ctx.filter;
  // }
  // _addPaintSepInMemory(x, y) {
  //   this._addLineInPaintStep(x, y);
  //   this.paintMemory.push(this.memoryStep);
  //   // console.log(this.memoryStep);
  // }
}

export default CanvasW;
