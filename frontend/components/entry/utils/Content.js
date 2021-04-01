import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
`;

const Header = styled("header")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  
`;
const Container = styled("div")`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5rem;
  @media (max-width: 900px) {
    width: 100vw;
  }
`;

const CTA = styled("div")`
  text-transform: capitalize;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: 300ms all ease;
  box-shadow: 8px 8px 10px 5px gray;
  padding: 1rem;

  h3{
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  :hover {
    color: white;
    background: black;
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    width: 90%;
  }
`;

const Content = () => {
  return (
    <Wrapper>
      <Header>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616924424/Coffeephilia/Logo_qfyqeu.svg"
            height={40}
            width={80}
          />
        </Link>
        <h1>Coffeephilia®</h1>
      </Header>
      <Container>
        <CTA>
          <Link href="/shop">
            <h3>I want to go shopping  <i class="fas fa-shopping-cart"></i></h3>
          </Link>
        </CTA>
        <CTA>
          <Link href="/brand">
            <h3>I want to find out about the brand  <Image src="/favicon.ico"height={25} width={25}/></h3>
          </Link>
        </CTA>
      </Container>
    </Wrapper>
  );
};

export default Content;
