let category = sessionStorage.getItem("cat");
const categoryIcon = document.querySelector("#category-icon");
const categoryName = document.querySelector("#active-category");
const themeChooser = document.querySelector("#theme-chooser");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
const categoryHeader = document.querySelector("#category-card");

function headerCategoryConstructor() {
  if (categoryName) categoryName.innerText = "";
  if (categoryIcon && categoryIcon.classList - length > 1)
    categoryIcon.classList.remove(categoryIcon.classList[1]);
  if (category && categoryName) {
    categoryName.innerText = category;
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
  if (themeChooser.checked) {
    document.documentElement.style.setProperty("color-scheme", "dark");
    sunIcon.setAttribute("src", "../assets/images/icon-sun-light.svg");
    moonIcon.setAttribute("src", "../assets/images/icon-sun-light.svg");
  } else {
    document.documentElement.style.setProperty("color-scheme", "light");
    sunIcon.setAttribute("src", "../assets/images/icon-sun-dark.svg");
    moonIcon.setAttribute("src", "../assets/images/icon-moon-dark.svg");
  }
}
if (categoryHeader) {
  categoryHeader.addEventListener(
    "click",
    () => (window.location.href = "../index.html"),
  );
}
themeChooser.addEventListener("click", changeTheme);
headerCategoryConstructor();
