import { Button,IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

function Checkout()
{
    return <div className="checkoutContainer">
        <h1 className="checkoutTitle">Your Cart</h1>
        <div className="cartContain">
            <div className="itemName">Combo 1</div>
            <div className="addedItemPrice">200000</div>
            <IconButton sx={{px:0 , py:0}} aria-label="delete"><DeleteIcon/></IconButton>
            </div>
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