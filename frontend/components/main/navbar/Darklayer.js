import React from 'react'
import styled from "styled-components"

const StyledLayer = styled("div")`
width: 100vw;
height: 100vh;
position: fixed;
top:0;
left:0;
z-index: 1;
background: black;
opacity: 0.6;
overflow-y: hidden;

`

const Darklayer = () => {
    return (
        <StyledLayer/>
    )
}

export default Darklayer
