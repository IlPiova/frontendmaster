import { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";

function SummaryComponent() {
  const [data, setData] = useState([]);

  // Fetching data
  useEffect(() => {
    fetch("../../public/data.json")
      .then((result) => result.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="secondary-section">
      <h1 className="title">Summary</h1>
      <div className="categories-container">
        {data.map((result) => (
          <CategoryItem key={result.category} category={result} />
        ))}
      </div>

      <button type="button" className="submit-button">
        Continue
      </button>
    </div>
  );
}

export default SummaryComponent;
