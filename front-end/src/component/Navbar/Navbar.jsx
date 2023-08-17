import React from 'react'
import "./Navbar.css";
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Signin from "../Signin/Signin"
import Signup from "../Signup/Signup"
import Homepage from "../../page/Homepage/Homepage"

const Navbar = () => {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Homepage">Home</Link>
                    </li>

                    <li>   
                        <Link to="/Menu">Menu</Link>
                    </li>

                    <div class="logo">PIZZA HUST</div>

                    <li>
                        <Link to="/Signin">Sign in</Link>
                    </li>

                    <li>
                        <Link to="/Signup">Sign up</Link>
                    </li>
                </ul>
            </nav>

            {/* <Switch>
                <Route path="/Homepage">
                    <Homepage/>
                </Route>

                <Route path="/Menu">
                    { <Menu/> }
                </Route>

                <Route path="/Signin">
                    <Signin/>
                </Route>

                <Route path="/Signup">
                    <Signup/>
                </Route>

            </Switch> */}

        </div>
    </Router>
  )
}

export default Navbar