import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../../context/shopContext";

import Link from "next/link";
import { Button } from "./Button";
import CartItem from "./CartItem";

const SideDrawerWrapper = styled("div")`
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

const SideDrawer = () => {
  const { checkout } = useContext(ShopContext);
  console.log(checkout);
  return (
    <SideDrawerWrapper>
      <ItemContainer>
        {checkout.lineItems &&
          checkout.lineItems.map((item) => <CartItem item={item} />)}
      </ItemContainer>
      <PaymentContainer>
        <h3>Total amount: {checkout.paymentDue} €</h3>
        <Link href={checkout.webUrl}>
          <Button bg="#BC986A">
            Checkout <i className="far fa-credit-card" />
          </Button>
        </Link>
      </PaymentContainer>
    </SideDrawerWrapper>
  );
};

export default SideDrawer;
