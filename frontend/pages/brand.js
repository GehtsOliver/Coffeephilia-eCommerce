import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "../components/utilities/Layout";
import BrandComponent from "../components/main/Brand";
import AboutComponent from "../components/main/About";
import OffersComponent from "../components/main/Offers";
import ProductsComponent from "../components/main/Products";
import Footer from "../components/utilities/Footer";

const Brand = () => {
  return (
    <ParallaxProvider>
      <Layout>
        <BrandComponent />
        <AboutComponent />
        <OffersComponent />
        <ProductsComponent />
        <Footer />
      </Layout>
    </ParallaxProvider>
  );
};

export default Brand;
