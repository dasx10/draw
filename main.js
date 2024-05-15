import "./listener/keybord.js";
import "./listener/mouse.js";

import initCanvas from "./init/canvas.js";
import initColors from "./init/colors.js";
import initTools  from "./init/tools.js";

import clear     from "./utils/clear.js";
import drawLine  from "./utils/drawLine.js";
import drawPixel from "./utils/drawPixel.js";

var main = () => {
  var container = document.createElement("div");
  container.className = "container";
  var temp  = initCanvas(container);
  temp.id = "temp";

  initColors();
  initTools();

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
    }
  });

  layer.addEventListener("mousemove", (event) => {
    var isDown = mouse.size > 0;
    if (isDown) {
      var { x, y } = getMousePos(event);
      console.log(tool, startX, startY, x, y, color);
      switch (tool) {
        case "pencil": {
          drawLine(startX, startY, x, y, color)(layer);
          startX = x;
          startY = y;
          break;
        }
        case "line": {
          temp.style.display = "block";
          clear(temp);
          drawLine(startX, startY, x, y, color)(temp);
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
          drawPixel(x, y, color)(layer);
          break;
        }
        case "line": {
          clear(temp);
          drawLine(startX, startY, x, y, color)(layer);
          temp.style.display = "none";
        }
      }
    }
  })

  document.body.appendChild(container);
};

main();
