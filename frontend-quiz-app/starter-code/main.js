const categorySelectors = document.querySelectorAll(".option-selector");
let category = "";
let theme = sessionStorage.setItem("theme");

sessionStorage.setItem("question", 0);
sessionStorage.setItem("score", 0);
theme
  ? sessionStorage.setItem("theme", theme)
  : sessionStorage.setItem("theme", "light");

function choosenCategory(e) {
  sessionStorage.removeItem("cat");
  category = e.currentTarget.lastElementChild.id;
  sessionStorage.setItem("cat", category);
}

categorySelectors.forEach((category) => {
  category.addEventListener("click", (e) => choosenCategory(e));
});
