import styled from "styled-components";
import Image from "next/image";

import Quantity from "./Quantity";

const CartItemContainer = styled("article")`
  display: flex;
  column-gap: 1rem;

  h4 {
    margin: 0.1rem;
    width: 10rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  > div > div {
    height: 3.5rem;
  }
`;

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <Image src={item.variant.image.src} height={140} width={100} />
      <div>
        <h4>{item.title}</h4>
        <Quantity item={item} />
        <h4>{item.variant.price * item.quantity} €</h4>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
