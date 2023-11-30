import { AppBar,Button,Toolbar,Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
//import React from 'react';
function Register(){
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    email: '', 
    password: '', 
  });

  const onChangeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3002/Register",formData).then((response) => {
      console.log(response.status, response.data);
      alert(response.data); 

        if (response.data === "Register Successful") {
          // Redirect to home page
           nav('/login');
          
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
        alert('Error: ' + error.message);
      });
  };
  return (
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
        alt='logo'
        height={340}
        width={400}/>
       </center>
      </div>
      
      <div>
      <center>
        <form onSubmit={(e)=>onSubmitHandler(e)}>
        <div className='gbat'>
            <PersonIcon className='g2'/>
            <input name="name" type='text' className='g1' placeholder='Enter your Name'  onChange={onChangeHandler}
                  value={formData.name}
                    required
                  />
        </div>
      <div className='gbat'>
        <AccountCircleIcon className='g2'/>
        <input name="email" className='g1' placeholder='Enter your Email'  onChange={onChangeHandler}
                  value={formData.email}
                    required
                  />
        </div>
        <div className='gbat'>
        <KeyIcon className='g2'/>
        <input name='password' type='password' className='g1' placeholder='Enter your Password'  onChange={onChangeHandler}
                  value={formData.password}
                    required
                  />
        </div>
        <button variant='contained' className='button'>Register</button>
      </form>
        </center>    
    </div>
    </div>
    </div>
  )
}

export default Register
