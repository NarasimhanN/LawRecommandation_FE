import React from "react";
import "../screens/Summaries.css";
const HeaderAndText = ({ data }) => {
  return (
    <div className="header-container">
      <h4>{data.header} : </h4> {data.body}
    </div>
  );
};

export default HeaderAndText;
