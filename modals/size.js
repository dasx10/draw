var width = document.createElement("input");
width.type = "number";
width.value = 32;

var height = document.createElement("input");
height.type = "number";
height.value = 32;

var confirm = document.createElement("button");
confirm.type = "submit";
confirm.textContent = "Confirm";

var formSize = document.createElement("form");
formSize.append(width, height, confirm);

var size = (call) => {
  document.body.append(formSize);
  formSize.onsubmit = (event) => {
    event.preventDefault();
    call(width.value, height.value);
    formSize.remove();
  }
};

export default size;
