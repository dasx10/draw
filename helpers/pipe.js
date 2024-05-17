export default (values) => (value) => values.reduce((value, call) => call(value), value);
