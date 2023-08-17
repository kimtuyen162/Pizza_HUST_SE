import React from 'react'
import {Link, Switch, Route, BrowserRouter as Router, useParams} from 'react-router-dom';
import "./Homepage.css";
// import {
//     //clock, 
//     //corner, 
//     pizza, 
//     //Leaves, 
//     //pizza_signin, 
//     //text_input
// } from 'public'
import Navbar from '../../component/Navbar/Navbar'
import Signin from '../../component/Signin/Signin';
import MenuPage from '../../MenuPage';

const Homepage = () => {
  const currentMenu = useParams();

  return (
    <header>
        <div className="wrapper">
            <Navbar/>
            {(() => {
            switch (currentMenu) {
            case "Signin":
                return <Signin/>;
            case "Menu":
                return <MenuPage/>;
        
            default:
                <div className="hero-section">
                <div className="left">
                    <h1>Pizzalicious</h1>

                    <h2>Enjoy your days</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum odio aliquet sapien neque, porttitor tellus pellentesque interdum sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu, adipiscing fermentum maecenas nunc diam at. Justo, justo, turpis suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus vitae est.
                    </p>

                    <div className="container">
                        <div className="container-image">
                            <img src = "/clock.svg" alt="clock"/> 
                        </div>
                        <div className="container-text">
                            <p>
                                MON-THUR  9AM - 7:30PM <br/>
                                FRI-SAT  10AM - 8PM <br/>
                                SUN  2PM - 8:30PM
                            </p>
                        </div>
                        
                    </div>

                    <a href="#" class ="btn order">Order now</a> 
                    
                    <img src = "/Leaves.png" alt="Leaves" className="Leaves"/>
                </div>

                <div class="right">
                    <img src= "/pizza-signin.png" className="pizza" alt=""></img>
                    <img src="/corner.png" className="corner" alt=""></img>
                </div>
                </div>;
        }
      })()}
            
        
        </div>
    </header>
  )
}

export default Homepage