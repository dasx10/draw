import size from "../modals/size.js";
import clear from "../utils/clear.js";

var create = () => {
  size((width, height) => {
    if (size > 0) {
      var layer = document.getElementById("layer");
      var temp  = document.getElementById("temp");
      layer.width  = size;
      layer.height = size;
      clear(layer);
      temp.width  = size;
      temp.height = size;
      clear(temp);
    }
  })
}

document.getElementById("create").onclick = create;
