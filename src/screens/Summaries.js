import React, { useState } from "react";
import "./Summaries.css"; // Import the CSS file for styling

const Summaries = ({ cases }) => {
  const goToPage = (summary) => {
    console.log(summary);
  };
  return (
    <>
      <div className="summaries-container">
        {cases.map((summary, index) => (
          <div
            key={index}
            className="summary-item"
            onClick={() => goToPage(summary)}
          >
            <div className="summary-content">
              <h4>Case {index + 1} : </h4> <p>{summary.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Summaries;
