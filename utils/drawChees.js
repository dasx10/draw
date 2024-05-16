import drawHorizontalSpace from "./drawHorizontalSpace.js";
import drawVerticalSpace   from "./drawVerticalSpace.js";

var drawChees = (x, y, color) => (canvas) => drawHorizontalSpace(x, y, color)(drawVerticalSpace(x, y, color)(canvas))
export default drawChees;
