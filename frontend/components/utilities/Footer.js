import React from "react";
import styled from "styled-components";

const FooterWrapper = styled("footer")`
  display: flex;
  flex-direction: column;
`;

const FooterComponent = styled("div")`
  height: 20rem;
  background: black;
`;

const Warning = styled("div")`
height: 1rem;
background: gray;
border: 1px solid black;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterComponent></FooterComponent>
      <Warning></Warning>
    </FooterWrapper>
  );
};

export default Footer;
