import React from "react";
import { CardMedia,Card,CardContent,Grid,Button,CardActions } from "@mui/material";
import { ComboArray } from "../itemArrays/ComboArray";
import { Icon } from '@iconify/react';


function ComboMenu(props)
{


    function handleClick(item)
    {
        props.addCombo(item);
    }


    return <div className="comboWrapper">
        <Grid container spacing={2} align="center">
        {ComboArray.map((item,index)=>{
            return <Grid key={index} item xs={12} sm={6} md={4} justifyItems={'center'}>
            <Card style={{ border: "2px solid #FFBE41" }} sx={{maxHeight:'600px' ,borderRadius:"50px"}}>
            <CardMedia
                component="img"
                sx={{maxHeight:'150px'}}
                image={item.image}
                alt="pizza1"
            />
            <CardContent sx={{pb:0}}>

                <div className="descriptionWrapper">
                    <h2>{item.title}</h2>
                    <p>{item.desciption}</p>
                </div>

                <div className="priceTag">
                    <div className="iconWrapper"><Icon style={{fontSize:'30px', color:'#FFBE41'}} icon="si-glyph:money-coin"/></div>
                    <div className="priceWrapper"><h2>{item.price}</h2></div>
                </div>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
            <Button
                onClick={()=>{handleClick(item)}} 
                sx={{
                    border:1,color:'#550312',borderRadius:'40px', 
                    borderColor:'#550312',maxHeight:'50px',
                    }}>
                <h3>Add to Cart</h3>
            </Button>
            </CardActions>
            </Card>

            
            </Grid>
        })}
            
        </Grid>
    </div>
}

export default ComboMenu