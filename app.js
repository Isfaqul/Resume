const PLUS_BTN = document.getElementById("increase");
const MINUS_BTN = document.getElementById("decrease");
let defaultSize = 62.5;

PLUS_BTN.addEventListener("click", increase);
MINUS_BTN.addEventListener("click", decrease);

function increase(e) {
  if (defaultSize < 68) {
    defaultSize += 2;
  }

  let string = `${defaultSize}%`;
  e.target.parentElement.parentElement.parentElement.style.fontSize = string;
}

function decrease(e) {
  if (defaultSize > 62) {
    defaultSize -= 2;
  }

  let string = `${defaultSize}%`;
  e.target.parentElement.parentElement.parentElement.style.fontSize = string;
}
