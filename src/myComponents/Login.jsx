import React, { useState } from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';


const Login = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: '', // 'email' instead of 'Email'
    password: '', // 'password' instead of 'Password'
  });

  const onChangeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3002/Login", formData)
      .then((response) => {
        console.log(response.status, response.data);
        alert(response.data); // Display alert based on server response

        if (response.data === "Login Successful") {
          // Redirect to the home page
           nav('/home');
          
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
        alert('Invalid Credentials...');
      });
  };


  return (
    <div>
      <div>
        <AppBar sx={{ background: '#063970' }}>
          <Toolbar>
            <GroupsIcon />
            <Typography sx={{ marginLeft: 1 }}>
              <h5>CONFERENCE PORTAL</h5>
            </Typography>
            <Button sx={{ marginLeft: 'auto' }} variant="contained" onClick={() => nav('/')}>
              Back
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className="logincontents">
        <div className="loginbox">
          <center>
            <img
              src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
              alt='logo'
              height={350}
              width={400}
            />
          </center>
        </div>

        <div>
          <center>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className="gbat">
                <PersonIcon className="g2" />
                <input

                  name="email"
                  className="g1"
                  placeholder="Enter your Email"
                  onChange={onChangeHandler}
                  value={formData.email}
                  required
                />
              </div>
              <div className="gbat">
                <KeyIcon className="g2" />
                <input
                  name="password"
                  type="password"
                  className="g1"
                  placeholder="Enter your Password"
                  onChange={onChangeHandler}
                  value={formData.password}
                  required
                />
              </div>
              <button type="submit" variant="contained" className="button">
                Login
              </button>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Login;
