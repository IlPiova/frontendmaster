const form = document.querySelector("#form");
const billInput = document.querySelector("#bill");
const peopleNumInput = document.querySelector("#people-num");
const button = document.querySelector("#buttons-container");
const inputs = document.querySelectorAll("input");
const resetButton = document.querySelector("#reset-button");

const tipDisplay = document.querySelector("#tip-display");
const totalDisplay = document.querySelector("#total-display");

let selectedTip = 1;

function handleCustomTip(e) {
  selectedTip = e.target.value ? e.target.value : 1;
}

function handleClick(e) {
  if (e.target.id !== "custom-tip") {
    selectedTip = e.target.value;
  } else {
    handleCustomTip(e);
  }
  calculator();
}

function handleInput(e) {
  // in questo modo però se uno degli input è pieno, viene resettato90_
  if (!e.target.value) {
    handleReset();
  } else {
    if (e.target.id === "custom-tip") {
      handleCustomTip(e);
    }
    calculator();
  }
}

function handleReset() {
  billInput.value = undefined;
  peopleNumInput.value = undefined;
}

function calculator() {
  //Do all the calculations
  let individualTip, individualTotal;

  let tip = billInput.value * (selectedTip / 100);
  let total = billInput.value + tip;
  individualTip = tip / peopleNumInput.value;
  individualTotal = total / peopleNumInput.value;
  resultCostructor(individualTip, individualTotal);
}

function resultCostructor(individualTip, individualTotal) {
  //put results on screen
  tipDisplay.textContent = individualTip;
  totalDisplay.textContent = individualTotal;
}

resetButton.addEventListener("click", handleReset());

inputs.forEach((el) => el.addEventListener("input", handleInput));

button.addEventListener("click", handleClick);

calculator();
