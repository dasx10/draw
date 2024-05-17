import memoize         from "../helpers/memoize.js";
import drawBrushLine   from "../utils/drawBrushLine.js";
import getBrushByName from "./getBrushByName.js";
var getBrushLine = memoize((name) => drawBrushLine(getBrushByName(name)));
export default getBrushLine;
