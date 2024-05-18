import clear from "../utils/clear.js";
document.getElementById("clear").addEventListener("click", (event) => {
  var layer = document.getElementById("layer");
  clear(layer);
});
