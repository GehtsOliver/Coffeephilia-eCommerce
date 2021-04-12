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
    [checkout, setCheckout] = useState({}),
    [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    createCheckout();
  }, []);

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    setCheckout(checkout);
  };

  const fetchProducts = async () => {
    const products = await client.product.fetchAll();
    setProducts(products);
    console.log(products)

  };

  const fetchProductById = async (id) => {
    const product = client.product.fetch(id);
    setProduct(product);
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout = await client.checkout.addLineItems(
      checkout.id,
      lineItemToAdd
    );
    setCheckout(checkout);
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
