import React from "react";
import "./ImageCaption.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ImageCaption = ({ imageUrl, imageName, sourceUrl, designation }) => {
  const goToLinkedIn = (sourceUrl) => {
    window.open(sourceUrl, "_blank");
  };
  return (
    <div className="image-info-container">
      <img src={imageUrl} alt={imageName} className="image" />
      <p className="image-name">
        {imageName}
        <LinkedInIcon
          className="linkedin-icon"
          onClick={() => goToLinkedIn(sourceUrl)}
        />
      </p>
      <h4>{designation}</h4>

      {/* <p className="source-url">LinkedIn : {sourceUrl}</p> */}
    </div>
  );
};

export default ImageCaption;
