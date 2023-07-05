import React from "react";

function Header(props) {
  return (
    <div className="headerLogoContainer">
      <h1 className="menuTitle">{props.headerText}</h1>
      <div className="logoLine"></div>
    </div>
  );
}

export default Header;
