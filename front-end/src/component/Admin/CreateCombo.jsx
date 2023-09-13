import { Alert, Button, IconButton, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Icon } from "@iconify/react";

const CreateCombo = (props) => {
  const navigate = useNavigate();
  const [emptyField, setEmptyField] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(false);
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [noti, setNoti] = useState(false);
  // pizza
  const [pizzas, setPizza] = useState([]);
  const [pizza, setPiz] = useState("");
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [pizQuan, setPQ] = useState(0);
  // starter
  const [starters, setStarter] = useState([]);
  const [starter, setStart] = useState("");
  const [startQuan, setSQ] = useState(0);
  // starter
  const [drinks, setDrink] = useState([]);
  const [drink, setDr] = useState("");
  const [drinkQuan, setDQ] = useState(0);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setWrongInfo(false);
  };

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNoti(false);
  };

  function handleAddStarter() {
    if ((starter === "") | (startQuan === "")) setEmptyField(true);
    else {
      axios
        .get(`https://pizza-api1.onrender.com/api/starter/${starter}`)
        .then((response) => {
          console.log(response.data);
          setStarter((current) => [
            ...current,
            {
              starter: starter,
              quantity: startQuan,
            },
          ]);
          setStart("");
          setSQ("");
        })
        .catch((error) => {
          setWrongInfo(true);
          console.log(error);
        });
    }
  }

  function handleAddDrink() {
    if ((drink === "") | (drinkQuan === "")) setEmptyField(true);
    else {
      axios
        .get(`https://pizza-api1.onrender.com/api/drink/${drink}`)
        .then((response) => {
          console.log(response.data);
          setDrink((current) => [
            ...current,
            {
              drink: drink,
              quantity: drinkQuan,
            },
          ]);
          setDr("");
          setDQ("");
        })
        .catch((error) => {
          setWrongInfo(true);
          console.log(error);
        });
    }
  }

  function handleAddPizza() {
    if ((pizza === "") | (crust === "") | (size === "") | (pizQuan === ""))
      setEmptyField(true);
    else {
      axios
        .get(`https://pizza-api1.onrender.com/api/size/${size}`)
        .then((response) => {
          console.log(response.data);
          axios
            .get(`https://pizza-api1.onrender.com/api/crust/${crust}`)
            .then((response) => {
              console.log(response.data);
              axios
                .get(`https://pizza-api1.onrender.com/api/pizza/${pizza}`)
                .then((response) => {
                  console.log(response.data);
                  setPizza((current) => [
                    ...current,
                    {
                      pizza: pizza,
                      crust: crust,
                      size: size,
                      quantity: pizQuan,
                    },
                  ]);
                  setPiz("");
                  setCrust("");
                  setSize("");
                  setPQ("");
                })
                .catch((error) => {
                  setWrongInfo(true);
                  console.log(error);
                });
            })
            .catch((error) => {
              setWrongInfo(true);
              console.log(error);
            });
        })
        .catch((error) => {
          setWrongInfo(true);
          console.log(error);
        });
    }
  }
  function handleClick() {
    if ((name === "") | (price === "") | (image === "")) setEmptyField(true);
    else {
      const payload = {
        combo_name: name,
        combo_description: description,
        combo_price: price,
        image: image,
        starters: starters,
        drinks: drinks,
        pizzas: pizzas,
      };

      axios
        .post(`https://pizza-api1.onrender.com/api/combo`, payload)
        .then((response) => {
          console.log(response.data);
          setNoti(true);
          navigate("/admin/edit/Combo");
        })
        .catch((error) => {
          setWrongInfo(true);
          console.log(error);
        });
    }
  }
  return (
    <div className="editContainer">
      <div className="editForm">
        <h1>Create New Combo</h1>
        <p>Name</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Description</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setDesc(e.target.value)}
            sx={{ width: "80%", m: 1 }}
            value={description}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Price</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Image</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setImage(e.target.value)}
            value={image}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
      </div>
      {/* add starter */}
      <div className="editForm">
        <h1>Add Starter</h1>
        <p>ID</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setStart(e.target.value)}
            value={starter}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Quantity</p>
        <div className="inputWrapper">
          <TextField
            disabled
            type="number"
            onChange={(e) => setSQ(e.target.value)}
            value={startQuan}
            sx={{ width: "70%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
          <IconButton
            onClick={() => setSQ(startQuan + 1)}
            sx={{
              width: "5%",
              color: "#550312",
              fontSize: "15px",
            }}
          >
            <Icon icon="mdi:plus" />
          </IconButton>
          <IconButton
            onClick={() => {
              if (startQuan !== 0) setSQ(startQuan - 1);
            }}
            sx={{
              width: "5%",
              color: "#550312",
              fontSize: "15px",
            }}
          >
            <Icon icon="mdi:minus" />
          </IconButton>
        </div>
        <Button
          sx={{
            m: 4,
            right: 0,
            width: "20%",
            backgroundColor: "#550312",
            border: 1,
            color: "white",
            borderRadius: "40px",
            ":hover": {
              bgcolor: "white",
              color: "#550312",
            },
          }}
          onClick={handleAddStarter}
        >
          Submit
        </Button>
      </div>
      {/* add drink */}
      <div className="editForm">
        <h1>Add Drink</h1>
        <p>ID</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setDr(e.target.value)}
            value={drink}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Quantity</p>
        <div className="inputWrapper">
          <TextField
            disabled
            type="number"
            onChange={(e) => setDQ(e.target.value)}
            value={drinkQuan}
            sx={{ width: "70%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
          <IconButton
            onClick={() => setDQ(drinkQuan + 1)}
            sx={{
              width: "5%",
              color: "#550312",
              fontSize: "15px",
            }}
          >
            <Icon icon="mdi:plus" />
          </IconButton>
          <IconButton
            onClick={() => {
              if (drinkQuan !== 0) setDQ(drinkQuan - 1);
            }}
            sx={{
              width: "5%",
              color: "#550312",
              fontSize: "15px",
            }}
          >
            <Icon icon="mdi:minus" />
          </IconButton>
        </div>
        <Button
          sx={{
            m: 4,
            right: 0,
            width: "20%",
            backgroundColor: "#550312",
            border: 1,
            color: "white",
            borderRadius: "40px",
            ":hover": {
              bgcolor: "white",
              color: "#550312",
            },
          }}
          onClick={handleAddDrink}
        >
          Submit
        </Button>
      </div>
      {/* add pizza */}
      <div className="editForm">
        <h1>Add Pizza</h1>
        <p>Pizza ID</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setPiz(e.target.value)}
            value={pizza}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Size ID</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setSize(e.target.value)}
            sx={{ width: "80%", m: 1 }}
            value={size}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Crust ID</p>
        <div className="inputWrapper">
          <TextField
            required
            onChange={(e) => setCrust(e.target.value)}
            value={crust}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>
        <p>Quantity</p>
        <div className="inputWrapper">
          <TextField
            disabled
            type="number"
            onChange={(e) => setPQ(e.target.value)}
            value={pizQuan}
            sx={{ width: "70%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
          <IconButton
            onClick={() => setPQ(pizQuan + 1)}
            sx={{
              width: "5%",
              color: "#550312",
              fontSize: "15px",
            }}
          >
            <Icon icon="mdi:plus" />
          </IconButton>
          <IconButton
            onClick={() => {
              if (pizQuan !== 0) setPQ(pizQuan - 1);
            }}
            sx={{
              width: "5%",
              color: "#550312",
              fontSize: "15px",
            }}
          >
            <Icon icon="mdi:minus" />
          </IconButton>
        </div>
        <Button
          sx={{
            m: 4,
            right: 0,
            width: "20%",
            backgroundColor: "#550312",
            border: 1,
            color: "white",
            borderRadius: "40px",
            ":hover": {
              bgcolor: "white",
              color: "#550312",
            },
          }}
          onClick={handleAddPizza}
        >
          Submit
        </Button>
      </div>
      <Button
        sx={{
          mt: 8,
          mb: 8,
          ml: 100,
          right: 0,
          width: "20%",
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
        Create
      </Button>
      <Snackbar
        open={wrongInfo}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar
        open={noti}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleCloseNoti}
      >
        <Alert
          onClose={handleCloseNoti}
          severity="success"
          sx={{ width: "100%" }}
        >
          Success
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CreateCombo;
