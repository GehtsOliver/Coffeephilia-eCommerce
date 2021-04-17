import styled from "styled-components";
import Image from "next/image";

const CartItemContainer = styled("article")`
  display: flex;
    column-gap:1rem;

  h4 {
    margin: 0.1rem;
    width: 10rem;
  }

  div{
      display: flex;
      flex-direction: column;
      justify-content:center;
  }
`;

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <Image src={item.variant.image.src} height={140} width={100} />
      <div>
        <h4>{item.title}</h4>
        <h4>Amount: {item.quantity}</h4>
        <h4>{item.variant.price} €</h4>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
