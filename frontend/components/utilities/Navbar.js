import React, { useContext } from "react";
import styled from "styled-components";
import { BurgerMenuContext } from "../../context/burgerContext";

import Sidebar from "../utilities/Sidebar";
import BurgerMenu from "../main/navbar/BurgerMenu";
import Image from "next/image";
import NavbarItem from "../main/navbar/NavbarItem";
import Darklayer from "../main/navbar/Darklayer";

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
    <>
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
      {burgerMenu && <Sidebar />}
    </>
  );
};

export default Navbar;
