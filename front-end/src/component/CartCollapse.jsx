import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CartCollapse(props) {
  const [drinks, setDrink] = useState([]);
  const [starters, setStarter] = useState([]);
  const [pizzas, setPizza] = useState([]);
  const [sizes, setSize] = useState([]);
  const [crusts, setCrust] = useState([]);

  async function fetchPizzaInfo(item) {
    await axios
      .get(`https://pizza-api1.onrender.com/api/pizza/${item.pizza}`)
      .then((response) => {
        setPizza((current) => [...current, response.data.pizza_name]);
      })
      .catch((error) => {
        console.log(error);
      });
    await axios
      .get(`https://pizza-api1.onrender.com/api/size/${item.size}`)
      .then((response) => {
        setSize((current) => [...current, response.data.size_name]);
      })
      .catch((error) => {
        console.log(error);
      });
    await axios
      .get(`https://pizza-api1.onrender.com/api/crust/${item.crust}`)
      .then((response) => {
        setCrust((current) => [...current, response.data.crust_name]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function fetchDrinkInfo(item) {
    await axios
      .get(`https://pizza-api1.onrender.com/api/drink/${item.drink}`)
      .then((response) => {
        setDrink((current) => [...current, response.data.drink_name]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fetchStarterInfo(item) {
    await axios
      .get(`https://pizza-api1.onrender.com/api/starter/${item.starter}`)
      .then((response) => {
        setStarter((current) => [...current, response.data.starter_name]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (props.item.type === "combo") {
      props.item.order_combo.pizzas.forEach((item) => {
        fetchPizzaInfo(item);
      });
      props.item.order_combo.starters.forEach((item) => {
        fetchStarterInfo(item);
      });
      props.item.order_combo.drinks.forEach((item) => {
        fetchDrinkInfo(item);
      });
    }
  }, [props.item]);
  function renderCombo() {
    return (
      <div>
        {props.item.order_combo.pizzas.map((it, index) => {
          return (
            <div key={it._id}>
              <div className="cartCombo">
                <Icon icon="bx:right-arrow" style={{ marginTop: "10px" }} />
                <div>x{it.quantity}</div>
                <div>{pizzas[index]}</div>
              </div>
              <div className="comboPizzaAddOn">
                <Icon icon="mdi:dot" style={{ margin: "5px" }} />
                <div>{crusts[index]}</div>
                <Icon icon="mdi:dot" style={{ margin: "5px" }} />
                <div>{sizes[index]}</div>
              </div>
            </div>
          );
        })}
        {props.item.order_combo.starters.map((it, index) => {
          return (
            <div className="cartCombo" key={index}>
              <Icon icon="bx:right-arrow" style={{ marginTop: "10px" }} />
              <div>x{it.quantity}</div>
              <div>{starters[index]}</div>
            </div>
          );
        })}
        {props.item.order_combo.drinks.map((it, index) => {
          return (
            <div className="cartCombo" key={index}>
              <Icon icon="bx:right-arrow" style={{ marginTop: "10px" }} />
              <div>x{it.quantity}</div>
              <div>{drinks[index]}</div>
            </div>
          );
        })}
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
