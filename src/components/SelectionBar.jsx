import React from "react";
import Button from '@mui/material/Button';



export function SelectionBar()
{
    return <div className="selectBar">
        <Button variant='contained' 
            style={{
                color:"black",
                backgroundColor:"white",
                my: 3
            }}
            sx={{ my: 2, mx:2 }}>Option</Button>
    </div>
}
