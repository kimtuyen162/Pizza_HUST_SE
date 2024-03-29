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

function StarterMenu(props) {
  const [StarterArray, setStarterArray] = React.useState([]);

  useEffect(() => {
    async function fetchStarter() {
      await axios
        .get("http://localhost:4000/api/starter")
        .then((response) => {
          setStarterArray(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchStarter();
  }, []);
  function handleClick(item) {
    const select_starter = {
      name: item.starter_name,
      type: "starter",
      order_starter: item,
      price: item.starter_price,
      quantity: 1,
    };
    props.addStarter(select_starter);
  }

  return (
    <div className="otherWrapper">
      <Grid container spacing={2} align="center">
        {StarterArray.map((item) => {
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
                  alt="starter"
                />
                <CardContent
                  sx={{ pb: 0 }}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "15px",
                  }}
                >
                  <div className="descriptionWrapper">
                    <h2>{item.starter_name}</h2>
                    <div>{item.starter_description}</div>
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
                        }).format(item.starter_price)}
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

export default StarterMenu;
