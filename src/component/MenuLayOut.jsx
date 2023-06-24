import React from "react"
import Header from "./Header";
import "../style/layout.css"
import { Outlet } from "react-router";


function MenuLayOut(props){


    return <div className="topWarpper">
        <Header calTotal={props.calTotal}/>
        <Outlet/>
    </div>
}

export default MenuLayOut;