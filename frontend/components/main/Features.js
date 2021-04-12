import React from "react";
import styled from "styled-components";
import Navbar from "../utilities/Navbar";
import { NavbarWrapper } from "../utilities/NavbarWrapper";
import About from "./about";

const StyledBrand = styled("section")`
  min-height: 230vh;
  background-image: url("https://res.cloudinary.com/djiqhmzqs/image/upload/v1616924436/Coffeephilia/bg_i0sr8u.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 992px) {
    min-height: 380vh;
  }
`;

const Brand = () => {
  return (
    <StyledBrand>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <About />
    </StyledBrand>
  );
};

export default Brand;
