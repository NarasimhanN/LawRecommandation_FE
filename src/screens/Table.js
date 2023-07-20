import React from "react";
import "./Table.css"; // Import the CSS file for styling

const Table = ({ cases }) => {
  console.log(cases);
  return (
    <table className="table-container">
      <thead>
        <tr className="header-row">
          <th className="header">summary</th>
          <th className="header">Url</th>
        </tr>
      </thead>
      <tbody>
        {cases.map((item, index) => (
          <tr
            key={item.summary}
            className={index % 2 === 0 ? "even-row" : "odd-row"}
          >
            <td>{item.summary}</td>
            <td>
              <a href={item.url}>Check entire Document</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
