import React from "react";
import MenuLayOut from "./component/MenuLayOut";
import "./style/layout.css"
import MenuArea from "./component/MenuArea";
import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function MenuPage() {

  const [total,setTotal]= useState(0);

  const [cart,setCart] = useState([]);


  function isinCart(item){
    switch(item.type){
      case "combo":
        const checkcombo =cart.some((element)=>{
          if (JSON.stringify(item.order_combo)===JSON.stringify(element.order_combo))
          {
            element.quantity++;
            return true;
          }
          else return false;
        });
        return checkcombo;
      case "pizza":
        const checkpizza =cart.some((element)=>{
          if ((JSON.stringify(item.order_pizza)===JSON.stringify(element.order_pizza))&&
          (JSON.stringify(item.order_size)===JSON.stringify(element.order_size))&&
          (JSON.stringify(item.order_crust)===JSON.stringify(element.order_crust)))
          {
            element.quantity++;
            return true;
          }
          else return false;
        });
        return checkpizza;
      case "drink":
        const checkdrink =cart.some((element)=>{
          if (JSON.stringify(item.order_drink)===JSON.stringify(element.order_drink))
          {
            element.quantity++;
            return true;
          }
          else return false;
        });
        return checkdrink;
      default:
        const checkstarter =cart.some((element)=>{
          if (JSON.stringify(item.order_starter)===JSON.stringify(element.order_starter))
          {
            element.quantity++;
            return true;
          }
          else return false;
        });
        return checkstarter;
    }
  }

  function addNew(item){

    setTotal(total+item.price);

    switch(isinCart(item)){
      case false:
        setCart(oldCart => [...oldCart, item]);
        break;
      default:
        break;
    }
  }

  console.log(cart);

  return (
    <div className="App" >
      
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MenuLayOut calTotal={total} customerCart={cart} cartTotal={total} />}>
            <Route path="/menu/:itemChosed" element={<MenuArea addCart={addNew}/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default MenuPage;