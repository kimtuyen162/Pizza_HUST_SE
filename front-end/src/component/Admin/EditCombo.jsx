import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const EditCombo = (props) => {
  const navigate = useNavigate();
  const [emptyField, setEmptyField] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get(`http://localhost:4000/api/combo/${id}`)
        .then((response) => {
          console.log(response.data);
          setName(response.data.combo_name);
          setDesc(response.data.combo_description);
          setPrice(response.data.combo_price);
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
    if ((email === "") | (password === "")) setEmptyField(true);
    else {
      const payload = {
        combo_name: name,
        combo_description: description,
        combo_price: price,
        image: image,
      };

      axios
        .patch("http://localhost:4000/api/combo", payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          setWrongInfo(true);
          console.log(error);
        });
    }
  }
  console.log(description);
  return (
    <div className="editContainer">
      <div className="editForm">
        <h1>Edit Combo</h1>
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
    </div>
  );
};

export default EditCombo;
