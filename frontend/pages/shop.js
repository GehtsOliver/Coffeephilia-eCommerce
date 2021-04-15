import React from "react";

import Head from "../components/utilities/Head"
import Navbar from "../components/utilities/Navbar";
import HomePage from "../components/shop/HomePage";
import { NavbarWrapper } from "../components/utilities/NavbarWrapper";

const Shop = () => {
  return (
    <>
      <Head title="Coffeephilia Shopfront"/>
      <NavbarWrapper dark static>
        <Navbar />
      </NavbarWrapper>
      <HomePage />
    </>
  );
};

export default Shop;
