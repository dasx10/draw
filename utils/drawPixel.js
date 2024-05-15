var drawPixel = (x, y, color) => (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  return canvas;
}

export default drawPixel;
