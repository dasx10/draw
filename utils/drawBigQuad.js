var drawBigQuad = (x, y, color) => (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x - 1, y - 1, 3, 3);
  return canvas;
}

export default drawBigQuad;
