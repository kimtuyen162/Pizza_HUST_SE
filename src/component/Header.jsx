import React from "react";
import SelectionBar from "./SelectionBar";

function Header(props) {
  // console.log(props.addCart);
  return (
    <div className="headerContainer">
      <div className="headerLogoContainer">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="logoLine"></div>
        </div>
        <SelectionBar calTotal={props.calTotal} openCart={props.openCart}/>
    </div>
  );
}

export default Header;
