import React from "react";
import styled from "styled-components";

const StyledItem = styled("figure")`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.5rem;
  align-items: center;
  row-gap: 1rem;

  h1{
      margin: 0;
  }
`;

const Item = ({ icon, number, title }) => {
  return (
    <StyledItem>
      <i className={icon}></i>
      <h1>{number}</h1>
      <h1>{title}</h1>
    </StyledItem>
  );
};

export default Item;
