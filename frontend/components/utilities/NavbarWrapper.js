import styled from "styled-components";

export const NavbarWrapper = styled("nav")`
  position: ${(props) => (props.static ? "relative" : "sticky")};
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  padding: 0 10rem;
  }

  @media (max-width: 992px) {
    padding: 0 1rem;
  }

  h1{
     color:${(props) => (props.dark ? "black" : "white")};
  }

   span{
    background-color:${(props) => (props.dark ? "black" : "white")};
  }
`;
