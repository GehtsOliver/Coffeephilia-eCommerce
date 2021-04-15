import "../styles/globals.css";
import BurgerProvider from "../context/burgerContext";
import ShopProvider from "../context/shopContext";

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <BurgerProvider>
        <Component {...pageProps} />
      </BurgerProvider>
    </ShopProvider>
  );
}

export default MyApp;
