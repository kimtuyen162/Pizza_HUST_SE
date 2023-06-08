import React from 'react'
import MenuLayout from '../components/MenuLayout'
import ComboTab from '../components/ComboTab'
import { BrowserRouter, Route,Routes} from "react-router-dom";


const Menu = () => {

  const [cart,setCart]= React.useState([]);

  function addtoCart(item)
  {
    setCart((currentCart) => [...currentCart, item])
  }

  function deleteCart(itemId){
    setCart(cart.filter((cartItem,index) => {return itemId !==index;} ));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuLayout addedItem={cart} deleteFromCart={deleteCart}/>}>
          <Route index element={<ComboTab onAdd={addtoCart}/>} />
          <Route path="/:comboSelect" element={<ComboTab onAdd={addtoCart} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default Menu
