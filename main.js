import "./listener/keybord.js";
import "./listener/mouse.js";
import "./listener/palet.js";

import initCanvas from "./init/canvas.js";
import initColors from "./init/colors.js";
import initTools  from "./init/tools.js";

import "./init/zoom.js";

import clear        from "./utils/clear.js";
import drawLine     from "./utils/drawLine.js";
import drawPixel    from "./utils/drawPixel.js";
import initBrushes  from "./init/brushes.js";
import initMove     from "./init/move.js";
import erase        from "./utils/erase.js";

import getBrush     from "./brushes/getBrush.js";
import getBrushLine from "./brushes/getBrushLine.js";

var main = () => {
  var root = document.getElementById("root");
  var temp  = initCanvas(root);
  temp.id = "temp";

  initMove();
  initColors();
  initTools();
  var brushName            = initBrushes();
  var currentBrushDraw     = () => getBrush(brushName());
  var currentBrushLineDraw = () => getBrushLine(brushName());


  var layer    = initCanvas(root);
  var startX   = 0;
  var startY   = 0;
  var isCancel = false;

  var getMousePos = (event) => {
    var rect  = layer.getBoundingClientRect();
    var scale = rect.width / layer.width;
    return ({
      x : Math.floor((event.clientX - rect.left) / scale),
      y : Math.floor((event.clientY - rect.top) / scale),
    });
  }

  layer.oncontextmenu = (event) => event.preventDefault();

  layer.addEventListener("mousedown", (event) => {
    var { x, y } = getMousePos(event);
    startX = x;
    startY = y;
    switch (mouse.size) {
      case 0: {
        break;
      }
      case 1: {
        switch (tool) {
          case "brush": {
            currentBrushDraw()(x, y, color)(temp);
            return;
          }
          default: {
            drawPixel(x, y, color)(temp);
            return;
          }
        }
      }
      default: {
        isCancel = true;
        clear(temp);
        return;
      }
    }
  });

  layer.addEventListener("mousemove", (event) => {
    var { x, y } = getMousePos(event);
    switch (mouse.size) {
      case 0: {
        isCancel = false;
        startX = x;
        startY = y;
        temp.style.mixBlendMode = "difference";
        clear(temp);
        switch (tool) {
          case "brush": {
            currentBrushDraw()(x, y, "#888")(temp);
            return;
          }
          default: {
            drawPixel(x, y, "#888")(temp);
            return;
          }
        }
      }
      case 1: {
        if (isCancel) {
          clear(temp);
          return;
        }

        switch (tool) {
          case "eraser": {
            temp.style.mixBlendMode = "normal";
            drawPixel(x, y, "#888")(temp);
            acceptMove && erase(x, y)(layer);
            return;
          }
          case "pencil": {
            if (acceptMove) {
              temp.style.mixBlendMode = "normal";
              drawLine(startX, startY, x, y, color)(temp);
              startX = x;
              startY = y;
            }
            return;
          }
          case "brush": {
            if (acceptMove) {
              temp.style.mixBlendMode = "normal";
              currentBrushLineDraw()(startX, startY, x, y, color)(temp);
              startX = x;
              startY = y;
            }
            return;
          }
          case "line": {
            temp.style.mixBlendMode = "difference";
            clear(temp);
            drawLine(startX, startY, x, y, "#888")(temp);
            return;
          }
        }
        return;
      }
      default: {
        isCancel = true;
        startX = x;
        startY = y;
        clear(temp);
        return;
      }
    }
  });

  document.addEventListener("mouseup", () => {
    var { x, y } = getMousePos(event);
    switch (mouse.size) {
      case 0: {
        isCancel = false;
        startX   = x;
        startY   = y;
        return;
      }
      case 1: {
        if (isCancel) {
          clear(temp);
          return;
        }

        switch (tool) {
          case "line": {
            clear(temp);
            drawLine(startX, startY, x, y, color)(temp);
          }
        }
        layer.getContext("2d")?.drawImage(temp, 0, 0);
        clear(temp);
        return;
      }
      default: {
        clear(temp);
        return;
      }
    }
  })
};

main();
