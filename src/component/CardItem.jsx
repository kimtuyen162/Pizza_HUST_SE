import { Card,CardActions,CardContent,CardMedia,Grid,Button,
Modal,Box,Typography, NativeSelect,InputLabel
,FormControl} from "@mui/material";
import { Icon } from '@iconify/react';
import { PizzaArray } from "./PizzaArray";
import { CrustArray,SizeArray } from "./AddOnArray";
import React from "react";
import "./layout.css"

function CardItem()
{

    const modalStyle = {
        position: 'relative',
        top: '50%',
        left: '50%',
        mr:'350px',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'white',
        border: '2px solid #FFBE41',
        boxShadow: 24
      };


    const [it, setIt] = React.useState(PizzaArray[0]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (event,item) => {
        setIt(item);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
        

    return <div className="cardWrapper">

        <Grid container spacing={2} align="center">
        {PizzaArray.map((item,index)=>{
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
                onClick={event => handleOpen(event,item)}
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

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
            <div className="modalWrapper">
            <img src={it.image} alt="pizza"/>
            <div className="modalContentWrapper">
            <Typography id="modal-modal-title" sx={{ mt: 2, mx:2 }} style={{color:"#550312"}} variant="h4" component="h2">
                {it.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mx:2 }}>
                {it.desciption}
            </Typography>

            <div className="optionPane">

            <div className="sizeWrapper">
            <FormControl style={{ border: "2px solid #FFBE41" }} sx={{mx:2,my:1}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Size
            </InputLabel>
            <NativeSelect
                defaultValue={0}
                inputProps={{
                name: 'size',
                id: 'uncontrolled-native',
                }}
            >
                {SizeArray.map((item,index)=>{
                    return <option  key={index} value={item.value}>{item.title}</option>
                })}
            </NativeSelect>
            </FormControl>
            </div>
            
            <div className="crustWrapper">
            <FormControl style={{ border: "2px solid #FFBE41" }} sx={{mx:2,my:1}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Crust
            </InputLabel>
            <NativeSelect
                defaultValue={0}
                inputProps={{
                name: 'crust',
                id: 'uncontrolled-native',
                }}
            >
                {CrustArray.map((item,index)=>{
                    return <option key={index} value={item.value}>{item.title}</option>
                })}
            </NativeSelect>
            </FormControl>
            </div>
            

            </div>
            <div className="buttonWrapper"><Button sx={{mx:2,my:1,
                    border:1,color:'#550312',borderRadius:'40px', 
                    borderColor:'#550312',maxHeight:'100px',
                    }}>Add Now</Button></div>
            </div>
            </div>
            </Box>
        </Modal>
    </div>
}

export default CardItem;