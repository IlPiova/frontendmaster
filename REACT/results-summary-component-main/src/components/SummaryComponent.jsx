import { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";

function SummaryComponent() {
  const [data, setData] = useState("");

  // Fetching data
  useEffect(() => {
    fetch("./data.json")
      .then((result) => result.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <div className="secondary-section">
      <h1 className="title">Your result</h1>
      <div className="categories-container">
        {data.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>

      <button type="button" className="submit-button">
        Continue
      </button>
    </div>
  );
}

export default SummaryComponent;
