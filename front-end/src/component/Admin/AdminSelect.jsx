import React from "react";
import { useParams } from "react-router";
import ComboList from "./ComboList";

function AdminSelect() {
  const { select } = useParams();
  console.log(select);

  switch (select) {
    case "Combo":
      return <ComboList />;
    case "Pizza":
      break;
    // return <PizzaMenu addPizza={addItem} />;
    case "Drinks":
      break;
    // return <DrinkMenu addDrink={addItem} />;
    default:
      break;
    // return <StarterMenu addStarter={addItem} />;
  }
}

export default AdminSelect;
