import React from 'react'
import MenuLayout from './components/MenuLayout'
import ComboTab from './components/ComboTab'
import { BrowserRouter, Route,Routes} from "react-router-dom";


const Menu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route index element={<ComboTab/>} />
          <Route path="/:comboSelect" element={<ComboTab/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default Menu
