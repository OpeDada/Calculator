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
  console.log(symbol)
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "÷":
    case "+":
    case "˗":
    case "×":
      handleMath(symbol);
      break;

    default:
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+"){
    runningTotal += intBuffer;
  } else if (previousOperator === "˗") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

// × ÷ -


function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
