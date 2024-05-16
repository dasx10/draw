import "./listener/keybord.js";
import "./listener/mouse.js";

import initCanvas from "./init/canvas.js";
import initColors from "./init/colors.js";
import initTools  from "./init/tools.js";

import clear     from "./utils/clear.js";
import drawLine  from "./utils/drawLine.js";
import drawPixel from "./utils/drawPixel.js";
import initBrushes from "./init/brushes.js";
import initMove from "./init/move.js";
import drawBrush from "./utils/drawBrush.js";

var main = () => {
  var container = document.createElement("div");
  container.className = "container";
  var temp  = initCanvas(container);
  temp.id = "temp";

  initMove();
  initColors();
  initTools();
  var currentBrush = initBrushes();

  var layer  = initCanvas(container);
  var startX = 0;
  var startY = 0;

  var getMousePos = (event) => {
    var rect  = layer.getBoundingClientRect();
    var scale = rect.width / layer.width;
    return ({
      x: Math.floor((event.clientX - rect.left) / scale),
      y: Math.floor((event.clientY - rect.top) / scale),
    });
  }

  layer.oncontextmenu = (event) => event.preventDefault();

  layer.addEventListener("mousedown", (event) => {
    var { x, y } = getMousePos(event);
    startX = x;
    startY = y;

    switch (tool) {
      case "pencil": {
        drawPixel(x, y, color)(layer);
        break;
      }
      case "brush": {
        currentBrush(x, y, color)(layer);
        break;
      }
    }
  });

  layer.addEventListener("mousemove", (event) => {
    var isDown = mouse.size > 0;
    var { x, y } = getMousePos(event);
    if (isDown) {
      switch (tool) {
        case "pencil": {
          if (acceptMove) {
            drawLine(startX, startY, x, y, color)(layer);
            startX = x;
            startY = y;
          }
          break;
        }
        case "brush": {
          acceptMove && currentBrush(x, y, color)(layer);
          break;
        }
        case "line": {
          clear(temp);
          drawLine(startX, startY, x, y, color)(temp);
        }
      }
    } else {
      clear(temp);
      switch (tool) {
        case "brush": {
          currentBrush(x, y, color)(temp);
          break;
        }
        default: {
          drawPixel(x, y, color)(temp);
          break;
        }
      }
    }
  });

  layer.addEventListener("mouseup", (event) => {
    var isDown = mouse.size > 0;
    if (isDown) {
      var { x, y } = getMousePos(event);
      switch (tool) {
        case "pencil": {
          acceptMove && drawPixel(x, y, color)(layer);
          break;
        }
        case "brush": {
          acceptMove && currentBrush(x, y, color)(layer);
          break;
        }
        case "line": {
          clear(temp);
          drawLine(startX, startY, x, y, color)(layer);
        }
      }
    }
  })

  document.body.appendChild(container);
};

main();
