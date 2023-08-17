import React, { useEffect } from "react";
import MenuLayOut from "./component/MenuLayOut";
import "./style/layout.css";
import MenuArea from "./component/MenuArea";
import CheckoutPage from "./page/CheckoutPage";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Homepage from "./page/Homepage";
import HomeArea from "./component/HomeArea/HomeArea";
import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MenuPage() {
  const [total, setTotal] = useState(0);

  const [cart, setCart] = useState([]);

  const [user, setUse] = useState();

  const [logged, setLogged] = useState(false);

  const [noti, setNoti] = useState(false);

  const [notiComplete, setNotiComplete] = useState(false);

  useEffect(() => {
    const payload = {
      email: "default",
      password: "default",
    };

    axios
      .post("http://localhost:4000/api/user/login", payload)
      .then((response) => {
        console.log(response.data);
        setUse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function setUser(user) {
    setLogged(true);
    setUse(user);
  }

  function isinCart(item) {
    switch (item.type) {
      case "combo":
        const checkcombo = cart.some((element) => {
          if (
            JSON.stringify(item.order_combo) ===
            JSON.stringify(element.order_combo)
          ) {
            element.quantity++;
            return true;
          } else return false;
        });
        return checkcombo;
      case "pizza":
        const checkpizza = cart.some((element) => {
          if (
            JSON.stringify(item.order_pizza) ===
              JSON.stringify(element.order_pizza) &&
            JSON.stringify(item.order_size) ===
              JSON.stringify(element.order_size) &&
            JSON.stringify(item.order_crust) ===
              JSON.stringify(element.order_crust)
          ) {
            element.quantity++;
            return true;
          } else return false;
        });
        return checkpizza;
      case "drink":
        const checkdrink = cart.some((element) => {
          if (
            JSON.stringify(item.order_drink) ===
            JSON.stringify(element.order_drink)
          ) {
            element.quantity++;
            return true;
          } else return false;
        });
        return checkdrink;
      default:
        const checkstarter = cart.some((element) => {
          if (
            JSON.stringify(item.order_starter) ===
            JSON.stringify(element.order_starter)
          ) {
            element.quantity++;
            return true;
          } else return false;
        });
        return checkstarter;
    }
  }

  function addNew(item) {
    setTotal(total + item.price);

    switch (isinCart(item)) {
      case false:
        setCart((oldCart) => [...oldCart, item]);
        break;
      default:
        break;
    }
    setNoti(true);
  }
  function deleteItem(item) {
    setTotal(total - item.price * item.quantity);
    setCart((current) =>
      current.filter(
        (cartitem) => JSON.stringify(cartitem) !== JSON.stringify(item)
      )
    );
  }

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNoti(false);
  };

  const handleCloseNotiComplete = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotiComplete(false);
  };

  function clearCart() {
    setTotal(0);
    setCart([]);
    setNotiComplete(true);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/menu"
            element={
              <MenuLayOut
                headerText={"Our Menu"}
                calTotal={total}
                customerCart={cart}
                cartTotal={total}
                deleteItem={deleteItem}
              />
            }
          >
            <Route
              path="/menu/:itemChosed"
              element={<MenuArea addCart={addNew} />}
            />
          </Route>
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                totalBill={total}
                myCart={cart}
                clearCart={clearCart}
                logIn={logged}
                user={user}
              />
            }
          />
          <Route path="/home" element={<Homepage logIn={logged} />}>
            <Route path="/home" element={<HomeArea />} />
            <Route path="/home/SignIn" element={<Signin setUser={setUser} />} />
            <Route path="/home/SignUp" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
          Item added to your cart!
        </Alert>
      </Snackbar>
      <Snackbar
        open={notiComplete}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleCloseNotiComplete}
      >
        <Alert
          onClose={handleCloseNotiComplete}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your order has been placed!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MenuPage;
