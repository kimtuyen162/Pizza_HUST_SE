import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Modal,
  Box,
  Typography,
  NativeSelect,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Icon } from "@iconify/react";
// import { PizzaArray } from "../itemArr/PizzaArray";
// import { CrustArray, SizeArray } from "../itemArr/AddOnArray";
import React, { useEffect, useState } from "react";
import "../style/layout.css";
import axios from "axios";

function PizzaMenu(props) {
  const [PizzaArray, setPizzaArray] = React.useState([]);
  const [CrustArray, setCrustArray] = React.useState([]);
  const [SizeArray, setSizeArray] = React.useState([]);

  useEffect(() => {
    async function fetchPizza() {
      await axios
        .get("http://localhost:4000/api/pizza")
        .then((response) => {
          setPizzaArray(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchPizza();
  }, []);

  useEffect(() => {
    async function fetchSize() {
      await axios
        .get("http://localhost:4000/api/size")
        .then((response) => {
          setSizeArray(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchSize();
  }, []);

  useEffect(() => {
    async function fetchCrust() {
      await axios
        .get("http://localhost:4000/api/crust")
        .then((response) => {
          setCrustArray(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchCrust();
  }, []);

  const modalStyle = {
    position: "relative",
    top: "50%",
    left: "50%",
    mr: "350px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #FFBE41",
    boxShadow: 24,
  };

  const [crust, setCrust] = useState(0);
  const [size, setSize] = useState(0);
  const [it, setIt] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (event, item) => {
    setIt(item);
    setCrust(CrustArray[0].crust_name);
    setSize(SizeArray[1].size_name);
    setOpen(true);
  };
  function handleClose() {
    setCrust(CrustArray[0].crust_name);
    setSize(SizeArray[1].size_name);
    setOpen(false);
  }

  const handleChangeCrust = (event) => {
    setCrust(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  function handleClick(item) {
    const selPizza = PizzaArray.find((pizza) => {
      return pizza._id === item._id;
    });
    const selCrust = CrustArray.find((item) => {
      return item.crust_name === crust;
    });
    const selSize = SizeArray.find((item) => {
      return item.size_name === size;
    });

    console.log(selPizza);

    const select_pizza = {
      name: selPizza.pizza_name,
      type: "pizza",
      order_pizza: selPizza,
      order_crust: selCrust,
      order_size: selSize,
      price: selPizza.pizza_price + selCrust.crust_price + selSize.size_price,
      quantity: 1,
    };
    props.addPizza(select_pizza);
  }

  return (
    <div className="cardWrapper">
      <Grid container spacing={2} align="center">
        {PizzaArray.map((item) => {
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
                  alt="pizza1"
                />
                <CardContent sx={{ pb: 0 }}>
                  <div
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: "15px",
                    }}
                    className="descriptionWrapper"
                  >
                    <h2>{item.pizza_name}</h2>
                    <div>{item.pizza_description}</div>
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
                        }).format(item.pizza_price)}
                      </h2>
                    </div>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    onClick={(event) => handleOpen(event, item)}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div className="modalWrapper">
            <img
              src={it.image ? require(`../image/${it.image}`) : ""}
              alt="pizza"
            />
            <div className="modalContentWrapper">
              <Typography
                id="modal-modal-title"
                sx={{ mt: 2, mx: 2 }}
                style={{ color: "#550312" }}
                variant="h4"
                component="h2"
              >
                {it.pizza_name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mx: 2 }}>
                {it.pizza_description}
              </Typography>

              <div className="optionPane">
                <div className="sizeWrapper">
                  <FormControl
                    style={{ border: "2px solid #FFBE41" }}
                    sx={{ mx: 2, my: 1 }}
                  >
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Size
                    </InputLabel>
                    <NativeSelect
                      defaultValue={0}
                      onChange={handleChangeSize}
                      inputProps={{
                        name: "size",
                        id: "uncontrolled-native",
                      }}
                    >
                      {SizeArray.map((item) => {
                        return (
                          <option key={item._id} value={item.size_id}>
                            {item.size_name}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </FormControl>
                </div>

                <div className="crustWrapper">
                  <FormControl
                    style={{ border: "2px solid #FFBE41" }}
                    sx={{ mx: 2, my: 1 }}
                  >
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Crust
                    </InputLabel>
                    <NativeSelect
                      defaultValue={0}
                      onChange={handleChangeCrust}
                      inputProps={{
                        name: "crust",
                        id: "uncontrolled-native",
                      }}
                    >
                      {CrustArray.map((item) => {
                        return (
                          <option key={item._id} value={item.crust_id}>
                            {item.crust_name}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </FormControl>
                </div>
              </div>
              <div className="buttonWrapper">
                <Button
                  sx={{
                    mx: 2,
                    my: 1,
                    border: 1,
                    color: "#550312",
                    borderRadius: "40px",
                    borderColor: "#550312",
                    maxHeight: "100px",
                  }}
                  onClick={() => {
                    handleClick(it);
                  }}
                >
                  Add Now
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default PizzaMenu;
