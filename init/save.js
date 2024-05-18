var link  = document.createElement("a");
link.download = "image.png";
document.getElementById("save").addEventListener("click", (event) => {
  var layer = document.getElementById("layer");
  link.href = layer.toDataURL();
  link.click();
});
