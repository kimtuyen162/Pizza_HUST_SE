import React from "react"
import Header from "./Header";
import "../style/layout.css"
import { Outlet } from "react-router";


function MenuLayOut(props){

    // console.log(props.addCart);

    return <div className="topWarpper">
        <Header calTotal={props.calTotal} addCart={props.addCart} removeFromCart={props.removeFromCart}/>
        <Outlet/>
    </div>
}

export default MenuLayOut;