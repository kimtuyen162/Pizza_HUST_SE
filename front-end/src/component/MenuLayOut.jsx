import React, { useState } from "react";
import SelectionBar from "./SelectionBar";
import Header from "./Header";
import "../style/layout.css";
import { Outlet } from "react-router";
import MyCart from "./MyCart";

function MenuLayOut(props) {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div className="topWarpper">
      <div className="headerContainer">
        <Header headerText={props.headerText} />
        <SelectionBar calTotal={props.calTotal} openCart={openCart} />
      </div>
      <MyCart
        setCart={cartOpen}
        closeCart={closeCart}
        customerCart={props.customerCart}
        cartTotal={props.cartTotal}
        deleteItem={props.deleteItem}
      />
      <Outlet />
    </div>
  );
}

export default MenuLayOut;
