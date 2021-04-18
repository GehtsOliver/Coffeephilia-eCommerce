import React from "react";
import styled from "styled-components";

import NavbarItem from "../main/navbar/NavbarItem";

const StyledSidebar = styled("nav")`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  z-index: 2;
  
  div > h1 {
    margin: 0;
    margin-left: 0.5rem;
    color: white;

    font-weight: 300;
    font-size: 2.5rem;
    :hover {
      font-weight: 400;
    }
  }
`;
const Sidebar = ({ className }) => {
  return (
    <StyledSidebar className={className}>
      <NavbarItem link="/" title="Home">
        <i class="fas fa-home" />
      </NavbarItem>
      <NavbarItem link="/shop" title="Shop">
        <i class="fas fa-shopping-cart" />
      </NavbarItem>
      <NavbarItem link="/contact" title="Contact">
        <i class="fas fa-envelope" />
      </NavbarItem>
    </StyledSidebar>
  );
};

export default Sidebar;
