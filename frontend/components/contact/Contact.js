import React from "react";
import styled from "styled-components";

import Content from "../entry/utilities/Content";
import { Wrapper } from "../entry/utilities/Wrapper";
import ContactForm from "./utilities/ContactForm";

const StyledSection = styled("section")`
  display: flex;
  width: 100vw;
  font-family: "Indie Flower", cursive;
  text-transform: capitalize;
`;

const Contact = () => {
  return (
    <StyledSection>
      <ContactForm />
      <Wrapper noShow="none">
        <Content />
      </Wrapper>
    </StyledSection>
  );
};

export default Contact;
