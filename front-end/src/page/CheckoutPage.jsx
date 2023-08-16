import React from "react";
import "../style/checkoutstyle.css";
import CheckoutCartCell from "../component/CheckoutCartCell";
import CheckoutFormCell from "../component/CheckoutFormCell";

function CheckoutPage(props) {
  return (
    <div className="pageContainer">
      <CheckoutCartCell totalBill={props.totalBill} myCart={props.myCart} />
      <CheckoutFormCell clearCart={props.clearCart} />
    </div>
  );
}

export default CheckoutPage;
