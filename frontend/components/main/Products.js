import React from "react";
import Banner from "../main/products/Banner";
import CTA from "../main/products/CTA"

import styled from "styled-components";

const ProductsComponent = styled("section")`
  min-height: 100vh;
  padding: 3rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;
  background: #DAAD86;
`;

const Products = () => {
  return (
    <ProductsComponent>
      <CTA/>
      <Banner />
    </ProductsComponent>
  );
};

export default Products;
