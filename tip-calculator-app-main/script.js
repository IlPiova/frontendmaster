const form = document.querySelector("#form");
const billInput = document.querySelector("#bill");
const peopleNumInput = document.querySelector("#people-num");
const button = document.querySelector("#buttons-container");
const inputs = document.querySelectorAll("input");
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
    calculator();
  }
}

function handleInput(e) {
  if (e.target.id === "custom-tip") {
    handleCustomTip(e);
  }
  calculator();
}

inputs.forEach((el) => el.addEventListener("input", handleInput));

button.addEventListener("click", handleClick);

function calculator() {
  let individualTip, individualTotal;

  let tip = billInput.value * (selectedTip / 100);
  let total = parseInt(billInput.value) + tip;
  individualTip = tip / peopleNumInput.value;
  individualTotal = total / peopleNumInput.value;

  console.log(tip);
  console.log(total);
  tipDisplay.textContent = individualTip;
  totalDisplay.textContent = individualTotal;
}

calculator();
