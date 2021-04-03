import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Feature from "./about/Feature";

import { Parallax } from "react-scroll-parallax";

const AboutComponent = styled("section")`
  width: 100vw;
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  background: #daad86;
`;

const Title = styled("h1")`
  font-size: 2.5rem !important;
  text-align: center;
`;

const ParallaxWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  .custom-class {
    margin: 0;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
  }
`;

const About = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Listen for resize of device width
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    setWindowWidth(window.innerWidth)
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <AboutComponent id="about">
      <Title>More than just a brand</Title>
      <ParallaxWrapper>
        <Parallax
          disabled={windowWidth < 1000}
          className="custom-class"
          y={[-10, 50]}
          tagOuter="figure"
        >
          <Feature
            content="Coffeephilia is not simply a company. It is a maxim. We worship coffee like some worship Gods. Hence, it is our goal to bring that lifestyle to you and supply you with everything you desire."
            title="The Coffeephilia© company"
            image="https://res.cloudinary.com/djiqhmzqs/image/upload/v1617170627/Coffeephilia/About/teamwork_ckdpxq.jpg"
          ></Feature>
        </Parallax>
        <Parallax
          disabled={windowWidth < 1000}
          className="custom-class"
          y={[100, 10]}
          tagOuter="figure"
        >
          <Feature
            title="Organic Origin"
            image="https://res.cloudinary.com/djiqhmzqs/image/upload/v1617170627/Coffeephilia/About/organic_m9prwk.jpg"
            content="Our suppliers treat plants with love as they have done for generations. The farms are located in the Columbian highlands, right in the center of the Eje Cafetero (Coffee axis)."
          />
        </Parallax>
        <Parallax
          disabled={windowWidth < 1000}
          className="custom-class"
          y={[-10, 50]}
          tagOuter="figure"
        >
          <Feature
            content="The well-being of our farmers is of paramount importance to us. That is why we are committed to fair trade, ensuring that our valued farmers receive a fair share for their hard work."
            title="Commitment To Fair Trade"
            image="https://res.cloudinary.com/djiqhmzqs/image/upload/v1617170628/Coffeephilia/About/farmers_qecduo.jpg"
          />
        </Parallax>
        <Parallax
          disabled={windowWidth < 1000}
          className="custom-class"
          y={[100, 10]}
          tagOuter="figure"
        >
          <Feature
            title="Guaranteed top-notch quality"
            content="Selected by our farmers' eagle eyes, merely impeccable beans have the honour to be shipped to our roasting manufacture for further processing."
            image="https://res.cloudinary.com/djiqhmzqs/image/upload/v1617170627/Coffeephilia/About/quality_bmn5ww.jpg"
          />
        </Parallax>
      </ParallaxWrapper>
    </AboutComponent>
  );
};

export default About;
