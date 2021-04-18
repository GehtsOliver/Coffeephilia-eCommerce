import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../../context/shopContext";

const Button = ({ className }) => {
  const { isCartOpen, openCart, closeCart } = useContext(ShopContext);

  return (
    <button
      onClick={() => {
        isCartOpen ? closeCart() : openCart();
      }}
      className={className}
    >
      <i className="fas fa-shopping-cart" />
    </button>
  );
};

const CartButton = styled(Button)`
  background: none;
  border: none;
  bottom: 5rem;
  left: 5rem;
  font-size: 1.5rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export default CartButton;
