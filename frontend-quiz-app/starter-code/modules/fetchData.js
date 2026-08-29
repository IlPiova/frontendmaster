let data = "";

data = await fetch("../data.json").then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Errore caricamento dati");
  }
});
let fetchedData = data.quizzes;

sessionStorage.setItem("data", JSON.stringify(fetchedData));
