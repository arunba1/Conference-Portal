import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import "./home.css";
import axios from 'axios';
function Home(){
    const nav=useNavigate();
    const [title,setTitle]=useState("");
    const [file,setFile]=useState("");


    const handleClick=()=>{
            nav("/");

    }

    const submitImage=async(e)=>{
      e.preventDefault();
      const formData=new FormData();
      formData.append("title",title);
      formData.append("file",file);
      console.log(title,file);
      const result=await axios.post("http://localhost:5000/upload-files",formData,{
        headers:{"Content-Type":"multipart/form-data"},

      });
      console.log(result);

      if(result.data.status==="ok"){
        alert(" Document Uploaded Successfully");
      }
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
      <center>
      <div className='pdftry'>
      <form className='stylef' onSubmit={submitImage}>
      <h3>Upload Pdf</h3>
      <input type='text' className='form-control' placeholder='Title' required
        onChange={(e)=>setTitle(e.target.value)}
        
      /><br/><br/>
      <input type='file' className='form-control' accept='application/pdf' required
        onChange={(e)=>setFile(e.target.files[0])}//[0] for accepting first file
      /><br/>
      <button className='button' type='submit' >Upload</button>
      </form>
      </div>
      </center>

        
    </div>
  )
}

export default Home;
