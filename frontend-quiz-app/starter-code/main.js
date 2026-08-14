const categorySelectors = document.querySelectorAll(".option-selector");
let category = "";
function choosenCategory(e) {
  sessionStorage.removeItem("cat");
  category = e.currentTarget.lastElementChild.id;
  sessionStorage.setItem("cat", category);
}

categorySelectors.forEach((category) => {
  category.addEventListener("click", (e) => choosenCategory(e));
});
