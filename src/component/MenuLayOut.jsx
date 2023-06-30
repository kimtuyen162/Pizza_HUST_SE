import React, { useState } from "react"
import Header from "./Header";
import "../style/layout.css"
import { Outlet } from "react-router";
import MyCart from "./MyCart";


function MenuLayOut(props){

    const [cartOpen,setCartOpen]=useState(false);

    const openCart= ()=>{setCartOpen(true)}
    const closeCart= ()=>{setCartOpen(false)}

    return <div className="topWarpper">
        <Header calTotal={props.calTotal} openCart={openCart}/>
        <MyCart setCart ={cartOpen} closeCart={closeCart} customerCart={props.customerCart} cartTotal={props.cartTotal}/>
        <Outlet/>
    </div>
}

export default MenuLayOut;