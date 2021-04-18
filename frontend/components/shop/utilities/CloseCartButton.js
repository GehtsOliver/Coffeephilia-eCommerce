import React, { useContext } from "react";
import styled from "styled-components";

import { ShopContext } from "../../../context/shopContext";

const CloseButton = styled("button")`
  z-index: 1000;
  position: absolute;
  left: -2rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: white;
  background: #bc986a;
  border: 2px solid #bc986a;
  border-radius: 100%;
`;

const CloseCartButton = () => {
  const { closeCart } = useContext(ShopContext);

  return (
    <CloseButton onClick={() => closeCart()}>
      <i className="fas fa-times" />
    </CloseButton>
  );
};

export default CloseCartButton;
