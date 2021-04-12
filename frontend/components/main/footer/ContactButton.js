import React from "react";
import styled from "styled-components";

const StyledButton = styled("a")`
  border-radius: 100%;
  padding: 1.3rem;
  color: white;
  transition: all 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #DAAD86;

  :hover {
    transform: scale3d(1.05, 1.05, 1.05);
    color: #DAAD86;
    background: white;
  }

  > i {
    font-size: 1.3rem;
  }
`;

const ContactButton = ({ icon, link, className }) => {
  return (
    <StyledButton className={className} href={link}>
      <i className={icon} />
    </StyledButton>
  );
};

export default ContactButton;
