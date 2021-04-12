import React from "react";
import styled from "styled-components";

const CtaContainer = styled("div")`
  width: 60vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 1rem;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.1rem;
  }
`;

const ShopButton = styled("a")`
  background-color: #412D2A;
  color: white;
  width: 20rem;
  height: 4rem;
  font-family: inherit;
  border-radius: 3rem;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
      color: #412D2A;
      background-color: white;
      
  }

  i{
      font-size: 1.5rem;
      margin-left: 0.5rem;
  }
`;

const CTA = () => {
  return (
    <CtaContainer>
      <h1>
        Coffeephilia offers a unique assortment of merely the finest beans
      </h1>
      <h2>
        Take a deep dive right into our Store or choose from the products below.
      </h2>
      <ShopButton href="/shop">Shop <i className="fas fa-shopping-cart"></i></ShopButton>
    </CtaContainer>
  );
};

export default CTA;
