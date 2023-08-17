import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="headerLogoContainer">
      <Link className="homeLink" to="/home">
        <h1 className="menuTitle">{props.headerText}</h1>
      </Link>
      <div className="logoLine"></div>
    </div>
  );
}

export default Header;
