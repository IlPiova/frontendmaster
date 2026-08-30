let category = sessionStorage.getItem("cat");
let score = sessionStorage.getItem("score");
const categoryCard = document.querySelector("#active-category");
const result = document.querySelector("#result");
const button = document.querySelector("#play-again");
let theme = sessionStorage.getItem("theme");

document.documentElement.style.setProperty("color-scheme", theme);

function displayScore() {
  result.innerText = `${score}`;
}

function categoryDisplay() {
  categoryCard.innerText = category;
}

button.addEventListener(
  "click",
  () => (window.location.href = "../index.html"),
);
displayScore();
categoryDisplay();
