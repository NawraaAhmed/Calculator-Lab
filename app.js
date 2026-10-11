/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let operator = "";

/*------------------------ Cached Element References ------------------------*/
const calculatorElements = document.querySelector("#calculator");
const displayElements = document.querySelector(".display");
const buttonsElements = document.querySelectorAll(".button");

console.log(displayElements);
console.log(buttonsElements);

/*----------------------------- Event Listeners -----------------------------*/
buttonsElements.forEach((button) => {
  button.addEventListener("click", calcIt);
});

/*-------------------------------- Functions --------------------------------*/
function calcIt(event) {
  let value = event.target.innerText;

  if (value === "C") {
    num1 = "";
    num2 = "";
    operator = "";
    displayElements.innerText = "";
  }

  if (event.target.classList.contains("number")) {
    if (operator === "") {
      num1 += value;
    } else {
      num2 += value;
    }
    displayElements.innerText = num1 + operator + num2;
  } else if (
    event.target.classList.contains("operator") ||
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/"
  ) {
    if (num1 === "") return;

    operator = value;
    displayElements.innerText = num1 + operator;
  } else if (value === "=") {
    if (num1 === "" || num2 === "" || operator === "") {
      return;
    }

    let result = 0;

    if (operator === "+") {
      result = Number(num1) + Number(num2);
    } else if (operator === "-") {
      result = Number(num1) - Number(num2);
    } else if (operator === "*") {
      result = Number(num1) * Number(num2);
    } else if (operator === "/") {
      result = Number(num1) / Number(num2);
    }

    displayElements.innerText = result;

    num1 = "";
    num2 = "";
    operator = "";
  }
}
