import React from "react";
import styled from "styled-components";
import Image from "next/image";

const FeatureComponent = styled("div")`
  width: 21vw;
  height: 30rem;
  padding: 0;
  display: flex;
  
  background: #DAAD86;
  color: #fff;
  font-size: 1.4rem;
  transition: all 200ms;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    text-align: center;
    color: #412D2A;
    margin: 0;
    margin-top:.2rem;

    @media (max-width: 992px){
      font-size: 1.6rem;
    }
  }
  p {
    text-align: justify;
    margin: 0;
    padding: .5rem; .5rem;
      display: flex;
      justify-content: center;
     
  }

  :hover{
    transform: scale3d(1.05, 1.05, 1.05);
    box-shadow: 4px 4px 10px 5px #412D2A;
  }

  @media (max-width:1000px){
    width: 50vw;

  }
  @media (max-width:600px){
    width: 80vw;
  }
`;

const Feature = ({ content = "", title = "", image = "" }) => {
  return (
    <FeatureComponent>
      <Image width={300} height={300} src={image}></Image>
      <h1>{title}</h1>
      <p>{content}</p>
    </FeatureComponent>
  );
};

export default Feature;
