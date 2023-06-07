import React from "react";
import Header from "./Header";
import "./Layout.css"
import Checkout from "./Checkout";
import {SelectionBar} from "./SelectionBar";


function MenuLayout({children}){
    return <div className="separateScreen">
        <div className="topGroup">
            <Header/>
            <SelectionBar/>
        </div>
        <main>{children}</main>
        <Checkout/>
    </div>
}

export default MenuLayout;