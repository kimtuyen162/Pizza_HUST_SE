import { Button,IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

function Checkout(props)
{

    function handleClick(itemId){
        props.onDel(itemId);
    }

    return <div className="checkoutContainer">
        <h1 className="checkoutTitle">Your Cart</h1>
        <div className="cartContain">
            {props.cart.map((it,index)=>
            {
                return <div key ={index} className="checkoutItem">
                <div>{it.title}</div>
                <div>{it.price}</div>
                <IconButton 
                    onClick={() => {handleClick(index, "it");}}
                    sx={{px:0 , py:0}} 
                    aria-label="delete" ><DeleteIcon/></IconButton>
                </div>
            })}
            </div>
        <div className="totalBox">
            <h1 className="textTotal">Total</h1>
            <div className="totalValue"></div>
            <Button 
                style={{
                    backgroundColor:"#2FB12C",
                    color:"white"
                }} sx={{ my: 2,width:"100%" }} >Checkout</Button>
        </div>
    </div>
}

export default Checkout;