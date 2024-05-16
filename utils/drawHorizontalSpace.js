var drawHorizontalSpace = (x, y, color) => (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x - 1, y, 1, 1);
  ctx.fillRect(x + 1, y, 1, 1);
  return canvas;
}

export default drawHorizontalSpace;
