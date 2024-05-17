import findShapeByName from "../helpers/findShapeByName.js";
import pipe from "../helpers/pipe.js";
import prop from "../helpers/prop.js";
export default pipe([findShapeByName, prop("value")]);
