import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
import { useRouter } from "next/router";

import Head from "../../components/utilities/Head";
import Navbar from "../../components/utilities/Navbar";
import SideDrawer from "../../components/shop/utilities/Cart";
import { NavbarWrapper } from "../../components/utilities/NavbarWrapper";
import ProductPage from "../../components/shop/ProductPage";
import CartButton from "../../components/shop/utilities/CartButton";

const id = () => {
  const { fetchProductById, product, isCartOpen } = useContext(ShopContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  if (!product) return <div>Loading</div>;

  return (
    <>
      <Head title={`Coffeephilia - ${product.title}`} />
      <NavbarWrapper dark static>
        <Navbar>
          <CartButton/>
        </Navbar>
      </NavbarWrapper>
      {isCartOpen && <SideDrawer />}
      <ProductPage />
    </>
  );
};

// export const getStaticProps = async (context) => {
//     console.log(context)
//   return {
//     props: {
//       hi: "hello",
//     },
//   };
// };

// export const getStaticPaths = async () => {

//   return {
//     paths:["hi"],
//     fallback: false,
//   };
// };

export default id;
