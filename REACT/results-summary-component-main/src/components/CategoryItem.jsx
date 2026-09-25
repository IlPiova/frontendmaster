function CategoryItem({ category }) {
  return (
    <div className="category-container" id={category.category}>
      <img src={category.icon} alt="category-icon" />
      <p className="category">{category.category}</p>
      <p className="result">
        {category.score}
        <span className="sub-text"> / 100</span>
      </p>
    </div>
  );
}

export default CategoryItem;
