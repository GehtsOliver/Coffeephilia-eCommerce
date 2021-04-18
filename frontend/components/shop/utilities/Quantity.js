import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../../context/shopContext";

const QuantityComponent = styled("div")`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  column-gap: 0.5rem;
  
  margin-bottom: 0.5rem;
  justify-content: center;

  button {
    width: 2rem;
    height: 2rem;
    color: white;
    background: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
  }

  p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const Quantity = ({ item }) => {
  const { updateItemInCheckout } = useContext(ShopContext);

  return (
    <QuantityComponent>
      <button
        onClick={() => {
          updateItemInCheckout(item.id, item.quantity - 1);
        }}
      >
        -
      </button>
      <p>{item.quantity}</p>
      <button
        onClick={() => {
          updateItemInCheckout(item.id, item.quantity + 1);
        }}
      >
        +
      </button>
    </QuantityComponent>
  );
};

export default Quantity;
