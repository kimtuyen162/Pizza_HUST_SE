import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li className="navBar">
            <a className="navItem" href="/home">
              <h1>Home</h1>
            </a>
            <a className="navItem" href="/menu/Combo">
              <h1>Menu</h1>
            </a>
            <h1 className="navTitle">PIZZA HUST</h1>
            <a
              className="navItem"
              href="/home/SignIn"
              style={{ display: props.logIn ? "none" : "" }}
            >
              <h1>Log In</h1>
            </a>
            <a
              className="navItem"
              href="/home/SignUp"
              style={{ display: props.logIn ? "none" : "" }}
            >
              <h1>Sign Up</h1>
            </a>
            <h1
              className="loggedItem"
              style={{
                display: props.logIn ? "" : "none",
              }}
            >
              <Link to="/home/LogOut">
                <Button
                  sx={{
                    m: 4,
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
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
