import { Icon } from "@iconify/react";
import { Button, IconButton, List, ListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StarterList() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(-1);

  useEffect(() => {
    async function fetchPizza() {
      await axios
        .get("http://localhost:4000/api/starter")
        .then((response) => {
          setRows(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchPizza();
  }, []);
  return (
    <div className="cartContent">
      <Link to={`/admin/edit/Starters/create`}>
        <Button
          sx={{
            mr: 2,
            border: 1,
            color: "#550312",
            borderRadius: "40px",
            borderColor: "#550312",
            height: "100%",
            width: "10%",
          }}
        >
          + Create
        </Button>
      </Link>
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
                  <div className="nameWrapper">{item.starter_name}</div>
                  <div className="cartPriceWrapper">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.starter_price)}
                  </div>
                </div>
              </Button>
              <div className="deleteWrapper">
                <Link to={`/admin/edit/Starters/${item._id}`}>
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

export default StarterList;
