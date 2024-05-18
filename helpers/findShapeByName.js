import shapes from "../shapes/index.js";
import memoize from "./memoize.js";
export default memoize((name) => shapes.find((shape) => shape.name === name));
