import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: "b8ea5a2b9c41fd7e413088fed42f459a",
  domain: "coffeephiliashop.myshopify.com",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };

  componentDidMount() {
    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
    } else this.createCheckout();
  }

  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    this.setState({ checkout });
  };

  createCheckout = async () => {
    client.checkout.create().then((checkout) => {
      this.setState({ checkout: checkout });
      localStorage.setItem("checkout", this.state.checkout.id);
    });
  };

  fetchProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products });
  };

  fetchProductById = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product });
    return product;
  };

  updateItemInCheckout = async (variantId, quantity) => {
    const lineItemToUpdate = [
      { id: variantId, quantity: parseInt(quantity, 10) },
    ];
    const updatedCheckout = await client.checkout.updateLineItems(
      this.state.checkout.id,
      lineItemToUpdate
    );
    this.setState({ checkout: updatedCheckout });
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout });
    this.openCart();
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          updateItemInCheckout: this.updateItemInCheckout,
          fetchProductById: this.fetchProductById,
          fetchProducts: this.fetchProducts,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
