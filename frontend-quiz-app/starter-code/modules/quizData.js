import { fetchedData } from "./fetchData.js";
import { handleSubmit } from "./handleSubmit.js";
const question = document.querySelector("#question-body");
const questionNumber = document.querySelector("#question-number");
const answerSelectors = Array.from(
  document.querySelectorAll(".option-selector"),
);
const submitButton = document.querySelector("#submit-button");
let questionCounter = sessionStorage.getItem("question");
let questions = [];
let category = sessionStorage.getItem("cat");

function optionsMaker() {
  let i = 0;
  console.log(questionCounter);
  answerSelectors.forEach((selector) => {
    selector.lastElementChild.innerText = questions[questionCounter].options[i];
    i++;
  });
}

function questionsFinder() {
  for (let i = 0; i < fetchedData.length; i++) {
    if (category !== fetchedData[i].title) continue;
    questions = fetchedData[i].questions;
  }
  optionsMaker();
}

function currentQuestionMaker() {
  question.innerText = questions[questionCounter].question;
}

function updateQuestionNumber() {
  questionNumber.innerText = `${questionCounter} `;
}

function quizMaker() {
  questionCounter = Number(sessionStorage.getItem("question"));
  questionsFinder();
  currentQuestionMaker();
  updateQuestionNumber();
}

answerSelectors.forEach((selector) =>
  selector.addEventListener("click", (e) => {
    e.currentTarget.setAttribute("aria-checked", "true");
  }),
);

submitButton.addEventListener("click", handleSubmit);
quizMaker();
export { answerSelectors, questions, quizMaker };
