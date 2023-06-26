import React, { useState } from "react";
import { Button, Grid, Modal, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// import Checkout from "./Checkout";

function SelectionBar(props) {
  const modalStyle = {
    position: "relative",
    top: "50%",
    left: "50%",
    mr: "350px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #FFBE41",
    boxShadow: 24,
  };

  const total = props.calTotal;

  const selections = ["Combo", "Pizza", "Starters", "Drinks"];

  const [fix, setFixed] = useState(false);
  const [open, setOpen] = useState(false);

  function setFix() {
    if (window.scrollY >= 66) setFixed(true);
    else setFixed(false);
  }
  window.addEventListener("scroll", setFix);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={fix ? "fixedBar" : "normalBar"}>
      <div className="barWrapper">
        <Grid
          container
          spacing={2}
          align="center"
          sx={{ maxWidth: "100%", ml: 2 }}
        >
          {selections.map((item, index) => {
            return (
              <Grid item key={index} xs={6} md={3}>
                <Link to={`/menu/${item}`}>
                  <Button
                    sx={{
                      border: 1,
                      color: "#550312",
                      borderRadius: "40px",
                      borderColor: "#550312",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <div className="checkoutWrapper">
          <Button
            sx={{
              mr: 2,
              border: 1,
              color: "#550312",
              borderRadius: "40px",
              borderColor: "#550312",
            }}
            onClick={handleOpen}
          >
            <div className="totalWrapper">{total}</div>
            <div className="iconWrapper">
              <Icon
                style={{
                  fontSize: "25px",
                  color: "#FFBE41",
                  verticalAlign: "middle",
                }}
                icon="gridicons:cart"
              />
            </div>
          </Button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <div>
            <div className="totalWrapper">
              <h4>Selected Items:</h4>
              
              <h3>Total: {total}</h3>
            </div>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
            <Link to="/menu/checkout" >
              <Button variant="contained" onClick={handleClose}>Check out</Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default SelectionBar;
