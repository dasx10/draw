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


  var layer  = initCanvas(root);
  var startX = 0;
  var startY = 0;

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

    switch (tool) {
      case "pencil": {
        drawPixel(x, y, color)(layer);
        break;
      }
      case "brush": {
        currentBrushDraw()(x, y, color)(layer);
        break;
      }
    }
  });

  layer.addEventListener("mousemove", (event) => {
    var isDown = mouse.size > 0;
    var { x, y } = getMousePos(event);
    if (isDown) {
      switch (tool) {
        case "eraser": {
          clear(temp);
          drawPixel(x, y, "#888")(temp);
          acceptMove && erase(x, y)(layer);
          break;
        }
        case "pencil": {
          clear(temp);
          drawPixel(x, y, "#888")(temp);
          if (acceptMove) {
            drawLine(startX, startY, x, y, color)(layer);
            startX = x;
            startY = y;
          }
          break;
        }
        case "brush": {
          clear(temp);
          currentBrushDraw()(x, y, "#888")(temp);
          if (acceptMove) {
            currentBrushLineDraw()(startX, startY, x, y, color)(layer);
            startX = x;
            startY = y;
          }
          break;
        }
        case "line": {
          clear(temp);
          drawLine(startX, startY, x, y, "#888")(temp);
        }
      }
    } else {
      clear(temp);
      switch (tool) {
        case "brush": {
          currentBrushDraw()(x, y, "#888")(temp);
          break;
        }
        default: {
          drawPixel(x, y, "#888")(temp);
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
          acceptMove && currentBrushDraw()(x, y, color)(layer);
          break;
        }
        case "line": {
          clear(temp);
          drawLine(startX, startY, x, y, color)(layer);
        }
      }
    }
  })
};

main();
