import React from "react";
import Banner from "../main/products/Banner";
import CTA from "../main/products/CTA"

import styled from "styled-components";

const ProductsComponent = styled("section")`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
