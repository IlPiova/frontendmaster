import { setCategoryIcon } from "./headerConstructor.js";

let category = sessionStorage.getItem("cat");
let score = sessionStorage.getItem("score");
let theme = sessionStorage.getItem("theme");

const categoryIcon = document.querySelector("#body-active-icon");
const categoryCard = document.querySelector("#body-active-category");
const result = document.querySelector("#result");
const button = document.querySelector("#play-again");

document.documentElement.style.setProperty("color-scheme", theme);

function displayScore() {
  result.innerText = `${score}`;
}

function categoryDisplay() {
  categoryCard.innerText = category;
  setCategoryIcon();
}

button.addEventListener(
  "click",
  () => (window.location.href = "../index.html"),
);
displayScore();
categoryDisplay();
