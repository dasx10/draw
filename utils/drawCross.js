var drawCross = (x, y, color) => (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x - 1, y, 3, 1);
  ctx.fillRect(x, y - 1, 1, 3);
  return canvas;
}

export default drawCross;
