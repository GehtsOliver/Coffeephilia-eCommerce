import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "../components/utilities/Layout";
import FeaturesComponent from "../components/main/Features";
import OffersComponent from "../components/main/Offers";
import ProductsComponent from "../components/main/Products";
import Footer from "../components/utilities/Footer";

const Brand = () => {
  return (
    <ParallaxProvider>
      <Layout>
        <FeaturesComponent />
        <OffersComponent />
        <ProductsComponent />
        <Footer />
      </Layout>
    </ParallaxProvider>
  );
};

export default Brand;
