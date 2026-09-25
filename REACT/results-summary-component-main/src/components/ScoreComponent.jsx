function ScoreComponent() {
  return (
    <div className="primary-section">
      <h1 className="secondary-title">Your result</h1>
      <div className="score-container">
        <p className="final-score">
          76 <br />
          <span className="secondary-text"> of 100</span>
        </p>
      </div>
      <h2 className="result">Great</h2>
      <p className="result-description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ScoreComponent;
