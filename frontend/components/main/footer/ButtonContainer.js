import React from 'react'
import styled from "styled-components"

import ContactBtn from "./ContactButton"

const StyledContainer = styled("div")`
    display: flex;
    column-gap: .5rem;
`

const ButtonContainer = () => {
    return (
        <StyledContainer>
           <ContactBtn
            link="mailto: mail@olivergraetz.com"
            icon="far fa-envelope"
          />
          <ContactBtn
            link="https://www.linkedin.com/in/oliver-gr%C3%A4tz-a360aa155/"
            icon="fab fa-linkedin-in"
          />
          <ContactBtn
            link="https://twitter.com/gratz_oliver"
            icon="fab fa-twitter"
          />
          <ContactBtn
            link="https://github.com/GehtsOliver"
            icon="fab fa-github"
          /> 
        </StyledContainer>
    )
}

export default ButtonContainer
