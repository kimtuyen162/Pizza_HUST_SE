import React from "react";
import { useParams } from "react-router";
import ComboList from "./ComboList";
import PizzaList from "./PizzaList";
import StarterList from "./StarterList";
import DrinkList from "./DrinkList";

function AdminSelect() {
  const { select } = useParams();
  console.log(select);

  switch (select) {
    case "Combo":
      return <ComboList />;
    case "Pizza":
      return <PizzaList />;
    case "Drinks":
      return <DrinkList />;
    default:
      return <StarterList />;
  }
}

export default AdminSelect;
