globalThis.acceptMove = true;
var initMove = () => {
  var moveCheckbox = document.getElementById("move");
  Object.defineProperty(globalThis, "acceptMove", {
    get() {
      return moveCheckbox.checked
    }
  });
}

export default initMove;
