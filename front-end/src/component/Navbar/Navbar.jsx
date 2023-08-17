import React from "react";

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
              <h1>Sign in</h1>
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
              User Logged In
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
