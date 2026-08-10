const categorySelectors = document.querySelectorAll(".category-selector");
let category;
function choosenCategory(e) {
  category = e.currentTarget.lastElementChild.id;
  sessionStorage.setItem("cat", category);
}

categorySelectors.forEach((category) => {
  category.addEventListener("click", (e) => choosenCategory(e));
});
