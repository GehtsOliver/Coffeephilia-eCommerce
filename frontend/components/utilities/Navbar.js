import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

const StyledNav = styled("nav")`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  background: #transparent;
  padding: 0 10rem;
  color: #fff;
  overflow-x: hidden;

  > div:hover {
    cursor: pointer;
  }

  h1 {
    font-size: 1.6rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledContainerLeft = styled("div")``;
const StyledContainerRight = styled("div")`
  column-gap: 5rem;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledContainerLeft>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616924424/Coffeephilia/Logo_qfyqeu.svg"
            height={30}
            width={50}
          />
        </Link>
        <h1>Coffeephilia® </h1>
      </StyledContainerLeft>
      <StyledContainerRight>
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/shop">
          <h1>Shop</h1>
        </Link>
      </StyledContainerRight>
    </StyledNav>
  );
};

export default Navbar;
