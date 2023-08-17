import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const HomeArea = (props) => {
  return (
    <div>
      <div className="homeContent">
        <div className="contentText">
          <h1>
            {props.logIn
              ? "Welcome back, " + props.user.fullname
              : "Pizzalicious"}
          </h1>
          <h2>Enjoy your days</h2>
          <p>
            At Pizza Hust, we are passionate about serving the most
            mouthwatering pizzas in town. Prepare your taste buds for a
            sensational experience that will keep you coming back for more.
            Indulge in a wide selection of pizzas made from the finest
            ingredients, including fresh dough, premium cheeses, and hand-picked
            toppings. From classic favorites to artisanal creations, our menu
            has something for everyone.
          </p>
        </div>
        <div className="orderBtnWrapper">
          <Link to={"/menu/Combo"}>
            <Button
              sx={{
                m: 4,
                bottom: 0,
                width: "82%",
                backgroundColor: "#550312",
                border: 1,
                color: "white",
                borderRadius: "40px",
                ":hover": {
                  bgcolor: "white",
                  color: "#550312",
                },
              }}
            >
              {" "}
              Order now
            </Button>
          </Link>
        </div>
        <div className="contentImg">
          <img src={require(`../../image/homeimg.png`)} alt="homeimg" />
        </div>
      </div>
      <div className="workHours">
        <div className="hourText">
          <p>MON-THUR 9AM - 7:30 PM</p>
          <p>FRI-SAT 10AM - 8PM</p>
          <p>SUN 2PM - 8:30 PM</p>
        </div>
        <div className="workClock">
          <Icon
            icon="il:clock"
            style={{
              fontSize: "80px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeArea;
