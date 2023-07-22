import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./DataModal.css";
import ImageCaption from "./ImageCaption";
import "./ImageCaption.css";
import Picture_Narasimhan from "../Images/narasimhan.jpg";
import Picture_Raghuram from "../Images/ranghuram.png";
import Picture_Meet from "../Images/meet.png";
import Picture_Jacob from "../Images/jacob.png";
const AboutUsModal = ({ toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <CloseIcon className="close-icon" onClick={() => toggleModal(0)} />

        <h1 style={{ color: "wheat" }}> About Us :)</h1>
        <div style={{ marginTop: 30, marginBlock: 30 }}>
          We are a Team of students pursing M.Tech from IIIT-B from the batch
          2022. This application is part of our project for the course
          Recommendation System.
        </div>

        {/* <div className="image-container">
          <div className="image-wrapper">
            <img src={images[0].imageUrl} className="image" />
            <p className="image-name">{images[0].imageName}</p>
          </div>
          <div className="image-wrapper">
            <img src={images[0].imageUrl} className="image" />
            <p className="image-name">{images[0].imageName}</p>
          </div>
        </div> */}
        <div className="image-row-container">
          <ImageCaption
            imageUrl={Picture_Raghuram}
            imageName={"Raghuram Bharadwaj"}
            sourceUrl={"https://www.iiitb.ac.in/faculty/raghuram-bharadwaj"}
            designation={"RS Professor - IIIT B"}
          />
          <ImageCaption
            imageUrl={Picture_Jacob}
            imageName={"Jacob Mathew"}
            sourceUrl={"https://www.linkedin.com/in/jacob-mathew-65ba841b0/"}
            designation={"Student-M.Tech 2022"}
          />
          <ImageCaption
            imageUrl={Picture_Meet}
            imageName={"Meet Mandhane"}
            sourceUrl={"https://www.linkedin.com/in/meetmandhane/"}
            designation={"Student-M.Tech 2022"}
          />
          <ImageCaption
            imageUrl={Picture_Narasimhan}
            imageName={"Narasimhan N"}
            sourceUrl={
              "https://www.linkedin.com/in/narasimhan-nandhagudi-b72848157/"
            }
            designation={"Student-M.Tech 2022"}
          />

          {/* <ImageCaption
            imageUrl={require("../Images/law.jpg")} // Replace with the actual image URL
            imageName="NaN" // Replace with the name of the image
          /> */}
          {/* <ImageCaption
            imageUrl={require("../Images/logo192.png")} // Replace with the actual image URL
            imageName="prof N" // Replace with the name of the image
          />
          <ImageCaption
            imageUrl={require("../Images/logo192.png")} // Replace with the actual image URL
            imageName="prof N" // Replace with the name of the image
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal;
