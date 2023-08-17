import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

const Signin = (props) => {
  const navigate = useNavigate();
  const [emptyField, setEmptyField] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    if ((email === "") | (password === "")) setEmptyField(true);
    else {
      const payload = {
        email: email,
        password: password,
      };

      axios
        .post("http://localhost:4000/api/user/login", payload)
        .then((response) => {
          console.log(response.data);
          props.setUser(response.data);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div className="signInContainer">
      <div className="signInForm">
        <h1>Sign In</h1>
        <p>Email</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Password</p>
        <div className="inputWrapper">
          <TextField
            required
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p className="question">
          Don't have an account?
          <Link to="/home/SignUp">Create a new account</Link>
        </p>
        <Button
          sx={{
            m: 4,
            bottom: 0,
            width: "50%",
            backgroundColor: "#550312",
            border: 1,
            color: "white",
            borderRadius: "40px",
            ":hover": {
              bgcolor: "white",
              color: "#550312",
            },
          }}
          onClick={handleClick}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Signin;
