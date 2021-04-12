import React from "react";
import styled from "styled-components";

import { Wrapper } from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import CTA from "./CtaComponent";

const Header = styled("header")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: black !important;
`;
const Container = styled("div")`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;

  @media (max-width: 900px) {
    width: 100vw;
  }
`;

const Content = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Header>
          <Image
            src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616924424/Coffeephilia/Logo_qfyqeu.svg"
            height={40}
            width={80}
          />
          <h3>Coffeephilia®</h3>
        </Header>
      </Link>
      <Container>
        <CTA link="/shop" content="I want to go shopping">
          <i className="fas fa-shopping-cart" />
        </CTA>
        <CTA link="/brand" content="Find out about the brand">
          <Image src="/favicon.ico" height={30} width={30} />
        </CTA>
        <CTA link="/contact" content="Get in touch with Coffeephilia®">
          <i className="fas fa-envelope" />
        </CTA>
      </Container>
    </Wrapper>
  );
};

export default Content;
