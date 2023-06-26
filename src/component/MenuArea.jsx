import React from "react";
import { useParams } from "react-router";
import PizzaMenu from "./PizzaMenu";
import ComboMenu from "./ComboMenu";
import OtherMenu from "./OtherMenu";
import { DrinkArray,StarterArray } from "../itemArrays/OtherArray";

function MenuArea(props){

    const {itemChosed} = useParams();

    function addItem(item)
    {
      props.addCart(item);
    } 
    
    return <div className="itemList">
      {(() => {
        switch(itemChosed) {
        case 'Combo':
          return <ComboMenu addCombo={addItem} />;
        case 'Pizza':
          return <PizzaMenu addPizza={addItem}/>;
        case 'Drinks':
          return <OtherMenu addOther={addItem} choice={DrinkArray}/>;
        default:
          return <OtherMenu  addOther={addItem} choice={StarterArray}/>;
        }
        })()}
    </div>
        
    }

export default MenuArea;