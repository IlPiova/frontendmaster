const timeSpanSelection = document.querySelector(".timespan-selection");
const cards = document.querySelectorAll(".inner-card");
let fetchedData;
let timeSpan = "daily";

// Obtaining time span fo data

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
  // Choose right centence based on time span
  let str = () => {
    switch (timeSpan) {
      case "daily":
        return "Yesterday - ";
      case "weekly":
        return "Last week - ";
      case "monthly":
        return "Last month - ";
    }
  };
  cardCurrentScore.innerHTML = `${data.timeframes[timeSpan].current}hrs`;
  cardLastScore.innerHTML = `${str()}${data.timeframes[timeSpan].previous}hrs`;
}
