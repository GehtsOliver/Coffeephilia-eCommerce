import React, { useState, useEffect } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "b8ea5a2b9c41fd7e413088fed42f459a",
  domain: "coffeephiliashop.myshopify.com",
});

const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]),
    [product, setProduct] = useState({}),
    [checkout, setCheckout] = useState(),
    [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    createCheckout();
  }, []);

  const createCheckout = async () => {
    const createdCheckout = await client.checkout.create();
    setCheckout("Hello");
    console.log("checkout created:");
    console.log(checkout);

  };

  const fetchProducts = async () => {
    const products = await client.product.fetchAll();
    setProducts(products);
  };

  const fetchProductById = async (id) => {
    const product = await client.product.fetch(id);
    setProduct(product);
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );
    setCheckout(checkout);
    openCart();
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        product,
        checkout,
        isCartOpen,
        fetchProductById,
        fetchProducts,
        closeCart,
        openCart,
        addItemToCheckout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
