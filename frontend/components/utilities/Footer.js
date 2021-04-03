import React from "react";
import styled from "styled-components";
import ButtonContainer from "../main/footer/ButtonContainer";

import LinkContainer from "../main/footer/LinkContainer";

const FooterWrapper = styled("footer")`
  display: flex;
  flex-direction: column;
`;

const FooterComponent = styled("div")`
  min-height: 20rem;
  background: linear-gradient(360deg, #bc986a 95%, #daad86);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width:800px){
    flex-direction: column;
    padding: 3rem 0;
    row-gap: 1rem;
    text-align: center;
  }
`;

const Warning = styled("div")`
  min-height: 1.5rem;
  font-family: "Roboto";
  font-weight: bold;
  background: #8d8741;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterComponent>
        <LinkContainer />
        <ButtonContainer />
        <h1>Coffeephilia 2021 ®</h1>
      </FooterComponent>
      <Warning>
        This is just a sample website to show off my programming skills.
        Coffeephilia does not reflect a real company. I do not claim any rights
        to the ressources used on this site. Design and code by Oliver Graetz ♡
      </Warning>
    </FooterWrapper>
  );
};

export default Footer;
