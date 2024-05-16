import createMemoize from "./createMemoize.js";
var memoizeWeak = createMemoize(WeakMap);
export default memoizeWeak;
