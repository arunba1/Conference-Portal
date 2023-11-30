import React from "react";
import { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import "./Header.css";
import {useNavigate} from "react-router-dom";
function Main(){
    const nav = useNavigate()
    const [value,setValue]=useState();
return(
<div>
<div>
    
        <AppBar sx={{background:"#063970"}}>
        <Toolbar>
            
            <GroupsIcon/>
            <Typography sx={{marginLeft:1}}>
                <h5>CONFERENCE PORTAL</h5>
            </Typography>
            <Tabs sx={{marginLeft:5}}
            textColor="inherit" 
            value={value}
                onChange={(e, value) => setValue(value)}
             indicatorColor="secondary"
             >
                <Tab label="Services"/>
                <Tab label="Contact Us"/>
                <Tab label="About Us"/>

            </Tabs>
            <Button sx={{marginLeft:'auto'}} variant="contained" onClick={()=>nav('/header')}>User</Button>
            <Button sx={{marginLeft:1}}  variant="contained" onClick={()=>nav("/Adminlog")}>Admin</Button>
        </Toolbar>
        </AppBar>
    
    </div>

    <div className="box">
    <center>
        <img src="https://facultytick.com/wp-content/uploads/2022/06/Sastra-Deemed-University.jpg" alt="Logoimage"
        height={695}
        width={1300}>

        </img>
        </center>
    </div>
    
</div>
)

}


export default Main