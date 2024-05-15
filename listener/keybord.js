globalThis.keybord = new Set();
window.addEventListener('keydown', (event) => {
  keybord.add(event.key);
  if (event.ctrlKey && event.key === 'z') {
    undo();
  } else if (event.ctrlKey && event.key === 'y') {
    redo();
  }

});

window.addEventListener('keyup', (event) => {
  keybord.delete(event.key);
});
