import React from "react";
import SelectionBar from "./SelectionBar";


function Header(props){
    return <div className="headerContainer">
        <div className="headerLogoContainer">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="logoLine"></div>
        </div>
        <SelectionBar calTotal={props.calTotal} openCart={props.openCart}/>
    </div>
}

export default Header;