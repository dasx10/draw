var draw = (dx, dy) => (x, y) => (color) => (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, dx, dy);
  return canvas;
}

export default draw;
