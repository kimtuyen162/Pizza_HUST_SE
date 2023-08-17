import React from "react";
import "../style/checkoutstyle.css";
import CheckoutCartCell from "../component/CheckoutCartCell";
import CheckoutFormCell from "../component/CheckoutFormCell";
import axios from "axios";

function CheckoutPage(props) {
  const starters = [];
  const pizzas = [];
  const ordcombos = [];
  const drinks = [];

  function postOrder(user) {
    props.myCart.forEach((item) => {
      switch (item.type) {
        case "combo": {
          const ord = {
            combo: item.order_combo,
            quantity: item.quantity,
          };
          ordcombos.push(ord);
          break;
        }
        case "pizza": {
          const ord = {
            pizza: item.order_pizza,
            quantity: item.quantity,
          };
          pizzas.push(ord);
          break;
        }
        case "drink": {
          const ord = {
            drink: item.order_drink,
            quantity: item.quantity,
          };
          drinks.push(ord);
          break;
        }
        case "starter": {
          const ord = {
            combo: item.order_starter,
            quantity: item.quantity,
          };
          starters.push(ord);
          break;
        }
        default:
          break;
      }
    });
    const user_id = props.logIn ? "64ddae6a2a08054fcb893773" : props.user._id;

    const payload = {
      user_id: user_id,
      order_address: user.address,
      order_date: user.date,
      total_price: props.totalBill,
      combos: ordcombos,
      drinks: drinks,
      pizzas: pizzas,
      starter: starters,
    };

    axios
      .post("http://localhost:4000/api/order", payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="pageContainer">
      <CheckoutCartCell totalBill={props.totalBill} myCart={props.myCart} />
      <CheckoutFormCell
        clearCart={props.clearCart}
        email={props.email}
        address={props.address}
        phone={props.phone}
        fullname={props.fullname}
        postOrder={postOrder}
      />
    </div>
  );
}

export default CheckoutPage;
