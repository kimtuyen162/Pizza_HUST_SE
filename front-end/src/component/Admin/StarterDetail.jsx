import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function StarterDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [starter, setStarter] = React.useState([]);
  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get(`http://localhost:4000/api/starter/${id}`)
        .then((response) => {
          console.log(response.data);
          setStarter(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCombo();
  }, [id]);

  function handleDelete() {
    axios
      .delete(`http://localhost:4000/api/starter/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate("/admin/edit/Starters");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="detailContainer">
      <h1>{starter.starter_name}</h1>

      <Link to={`/admin/edit/Starters/editStarter/${starter._id}`}>
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
      <p>ID: {starter._id}</p>
      <p>Description: {starter.starter_description}</p>
      <p>
        Price:
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(starter.starter_price)}
      </p>
      <p>Image file: {starter.image}</p>
    </div>
  );
}

export default StarterDetail;
