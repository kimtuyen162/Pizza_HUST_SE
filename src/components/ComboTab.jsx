import { Button, Card, CardActions,CardMedia,Grid,FormControl,InputLabel,MenuItem,Select } from "@mui/material";
import "./ComboTab.css"
import {tab1,tab2,tab3} from "./Selections.js"
import { useParams } from "react-router-dom";
import { addOns } from "./AddOn";



export default function ComboTab(props)
{
    const {comboSelect} =useParams();
    let selectedTab=tab1;

    switch(comboSelect) {
        case 'School Year':
            selectedTab=tab1;
            break;
        case 'Kids Box':
            selectedTab=tab2;
            break;
        case 'Pizza':
            selectedTab=tab3;
            break;
        default:
    }

    function handleClick(item){
        props.onAdd(selectedTab[item])
    }

    function handleChange(event){
        console.log(event.target.value);
    }

    if(comboSelect!=="Pizza")
    {
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
                                    type="submit"
                                    onClick={() => {handleClick(index, "combo");}}
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
    } else{
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

                    {addOns.map((opt,typeindex)=>{
                        return <FormControl key={typeindex} required fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">{opt.type}</InputLabel>
                            <Select defaultValue={0} label={opt.type} onChange={handleChange} required>
                                {opt.options.map((choice,choiceindex)=>{
                                    return <MenuItem key={choiceindex} value={choice.price}>{choice.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    })}
                    

                    <div className="itemPrice">
                        <h3>Price: {combo.price}</h3>
                        <CardActions>
                            <Button
                                type="submit"
                                onClick={() => {handleClick(index);}}
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


    
}