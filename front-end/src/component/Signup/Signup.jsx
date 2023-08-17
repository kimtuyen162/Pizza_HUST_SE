import { Alert, Button, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [wrongInfo, setWrongInfo] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setWrongInfo(false);
  };
  function handleClick() {
    if ((address === "") | (phone === "") | (email === "") | (fullname === ""))
      setEmptyField(true);
    else {
      const payload = {
        fullname: fullname,
        phone: phone,
        address: address,
        email: email,
        password: password,
      };

      axios
        .post("http://localhost:4000/api/user/register", payload)
        .then((response) => {
          console.log(response.data);
          navigate("/home/SignIn");
        })
        .catch((error) => {
          setWrongInfo(true);
          console.log(error);
        });
    }
  }

  return (
    <div className="signInContainer">
      <div className="signInForm">
        <h1>Sign Up</h1>
        <p>Full Name</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setFullname(e.target.value)}
            label="Full Name"
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Email</p>
        <div className="inputWrapper">
          <TextField
            required
            label="Email"
            // defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Phone Number</p>
        <div className="inputWrapper">
          <TextField
            required
            label="Phone Number"
            //   defaultValue={notes}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Delivery Address</p>
        <div className="inputWrapper">
          <TextField
            required
            label="Delivery Address"
            //   defaultValue={notes}
            onChange={(e) => setAddress(e.target.value)}
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
            //   defaultValue={notes}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
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
          Sign Up
        </Button>
      </div>
      <Snackbar
        open={wrongInfo}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          This email has already been registered!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
