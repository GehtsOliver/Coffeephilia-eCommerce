import React from "react";
import styled from "styled-components";

const StyledFormGroup = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    font-size: 1.5rem;
    font-weight: bold;
  }

  input {
    width: 75%;

    border: 1px solid black;
    outline: none;
    height: 2.5rem;
    padding: 0 1rem;
  }
`;

const FormGroup = ({ placeholder, name, type }) => {
  return (
    <StyledFormGroup>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} />
    </StyledFormGroup>
  );
};

export default FormGroup;
