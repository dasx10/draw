import pipe from "../helpers/pipe.js";
import getBrushByName from "./getBrushByName.js";
import getBrushHeight from "./getBrushHeight.js";
var getBrushHeightByName = pipe([getBrushByName, getBrushHeight]);
export default getBrushHeightByName;
