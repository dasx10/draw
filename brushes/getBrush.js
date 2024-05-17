import memoize        from "../helpers/memoize.js";
import drawBrush      from "../utils/drawBrush.js";
import getBrushByName from "./getBrushByName.js";
var getBrush = memoize((name) => drawBrush(getBrushByName(name)));
export default getBrush;
