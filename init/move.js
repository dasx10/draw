globalThis.acceptMove = true;
var initMove = () => {
  var moveCheckbox = document.createElement("input");
  moveCheckbox.type = "checkbox";
  moveCheckbox.id = "move";
  moveCheckbox.title = "move";
  moveCheckbox.checked = acceptMove;
  Object.defineProperty(globalThis, "acceptMove", {
    get() {
      return moveCheckbox.checked
    }
  });

  document.body.appendChild(moveCheckbox);
}

export default initMove;
