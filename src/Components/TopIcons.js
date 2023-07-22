import React, { useState } from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ProjectModal from "./ProjectModal";
import AboutUsModal from "./AboutUsModal";
import "./TopIcons.css";
const TopIcons = () => {
  const [isOpen, setIsOpen] = useState(0);
  const toggleModal = (val) => {
    setIsOpen(val);
  };

  return (
    <>
      <div className="icons-container">
        <CodeOffIcon onClick={() => toggleModal(1)} className="icon" />
        <AccessibilityNewIcon onClick={() => toggleModal(2)} className="icon" />
      </div>
      {isOpen == 1 && <ProjectModal toggleModal={(val) => toggleModal(val)} />}
      {isOpen == 2 && <AboutUsModal toggleModal={(val) => toggleModal(val)} />}
    </>
  );
};

export default TopIcons;
