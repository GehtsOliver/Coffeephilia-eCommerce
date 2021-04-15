import React, { useContext } from "react";
import styled from "styled-components";
import shopContext from "../../../context/shopContext";

const SidebarWrapper = styled("div")`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20rem;
  background: #daad86;
`;

const Sidebar = () => {
  const { checkout } = useContext(shopContext);

  return (
    <SidebarWrapper>
      {checkout.lineItems &&
        checkout.lineItems.map((item) => {
          <article>{item.id}</article>;
        })}
    </SidebarWrapper>
  );
};

export default Sidebar;
