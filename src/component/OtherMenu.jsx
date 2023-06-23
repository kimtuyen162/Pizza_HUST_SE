import React from "react";
import { CardMedia,Card,CardContent,Grid,Button,CardActions } from "@mui/material";
import { Icon } from '@iconify/react';


function OtherMenu(props)
{

    return <div className="otherWrapper">
        <Grid container spacing={2} align="center">
        {props.choice.map((item,index)=>{
            return <Grid key={index} item xs={12} sm={6} md={3} justifyItems={'center'}>
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
                sx={{ 
                    border:1,color:'#550312',borderRadius:'40px', 
                    borderColor:'#550312',maxHeight:'100px',
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

export default OtherMenu