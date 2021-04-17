import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { ShopContext } from "../../context/shopContext";
import { Button } from "./utilities/Button";
import Quantity from "./utilities/Quantity";
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
    color: black;
  }
`;

const ProductPage = () => {
  const { product, addItemToCheckout } = useContext(ShopContext);

  const [quantity, setQuantity] = useState(1);

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
          <h3>{product.variants[0].price} €</h3>
          <p>{product.description}</p>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <Button
            bg="#BC986A"
            color="white"
            onClick={() => {
              addItemToCheckout(product.variants[0].id, quantity);
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
