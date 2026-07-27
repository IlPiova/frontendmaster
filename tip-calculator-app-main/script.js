const form = document.querySelector("#form");
const billInput = document.querySelector("#bill");
const peopleNumInput = document.querySelector("#people-num");
const button = document.querySelector("#tips-container");
const inputs = document.querySelectorAll("input");
const resetButton = document.querySelector("#reset-button");
const buttons = document.querySelectorAll(".tip-selector");
const tipDisplay = document.querySelector("#tip-display");
const totalDisplay = document.querySelector("#total-display");

let selectedTip = 0;

function renderError(elem) {
  const parentOfElem = elem.closest(".input-container");

  if (elem.id === "custom-tip") {
    elem.classList.add("error");
  } else if (!parentOfElem.classList.contains("error")) {
    const errorElem = document.createElement("p");
    errorElem.className = "errorMessage";
    errorElem.innerText = "Value has to be a number > 0";
    parentOfElem.classList.add("error");
    parentOfElem.before(errorElem);
  }
}

function clearError(elem) {
  elem.classList.remove("error");
  if (elem.id !== "custom-tip") {
    const parentElem = elem.closest(".input-container");
    const errorMex = parentElem.previousElementSibling;
    if (errorMex && errorMex.classList.contains("errorMessage"))
      errorMex.remove();
    parentElem.classList.remove("error");
  }
}

function handleCustomTip(e) {
  selectedTip = e.target.value;
}

function handleKeyDown(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleClick(e);
  }
}

function handleClick(e) {
  if (e.target.id !== "custom-tip") {
    selectedTip = e.target.dataset.tip;
  } else {
    handleCustomTip(e);
  }
  calculator();
}

function handleInput(e) {
  if (
    (!e.target.validity.valid || e.target.value < 1) &&
    e.target.value != ""
  ) {
    renderError(e.target);
  } else {
    clearError(e.target);
  }
  if (e.target.id === "custom-tip") {
    handleCustomTip(e);
  }
  calculator();
}

function handleReset() {
  selectedTip = 0;
  inputs.forEach((elem) => {
    clearError(elem);
    elem.value = "";
  });
  tipDisplay.textContent = `$0.00`;
  totalDisplay.textContent = `$0.00`;
}

function calculator() {
  //Do all the calculations
  let individualTip, individualTotal;
  let bill = parseFloat(billInput.value);
  let peopleNum = peopleNumInput.value;
  if (!bill || bill < 0) {
    bill = 0;
  }
  if (!peopleNum || peopleNum == "0") {
    peopleNum = 1;
  }
  let tip = bill * (selectedTip / 100);
  let total = bill + tip;
  individualTip = tip / peopleNum;
  individualTotal = total / peopleNum;

  resultCostructor(individualTip, individualTotal);
}

function resultCostructor(individualTip, individualTotal) {
  //put results on screen
  tipDisplay.textContent = `$${individualTip.toFixed(2)}`;
  totalDisplay.textContent = `$${individualTotal.toFixed(2)}`;
}

resetButton.addEventListener("click", handleReset);

inputs.forEach((el) => el.addEventListener("input", handleInput));

button.addEventListener("click", handleClick);
buttons.forEach((button) => button.addEventListener("keydown", handleKeyDown));

calculator();
