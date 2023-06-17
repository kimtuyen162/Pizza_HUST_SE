import React from "react";
import SelectionBar from "./SelectionBar";


function Header(){
    return <div className="headerContainer">
        <div className="headerLogoContainer">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="logoLine"></div>
        </div>
        <SelectionBar/>
    </div>
}

export default Header;