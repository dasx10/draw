var initUndo = (canvas) => {
  var ctx = canvas.getContext('2d');
  var undoStack = new Array();
  var redoStack = new Array();

  var saveState = (stack) => {
    stack = stack || undoStack;
    stack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (stack.length > 1000) stack.splice(0, 500);
  }

  var undo = () => undoStack.length > 0 && (
    saveState(redoStack),
    ctx.putImageData(undoStack.pop(), 0, 0)
  );

  var redo = () => redoStack.length > 0 && (
    saveState(undoStack),
    ctx.putImageData(redoStack.pop(), 0, 0)
  );

  return {
    undo,
    saveState,
    redo
  }
};

export default initUndo;
