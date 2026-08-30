let category = sessionStorage.getItem("cat");
const categoryIcon = document.querySelector("#category-icon");
const categoryName = document.querySelector("#active-category");
const themeChooser = document.querySelector("#theme-chooser");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
const categoryCard = document.querySelector("#category-card");

let theme = sessionStorage.getItem("theme");

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

  if (theme === "dark") {
    sunIcon.setAttribute("src", "../assets/images/icon-sun-light.svg");
    moonIcon.setAttribute("src", "../assets/images/icon-moon-light.svg");
  } else {
    sunIcon.setAttribute("src", "../assets/images/icon-sun-dark.svg");
    moonIcon.setAttribute("src", "../assets/images/icon-moon-dark.svg");
  }
}

function changeTheme() {
  if (themeChooser.checked) {
    sessionStorage.setItem("theme", "dark");
    theme = sessionStorage.getItem("theme");
    document.documentElement.style.setProperty("color-scheme", theme);
    sunIcon.setAttribute("src", "../assets/images/icon-sun-light.svg");
    moonIcon.setAttribute("src", "../assets/images/icon-moon-light.svg");
  } else {
    sessionStorage.setItem("theme", "light");
    theme = sessionStorage.getItem("theme");
    document.documentElement.style.setProperty("color-scheme", theme);
    sunIcon.setAttribute("src", "../assets/images/icon-sun-dark.svg");
    moonIcon.setAttribute("src", "../assets/images/icon-moon-dark.svg");
  }
}
if (categoryCard) {
  categoryCard.addEventListener(
    "click",
    () => (window.location.href = "../index.html"),
  );
}
themeChooser.addEventListener("click", changeTheme);
headerCategoryConstructor();
