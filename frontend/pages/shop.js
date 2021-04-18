import React from "react";

import Head from "../components/utilities/Head";
import Navbar from "../components/utilities/Navbar";
import HomePage from "../components/shop/HomePage";
import { NavbarWrapper } from "../components/utilities/NavbarWrapper";
import CartButton from "../components/shop/utilities/CartButton";

const Shop = () => {
  return (
    <>
      <Head title="Coffeephilia Shop" />
      <NavbarWrapper dark static>
        <Navbar>
          <CartButton />
        </Navbar>
      </NavbarWrapper>
      <HomePage />
    </>
  );
};

export default Shop;
