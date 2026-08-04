const range = document.querySelector("#range");
const pswlength = document.querySelector("#psw-length");
const pswProperties = document.querySelector("#checkboxes-container");
const pswDisplay = document.querySelector("#password");
const copyIcon = document.querySelector("#copy-icon");
const generateButton = document.querySelector("#generate-button");
const copyMessage = document.querySelector("#copy-message");

//Checkboxes selection
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

// Strenght indicators selection
const strenghtIndicators = document.querySelector("#indicators-container");
const strenghtResult = document.querySelector("#strenght-result");

let newPsw = "";
let checkedBoxes = [];
let errorTimeout, copyTimeout;

const strs = [
  { key: 1, alph: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { key: 2, alph: "abcdefghijklmnopqrstuvwxyz" },
  { key: 3, alph: "0123456789" },
  { key: 4, alph: "|!£$%&/()=?^*+-/;:,.<>" },
];

function copyMessenger() {
  if (copyMessage.innerText) copyMessage.innerText = "";

  copyMessage.innerText = "COPIED!";
  copyTimeout = setTimeout(() => {
    copyMessage.remove();
  }, 2000);
}

function copyPsw(el) {
  if (newPsw) {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(pswDisplay.value);
    copyMessenger();
  }
}

function clearError() {
  generateButton.classList.remove("error-container");
  generateButton.firstElementChild.style.color = "var(--clr-bg)";
  generateButton.lastElementChild.style.display = "block";
  generateButton.firstElementChild.innerText = "GENERATE";
  clearTimeout(errorTimeout);
}

function handleError() {
  generateButton.classList.add("error-container");
  generateButton.firstElementChild.style.color = "var(--clr-txt)";
  generateButton.lastElementChild.style.display = "none";
  generateButton.firstElementChild.innerText = "Select at least one property";
  clearTimeout(errorTimeout);
  errorTimeout = setTimeout(() => {
    clearError();
  }, 5000);
}

function useCheckedBox() {
  if (uppercase.checked) {
    checkedBoxes.push(1);
    newPsw += strs[0].alph[Math.floor(Math.random() * strs[0].alph.length)];
  }

  if (lowercase.checked) {
    checkedBoxes.push(2);
    newPsw += strs[1].alph[Math.floor(Math.random() * strs[1].alph.length)];
  }

  if (numbers.checked) {
    checkedBoxes.push(3);
    newPsw += strs[2].alph[Math.floor(Math.random() * strs[2].alph.length)];
  }

  if (symbols.checked) {
    checkedBoxes.push(4);
    newPsw += strs[3].alph[Math.floor(Math.random() * strs[3].alph.length)];
  }
}

function passwordFinisher() {
  let remainingLength = range.value - newPsw.length;
  for (let i = 0; i < remainingLength; i++) {
    let randomCategory =
      checkedBoxes[Math.floor(Math.random() * checkedBoxes.length)];
    // choose a random category between active ones
    let randomBox = strs.find((checkbox) => checkbox.key === randomCategory);
    // Add char from random active category
    newPsw += randomBox.alph[Math.floor(Math.random() * randomBox.alph.length)];
  }
}
//shuffle the gnerated password with Fisher-yates sorting
function strShuffle() {
  let psw = newPsw.split("");
  for (let i = psw.length - 1; i > 0; i--) {
    //create a random index
    const j = Math.floor(Math.random() * (i + 1));
    [psw[i], psw[j]] = [psw[j], psw[i]];
  }
  newPsw = psw.join("");

  return newPsw;
}
function resetForm() {
  for (let i = 0; i < strenghtIndicators.children.length; i++) {
    strenghtIndicators.children[i].style.backgroundColor = "inherit";
  }
  strenghtResult.innerText = "";
  newPsw = "";
  checkedBoxes = [];
}

function pswConstructor() {
  resetForm();
  useCheckedBox();
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    !numbers.checked &&
    !symbols.checked
  ) {
    handleError();
    resetForm();
    return;
  }
  clearError();
  passwordFinisher();

  strShuffle();

  displayNewPsw(newPsw);

  strenghtDisplay();
}

function displayNewPsw(psw) {
  pswDisplay.value = psw;
}

function strenghtDisplay() {
  switch (checkedBoxes.length) {
    case 1:
      strenghtIndicators.children[0].style.backgroundColor =
        "var(--clr-hight-strenght);";
      strenghtResult.innerText = "WEAK";
      break;
    case 2:
      for (let i = 0; i < checkedBoxes.length; i++) {
        strenghtIndicators.children[i].style.backgroundColor =
          "var(--clr-medium-strenght)";
      }
      strenghtResult.innerText = "MEDIUM";

      break;
    case 3:
      for (let i = 0; i < checkedBoxes.length; i++) {
        strenghtIndicators.children[i].style.backgroundColor =
          "var(--clr-low-strenght)";
      }
      strenghtResult.innerText = "MEDIUM";

      break;
    case 4:
      for (let i = 0; i < checkedBoxes.length; i++) {
        strenghtIndicators.children[i].style.backgroundColor =
          "var(--clr-primary)";
      }
      strenghtResult.innerText = "STRONG";

      break;
    default:
      break;
  }
}

copyIcon.addEventListener("click", (e) => copyPsw(e));
//Update range color on chrome
function updateTrackFill(el) {
  const percent = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.background = `linear-gradient(to right, #A6FFAF ${percent}%, #18171F ${percent}%)`;
}

function updatePswlength(val) {
  pswlength.innerHTML = `${val}`;
}

range.addEventListener("input", (e) => {
  updateTrackFill(e.target);
  updatePswlength(e.target.value);
});

generateButton.addEventListener("click", () => pswConstructor());

updatePswlength(5);
updateTrackFill(range);
