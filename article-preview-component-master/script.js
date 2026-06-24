const button = document.getElementById("share-button");
const shareSection = document.querySelector(".share-container");

button.addEventListener("click", () => {
  shareSection.classList.toggle("display");
});
