import { Button } from "@mui/material";
import React from "react";

function Checkout()
{
    return <div className="checkoutContainer">
        <h1 className="checkoutTitle">Your Cart</h1>
        <div className="totalBox">
            <h1 className="textTotal">Total</h1>
            <Button 
                style={{
                    backgroundColor:"#2FB12C",
                    color:"white"
                }} sx={{ my: 2,width:"100%" }} >Checkout</Button>
        </div>
    </div>
}

export default Checkout;