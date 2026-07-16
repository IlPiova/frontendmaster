//posso trovare un uguaglianza tra il titolo e il titolo nel json, in modo da non dover selezionare singolarmente ogni card
const timeSpanSelection = document.querySelector(".timestamp-selection");
const cards = document.querySelectorAll(".inner-card");
let fetchedData;

// Obtaining time span fo data
let timeSpan = "daily";

timeSpanSelection.addEventListener("click", function (e) {
  timeSpan = e.target.id;
  dataInsert(fetchedData);
});
//obtaining data from json file

fetch("./data.json")
  .then((response) => {
    if (!response.ok) return 0;
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dataInsert(data);
    fetchedData = data;
  });

// insert data in card, based on time span selected
function dataInsert(data) {
  data.map((item) => {
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardTitle = card.firstElementChild.innerText;
      if (item.title === cardTitle) cardConstructor(item, card);
    }
  });
}
function cardConstructor(data, card) {
  const cardCurrentScore = card.querySelector(".time-score");
  const cardLastScore = card.querySelector(".last-score");

  cardCurrentScore.innerText = data.timeframes[timeSpan].current;
  cardLastScore.innerText = data.timeframes[timeSpan].previous;
}
