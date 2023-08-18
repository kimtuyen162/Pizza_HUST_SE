import React from "react";
import { Button, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "../style/adminstyle.css";

const selections = ["Combo", "Pizza", "Starters", "Drinks", "Size", "Crust"];

function AdminPage() {
  return (
    <div style={{ justifyContent: "center" }}>
      <Grid container spacing={0} align="center" sx={{ width: "50%", ml: 2 }}>
        {selections.map((item, index) => {
          return (
            <Grid item key={index} xs={6} md={2}>
              <Link to={`/admin/edit/${item}`}>
                <Button
                  sx={{
                    bottom: 0,
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
                  {item}
                </Button>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "90%",
          marginTop: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
