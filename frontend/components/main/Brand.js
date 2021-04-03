import React from "react";
import styled from "styled-components";
import BurgerMenuContextProvider from "../../context/BurgerMenuContext";
import Navbar from "../utilities/Navbar";

const StyledBrand = styled("section")`
  height: 100vh;
  background-image: url("https://res.cloudinary.com/djiqhmzqs/image/upload/v1616924436/Coffeephilia/bg_i0sr8u.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const Brand = () => {
  return (
    <StyledBrand>
      <BurgerMenuContextProvider>
        <Navbar />
      </BurgerMenuContextProvider>
    </StyledBrand>
  );
};

export default Brand;
