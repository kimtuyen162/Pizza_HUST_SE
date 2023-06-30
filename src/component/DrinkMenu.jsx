import React from "react";
import { CardMedia,Card,CardContent,Grid,Button,CardActions } from "@mui/material";
import { Icon } from '@iconify/react';
import { DrinkArray } from "../itemArr/OtherArray";


function DrinkMenu(props)
{

    function handleClick(item)
    {
        const select_drink={
            name:item.drink_name,
            type:"drink",
            order_drink:item,
            price:item.drink_price,
            quantity:1
        }
        props.addDrink(select_drink);
    }

    return <div className="otherWrapper">
        <Grid container spacing={2} align="center">
        {DrinkArray.map((item)=>{
            return <Grid key={item.drink_id} item xs={12} sm={6} md={3} justifyItems={'center'}>
            <Card style={{ border: "2px solid #FFBE41" }} sx={{maxHeight:'600px' ,borderRadius:"50px"}}>
            <CardMedia
                component="img"
                sx={{maxHeight:'150px'}}
                image={item.image}
                alt="drink"
            />
            <CardContent sx={{pb:0}}>

                <div className="descriptionWrapper">
                    <h2>{item.drink_name}</h2>
                    <div>{item.drink_desciption}</div>
                </div>

                <div className="priceTag">
                    <div className="iconWrapper"><Icon style={{fontSize:'30px', color:'#FFBE41'}} icon="si-glyph:money-coin"/></div>
                    <div className="priceWrapper"><h2>{item.drink_price}</h2></div>
                </div>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
            <Button
                sx={{ 
                    border:1,color:'#550312',borderRadius:'40px', 
                    borderColor:'#550312',maxHeight:'50px',
                    }}
                onClick={()=>{handleClick(item)}}>
                <h3>Add to Cart</h3>
            </Button>
            </CardActions>
            </Card>

            
            </Grid>
        })}
            
        </Grid>
    </div>
}

export default DrinkMenu;