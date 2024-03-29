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
import LogOut from "./component/LogOut";
import AdminPage from "./page/AdminPage";
import ComboDetail from "./component/Admin/ComboDetail";
import AdminSelect from "./component/Admin/AdminSelect";
import EditCombo from "./component/Admin/EditCombo";
import CreateCombo from "./component/Admin/CreateCombo";
import EditPizza from "./component/Admin/EditPizza";
import CreatePizza from "./component/Admin/CreatePizza";
import EditDrink from "./component/Admin/EditDrink";
import CreateDrink from "./component/Admin/CreateDrink";
import EditStarter from "./component/Admin/EditStarter";
import CreateStarter from "./component/Admin/CreateStarter";
import StarterDetail from "./component/Admin/StarterDetail";
import PizzaDetail from "./component/Admin/PizzaDetail";
import DrinkDetail from "./component/Admin/DrinkDetail";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MenuPage() {
  const [total, setTotal] = useState(0);

  const [cart, setCart] = useState([]);

  const [user, setUse] = useState();

  const [logged, setLogged] = useState(false);

  const [noti, setNoti] = useState(false);

  const [admin, setAdmin] = useState(false);

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
  function setisAdmin() {
    setAdmin(true);
  }

  function handleLogOut() {
    axios
      .post("http://localhost:4000/api/user/logout", {})
      .then((response) => {
        console.log(response.data);
        setLogged(false);
        setAdmin(false);
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
      })
      .catch((error) => {
        console.log(error);
      });
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
                admin={admin}
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
              element={<MenuArea admin={admin} addCart={addNew} />}
            />
          </Route>
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                totalBill={total}
                myCart={cart}
                clearCart={clearCart}
                user={user}
                logIn={logged}
                email={logged ? user.email : ""}
                address={logged ? user.address : ""}
                phone={logged ? user.phone : ""}
                fullname={logged ? user.fullname : ""}
              />
            }
          />
          <Route
            path="/home"
            element={<Homepage logIn={logged} admin={false} />}
          >
            <Route
              path="/home"
              element={<HomeArea logIn={logged} user={user} />}
            />
            <Route
              path="/home/SignIn"
              element={<Signin admin={setisAdmin} setUser={setUser} />}
            />
            <Route path="/home/SignUp" element={<Signup />} />
            <Route
              path="/home/LogOut"
              element={<LogOut handleLogOut={handleLogOut} />}
            />
          </Route>
          <Route
            path="/admin"
            element={<Homepage logIn={logged} admin={true} />}
          >
            <Route
              path="/admin"
              element={<HomeArea logIn={logged} user={user} />}
            />
            <Route path="/admin/edit" element={<AdminPage />}>
              <Route path="/admin/edit/:select" element={<AdminSelect />} />
              <Route path="/admin/edit/Combo/:id" element={<ComboDetail />} />
              <Route
                path="/admin/edit/Combo/editCombo/:id"
                element={<EditCombo />}
              />
              <Route
                path="/admin/edit/Combo/create"
                element={<CreateCombo />}
              />
              {/* admin pizza */}
              <Route path="/admin/edit/Pizza/:id" element={<PizzaDetail />} />
              <Route
                path="/admin/edit/Pizza/editPizza/:id"
                element={<EditPizza />}
              />
              <Route
                path="/admin/edit/Pizza/create"
                element={<CreatePizza />}
              />
              {/* admin drink */}
              <Route path="/admin/edit/Drinks/:id" element={<DrinkDetail />} />
              <Route
                path="/admin/edit/Drinks/editDrink/:id"
                element={<EditDrink />}
              />
              <Route
                path="/admin/edit/Drinks/create"
                element={<CreateDrink />}
              />
              {/* admin starter */}
              <Route
                path="/admin/edit/Starters/:id"
                element={<StarterDetail />}
              />
              <Route
                path="/admin/edit/Starters/editStarter/:id"
                element={<EditStarter />}
              />
              <Route
                path="/admin/edit/Starters/create"
                element={<CreateStarter />}
              />
            </Route>
            <Route
              path="/admin/LogOut"
              element={<LogOut handleLogOut={handleLogOut} />}
            />
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
