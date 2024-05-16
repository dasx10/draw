var drawQuad = (x, y, color) => (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 2, 2);
  return canvas;
}

export default drawQuad;
