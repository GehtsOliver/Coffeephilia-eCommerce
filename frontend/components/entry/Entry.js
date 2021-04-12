import React from "react";
import styled from "styled-components";

import Content from "./utilities/Content";
import Video from "./utilities/Video";

const StyledSection = styled("section")`
  display: flex;
  width: 100vw;
  font-family: "Indie Flower", cursive;
  text-transform: capitalize;
`;

const Entry = () => {
  return (
    <StyledSection>
      <Video />
      <Content />
    </StyledSection>
  );
};

export default Entry;
