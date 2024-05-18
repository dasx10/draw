var zoomInput = document.getElementById("zoom");
zoomInput.min = 1;
var root = document.getElementById("root");
zoomInput.oninput = (event) => {
  var scale = event.target.value;
  root.style.width = `${scale}em`;
  root.style.height = `${scale}em`;
}
