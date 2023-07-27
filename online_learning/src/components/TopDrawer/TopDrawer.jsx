import React from "react";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";

const DivStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 150%);
  padding-bottom: 30px;

  .video {
    border-radius: 15px;
    border: 4px solid #f5841f;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 35px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
`;

const TopDrawer = ({ open, onClose }) => {
  const handleDrawerClose = () => {
    onClose();
  };

  const welcome = () => (
    <DivStyled>
      <h1>Welcome to Online Lean</h1>
      <iframe
        width="1162px"
        height="683px"
        className="video"
        src="https://www.youtube.com/embed/K-HVaubdz7Y"
        title="Welcome to Online Learn"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </DivStyled>
  );

  return (
    <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
      {welcome()}
    </Drawer>
  );
};

export default TopDrawer;
