globalThis.mouse = new Set();

window.addEventListener("mouseup", (event) => {
  mouse.delete(event.button);
});

window.addEventListener("mousedown", (event) => {
  mouse.add(event.button);
});
