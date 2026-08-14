let category = sessionStorage.getItem("cat");
const categoryIcon = document.querySelector("#category-icon");
const categoryName = document.querySelector("#active-category");
const themeChooser = document.querySelector("#theme-chooser");
function headerCategoryConstructor() {
  categoryName.innerText = "";
  if (categoryIcon.classList - length > 1)
    categoryIcon.classList.remove(categoryIcon.classList[1]);
  if (category) {
    categoryName.innerText = category;
    console.log(category);
    switch (category) {
      case "HTML":
        categoryIcon.setAttribute("src", "./assets/images/icon-html.svg");
        categoryIcon.classList.add("html-icon");
        break;
      case "CSS":
        categoryIcon.setAttribute("src", "./assets/images/icon-css.svg");
        categoryIcon.classList.add("css-icon");

        break;
      case "Javscript":
        categoryIcon.setAttribute("src", "./assets/images/icon-javascript.svg");
        categoryIcon.classList.add("js-icon");

        break;
      case "Accessibility":
        categoryIcon.setAttribute(
          "src",
          "./assets/images/icon-accessibility.svg",
        );
        categoryIcon.classList.add("accessibility-icon");

        break;

      default:
        break;
    }
  }
}

function changeTheme() {
  console.log("CIAO");
  themeChooser.checked
    ? document.documentElement.style.setProperty("color-scheme", "dark")
    : document.documentElement.style.setProperty("color-scheme", "light");
}

themeChooser.addEventListener("click", changeTheme);
headerCategoryConstructor();
