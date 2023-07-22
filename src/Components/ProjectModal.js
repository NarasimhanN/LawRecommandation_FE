import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./DataModal.css";
import HeaderAndText from "./HeaderAndText";
import GavelIcon from "@mui/icons-material/Gavel";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssessmentIcon from "@mui/icons-material/Assessment";
const ProjectModal = ({ toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <CloseIcon className="close-icon" onClick={() => toggleModal(0)} />
        <h1 style={{ color: "white" }}>
          Law Case Recommendation System{" "}
          <GavelIcon style={{ marginLeft: 20, fontSize: 50 }} />
        </h1>
        <p>
          Recommendation system that can suggest past cases that are similar to
          a prompt that is given or based on another case
        </p>
        <h3 style={{ color: "white", marginTop: 40 }}>Technical Overview : </h3>
        <p>
          The project uses Distilbart-cnn for summarisation of the given prompt.
        </p>
        <p>
          The Summaries are preprocessed by processed like lemmatization,
          tokenizing, stop word removal...
        </p>
        <p>The preprocessed content is Vectorised using Word2Vec.</p>
        <p>
          This Vectorised data is compared to the closest points (documents) in
          the vector space predicted by KMeans.
        </p>
        <div style={{ marginTop: 40 }}>
          <a
            className="link"
            target="_blank"
            href="https://github.com/NarasimhanN/LawRecommandationSystem"
          >
            Check out Source Code
          </a>
        </div>
        <div style={{ margin: 20 }}>
          <a
            className="link"
            target="_blank"
            href="https://drive.google.com/file/d/1u6yUnNgAdQOBpndLgOJp_PKw6-s2HFB-/view?usp=drive_link"
          >
            Admire the Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
