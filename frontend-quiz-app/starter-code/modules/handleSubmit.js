import { answerSelectors, questions, quizMaker } from "./quizData.js";
let questionCounter = Number(sessionStorage.getItem("question"));
let rightAnswers = Number(sessionStorage.getItem("score"));

//Aggiungere rightAnswers prendendolo da sessionStorage (aggiornare il valore come fatto con questionCounter)

export function handleSubmit(e) {
  let selectedAnswer = answerSelectors.filter((selector) => {
    if (selector.ariaChecked === "true") return selector;
  });
  isCorrect(selectedAnswer[0]);
  let correctnessDisplay = setTimeout(() => goNext(selectedAnswer[0]), 1000);
  console.log(typeof questionCounter);
}

function isCorrect(selectedAnswer) {
  let correctAnswer = questions[questionCounter].answer;
  if (correctAnswer == selectedAnswer.lastElementChild.innerText) {
    selectedAnswer.classList.add("right-answer-style");
    rightAnswers++;
    sessionStorage.setItem("score", rightAnswers);
  } else {
    selectedAnswer.classList.add("wrong-answer-style");

    answerSelectors.filter((selector) => {
      if (selector.lastElementChild.innerText === correctAnswer)
        selector.classList.add("right-answer-style");
    });
  }
}

function goNext(selectedAnswer) {
  let correctAnswer = questions[questionCounter].answer;
  selectedAnswer.classList.remove("right-answer-style");
  selectedAnswer.classList.remove("wrong-answer-style");
  answerSelectors.filter((selector) => {
    if (selector.classList.contains("right-answer-style"))
      selector.classList.remove("right-answer-style");
    if (selector.classList.contains("wrong-answer-style"))
      selector.classList.remove("wrong-answer-style");
  });

  questionCounter++;
  if (questionCounter <= questions.length) {
    sessionStorage.setItem("question", questionCounter);
    quizMaker();
  } else {
    sessionStorage.setItem("score", rightAnswers);
    window.location.href = "../results.html";
  }
}
