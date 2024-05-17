import pipe from "../helpers/pipe.js";
import getBrushByName from "./getBrushByName.js";
import getBrushWidth from "./getBrushWidth.js";
var getBrushWidthByName = pipe([getBrushByName, getBrushWidth]);
export default getBrushWidthByName;
