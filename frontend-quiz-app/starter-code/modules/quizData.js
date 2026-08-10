import { fetchedData } from "./fetchData.js";

const question = document.querySelector("#question-body");
const questionNumber = document.querySelector("#question-number");
const answerSelectors = document.querySelectorAll(".answer-selector");
const submitButton = document.querySelector("#submit-button");
let questionCounter = 0;
let questions = [];
let rightAnsware = 0;
let category = sessionStorage.getItem("cat");

function questionsFinder() {
  for (let i = 0; i < fetchedData.length; i++) {
    if (category !== fetchedData[i].title) continue;
    questions = fetchedData[i].questions;
  }
}

function optionsMaker() {
  answerSelectors.forEach((selector) => {
    let i = 0;
    selector.lastElementChild.innerText = questions[questionCounter].options[i];
  });
  questionCounter++;
}

function currentQuestionMaker() {
  question.innerText = questions[questionCounter].question;
}

function updateQuestionNumber() {
  questionNumber.innerText = questionCounter;
}

function quizMaker() {
  optionsMaker();
  currentQuestionMaker();
  updateQuestionNumber();
}

function handleSubmit(e) {
  //   document.preventDefault(e);
  quizMaker();
}

function isCorrect(e) {
  if (
    e.currentTarget.lastElementChild.innerText ==
    questions[questionNumber].questions.answer
  ) {
    rightAnsware++;
    e.currentTarget.classlist.add = "right-answer-style";
  } else {
    e.currentTarget.classlist.add = "wrong-answer-style";
  }
}

answerSelectors.forEach((selector) =>
  selector.addEventListener("click", (e) => isCorrect(e)),
);

submitButton.addEventListener("click", handleSubmit);
questionsFinder();
quizMaker();
