import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li className="navBar">
            <Link className="navItem" to={props.admin ? "/admin" : "/home"}>
              <h1>Home</h1>
            </Link>
            <Link className="navItem" to="/menu/Combo">
              <h1>Menu</h1>
            </Link>
            <h1 className="navTitle">PIZZA HUST</h1>
            <Link
              className="navItem"
              to="/home/SignIn"
              style={{ display: props.logIn ? "none" : "" }}
            >
              <h1>Log In</h1>
            </Link>
            <Link
              className="navItem"
              to="/home/SignUp"
              style={{ display: props.logIn ? "none" : "" }}
            >
              <h1>Sign Up</h1>
            </Link>
            <Link
              className="navItem"
              to={props.admin ? "/admin/edit/Combo" : ""}
              style={{ display: props.logIn ? "" : "none" }}
            >
              <h1>{props.admin ? "Manage" : ""}</h1>
            </Link>
            <div
              className="loggedItem"
              style={{
                display: props.logIn ? "" : "none",
              }}
            >
              <Link to={props.admin ? "/admin/LogOut" : "/home/LogOut"}>
                <Button
                  sx={{
                    bottom: 0,
                    backgroundColor: "#550312",
                    border: 1,
                    color: "white",
                    borderRadius: "40px",
                    ":hover": {
                      bgcolor: "white",
                      color: "#550312",
                    },
                  }}
                >
                  Log Out
                </Button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
