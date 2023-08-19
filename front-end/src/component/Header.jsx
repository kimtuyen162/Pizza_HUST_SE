import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="headerLogoContainer">
      <Link className="homeLink" to={props.admin ? "/admin" : "/home"}>
        <IconButton sx={{ color: "#550312" }}>
          <Icon icon="mingcute:arrow-left-fill" />
        </IconButton>
      </Link>
      <div>
        <h1 className="menuTitle">{props.headerText}</h1>
        <div className="logoLine"></div>
      </div>
    </div>
  );
}

export default Header;
