var rgbToHex = (r, g, b) => "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
var toHex = (value) => value.startsWith("#")
  ? value
  : rgbToHex(...Array.from(value.matchAll(/\d+/g)), (c) => +c)
;

var palet = document.getElementById("palete");

var setColor = (event) => {
  event.preventDefault();
  if (event.target.style.color) {
    var index = event.button;
    var input = document.getElementById("colors").children[index];
    var color = toHex(event.target.style.color);
    input.value = color;
  }
}

palet.onmouseup = setColor;
palet.oncontextmenu = setColor;
