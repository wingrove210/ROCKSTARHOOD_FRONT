import CartDrawer from "../../pages/Cart/CartDrawer";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Category from "./Category";
import FirstSection from "./FirstSection";
import { useState } from "react";


export default function Catalog() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header
        textColor="white"
        burgerColor="black"
        onCartClick={() => setCartOpen(true)}
      />
      {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
      <FirstSection />
      <Category />
      <Footer />
    </>
  );
}
