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

function ComboMenu(props) {
  const [ComboArray, setComboArray] = React.useState([]);

  useEffect(() => {
    async function fetchCombo() {
      await axios
        .get("http://localhost:4000/api/combo")
        .then((response) => {
          setComboArray(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCombo();
  }, []);

  function handleClick(item) {
    const select_combo = {
      name: item.combo_name,
      type: "combo",
      order_combo: item,
      price: item.combo_price,
      quantity: 1,
    };
    props.addCombo(select_combo);
  }

  return (
    <div className="comboWrapper">
      <Grid container spacing={2} align="center">
        {ComboArray.map((item) => {
          return (
            <Grid
              key={item._id}
              item
              xs={12}
              sm={6}
              md={4}
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
                  alt="pizza1"
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
                    <h2>{item.combo_name}</h2>
                    <div>{item.combo_description}</div>
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
                        }).format(item.combo_price)}
                      </h2>
                    </div>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    onClick={() => {
                      handleClick(item);
                    }}
                    sx={{
                      border: 1,
                      color: "#550312",
                      borderRadius: "40px",
                      borderColor: "#550312",
                      maxHeight: "50px",
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

export default ComboMenu;
