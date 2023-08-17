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
          <Navbar logIn={props.logIn} />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Homepage;
