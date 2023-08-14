import React from "react";
import { useParams } from "react-router";
import PizzaMenu from "./PizzaMenu";
import ComboMenu from "./ComboMenu";
import DrinkMenu from "./DrinkMenu";
import StarterMenu from "./StarterMenu";

function MenuArea(props) {
  const { itemChosed } = useParams();

  function addItem(item) {
    props.addCart(item);
  }

  return (
    <div className="itemList">
      {(() => {
        switch (itemChosed) {
          case "Combo":
            return <ComboMenu addCombo={addItem} />;
          case "Pizza":
            return <PizzaMenu addPizza={addItem} />;
          case "Drinks":
            return <DrinkMenu addDrink={addItem} />;
          default:
            return <StarterMenu addStarter={addItem} />;
        }
      })()}
    </div>
  );
}

export default MenuArea;
