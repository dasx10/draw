import drawBigQuad         from "../utils/drawBigQuad.js";
import drawBrush from "../utils/drawBrush.js";
import drawChees           from "../utils/drawChees.js";
import drawCross           from "../utils/drawCross.js";
import drawHorizontalSpace from "../utils/drawHorizontalSpace.js";
import drawQuad            from "../utils/drawQuad.js";
import drawVerticalSpace   from "../utils/drawVerticalSpace.js";

globalThis.brush = "quad";

var initBrush = (value) => {
  var brush = document.createElement("input");
  brush.type = "radio";
  brush.name = "brush";
  brush.value = value;
  brush.title = value;
  return brush
}

var initBrushes = () => {
  var brushesFieldset = document.createElement("fieldset");
  brushesFieldset.id = "brushes";
  var brushesNodes = [
    initBrush("quad"),
    initBrush("bigQuad"),
    initBrush("cross"),
    initBrush("cheese"),
    initBrush("horizontalSpace"),
    initBrush("verticalSpace"),
    initBrush("custom"),
  ];

  var brushes = [
    drawQuad,
    drawBigQuad,
    drawCross,
    drawChees,
    drawVerticalSpace,
    drawHorizontalSpace,
    drawBrush([
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 0],
    ]),
  ];

  brushesNodes.forEach((node) => brushesFieldset.appendChild(node));

  var getBrushIndex = () => (brushesNodes.findIndex((radio) => radio.checked));

  document.body.appendChild(brushesFieldset);

  var currentBrush = (x, y, color) => (canvas) => brushes.at(getBrushIndex())(x, y, color)(canvas);
  return currentBrush;
};

export default initBrushes;
