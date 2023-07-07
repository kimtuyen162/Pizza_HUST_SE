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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import CartCollapse from "./CartCollapse";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MyCart(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(-1);

  const [noti, setNoti] = useState(false);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const isOpen = props.setCart;

  function handleClose() {
    props.closeCart();
  }

  function handleClickDelete(item) {
    props.deleteItem(item);
  }

  function handleClick() {
    setNoti(true);
  }

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNoti(false);
  };

  return (
    <div className="cartWrapper">
      <Drawer
        PaperProps={{
          sx: { width: isMdUp ? "30%" : "100%" },
        }}
        anchor="right"
        open={isOpen}
        onClose={handleClose}
      >
        <div className="insideCart">
          <div className="cartTitleWrapper">
            <IconButton sx={{ m: 1, color: "#550312" }} onClick={handleClose}>
              <Icon icon={"oi:x"} />
            </IconButton>
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
          {props.customerCart.length === 0 ? (
            <Button
              onClick={handleClick}
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
          ) : (
            <Link to="/checkout">
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
          )}
        </div>
      </Drawer>
      <Snackbar
        open={noti}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
        onClose={handleCloseNoti}
      >
        <Alert
          onClose={handleCloseNoti}
          severity="error"
          sx={{ width: "100%" }}
        >
          Your Cart is Empty !
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MyCart;
