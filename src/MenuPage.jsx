import React, { useState } from "react";
import MenuLayOut from "./component/MenuLayOut";
import "./style/layout.css"
import MenuArea from "./component/MenuArea";
import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Checkout from "./component/Checkout";

function MenuPage() {

  // const [total,setTotal]= useState(0);

  // const [cart,setCart] = useState([]);

  // function addNew(item){
  //   setCart(oldCart => [...oldCart, item]);
  //   setTotal( cart.reduce(function(prev, current) {
  //     return prev +current.price
  //   }, item.price))
  // }

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  function addToCart(item) {
    setCart((oldCart) => [...oldCart, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  }

  function removeFromCart(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem !== item));
    setTotal((prevTotal) => prevTotal - item.price);
  }
  // console.log(cart);
  // console.log(total);

  return (
    <div className="App" >
      
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MenuLayOut calTotal={total} addCart={cart} removeFromCart={removeFromCart}/>}>
            <Route path="/menu/:itemChosed" element={<MenuArea addCart={addToCart}/>}/>
            <Route path="/menu/checkout" element={<Checkout calTotal={total} addCart={cart} removeFromCart={removeFromCart}/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default MenuPage;