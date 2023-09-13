import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const EditDrink = (props) => {
  const navigate = useNavigate();
  const [emptyField, setEmptyField] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(false);
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [noti, setNoti] = useState(false);

  const { id } = useParams();

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNoti(false);
  };

  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get(`https://pizza-api1.onrender.com/api/drink/${id}`)
        .then((response) => {
          console.log(response.data);
          setName(response.data.drink_name);
          setDesc(response.data.drink_description);
          setPrice(response.data.drink_price);
          setImage(response.data.image);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCombo();
  }, [id]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setWrongInfo(false);
  };

  function handleClick() {
    if ((name === "") | (price === "") | (image === ""))
      setEmptyField(true);
    else {
      const payload = {
        drink_name: name,
        drink_description: description,
        drink_price: price,
        image: image,
      };

      axios
        .patch(`https://pizza-api1.onrender.com/api/drink/${id}`, payload)
        .then((response) => {
          console.log(response.data);
          setNoti(true);
          navigate("/admin/edit/Drinks");
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
        <h1>Edit Drink</h1>
        <p>ID</p>
        <div className="inputWrapper">
          <TextField
            disabled
            label="ID"
            defaultValue={id}
            sx={{ width: "80%", m: 1 }}
            size="small"
            error={emptyField}
            helperText={emptyField ? "Please fill this field" : ""}
          />
        </div>

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
          Edit
        </Button>
      </div>
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

export default EditDrink;
