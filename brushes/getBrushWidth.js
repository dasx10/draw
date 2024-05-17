import memoizeWeak from "../helpers/memoizeWeak.js";
var getBrushWidth = memoizeWeak((brush) => brush.reduce((max, b) => b.length > max ? b.length : max, 0));
export default getBrushWidth;
