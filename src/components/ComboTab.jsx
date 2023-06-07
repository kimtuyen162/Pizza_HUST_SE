import { Button, Card, CardActions,CardMedia,Grid } from "@mui/material";
import React from "react";
import "./ComboTab.css"
import {tab1,tab2} from "./Selections.js"
import { useParams } from "react-router-dom";



export default function ComboTab()
{
    const {comboSelect} =useParams();
    console.log(comboSelect)
    let selectedTab=tab1;

    switch(comboSelect) {
        case 'School Year':
            selectedTab=tab1;
            break;
        case 'Kids Box':
            selectedTab=tab2;
            break;
        default:
    }

    return <div className="itemWrapper">
        <Grid container>

        {selectedTab.map((combo,index)=>{
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