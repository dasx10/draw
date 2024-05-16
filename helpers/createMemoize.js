var createMemoize = (construcor) => (call) => {
  var cache = new construcor();
  return (value) => cache.has(value) ? cache.get(value) : cache.set(value, call(value)).get(value);
};

export default createMemoize;
