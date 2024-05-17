import shapes from "../shapes.js";
import memoize from "./memoize.js";
export default memoize((name) => shapes.find((shape) => shape.name === name));
