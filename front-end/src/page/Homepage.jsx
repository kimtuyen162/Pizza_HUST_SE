import React from "react";
import "../style/homepagestyle.css";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router";

const Homepage = (props) => {
  return (
    <div>
      <div className="backGround" />
      <header>
        <div className="homeWrapper">
          <Navbar
            logIn={props.logIn}
            handleLogOut={props.handleLogOut}
            admin={props.admin}
          />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Homepage;
