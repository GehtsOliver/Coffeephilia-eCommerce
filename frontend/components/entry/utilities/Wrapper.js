import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    display: ${(props) => (props.noShow ? "none" : "flex")};
  }
`;
