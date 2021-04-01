import React from "react";
import styled from "styled-components";

import Header from "./Header";

const StyledLayout = styled("div")`
  min-height: 100vh;
  width: 99.1vw;
  overflow: hidden;
  background: #fff;
  font-family: "Indie Flower", cursive;
`;

const Layout = ({ children, title, description, tags }) => {
  return (
    <StyledLayout>
      <Header title={title} description={description} tags={tags} />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
