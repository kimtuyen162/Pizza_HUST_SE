import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function DrinkDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [drink, setDrink] = React.useState([]);
  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get(`https://pizza-api1.onrender.com/api/drink/${id}`)
        .then((response) => {
          console.log(response.data);
          setDrink(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCombo();
  }, [id]);

  function handleDelete() {
    axios
      .delete(`https://pizza-api1.onrender.com/api/drink/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate("/admin/edit/Drinks");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="detailContainer">
      <h1>{drink.drink_name}</h1>

      <Link to={`/admin/edit/Drinks/editDrink/${drink._id}`}>
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
          Edit
        </Button>
      </Link>
      <Button
        onClick={handleDelete}
        sx={{
          border: 1,
          color: "#550312",
          borderRadius: "40px",
          borderColor: "#550312",
          height: "100%",
          width: "10%",
        }}
      >
        Delete
      </Button>
      <p>ID: {drink._id}</p>
      <p>Description: {drink.drink_description}</p>
      <p>
        Price:
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(drink.drink_price)}
      </p>
      <p>Image file: {drink.image}</p>
    </div>
  );
}

export default DrinkDetail;
