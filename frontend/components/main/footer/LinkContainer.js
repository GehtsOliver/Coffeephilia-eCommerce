import React from "react";
import styled from "styled-components";
import Link from "next/link"

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  
  a{
      color: white;
      font-size: 1.3rem;
      text-decoration: underline;
  }
`;

const LinkContainer = () => {
  return (
    <StyledContainer>
      <Link href="#about">About Coffeephilia</Link>
      <Link href="/shop">Our Coffee</Link>
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/contact">Contact</Link>
    </StyledContainer>
  );
};

export default LinkContainer;
