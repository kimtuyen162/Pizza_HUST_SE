import React from "react";
import MenuLayOut from "./component/MenuLayOut";
import "./style/layout.css"
import MenuArea from "./component/MenuArea";
import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Checkout from "./component/Checkout";

function MenuPage() {

  const [total,setTotal]= useState(0);

  const [cart,setCart] = useState([]);

  function addNew(item){
    setCart(oldCart => [...oldCart, item]);
    setTotal( cart.reduce(function(prev, current) {
      return prev +current.price
    }, item.price))
  }

  // console.log(cart);
  // console.log(total);

  return (
    <div className="App" >
      
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MenuLayOut calTotal={total}/>}>
            <Route path="/menu/:itemChosed" element={<MenuArea addCart={addNew}/>}/>
            <Route path="/menu/checkout" element={<Checkout />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default MenuPage;