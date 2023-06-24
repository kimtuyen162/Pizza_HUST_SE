import React from "react";
import { useParams } from "react-router";
import CardItem from "./CardItem"
import ComboMenu from "./ComboMenu";
import OtherMenu from "./OtherMenu";
import { DrinkArray,StarterArray } from "../itemArrays/OtherArray";

function MenuArea(props){

    const {itemChosed} = useParams();

    function addItem(item)
    {
      props.addCart(item);
    } 
    
    switch(itemChosed) {
        case 'Combo':
          return <div className="itemList"><ComboMenu addCombo={addItem} /></div>;
        case 'Pizza':
          return <div className="itemList"><CardItem addPizza={addItem}/></div>;
        case 'Drinks':
          return <div className="itemList"><OtherMenu addOther={addItem} choice={DrinkArray}/></div>;
        default:
          return <div className="itemList"><OtherMenu  addOther={addItem} choice={StarterArray}/></div>;
        }
    }

export default MenuArea;