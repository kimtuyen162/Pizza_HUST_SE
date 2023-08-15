import { Icon } from "@iconify/react";
import React from "react";

function CartCollapse(props) {
  function renderCombo() {
    return (
      <div>
        {props.item.order_combo.pizzas.map((it, index) => {
          return (
            <div key={it._id}>
              <div className="cartCombo">
                <Icon icon="bx:right-arrow" style={{ marginTop: "10px" }} />
                <div>x{it.quantity}</div>
                <div>{it.pizza}</div>
              </div>
              <div className="comboPizzaAddOn">
                <Icon icon="mdi:dot" style={{ margin: "5px" }} />
                <div>{it.crust}</div>
                <Icon icon="mdi:dot" style={{ margin: "5px" }} />
                <div>{it.size}</div>
              </div>
            </div>
          );
        })}
        {props.item.order_combo.starters.map((it, index) => {
          return (
            <div className="cartCombo" key={index}>
              <Icon icon="bx:right-arrow" style={{ marginTop: "10px" }} />
              <div>x{it.quantity}</div>
              <div>{it.starter.starter_name}</div>
            </div>
          );
        })}
        {/* {props.item.order_combo.drinks.map((it, index) => {
          return (
            <div className="cartCombo" key={index}>
              <Icon icon="bx:right-arrow" style={{ marginTop: "10px" }} />
              <div>x{it.quantity}</div>
              <div>{it.drink.drink_name}</div>
            </div>
          );
        })} */}
      </div>
    );
  }

  function renderPizza() {
    return (
      <div className="cartPizza">
        <Icon icon="mdi:dot" style={{ margin: "5px" }} />
        <div>{props.item.order_crust.crust_name}</div>
        <div>{props.item.order_crust.crust_price}</div>
        <Icon icon="mdi:dot" style={{ margin: "5px" }} />
        <div>{props.item.order_size.size_name}</div>
        <div>{props.item.order_size.size_price}</div>
      </div>
    );
  }

  return (
    <div className="cartSubitem">
      {(() => {
        switch (props.item.type) {
          case "combo":
            return renderCombo();
          case "pizza":
            return renderPizza();
          default:
            break;
        }
      })()}
    </div>
  );
}

export default CartCollapse;
