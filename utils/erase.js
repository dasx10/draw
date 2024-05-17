var erase = (x, y) => (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.clearRect(x, y, 1, 1);
  return canvas;
}

export default erase;
