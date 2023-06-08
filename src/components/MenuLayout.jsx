import React from "react";
import Header from "./Header";
import "./Layout.css"
import Checkout from "./Checkout";
import {SelectionBar} from "./SelectionBar";
import { Outlet } from "react-router-dom";


function MenuLayout(props){

    function returnDelId(id){
        console.log(id);
        props.deleteFromCart(id);
    }

    return <div className="separateScreen">
        <div className="topGroup">
            <Header/>
            <SelectionBar/>
        </div>
        <Outlet/>
        <Checkout cart={props.addedItem} onDel={returnDelId}/>
    </div>
}

export default MenuLayout;