import React from "react"
import Header from "./Header";
import "./layout.css"
import { Outlet } from "react-router";


function MenuLayOut(){
    return <div className="topWarpper">
        <Header/>
        <Outlet/>
    </div>
}

export default MenuLayOut;