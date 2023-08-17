import React from 'react'
import "./Signin.css";
import Navbar from '../Navbar/Navbar';
//import {text_input, corner, login_bg } from '../../assets';

const Signin = () => {
  return (
    <header>
        <div className="wrapper">
            <Navbar/>
        <div className="signin">

            <div className="signin-img">
                <img src= "/login_bg.png" className = "bg" alt="" ></img>
            </div>

            <div className="signin-func">
                <div className="signin-text">
                    <h1>Sign in</h1>
                    <p>Sign in to your account</p>
                </div>

                <div className="signin-input">
                    <div className="input">
                        <div className="username">
                            <p>Username</p>
                            <img src= "/text_input.png" alt=""></img>
                        </div>
                            
                        <div className="password">
                            <p>Password</p>
                            <img src= "/text_input.png" alt=""></img>
                        </div>

                        <a href="#" className = "btn signin">Sign in</a>

                    </div>
                    <p>
                        Don't have an account? <a href="../Signup/Signup">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    <img src= "/corner.png" className="corner" alt=""></img>
    </div>
    </header>

  )
}

export default Signin