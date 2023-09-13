import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function PizzaDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pizza, setPizza] = React.useState([]);
  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get(`https://pizza-api1.onrender.com/api/pizza/${id}`)
        .then((response) => {
          console.log(response.data);
          setPizza(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCombo();
  }, [id]);

  function handleDelete() {
    axios
      .delete(`https://pizza-api1.onrender.com/api/pizza/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate("/admin/edit/Pizza");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="detailContainer">
      <h1>{pizza.pizza_name}</h1>

      <Link to={`/admin/edit/Pizza/editPizza/${pizza._id}`}>
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
      <p>ID: {pizza._id}</p>
      <p>Description: {pizza.pizza_description}</p>
      <p>
        Price:
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(pizza.pizza_price)}
      </p>
      <p>Image file: {pizza.image}</p>
    </div>
  );
}

export default PizzaDetail;
