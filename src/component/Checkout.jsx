import React, { useState } from "react";
import "../style/layout.css";
import styled from "styled-components";
import { Button } from "@mui/material";
import Header from "./Header";
import MyCart from "./MyCart";

export default function Checkout(props) {
  const cartItems = props.addCart;
  const total = props.calTotal;

  const handleRemoveItem = (item) => {
    props.removeFromCart(item);
  };

  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div className="topWarpper">
      <Header calTotal={props.calTotal} openCart={openCart} />
      <MyCart
        setCart={cartOpen}
        closeCart={closeCart}
        customerCart={props.addCart}
        cartTotal={props.cartTotal}
        deleteItem={props.removeFromCart}
      />
      <Container>
        <div className="contact-infor">
          <h3>Shipping Address</h3>
          <div className="form-user-name">
            <input type="text" placeholder="First Name" id="first-name" />
            <input type="text" placeholder="Last Name" id="last-name" />
          </div>
          <div className="form-phone-number">
            <input type="text" placeholder="Phone Number" id="phone-number" />
          </div>
          <div className="form-address">
            <input type="text" placeholder="Address" id="address" />
          </div>
          <div className="form-address">
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              id="address2"
            />
          </div>
          <div className="form-address">
            <input type="text" placeholder="City" id="city" />
          </div>
          <div className="button-left">
            <Button variant="contained">Continue to shipping</Button>
          </div>
        </div>
        <div className="selected-list">
          <div className="list-item">
            {cartItems && cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <div className="form-itemCart">
                      <div>
                        <img
                          className="item-imageCart"
                          src={item.image}
                          alt={item._id}
                        />
                      </div>
                      <div className="item-detailsCart">
                        <h3>{item.name}</h3>
                        <p> x {item.quantity}</p>
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

          <div className="list-detail">
            <div>
              <h4>Total item:</h4>
              <p>{total}</p>
            </div>
            <div>
              <h4>Ship fee:</h4>
              <p>15000</p>
            </div>
          </div>
          <div className="list-total">
            <div>
              <h3>Total:</h3>
              <p>{total + 15000}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  height: max-content;
  width: 100%;
  height: min-content;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  border-top: 1px solid;
  z-index: 102;
  .contact-infor {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 20px;
    gap: 20px;

    .form-user-name {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    .form-phone-number {
      display: flex;
    }

    .form-address {
      display: flex;
    }

    .button-left {
      display: flex;
      justify-content: flex-end;
      margin: 3px;
    }
  }

  .selected-list {
    display: flex;
    flex-direction: column;
    background-color: rgb(210, 208, 208);
    width: 50%;
    height: 78vh;
    gap: 20px;
    padding: 30px;

    .list-item {
      display: flex;
      border-bottom: 1px solid;
      width: 100%;

      ul {
        width: 100%;
        list-style-type: none;
      }
    }

    .form-giftcode {
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid;
      gap: 20px;
    }

    .list-detail {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid;

      div {
        display: grid;
        grid-template-columns: 90% 10%;
        align-items: center;
        justify-content: center;
      }
    }

    .list-total {
      div {
        display: grid;
        grid-template-columns: 90% 10%;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
