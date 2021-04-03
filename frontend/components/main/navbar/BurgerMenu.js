import React, { useContext } from "react";
import styled from "styled-components";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";


const StyledBurger = styled("nav")`
  display: none;
  left: -20px;
  top: 35px;
  z-index: 999;
  -webkit-user-select: none;
  user-select: none;
  
  @media (max-width: 992px) {
    display: block;
    position: relative;
  }
  
  > input {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: -10px;
    left: -8px;
    cursor: pointer;
    opacity: 0;
    z-index: 10000;

    -webkit-touch-callout: none;
  }

  > span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: white;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  > span:first-child {
    transform-origin: 0% 0%;
  }

  > span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  > input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-6px, -19px);
    background: #white;
  }

  > input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  > input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, 15px);
  }
`;

const BurgerMenu = () => {
  const { burgerMenu, setBurgerMenu } = useContext(BurgerMenuContext);

  return (
    <StyledBurger id="menuToggle">
      <input
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
        type="checkbox"
      />

      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  );
};

export default BurgerMenu;
