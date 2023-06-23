import React from "react";
import { useParams } from "react-router";
import CardItem from "./CardItem"
import ComboMenu from "./ComboMenu";
import OtherMenu from "./OtherMenu";
import { DrinkArray,StarterArray } from "./OtherArray";

function MenuArea(){

    const {itemChosed} = useParams();
    
    switch(itemChosed) {
        case 'Combo':
          return <div className="itemList"><ComboMenu/></div>;
        case 'Pizza':
          return <div className="itemList"><CardItem/></div>;
        case 'Drinks':
          return <div className="itemList"><OtherMenu choice={DrinkArray}/></div>;
        default:
          return <div className="itemList"><OtherMenu choice={StarterArray}/></div>;
        }
    }

export default MenuArea;