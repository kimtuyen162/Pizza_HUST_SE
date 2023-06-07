import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"


const comboSelections=['School Year', 'Starter', 'Kids Box', 'Pizza', 'Drinks'];


export function SelectionBar()
{
    return <div className="selectBar">
        {comboSelections.map((choice,index)=>{
        return <Link key={index} to={`/${choice}`}>
            <Button variant='contained' 
                style={{
                    color:"black",
                    backgroundColor:"white",
                    my: 3
                }}
                sx={{ my: 2, mx:1 }}>{choice}</Button>
            </Link>
        })}
    </div>
}
