let category = sessionStorage.getItem("cat");
let score = sessionStorage.getItem("score");
const categoryCard = document.querySelector("#category");
const result = document.querySelector("#result");
const button = document.querySelector("#play-again");

function displayScore() {
  result.innerText = `${score}`;
}

function categoryDisplay() {
  categoryCard.innerText = category;
}
displayScore();
categoryDisplay();
