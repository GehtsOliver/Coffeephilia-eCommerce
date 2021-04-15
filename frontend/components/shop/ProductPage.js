import React, { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import { ShopContext } from "../../context/shopContext";

const PageWrapper = styled("section")`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductWrapper = styled("article")`
  display: flex;
  column-gap: 3rem;
  p {
    color: black;
  }
`;

const ProductPage = () => {
  const { product, addItemToCheckout, openCart } = useContext(ShopContext);

  if (!product) return <div>Loading</div>;

  return (
    <PageWrapper>
      <ProductWrapper>
        {product.images && (
          <Image width={300} height={400} src={product.images[0].src} />
        )}
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <button
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
              openCart();
            }}
          >
            Add to Cart
          </button>
        </div>
      </ProductWrapper>
    </PageWrapper>
  );
};

export default ProductPage;
