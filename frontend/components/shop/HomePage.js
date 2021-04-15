import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import styled from "styled-components";

import Product from "./utilities/Product";
import Pagination from "./utilities/Pagination";
import Footer from "../utilities/Footer";

const Container = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  padding-top: 6rem;

  @media (max-width: 992px) {
    padding-top: 2rem;

  }
`;

const Grid = styled("div")`
  width: 60%;
  margin: 0 auto;
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  h1,
  h2,
  h3,
  p {
    color: black;
  }

  @media (max-width: 992px) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
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
    productsMarkUp.push(<Product key={products.id} product={products[i]} />);
  }

  const increaseProductsToRender = () => {
    if (productsRender < products.length) {
      setProductsRender(productsRender + 8);
      setProductsIndex(productsIndex + 8);
    }
  };

  const decreaseProductsToRender = () => {
    if (productsRender > 8) {
      setProductsRender(productsRender - 8);
      setProductsIndex(productsIndex - 8);
    }
  };

  if (!products) return <div>No products yet</div>;
  return (
    <Container>
      <Grid>{productsMarkUp}</Grid>
      <Pagination
        nextProducts={increaseProductsToRender}
        backProducts={decreaseProductsToRender}
        productsMax={productsRender}
        productsMin={productsIndex}
      />
      <Footer />
    </Container>
  );
};

export default HomePage;
