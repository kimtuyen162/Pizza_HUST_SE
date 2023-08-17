import { Icon } from "@iconify/react";
import { paymentArray } from "../itemArr/paymentArray";
import {
  Box,
  FormControlLabel,
  Button,
  FormControl,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function CheckoutFormCell(props) {
  const today = new Date();
  today.setMinutes(today.getMinutes() + 20);
  const time =
    today.getHours() +
    ":" +
    today.getMinutes().toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const navigate = useNavigate();

  const [emptyField, setEmptyField] = useState(false);
  const [selectValue, setSelectValue] = useState(paymentArray[0].payment_name);
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [delitime, setDelitime] = useState(time);

  useEffect(() => {
    if (props.logIn) {
      setEmail(props.user.email);
      setAddress(props.user.address);
      setPhoneNumber(props.user.phone);
      setFullname(props.user.fullname);
    }
  }, [props.user, props.logIn]);

  function handleselectChange(event) {
    setSelectValue(event.target.value);
  }

  function handleClick() {
    if (
      (address === "") |
      (phoneNumber === "") |
      (email === "") |
      (fullname === "")
    )
      setEmptyField(true);
    else {
      const userInfo = {
        address: address,
        phoneNumber: phoneNumber,
        email: email,
        fullname: fullname,
        date: today,
      };
      props.postOrder(userInfo);
      props.clearCart();
      navigate("/menu/Combo");
    }
  }

  return (
    <div className={isMdUp ? "formCell" : "formCellFull"}>
      <div className="headerWrapper">
        <h1>--Checkout--</h1>
      </div>
      <Paper
        elevation={6}
        sx={{
          borderRadius: "20px",
          mx: 6,
        }}
      >
        <div className="inputWrapper">
          <Icon
            icon={"carbon:location-filled"}
            style={{ margin: "20px", marginRight: "0" }}
          />
          <TextField
            required
            onChange={(e) => setAddress(e.target.value)}
            label="Your Address"
            sx={{ width: "90%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please this field" : ""}
          />
        </div>
        <div className="inputWrapper">
          <Icon
            icon={"ic:baseline-message"}
            style={{ margin: "20px", marginRight: "0" }}
          />
          <TextField
            label="Instruction notes for shipping"
            defaultValue={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={{ width: "90%", m: 1 }}
            size="small"
          />
        </div>
        <div
          className="inputWrapper"
          style={{ display: "flex", justifyContent: "start" }}
        >
          <Icon
            label="Delivery time"
            icon={"typcn:time"}
            style={{ margin: "20px", marginRight: "0" }}
          />
          <TextField
            defaultValue={delitime}
            variant="filled"
            sx={{ width: "40%", m: 1, mb: 2 }}
            onChange={(e) => setDelitime(e.target.value)}
            size="small"
            type="time"
          />
          <i style={{ fontSize: "12px" }}>
            (Please specify the delivery time of your choice)
          </i>
        </div>
      </Paper>
      <Paper
        elevation={6}
        sx={{
          borderRadius: "20px",
          mx: 6,
          mt: 2,
        }}
      >
        <div style={{ padding: "10px" }}>
          <h1
            style={{
              color: "#550312",
              textAlign: "center",
              margin: "10px",
            }}
          >
            Delivery Information
          </h1>
          <div className="inputWrapper">
            <TextField
              required
              label="Fullname"
              onChange={(e) => setFullname(e.target.value)}
              sx={{ width: "90%", m: 2, mt: 0 }}
              size="small"
              error={emptyField}
              helperText={emptyField ? "Please this field" : ""}
            />
          </div>
          <div className="inputWrapper">
            <TextField
              required
              label="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ width: "90%", m: 2 }}
              size="small"
              error={emptyField}
              helperText={emptyField ? "Please this field" : ""}
            />
          </div>
          <div className="inputWrapper">
            <TextField
              required
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              sx={{ width: "90%", m: 2 }}
              size="small"
              error={emptyField}
              helperText={emptyField ? "Please this field" : ""}
            />
          </div>
        </div>
      </Paper>

      <Paper
        elevation={6}
        sx={{
          borderRadius: "20px",
          mx: 6,
          my: 2,
        }}
      >
        <div style={{ padding: "10px" }}>
          <h1 style={{ textAlign: "center", color: "#550312" }}>
            Payment Method
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FormControl fullWidth sx={{ width: "80%" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectValue}
                onChange={handleselectChange}
                name="radio-buttons-group"
              >
                {paymentArray.map((payment, index) => {
                  return (
                    <FormControlLabel
                      sx={{ width: "100%" }}
                      value={payment.payment_name}
                      key={index}
                      control={
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            marginTop: "10px",
                          }}
                        >
                          <Radio value={payment.payment_name} />
                          <Box
                            sx={{
                              border: 2,
                              borderColor: "#550312",
                              width: "100%",
                            }}
                          >
                            <div
                              className="paymentBox"
                              style={{
                                display: "flex",
                                width: "100%",
                                margin: "10px",
                              }}
                            >
                              <img
                                src={payment.image}
                                style={{
                                  height: "50px",
                                  width: "50px",
                                  marginRight: "10px",
                                }}
                                alt={payment.payment_name}
                              />
                              <div>Pay with {payment.payment_name}</div>
                            </div>
                          </Box>
                        </div>
                      }
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{ justifyContent: "right", display: "flex" }}>
            <Button
              type="submit"
              onClick={handleClick}
              sx={{
                width: "40%",
                m: 2,
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
              Checkout
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default CheckoutFormCell;
