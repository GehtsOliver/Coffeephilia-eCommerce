import React from "react";
import styled from "styled-components";

import Feature from "./brand/Feature";

import { Parallax } from "react-scroll-parallax";

const AboutComponent = styled("section")`
  width: 100vw;
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  padding: 3rem;

  h1{
    font-size: 1.5rem;
  }
 
  `
  
  const Title = styled("h1")`
  font-size: 3rem !important;
  `
  
  const ParallaxWrapper = styled("div")`
  display: flex;
  
`;

const About = () => {
  return (
    <AboutComponent>
      <Title>Coffeephilia © - More than a brand</Title>
      <ParallaxWrapper>
        <Parallax className="custom-class" y={[-10, 50]} tagOuter="figure">
          <Feature
            content="Coffeephilia is not simply a company. It is a maxim. We worship coffee like some worship Gods. Hence, it is our goal to bring that lifestyle to you and supply you with everything you desire."
            title="The Coffeephilia© company"
            image="https://res.cloudinary.com/djiqhmzqs/image/upload/v1617170627/Coffeephilia/About/teamwork_ckdpxq.jpg"
          ></Feature>
        </Parallax>
        <Parallax className="custom-class" y={[100, 10]} tagOuter="figure">
          <Feature
            title="Organic Origin"
            image="https://res.cloudinary.com/djiqhmzqs/image/upload/v1617170627/Coffeephilia/About/organic_m9prwk.jpg"
            content="Our suppliers treat plants with love as they have done for generations. The farms are located in the Columbian highlands, right in the center of the Eje Cafetero (Coffee axis)."
          />
        </Parallax>
        <Parallax className="custom-class" y={[-10, 50]} tagOuter="figure">
          <Feature
            content="The well-being of our farmers is of paramount importance to us. That is why we are committed to fair trade, ensuring that our valued farmers receive a fair share for their hard work."
            title="Commitment To Fair Trade"
            image="https://res.cloudinary.com/djiqhmzqs/image/upload/v1617170628/Coffeephilia/About/farmers_qecduo.jpg"
          />
        </Parallax>
        <Parallax className="custom-class" y={[100, 10]} tagOuter="figure">
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
