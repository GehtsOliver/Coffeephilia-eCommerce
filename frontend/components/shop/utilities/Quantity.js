import React from "react";
import styled from "styled-components";

const QuantityComponent = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: center;

  button {
    width: 2rem;
    height: 2rem;
    color: white;
    background: #BC986A;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
  }

  p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const Quantity = ({ setQuantity, quantity }) => {
  return (
    <QuantityComponent>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </QuantityComponent>
  );
};

export default Quantity;
