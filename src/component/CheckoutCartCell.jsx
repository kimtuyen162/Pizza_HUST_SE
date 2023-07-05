import { Icon } from "@iconify/react";
import { Button, Collapse, IconButton, List, ListItem } from "@mui/material";
import CartCollapse from "./CartCollapse";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutCartCell(props) {
  const [open, setOpen] = useState(-1);
  return (
    <div className="cartCellContainer">
      <div className="returnButtonWrapper">
        <Link to={"/menu/Combo"}>
          <IconButton sx={{ color: "#550312" }}>
            <Icon icon="mingcute:arrow-left-fill" />
          </IconButton>
        </Link>
        <h2>Return to menu</h2>
      </div>
      <div className="checkoutCart">
        <List sx={{ maxHeight: "95%", overflow: "auto" }}>
          {props.myCart.map((item, index) => {
            return (
              <ListItem key={index} sx={{ p: 0 }}>
                <Button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    color: "#550312",
                    display: "block",
                    p: 0,
                  }}
                >
                  <div className="cartItem">
                    <div className="arrowWrapper">
                      {open === index ? (
                        <Icon
                          icon="raphael:arrowdown"
                          style={{ marginTop: "10px" }}
                        />
                      ) : (
                        <Icon
                          icon="raphael:arrowright"
                          style={{ marginTop: "10px" }}
                        />
                      )}
                    </div>
                    <div className="amountWrapper">x{item.quantity}</div>
                    <div className="nameWrapper">{item.name}</div>
                    <div className="cartPriceWrapper">{item.price}</div>
                  </div>
                  <Collapse in={open === index} timeout="auto" unmountOnExit>
                    <CartCollapse item={item} />
                  </Collapse>
                </Button>
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className="billWrapper">
        <h2>Total Bill: {props.totalBill} VND</h2>
      </div>
    </div>
  );
}

export default CheckoutCartCell;
