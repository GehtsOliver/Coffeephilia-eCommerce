import React from "react";
import styled from "styled-components";

const VideoContainer = styled("div")`
  width: 50vw;
  overflow: hidden;
  height: 100vh;
  background: #412D2A;
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 2rem;

  video {
    height: 80vh;
  }
  h1 {
    color: white !important;
    margin: 0.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const DarkLayer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  background: #000;
  height: 80vh;
  z-index: 10000;
  opacity: 0.6;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Video = () => {
  return (
    <>
      <VideoContainer>
        <video muted autoPlay loop>
          <source
            src="https://res.cloudinary.com/djiqhmzqs/video/upload/v1616924782/Coffeephilia/Coffeebeans_Video_nci37q.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div>
          <h1>World's tastiest, greenest and most reliable coffee brand</h1>
          <h1>Our mission is to provide you with flawless coffee</h1>
          <h1>Coffeephilia® 2021</h1>
        </div>
      </VideoContainer>
      <DarkLayer />
    </>
  );
};

export default Video;
