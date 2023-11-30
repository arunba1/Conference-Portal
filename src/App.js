import React from "react";
import Header from "./myComponents/Header";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "./myComponents/Login";
import Register from "./myComponents/Register";
import Home from "./myComponents/Home";
import Adminhome from "./myComponents/Adminhome";
import AdminLogin from "./myComponents/AdminLogin";
import Main from "./myComponents/Main";
//import Register from './myComponents/Register.jsx';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} /> 
        <Route path="/login" element={
          <div>
            <Login/>
          </div>
        } />
        <Route path="/Signup" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Adminhome" element={<Adminhome/>}/>
        <Route path="/Adminlog" element={<AdminLogin/>}/>
        <Route path="/header" element={<Header/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
