globalThis.tool = "pencil";
var initTool = (value) => {
  var radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "tool";
  radio.value = value;
  radio.title = value;
  return radio;
}

var initTools = () => {
  var toolsFieldset = document.createElement("fieldset");
  toolsFieldset.className = "tools";
  var tools = [
    initTool("pencil"),
    initTool("line"),
    initTool("brush")
  ];

  tools.forEach((node) => toolsFieldset.appendChild(node))

  Object.defineProperty(globalThis, "tool", {
    get() {
      return (tools.find((radio) => radio.checked) || tools.at(0)).value;
    }
  });

  document.body.appendChild(toolsFieldset);
  return tools;
};

export default initTools;
