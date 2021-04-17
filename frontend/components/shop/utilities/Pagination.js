import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../../context/shopContext";

const Container = styled("div")`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  h3{
    font-size: 1.5rem;
  }
`;

const Control = styled("div")`
  background: ${(props) => props.bg};
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  width: 5rem;
  height: 3rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Pagination = ({
  nextProducts,
  backProducts,
  productsMin,
  productsMax,
}) => {
  const { products } = useContext(ShopContext);
  return (
    <Container>
      <Control
        disabled={productsMin === 0}
        onClick={() => backProducts()}
        bg="#BC986A"
      >
        Back
      </Control>
      <div>
        <h3>
          Products {productsMin} - {productsMax}
        </h3>
      </div>

      <Control
        disabled={productsMax === products.length}
        onClick={() => nextProducts()}
        bg="#BC986A"
      >
        Next
      </Control>
    </Container>
  );
};

export default Pagination;
