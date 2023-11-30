import React, { useState } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import { AppBar, Button, Toolbar,Typography } from '@mui/material';

import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function Demo1(){
    const nav=useNavigate()
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
  return (
    <>
    <div>
    <div>
      <AppBar sx={{background:"#063970"}}>
        <Toolbar>
        <GroupsIcon/>
            <Typography sx={{marginLeft:1}}>
                <h5>CONFERENCE PORTAL</h5>
            </Typography>
            
            <Button sx={{marginLeft:'auto'}} variant='contained' onClick={()=>nav("/")}>Back</Button>
            
        </Toolbar>
      </AppBar>
      </div>
      <div className='logincontents'>
      <div className='loginbox'>
      <center>
        <img src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
        height={350}
        width={400}/>
       </center>
      </div>
      
      <div>
      <center>
      <form>
        
        <div className='gbat'>
        <PersonIcon className='g2'/>
          <input name="email" className='g1' placeholder='Enter your Email'/>
          </div>
          <div className='gbat'>
          <KeyIcon className='g2'/>
          <input name='password' type='password' className='g1' placeholder='Enter your Password'/>
          </div>
          <button variant='contained' className='button'>Login</button>
        </form>
        </center>    
    </div>
    </div>
      </div>
    </>
  )
}

export default Login
