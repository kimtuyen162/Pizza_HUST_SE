import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const HomeArea = () => {
  return (
    <div>
      <div className="homeContent">
        <div className="contentText">
          <h1>Pizzalicious</h1>
          <h2>Enjoy your days</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            odio aliquet sapien neque, porttitor tellus pellentesque interdum
            sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus
            semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu,
            adipiscing fermentum maecenas nunc diam at. Justo, justo, turpis
            suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus
            vitae est.
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
