import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function SelectionBar(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const total = props.calTotal;

  const selections = ["Combo", "Pizza", "Starters", "Drinks"];

  const [fix, setFixed] = useState(false);

  const handleClick = () => {
    props.openCart();
  };

  return (
    <div className={fix ? "fixedBar" : "normalBar"}>
      <div className="barWrapper">
        <Grid container spacing={2} align="center" sx={{ width: "80%", ml: 2 }}>
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
                    onClick={closeSidebar}
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
            onClick={handleClick}
            sx={{
              mr: 2,
              border: 1,
              color: "#550312",
              borderRadius: "40px",
              borderColor: "#550312",
            }}
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
    </div>
  );
}

export default SelectionBar;
