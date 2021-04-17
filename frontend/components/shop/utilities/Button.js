import styled from "styled-components"

export const Button = styled("button")`
width: 100%;
height: 2.8rem;
background: ${props => props.bg ? props.bg : "#BC986A"};
color: ${props => props.color ? props.color : "black"};
outline: none;
border: none;
border-radius: .3rem;
font-weight: bold;
font-size: 1.1rem;
`