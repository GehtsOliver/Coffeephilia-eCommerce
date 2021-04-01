import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Ticker from "react-ticker";

const Flex = styled("div")`
display: flex;
column-gap: 6rem;
padding-left: 5rem;
padding-right: 5rem;
`;

const ImageContainer = styled("div")`
  padding: 3rem;
  width: 250px;
  height: 300px;
  
  img:hover{
    transform: scale3d(1.03,1.03,1.03);
    transition: all 500ms;
    cursor: pointer;
  }
  `;

const Banner = () => {
  return (
    <Ticker height={300} speed={15}>
      {() => (
        <Flex>
          <ImageContainer>
            <Image
              src="https://juliusmeinl.com/getmedia/4b793deb-3009-495e-846e-cc81bb367c1d/espresso-arabica.png?width=500"
              height={300}
              width={200}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://juliusmeinl.com/getmedia/a5088478-5d14-4ad3-89ae-7b8ec3a647a3/Caffe_Crema_Colombian_Heritage-removebg-preview.png?width=500"
              height={300}
              width={200}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://juliusmeinl.com/getmedia/a2275183-91b0-4c17-82c7-270f2aaa1674/espress-decaf-vienna.png?width=500"
              height={300}
              width={200}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://juliusmeinl.com/getmedia/239c8091-182e-49e1-abb0-534eaa55a2de/89534_Espresso-Classico.png?width=500"
              height={300}
              width={200}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://juliusmeinl.com/getmedia/83a710fb-ead0-4c98-820d-44798c53890c/89535_Cafe-Crema-Intenso.png?width=500"
              height={300}
              width={200}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://juliusmeinl.com/getmedia/1fc070a7-3206-4a9b-95f5-c329e1675aec/jubilaum-fine-ground.png?width=500"
              height={300}
              width={200}
            />
          </ImageContainer>
        </Flex>
      )}
    </Ticker>
  );
};

export default Banner;
