export default (elemnt) => {
  var canvas                = document.createElement('canvas');
  var ctx                   = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  var size                  = 32;
  canvas.width              = size;
  canvas.height             = size;
  elemnt.appendChild(canvas);
  return canvas;
};
