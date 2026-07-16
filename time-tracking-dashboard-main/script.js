//posso trovare un uguaglianza tra il titolo e il titolo nel json, in modo da non dover selezionare singolarmente ogni card
const timeSpanSelection = document.querySelector(".timestamp-selection");
const cards = document.querySelectorAll(".inner-card");

// Obtaining time span fo data
let timeSpan = "daily";

timeSpanSelection.addEventListener("click", function (e) {
  timeSpan = e.target.id;
});
//obtaining data from json file
const fetchedData = fetch("./data.json")
  .then((response) => {
    if (!response.status == "OK") return 0;
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  });

// insert data in card, based on time span selected
