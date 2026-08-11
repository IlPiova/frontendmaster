let category = sessionStorage.getItem("cat");
let score = sessionStorage.getItem("score");
const categoryCard = document.querySelector("#category");
const result = document.querySelector("#result");

function displayScore() {
  result.innerText = score;
}

function ctegoryDisplay() {
  categoryCard.innerText = category;
}
