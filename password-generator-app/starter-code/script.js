const range = document.querySelector("#range");
const pswLenght = document.querySelector("#psw-lenght");
const pswProperties = document.querySelector("#checkboxes-container");
const pswDisplay = document.querySelector("#password");
const copyIcon = document.querySelector("#copy-icon");
const generateButton = document.querySelector("#generate-button");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const password = document.querySelector("#password");
let newPsw = "";
let checkedBoxes = [];

const strs = [
  { key: 1, alph: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { key: 2, alph: "abcdefghijklmnopqrstuvwxyz" },
  { key: 3, alph: "0123456789" },
  { key: 4, alph: "|!£$%&/()=?^*+-/;:,.<>" },
];

function copyPsw(el) {
  navigator.clipboard.writeText(el.target.previousElementSibling.innerText);
}

function useCheckedBox() {
  let uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
  let numbersStr = "0123456789";
  let symbolsStr = "|!£$%&/()=?^*+-/;:,.<>";
  if (uppercase.checked) {
    checkedBoxes.push(1);
    newPsw += strs[1].alph[Math.floor(Math.random() * strs[1].alph.length)];
  }

  if (lowercase.checked) {
    checkedBoxes.push(2);
    newPsw += strs[2].alph[Math.floor(Math.random() * strs[2].alph.length)];
  }

  if (numbers.checked) {
    checkedBoxes.push(3);
    newPsw += strs[3].alph[Math.floor(Math.random() * strs[3].alph.length)];
  }

  if (symbols.checked) {
    checkedBoxes.push(4);
    newPsw += strs[4].alph[Math.floor(Math.random() * strs[4].alph.length)];
  }
}

function passwordFinisher() {
  let remainingLength = range.value - newPsw.length;

  for (let i = 0; i < remainingLength; i++) {
    // choose a random category between active ones
    let randomBox = strs.find(
      (checkbox) =>
        checkbox.key ===
        checkedBoxes[Math.floor(Math.random() * checkedBoxes.length)],
    );
    // Add char from random active category
    newPsw += randomBox.alph[Math.floor(Math.random() * randomBox.alph.length)];
  }
}
//shuffle the gnerated password with Fisher-yates sorting
function strShuffle(str) {
  for (let i = str.length - 1; i > 0; i--) {
    //create a random index
    const j = Math.floor(Math.random() * (i + 1));
    [str[i], str[j]] = [str[j], str[i]];
  }
  return str;
}

function pswConstrunctor() {
  newPsw = "";
  checkedBoxes = [];
  useCheckedBox();

  passwordFinisher();

  console.log(newPsw);
  let psw = newPsw.split("");
  let finalPsw = strShuffle(psw);
  console.log(finalPsw);
  let definitivePsw = finalPsw.join("");

  displayNewPsw(definitivePsw);
}

function displayNewPsw(psw) {
  pswDisplay.innerText = psw;
}

copyIcon.addEventListener("click", (e) => copyPsw(e));
//Update range color on chrome
function updateTrackFill(el) {
  const percent = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.background = `linear-gradient(to right, #A6FFAF ${percent}%, #18171F ${percent}%)`;
}

function updatePswLenght(val) {
  pswLenght.innerHTML = `${val}`;
}

range.addEventListener("input", (e) => {
  updateTrackFill(e.target);
  updatePswLenght(e.target.value);
});

generateButton.addEventListener("click", () => pswConstrunctor());

updatePswLenght(5);
updateTrackFill(range);
