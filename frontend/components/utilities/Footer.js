import React from "react";
import styled from "styled-components";
import ButtonContainer from "../main/footer/ButtonContainer";

import LinkContainer from "../main/footer/LinkContainer";

const FooterWrapper = styled("footer")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FooterComponent = styled("div")`
  min-height: 20rem;
  background: #DAAD86;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 3rem 0;
    row-gap: 1rem;
    text-align: center;
  }
`;

const Warning = styled("div")`
  padding: 0.1rem;

  font-weight: bold;
  background: #BC986A;
  color: black;
  text-align: center;
  font-family: "Helvetica";
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
        Coffeephilia does not represent a real company. I do not claim any
        rights to the ressources used on this site nor did I intend to infringe
        any. Design and code by Oliver Graetz ☕
      </Warning>
    </FooterWrapper>
  );
};

export default Footer;
