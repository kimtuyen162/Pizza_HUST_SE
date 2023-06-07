import React from "react";
import Header from "./Header";
import "./Layout.css"
import Checkout from "./Checkout";
import {SelectionBar} from "./SelectionBar";
import { Outlet } from "react-router-dom";


function MenuLayout({children}){
    return <div className="separateScreen">
        <div className="topGroup">
            <Header/>
            <SelectionBar/>
        </div>
        <Outlet/>
        <Checkout/>
    </div>
}

export default MenuLayout;