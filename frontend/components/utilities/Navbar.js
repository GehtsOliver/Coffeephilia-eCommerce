import React, { useContext } from "react";
import styled from "styled-components";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

import Sidebar from "../utilities/Sidebar";
import BurgerMenu from "../main/navbar/BurgerMenu";
import Image from "next/image";
import NavbarItem from "../main/navbar/NavbarItem";
import Darklayer from "../main/navbar/Darklayer";

const StyledNav = styled("nav")`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  padding: 0 10rem;
  @media (max-width: 992px) {
    padding: 0 1rem;
  }
`;

const StyledContainerLeft = styled("div")`
  @media (max-width: 992px) {
    width: 100vw;
    display: flex;
    justify-content: space-between;
  }
`;
const StyledContainerRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

const Navbar = () => {
  const { burgerMenu } = useContext(BurgerMenuContext);

  return (
    <StyledNav>
      {burgerMenu && <Darklayer />}
      <StyledContainerLeft>
        <NavbarItem link="/" title="Coffeephilia®">
          <Image
            src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616924424/Coffeephilia/Logo_qfyqeu.svg"
            height={30}
            width={50}
          />
        </NavbarItem>
        <BurgerMenu />
      </StyledContainerLeft>
      <StyledContainerRight>
        <NavbarItem link="/" title="Home"></NavbarItem>
        <NavbarItem link="/shop" title="Shop"></NavbarItem>
        <NavbarItem link="/contact" title="Contact"></NavbarItem>
      </StyledContainerRight>
      {burgerMenu && <Sidebar color="white" />}
    </StyledNav>
  );
};

export default Navbar;
