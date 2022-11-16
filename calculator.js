let runningTotal = 0;
let buffer = "0"; // starting figure on the calculator
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    // this is not a number
    handleSymbol(value);
  } else {
    // this is a number
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  // if (symbol === "C") {
  //   buffer = "0";
  //   runningTotal = 0;
  // }

  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "&divide;":
    case "&plus;":
    case "&minus;":
    case "&times;":
      handleMath(symbol);
      break;

    default:
      break;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
