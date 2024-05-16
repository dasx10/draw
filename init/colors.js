globalThis.color = "#000";
var initColor = (value) => {
  var color = document.createElement("input");
  color.type = "color";
  color.value = value || "#000";
  return color
}

var initColors = () => {
  var colorsFieldset = document.createElement("fieldset");
  colorsFieldset.id = "colors";
  var colors = [
    initColor("#000000"),
    initColor("#888888"),
    initColor("#ffffff"),
  ];

  colors.forEach((node) => colorsFieldset.appendChild(node));

  Object.defineProperty(globalThis, "color", {
    get() {
      var index = mouse.has(0) ? 0 : mouse.has(1) ? 1 : mouse.has(2) ? 2 : 0;
      return colors[index].value
    }
  });

  document.body.appendChild(colorsFieldset);
  return colors;
}

export default initColors;
