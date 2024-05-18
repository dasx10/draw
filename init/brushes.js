import shapes from "../shapes/index.js";

globalThis.brush = "quad";

var initBrush = (value) => {
  var brush = document.createElement("input");
  var label = document.createElement("label");
  label.textContent = value;
  label.prepend(brush);
  brush.type = "radio";
  brush.name = "brush";
  brush.value = value;
  brush.title = value;
  return label;
}

var initBrushes = () => {
  var brushesFieldset = document.getElementById("brushes");
  var brushesNodes    = shapes.map((shape) => initBrush(shape.name));

  brushesNodes.forEach((node) => brushesFieldset.appendChild(node));

  var name = () => {
    var brush = brushesNodes.find((label) => label.childNodes[0].checked);
    return brush ? brush.childNodes[0].value : shapes[0].name;
  }

  return name;
};

export default initBrushes;
