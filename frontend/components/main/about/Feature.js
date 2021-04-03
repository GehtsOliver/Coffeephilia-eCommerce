import React from "react";
import styled from "styled-components";
import Image from "next/image";

const FeatureComponent = styled("div")`
  width: 22vw;
  height: 30rem;
  padding: 0;
  display: flex;
  box-shadow: 8px 8px 10px 5px gray;
  background: #BC986A;
  color: #fff;
  font-size: 1.2rem;
  transition: all 200ms;
  border-radius: 10px;


  flex-direction: column;
  justify-content: flex-start;

  h1 {
    text-align: center;
    color: #8D8741;
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
