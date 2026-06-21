// DEVO OTTENERE LE COORDINATE DEL BOTTONE CON JS E SU QUELLE BASARE IL POSIZIONAMENTO DEL TOOLTIP
const authorSection = document.querySelector(".author");
const buttons = document.querySelectorAll(".share-button");
const shareSection = document.querySelector(".share-container");

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (window.innerWidth < 720) {
      authorSection.classList.toggle("display");
      shareSection.classList.toggle("display");
    } else {
      // Getting the share buttom position
      const buttonCoordinates = button.getBoundingClientRect();

      //Positioning the shareing menu at top center of the buttom
      const x = buttonCoordinates.left + 100;
      const y = buttonCoordinates.top - 45;

      shareSection.style.left = x + "px";
      shareSection.style.top = y + "px";
      shareSection.classList.toggle("display");
    }
  });
}
