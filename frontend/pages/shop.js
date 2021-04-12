import React from "react";
import styled from "styled-components";

import Navbar from "../components/utilities/Navbar";
import ShopProvider from "../context/shopContext";
import HomePage from "../components/shop/HomePage";
import { NavbarWrapper } from "../components/utilities/NavbarWrapper";

const Shop = () => {
  return (
    <ShopProvider>
      <NavbarWrapper dark static>
        <Navbar />
      </NavbarWrapper>
      <HomePage />
    </ShopProvider>
  );
};

export default Shop;
