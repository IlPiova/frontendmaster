let category = sessionStorage.getItem("cat");
const categoryIcon = document.querySelector("#category-icon");
const categoryName = document.querySelector("#active-category");
const themeChooser = document.querySelector("#theme-chooser");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
const categoryCard = document.querySelector("#category-card");

let theme = sessionStorage.getItem("theme");

export function setCategoryIcon(str) {
  const icon = document.querySelector(str);
  switch (category) {
    case "HTML":
      icon.setAttribute("src", "./assets/images/icon-html.svg");
      icon.classList.add("html-icon");
      break;
    case "CSS":
      icon.setAttribute("src", "./assets/images/icon-css.svg");
      icon.classList.add("css-icon");

      break;
    case "Javscript":
      icon.setAttribute("src", "./assets/images/icon-javascript.svg");
      icon.classList.add("js-icon");

      break;
    case "Accessibility":
      icon.setAttribute("src", "./assets/images/icon-accessibility.svg");
      icon.classList.add("accessibility-icon");

      break;

    default:
      break;
  }
}

function headerCategoryConstructor() {
  if (categoryName) categoryName.innerText = "";
  if (categoryIcon && categoryIcon.classList - length > 1)
    categoryIcon.classList.remove(categoryIcon.classList[1]);
  if (category && categoryName) {
    categoryName.innerText = category;
    setCategoryIcon("#category-icon");
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
