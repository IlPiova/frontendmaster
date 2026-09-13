function CategoryItem({ category }) {
  return (
    <div className="category-container">
      <img src={category.icon} alt="category-icon" />
      <p className="category">{category.category}</p>
      <div className="category-result-container">
        <p className="result">{category.score}</p>
        <p className="sub-text">/100</p>
      </div>
    </div>
  );
}

export default CategoryItem;
