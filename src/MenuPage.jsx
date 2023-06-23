import React from "react";
import MenuLayOut from "./component/MenuLayOut";
import "./component/layout.css"
import MenuArea from "./component/MenuArea";
import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function MenuPage() {
  return (
    <div className="App" >
      
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MenuLayOut/>}>
            <Route path="/menu/:itemChosed" element={<MenuArea/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default MenuPage;