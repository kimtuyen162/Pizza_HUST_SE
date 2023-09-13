import React, { useEffect } from "react";
import {
  CardMedia,
  Card,
  CardContent,
  Grid,
  Button,
  CardActions,
} from "@mui/material";
import { Icon } from "@iconify/react";
import axios from "axios";

function DrinkMenu(props) {
  const [DrinkArray, setDrinkArray] = React.useState([]);

  useEffect(() => {
    async function fetchDrink() {
      await axios
        .get("https://pizza-api1.onrender.com/api/drink")
        .then((response) => {
          setDrinkArray(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchDrink();
  }, []);

  function handleClick(item) {
    const select_drink = {
      name: item.drink_name,
      type: "drink",
      order_drink: item,
      price: item.drink_price,
      quantity: 1,
    };
    props.addDrink(select_drink);
  }

  return (
    <div className="otherWrapper">
      <Grid container spacing={2} align="center">
        {DrinkArray.map((item) => {
          return (
            <Grid
              key={item._id}
              item
              xs={12}
              sm={6}
              md={3}
              justifyItems={"center"}
            >
              <Card
                style={{ border: "2px solid #FFBE41" }}
                sx={{ maxHeight: "600px", borderRadius: "50px" }}
              >
                <CardMedia
                  component="img"
                  sx={{ maxHeight: "150px" }}
                  image={require(`../image/${item.image}`)}
                  alt="drink"
                />
                <CardContent sx={{ pb: 0 }}>
                  <div
                    className="descriptionWrapper"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: "15px",
                    }}
                  >
                    <h2>{item.drink_name}</h2>
                    <div>{item.drink_description}</div>
                  </div>

                  <div className="priceTag">
                    <div className="iconWrapper">
                      <Icon
                        style={{ fontSize: "30px", color: "#FFBE41" }}
                        icon="si-glyph:money-coin"
                      />
                    </div>
                    <div className="priceWrapper">
                      <h2>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.drink_price)}
                      </h2>
                    </div>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    style={{ display: props.admin ? "none" : "" }}
                    sx={{
                      border: 1,
                      color: "#550312",
                      borderRadius: "40px",
                      borderColor: "#550312",
                      maxHeight: "50px",
                    }}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    <h3>Add to Cart</h3>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default DrinkMenu;
