import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Main = () => {
  const [display, setdisplay] = useState(false);
  return (
    <div className="container">
      <CategoryMenu setdisplay={setdisplay} />
      <ProductList display={display} />
      <Cart />
    </div>
  );
};

export default Main;
