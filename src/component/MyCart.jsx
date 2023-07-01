import React, { useState } from "react";
import "../style/layout.css";
import {
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CartCollapse from "./CartCollapse";
import { Link } from "react-router-dom";


function MyCart(props) {
  const [open, setOpen] = useState(-1);

  const isOpen = props.setCart;

  function handleClose() {
    props.closeCart();
  }

  function handleClickDelete(item) {
    props.deleteItem(item);
  }

  return (
    <div className="cartWrapper">
      <Drawer
        PaperProps={{
          sx: { width: "30%" },
        }}
        anchor="right"
        open={isOpen}
        onClose={handleClose}
      >
        <div className="insideCart">
          <div className="cartTitleWrapper">
            <h1>My Cart</h1>
          </div>
          <div className="cartContent">
            <List sx={{ maxHeight: "100%", overflow: "auto" }}>
              {props.customerCart.map((item, index) => {
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
                      <Collapse
                        in={open === index}
                        timeout="auto"
                        unmountOnExit
                      >
                        <CartCollapse item={item} />
                      </Collapse>
                    </Button>
                    <div className="deleteWrapper">
                      <IconButton
                        onClick={() => handleClickDelete(item)}
                        sx={{
                          width: "100%",
                          color: "#550312",
                          fontSize: "15px",
                        }}
                      >
                        <Icon icon="mdi:trash-can" />
                      </IconButton>
                    </div>
                  </ListItem>
                );
              })}
            </List>
          </div>
          <Link to="/menu/checkout">
            <Button
              sx={{
                m: 4,
                bottom: 0,
                width: "82%",
                backgroundColor: "#550312",
                border: 1,
                color: "white",
                borderRadius: "40px",
                ":hover": {
                  bgcolor: "white",
                  color: "#550312",
                },
              }}
            >
              Checkout {props.cartTotal} VND
            </Button>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}

export default MyCart;
