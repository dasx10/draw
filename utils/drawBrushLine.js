import drawBrush from "./drawBrush.js";
import createDrawLine from "./createLineDraw.js";
var drawLineBrush = (brush) => createDrawLine(drawBrush(brush));
export default drawLineBrush;
