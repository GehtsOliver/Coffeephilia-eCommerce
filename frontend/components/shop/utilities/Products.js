import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Product = styled("a")`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  h5,
  h6,
  p {
    margin: 0.1rem;
    font-family: "Helvetica";
  }

  :hover {
    cursor: pointer;
  }
`;

const Products = ({ product }) => {
  if (!product) return null;
  return (
    <Link href={`/product/${product.id}`}>
      <Product>
        <Image src={product.images[0].src} width={150} height={150} />
        <h5>{product.title}</h5>
        <h6>{`${product.variants[0].price} €`}</h6>
      </Product>
    </Link>
  );
};

export default Products;
