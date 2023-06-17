import React, { useState } from "react";
import { Tabs,Tab} from "@mui/material";

function SelectionBar()
{

    const selections=['Combo','Pizza','Starters','Drinks'];

    const [fix,setFixed] = useState(false);

    function setFix(){
        if(window.scrollY>=66)setFixed(true);
        else setFixed(false);
    }
    window.addEventListener("scroll",setFix);

    return <div className={fix ? 'fixedBar' : 'normalBar'}>
        <div className="barWrapper">
            <Tabs
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example">
                {selections.map((item,index)=>{
                    return <Tab className="selectTab" key={index} label={item} sx={{ border:1,mx:4,color:'#550312',borderRadius:'40px', borderColor:'#550312'}}/>
                })}
            </Tabs>
    </div>
    </div>
}

export default SelectionBar;