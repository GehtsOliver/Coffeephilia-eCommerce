import React from "react";
import styled from "styled-components";
import Item from "./offer/Item"

const StyledOffer = styled("section")`
  background-image: url("https://res.cloudinary.com/djiqhmzqs/image/upload/v1617255776/Coffeephilia/About/banner_qhhqer.jpg");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 50vh;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Offer = () => {
  return (
    <StyledOffer>
      <Item icon="fas fa-globe-europe fa-2x" title="Continents" number="3"/>
      <Item icon="far fa-flag fa-2x" title="Countries" number="8"/>
      <Item icon="fas fa-store fa-2x" title="Stores" number="33"/>
      <Item icon="fas fa-users fa-2x" title="Employees" number="80"/>
    </StyledOffer>
  );
};

export default Offer;
