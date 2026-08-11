let category = sessionStorage.getItem("cat");
const categoryIcon = document.querySelector("#category-icon");
const categoryName = document.querySelector("#active-category");

function headerCategoryConstructor() {
  if (category) {
    categoryName.innerText = category;
    switch (category) {
      case "HTML":
        categoryIcon.setAttribute("src", "./assets/images/icon-html.svg");
        break;
      case "CSS":
        categoryIcon.setAttribute("src", "./assets/images/icon-css.svg");
        break;
      case "Javscript":
        categoryIcon.setAttribute("src", "./assets/images/icon-javascript.svg");
        break;
      case "Accessibility":
        categoryIcon.setAttribute(
          "src",
          "./assets/images/icon-accessibility.svg",
        );
        break;

      default:
        break;
    }
  }
}

// function themeChooserConstructor(){

// }
