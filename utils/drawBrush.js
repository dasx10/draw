import memoizeWeak from "../helpers/memoizeWeak.js";

var drawPixel = (canvas, color) => (x, y) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
};

var getWidth  = memoizeWeak((brush) => brush.reduce((max, b) => b.length > max ? b.length : max, 0));
var getHeight = (brush) => brush.length;

var drawBrush = (brush) => (x, y, color) => (canvas) => {
  var height = getHeight(brush);
  var width  = getWidth(brush);
  var cx     = Math.ceil(width / 2);
  var cy     = Math.ceil(height / 2);

  var draw = drawPixel(canvas, color);
  brush.forEach((row, yI) => row.forEach((value, xI) => value && draw(x - cx + xI, y - cy + yI)));
}

export default drawBrush;
