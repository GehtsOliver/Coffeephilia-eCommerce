import React from "react";

import styled from "styled-components";
import Link from "next/link";

const CTA = styled("a")`
  text-transform: capitalize;
  padding: 1rem;;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: 300ms all ease;
  box-shadow: 8px 8px 10px 5px gray;
  
  color: black;

  h3 {
    margin: 0;    
    text-align: justify;
  }

  i, div > div > img{
    margin-left: 1rem;
  }
  :hover {
    color: white !important;
    background: #DAAD86;
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    
  }


`;

const CtaComponent = ({ children, link, content }) => {
  return (
    <CTA>
      <Link href={link}>
        <>
        <h3>{content}{children}</h3>
        
        </>
      </Link>
    </CTA>
  );
};

export default CtaComponent;
