import React from "react";
import styled from "styled-components";
import FormGroup from "./FormGroup";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 50vw;
  background: #412D2A;
  @media (max-width: 900px) {
    width: 100vw;
  }
`;
const FormWrapper = styled("form")`
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 2rem 0;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  transition: all 500ms ease-in;
  :hover{
    box-shadow: 4px 4px 5px 2px gray;
    transform: scale3d(1.01,1.01,1.01);
  }

  input:focus,
  textarea:focus {
    box-shadow: 8px 8px 10px 5px gray;
  }

  @media (max-width: 900px){
    width: 90vw;
  }
`;

const MessageField = styled("textarea")`
  resize: none;
  border: none;
  border-radius: 0;
  height: 10rem;
  padding: 0.5rem;
  width: 75%;
  outline: none;
`;

const Button = styled("button")`
  font-family: "Indie Flower", cursive;
  font-size: 1.4rem;
  width: 75%;
  cursor: pointer;
  height: 4rem;
  border: none;
  
  border-radius: 0.5rem;
  font-weight: bold;
  box-shadow: 8px 8px 10px 5px gray;

  :hover {
    color: white !important;
    background: #bc986a;
    cursor: pointer;
  }
`;

const ContactForm = () => {
  return (
    <Container>
      <FormWrapper>
        <FormGroup name="Name" placeholder="John Doe" type="text" />
        <FormGroup name="E-Mail" placeholder="John-Doe@aol.com" type="email" />
        <FormGroup name="Phone Number" placeholder="+436705559829" type="tel" />
        <MessageField placeholder="Hey, my name is John Doe and I would like to discuss with you a business opportunity. Please get in touch with me."/>
        <Button type="submit">
          Submit <i className="far fa-paper-plane"></i>
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;
