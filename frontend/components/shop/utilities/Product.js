import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Product = styled("a")`
  padding: 1rem;
  width: 11rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin: 0 auto;

  h5,
  h6 {
    margin: 0.2rem;
    font-family: "Helvetica";
  }

  :hover {
    cursor: pointer;
  }

  > div{
    height: 11rem;
    width: 8rem;
  }

  img:hover {
    opacity: 0.8;
  }
`;

const Products = ({ product }) => {
  if (!product) return null;
  return (
    <Link href={`/products/${product.id}`}>
      <Product>
        <Image src={product.images[0].src} width={120} height={180} />
        <h5>{product.title}</h5>
        <h6>{`${product.variants[0].price} €`}</h6>
      </Product>
    </Link>
  );
};

export default Products;
