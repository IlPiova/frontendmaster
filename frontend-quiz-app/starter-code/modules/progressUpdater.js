import { questions } from "./quizData.js";

const progressBar = document.querySelector("#progressbar");
const activeProgress = document.querySelector("#active-progress-bar");

export function progressUpdater() {
  const questionNumber = Number(sessionStorage.getItem("question"));

  let singleAnswerWidth =
    (progressBar.offsetWidth / questions.length) * questionNumber;
  activeProgress.style.width = `${singleAnswerWidth}px`;
}
