import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import "../style/layout.css";

export default function Sidebar({
  onCloseSidebar,
  cartItems,
  total,
  removeFromCart,
}) {
  const handleCheckout = () => {
    onCloseSidebar();
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

//   console.log(cartItems);
  return (
    <Container>
      <div className="sidebar">
        <div className="form-sidebar">
          <div className="selected-list">
            <h2>Cart Items</h2>
            {cartItems && cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <div className="form-itemCart">
                      <div>
                        <img
                          className="item-imageCart"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <div className="item-detailsCart">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                      </div>
                      <Button
                        color="secondary"
                        onClick={() => handleRemoveItem(item)}
                      >
                        X
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="form-total"
          >
            <h2>Total:</h2>
            <p>{total}</p>
          </div>

          <Link to="/menu/checkout">
            <Button
              sx={{
                border: 1,
                color: "#550312",
                borderRadius: "40px",
                borderColor: "#550312",
                height: "100%",
                width: "100%",
              }}
              onClick={handleCheckout}
            >
              Check out
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
