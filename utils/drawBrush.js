import getBrushHeight from "../brushes/getBrushHeight.js";
import getBrushWidth from "../brushes/getBrushWidth.js";

var drawPixel = (canvas, color) => (x, y) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  return canvas;
};

var drawBrush = (brush) => (x, y, color) => (canvas) => {
  var height = getBrushHeight(brush);
  var width  = getBrushWidth(brush);
  var cx     = Math.floor(width / 2);
  var cy     = Math.floor(height / 2);
  var draw   = drawPixel(canvas, color);
  brush.forEach((row, yI) => row.forEach((value, xI) => value && draw(x - cx + xI, y - cy + yI)));
  return canvas;
}

export default drawBrush;
