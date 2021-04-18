import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../../context/shopContext";

import Link from "next/link";
import { Button } from "./Button";
import CartItem from "./CartItem";
import CloseCartButton from "./CloseCartButton";

const SideDrawerWrapper = styled("div")`

@keyframes slide-in {
  from{right: -20rem;}
  to{right: 0;} 
}
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20rem;
  background: #daad86;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  font-family: "Helvetica";
  animation-name:slide-in;
  animation-duration: 1s;
  }

  @media(max-width: 568px){
    width: 92vw;
  }

`;

const ItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const PaymentContainer = styled("div")`
  text-align: center;
`;

const Cart = () => {
  const { checkout } = useContext(ShopContext);
  console.log(checkout);
  return (
    <SideDrawerWrapper>
      <CloseCartButton/>
      <ItemContainer>
        {checkout.lineItems &&
          checkout.lineItems.map((item) => <CartItem key={item.id} item={item} />)}
      </ItemContainer>
      <PaymentContainer>
        <h3>Total amount: {checkout.paymentDue} €</h3>
        <Link href={checkout.webUrl}>
          <Button color="white" bg="#BC986A">
            Checkout <i className="far fa-credit-card" />
          </Button>
        </Link>
      </PaymentContainer>
    </SideDrawerWrapper>
  );
};

export default Cart;
