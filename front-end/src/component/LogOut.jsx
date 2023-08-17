import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function LogOut(props) {
  const navigate = useNavigate();
  function handleClick() {
    props.handleLogOut();
    navigate("/home");
  }
  return (
    <div className="logoutContainer">
      <h1>Are you sure you want to log out ?</h1>
      <div>
        <Button
          onClick={handleClick}
          sx={{
            m: 4,
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
          Yes
        </Button>
        <Link to="/home">
          <Button
            sx={{
              m: 4,
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
            No
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LogOut;
