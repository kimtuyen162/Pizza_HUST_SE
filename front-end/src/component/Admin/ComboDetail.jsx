import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "@mui/material";

function ComboDetail() {
  const { id } = useParams();
  const [combo, setCombo] = React.useState([]);
  const [starter, setStarter] = React.useState([]);
  const [drink, setDrink] = React.useState([]);
  const [pizza, setPizza] = React.useState([]);
  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get(`http://localhost:4000/api/combo/${id}`)
        .then((response) => {
          console.log(response.data);
          setCombo(response.data);
          response.data.drinks.forEach((item) => {
            setDrink((current) => [...current, item]);
          });
          response.data.starters.forEach((item) => {
            setStarter((current) => [...current, item]);
          });
          response.data.pizzas.forEach((item) => {
            setPizza((current) => [...current, item]);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCombo();
  }, [id]);
  console.log(starter);
  return (
    <div className="detailContainer">
      <h1>{combo.combo_name}</h1>
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
      <Button
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
      <p>ID: {combo._id}</p>
      <p>Description: {combo.combo_description}</p>
      <p>Image file: {combo.image}</p>
      <h2>Pizzas:</h2>
      <ul>
        {pizza.map((item) => {
          return (
            <li key={item.pizza}>
              Id: {item.pizza}
              <ul>
                <li>Size:{item.size}</li>
                <li>Crust:{item.crust}</li>
                <li>Quantity:{item.quantity}</li>
              </ul>
            </li>
          );
        })}
      </ul>
      <h2>Starters:</h2>
      <ul>
        {starter.map((item) => {
          return (
            <li key={item.starter}>
              Id: {item.starter}
              <ul>
                <li>Quantity:{item.quantity}</li>
              </ul>
            </li>
          );
        })}
      </ul>
      <h2>Drinks:</h2>
      <ul>
        {drink.map((item) => {
          return (
            <li key={item.drink}>
              Id: {item.drink}
              <ul>
                <li>Quantity:{item.quantity}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ComboDetail;
