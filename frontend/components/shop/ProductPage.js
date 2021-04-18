import React, { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";

import { ShopContext } from "../../context/shopContext";
import { Button } from "./utilities/Button";
import { BackButton } from "../utilities/BackButton";

const PageWrapper = styled("section")`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica";
`;

const ProductWrapper = styled("article")`
  display: flex;
  column-gap: 3rem;
  p {
    width: 15rem;
    color: black;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding-top: 2rem;
    > div > div > img {
      height: 18rem;
    }

    @media (max-height: 700px){
      padding-top: 12rem;
    }
  }
`;

const ProductPage = () => {
  const { product, addItemToCheckout } = useContext(ShopContext);

  if (!product.variants) return <div>Loading</div>;

  return (
    <PageWrapper>
      <BackButton color="#BC986A" />
      <ProductWrapper>
        {product.images && (
          <Image width={300} height={400} src={product.images[0].src} />
        )}
        <div>
          <h3>{product.title}</h3>
          <h4>{product.variants[0].price} €</h4>
          <h4>incl. VAT</h4>
          <p>{product.description}</p>
          <Button
            bg="#BC986A"
            color="white"
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
            }}
          >
            Add to <i className="fas fa-shopping-cart" />
          </Button>
        </div>
      </ProductWrapper>
    </PageWrapper>
  );
};

export default ProductPage;
