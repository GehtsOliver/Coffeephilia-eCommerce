import React, { useContext } from "react";
import styled from "styled-components";
import { BurgerMenuContext } from "../../../context/burgerContext";

import Link from "next/link";

const LinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: all 100ms;
  color: white;
  i {
    margin-left: 0.3rem;
  }
  :hover {
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

const NavbarItem = ({ title, children, link }) => {
  const { setBurgerMenu } = useContext(BurgerMenuContext);

  return (
    <Link href={link}>
      <LinkContainer onClick={() => setBurgerMenu(false)}>
        <h1>{title}</h1>
        {children}
      </LinkContainer>
    </Link>
  );
};

export default NavbarItem;
