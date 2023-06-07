import { Button, Card, CardActions,CardMedia,Grid } from "@mui/material";
import React from "react";
import "./TabItem.css"
import tab1 from "./Selections.js"



export default function TabItem()
{
    return <div className="itemWrapper">
        <Grid container >

        {tab1.map((combo,index)=>{
            return <Grid key={index} item xs={12} md={6}>
                <Card sx={{mx:2,my:2}}>
                    <CardMedia
                        sx={{maxHeight:"50%"}}
                        component="img"
                        image={combo.link}/>
                    <h2>{combo.title}</h2>
                    <p>{combo.detail}</p>
                    <div className="itemPrice">
                        <h3>Price: {combo.price}</h3>
                        <CardActions>
                            <Button
                                style={{
                                backgroundColor:"#79EE50",
                                color:"black"
                                }}>Select</Button>
                        </CardActions>
                    </div>
                </Card>
            </Grid>
        })}

        </Grid>
    </div>
}