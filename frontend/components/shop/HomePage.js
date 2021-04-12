import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import styled from "styled-components";

import Products from "./utilities/Products";
import Pagination from "./utilities/Pagination";

const Container = styled("section")`
  height: 60vh;
  padding: 0 15rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  h1,
  h2,
  h3,
  p {
    color: black;
  }

  @media (max-width: 992px) {
    padding: 0 1rem;
  }
`;

const HomePage = ({}) => {
  const { fetchProducts, products } = useContext(ShopContext);
  const [productsIndex, setProductsIndex] = useState(0);
  const [productsRender, setProductsRender] = useState(8);

  let productsMarkUp = [];

  useEffect(() => {
    fetchProducts();
    return () => {};
  }, []);

  useEffect(() => {
    productsMarkUp = [];
  }, [productsRender, productsIndex]);

  for (let i = productsIndex; i < productsRender; i++) {
    productsMarkUp.push(<Products key={products.id} product={products[i]} />);
  }

  const increaseProductsToRender = () => {
    if (productsRender < products.length) {
      setProductsRender(productsRender + 8);
      setProductsIndex(productsIndex + 8);
      console.log("Increased " + productsIndex + " " + productsRender);
    }
  };

  const decreaseProductsToRender = () => {
    if (productsRender > 8) {
      setProductsRender(productsRender - 8);
      setProductsIndex(productsIndex - 8);
      console.log("Decreased " + productsIndex + " " + productsRender);
    }
  };

  if (!products) return <div>No products yet</div>;
  return (
    <Container>
      {productsMarkUp}
      <Pagination
        nextProducts={increaseProductsToRender}
        backProducts={decreaseProductsToRender}
        productsMax={productsRender}
        productsMin={productsIndex}
      />
    </Container>
  );
};

export default HomePage;
