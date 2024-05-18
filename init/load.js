var file = document.createElement("input");
file.type = "file";
file.onchange = (event) => {
  var reader = new FileReader();
  reader.onload = (event) => {
    var image = new Image();
    image.src = event.target.result;
    image.onload = (event) => {
      layer.width  = image.width;
      layer.height = image.height;
      layer.getContext("2d").drawImage(image, 0, 0);
      temp.width  = image.width;
      temp.height = image.height;
    }
  }
  reader.readAsDataURL(event.target.files[0]);
}

document.getElementById("load").addEventListener("click", (event) => {
  file.click();
});
