import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import "./Adminhome.css"

function Adminhome() {
    const [allI,setallI]=useState(null);
    const nav=useNavigate();

    const handleClick=()=>{
        nav("/");

    }

    useEffect(()=>{
        getpdf();
      },[]);

      const getpdf=async()=>{
        const result=await axios.get("http://localhost:5000/get-files");
        console.log(result.data.data);
        setallI(result.data.data);
      }

    const showPdf=(pdf)=>{
        window.open(`http://localhost:5000/files/${pdf}`,"_blank","noreferrer")
      }
  return (
    <div>
        <div>
      <AppBar sx={{background:"#063970"}}>
        <Toolbar>
        <GroupsIcon/>
            <Typography sx={{marginLeft:1}}>
                <h5>CONFERENCE PORTAL</h5>
            </Typography>
            <Button sx={{marginLeft:'auto'}} variant='contained' onClick={handleClick}>Logout</Button>
        </Toolbar>
      </AppBar>
      </div>
        <div>
      <center>
        <div className='opdiv'>
        {allI===null?"":allI.map((data)=>{
          return(
            <div className='innerop'>
          <h5>Title:
          <div className='gfg'>
          {data.title}
          </div>
          </h5>
          <button className='button' onClick={()=>showPdf(data.pdf)}>Show Pdf</button>
          </div>
          )
        })}
          
      </div>
      </center>
      </div>
    </div>
  )
}

export default Adminhome
