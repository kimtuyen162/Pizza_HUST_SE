import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Collapse, IconButton, List, ListItem } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function ComboList() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(-1);

  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get("http://localhost:4000/api/combo")
        .then((response) => {
          setRows(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCombo();
  }, []);

  return (
    <div className="cartContent">
      <List sx={{ maxHeight: "100%", overflow: "auto" }}>
        {rows.map((item, index) => {
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
                    <Icon
                      icon="raphael:arrowright"
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                  <div className="amountWrapper">{item._id}</div>
                  <div className="nameWrapper">{item.combo_name}</div>
                  <div className="cartPriceWrapper">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.combo_price)}
                  </div>
                </div>
                <Collapse in={open === index} timeout="auto" unmountOnExit>
                  {/* <CartCollapse item={item} /> */}
                </Collapse>
              </Button>
              <div className="deleteWrapper">
                <Link to={`/admin/edit/Combo/${item._id}`}>
                  <IconButton
                    // onClick={() => handleClickDelete(item)}
                    sx={{
                      width: "100%",
                      color: "#550312",
                      fontSize: "30px",
                    }}
                  >
                    <Icon icon="typcn:info" />
                  </IconButton>
                </Link>
              </div>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default ComboList;
