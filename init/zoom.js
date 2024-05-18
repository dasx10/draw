var zoomInput = document.getElementById("zoom");
zoomInput.min = 1;

var root = document.getElementById("root");
var setSize = (element) => {
  var value = element.value;
  root.style.width  = `${value}em`;
  root.style.height = `${value}em`;
}
zoomInput.oninput = (event) => setSize(event.target);
zoomInput.onwheel = (event) => {
  event.preventDefault();
  var target = event.target;
  zoomInput.value = event.deltaY > 0
    ? Math.max(1, (+(target.value) || 2) - 1)
    : Math.min(100, (+(target.value) || 1) + 1)
  ;
  setSize(zoomInput);
}
setSize(zoomInput);
