const categorySelectors = document.querySelectorAll(".option-selector");
let category = "";
sessionStorage.setItem("question", 0);
sessionStorage.setItem("score", 0);
sessionStorage.setItem("theme", "light");

function choosenCategory(e) {
  sessionStorage.removeItem("cat");
  category = e.currentTarget.lastElementChild.id;
  sessionStorage.setItem("cat", category);
}

categorySelectors.forEach((category) => {
  category.addEventListener("click", (e) => choosenCategory(e));
});
