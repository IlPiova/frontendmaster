//posso trovare un uguaglianza tra il titolo e il titolo nel json, in modo da non dover selezionare singolarmente ogni card
const timeSpanSelection = document.querySelector(".timestamp-selection");

// Obtaining time span fo data
let timeSpan = "daily";

timeSpanSelection.addEventListener("click", function (e) {
  timeSpan = e.target.id;
});
