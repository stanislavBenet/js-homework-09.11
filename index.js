let userInput = prompt("Enter number");

if (chekInputIsNumber(Number(userInput))) {
  if (isNumberOddOrEven(Number(userInput))) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

function isNumberOddOrEven(value1) {
  return value1 % 2 === 0;
}

function chekInputIsNumber(value2) {
  if (isNaN(value2) || value2 === null || value2 === "") {
    return false;
  }
  return true;
}
