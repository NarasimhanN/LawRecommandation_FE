import React, { useState } from "react";
import "./HomePage.css"; // Import the CSS file for styling
import CaseTable from "./Table";
import Summaries from "../Components/Summaries";
import HeaderAndText from "../Components/HeaderAndText";
import lawImage from "../Images/law.jpg";
import TopIcons from "../Components/TopIcons";
const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfCases, setListOfCases] = useState([]);
  const noteData = {
    header: "Note",
    body: " Below are summaries of similar documents based on given issue. Click on individual summary to get redirected to the original document.",
  };
  const disclamerData = {
    header: "Disclamer",
    body: "The summaries are generated based on a project. The readers are requested to verify the correctness. The creates of the application are not responsilbe incase of any errors",
  };
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // API Call to the backend :

    const response = [
      {
        summary:
          "This is case 1, the summary of a boy who went to the woods to find a rabbit that was swimming underwater that led its way to atlantis.\n That is when Nemo found his son and Avengers went in search of the Infinity stone",
        url: "http://google.com",
      },
      {
        summary:
          "This is Case 2,the summary of a boy who went to the woods to find a rabbit that was swimming underwater that led its way to atlantis ",
        url: "http://google.com",
      },
      {
        summary:
          "This is case 3,the summary of a boy who went to the woods to find a rabbit that was swimming underwater that led its way to atlantis",
        url: "http://google.com",
      },
      {
        summary:
          "This is Case 4 ,the summary of a boy who went to the woods to find a rabbit that was swimming underwater that led its way to atlantis",
        url: "http://google.com",
      },
      {
        summary:
          "This is case 5,the summary of a boy who went to the woods to find a rabbit that was swimming underwater that led its way to atlantis",
        url: "http://google.com",
      },
    ];
    setListOfCases(response);
    console.log("Search text:", searchText);
  };

  return (
    <>
      <div className="home-container ">
        <TopIcons />
        <h1 className="title">Law Recommendation System</h1>
        <h4>
          The system aims to provide you verdicts of past cases similar to your
          issue
        </h4>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={handleInputChange}
            placeholder="Enter your issue..."
          />
          <button className="search-button" onClick={handleSearch}>
            Recommend
          </button>
        </div>
      </div>
      <>
        {listOfCases.length > 0 ? (
          <>
            <HeaderAndText data={noteData} />
            <div className="container-with-background">
              <Summaries cases={listOfCases} />
            </div>
            <HeaderAndText data={disclamerData} />
          </>
        ) : (
          <div className="image-container">
            <img src={lawImage} alt="Law Image" className="full-screen-image" />
          </div>
        )}
      </>
    </>
  );
};

export default HomePage;
