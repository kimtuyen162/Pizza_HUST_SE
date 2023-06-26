import React from "react";
import "../style/layout.css";
import styled from "styled-components";
import { Button } from "@mui/material";

export default function Checkout() {
  return (
    <Container>
      <div className="contact-infor">
        <h3>Shipping Address</h3>
        <div className="form-user-name">
          <input type="text" placeholder="Fist Name" id="firt-name" />
          <input type="text" placeholder="Last Name" id="last-name" />
        </div>
        <div className="form-phone-number">
          <input type="text" placeholder="Phone Number" id="phone-number" />
        </div>
        <div className="form-address">
          <input type="text" placeholder="Address" id="address" />
        </div>
        <div className="form-address">
          <input type="text" placeholder="Apartment, suite, etc. (optional)" id="address" />
        </div>
        <div className="form-address">
          <input type="text" placeholder="City" id="city" />
        </div>
        <div className="button-left">
          <Button variant="contained">Continue to shipping</Button>
        </div>
      </div>
      <div className="selected-list">
        <div className="list-item">abc</div>
        <div className="form-giftcode">
          <input
            type="text"
            id="giftcode"
            placeholder="Gift card or discount code"
          />
          <Button variant="contained">Apply</Button>
        </div>
        <div className="list-detail">detail</div>
        <div className="list-total">total</div>
      </div>
    </Container>
  );
}


const Container = styled.div`
  position: relative;
  height: max-content;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  border-top: 1px solid;
  .contact-infor {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 20px;
    gap: 20px;
    .form-user-name {
      display: flex;
      flex-direction: row;
      row-gap: 20px;
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
    height: 100vh;
    gap: 20px;
    padding: 30px;

    .list-item {
      display: flex;
      border-bottom: 1px solid;
      width: 100%;
    }
    .form-giftcode {
      padding-left: 20px;
      padding-bottom: 20px;
      padding-right: 20px;
      gap: 20px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid;
    }
    .list-detail {
      display: flex;
      border-bottom: 1px solid;
    }
  }
`;
