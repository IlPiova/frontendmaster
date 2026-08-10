const data = await fetch("/frontend-quiz-app/starter-code/data.json").then(
  (response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore caricamento dati");
    }
  },
);
let fetchedData = data.quizzes;

export { fetchedData };
