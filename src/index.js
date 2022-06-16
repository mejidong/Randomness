const Body = document.querySelector("body");
const colorButton = document.querySelector("#colorbutton button");
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function buttonClick() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  Body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
}

function buttonMouseDown() {
  colorButton.style.backgroundColor = "Gainsboro";
}
function buttonMouseUp() {
  colorButton.style.backgroundColor = "whitesmoke";
}

function buttonMouseEnter() {
  colorButton.style.color = "Darkslategray";
}

function buttonMouseLeave() {
  colorButton.style.color = "black";
}
colorButton.addEventListener("click", buttonClick);
colorButton.addEventListener("mousedown", buttonMouseDown);
colorButton.addEventListener("mouseup", buttonMouseUp);
colorButton.addEventListener("mouseenter", buttonMouseEnter);
colorButton.addEventListener("mouseleave", buttonMouseLeave);
