import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar'
import { Stack } from '@mui/material';
import Logo from '../../../src/assets/R.jpg'
import Logo2 from '../../../src/assets/univalle-logo-01.png'
import Logo3 from '../../../src/assets/logo-universidad-del-valle.png'
import Logo4 from '../../../src/assets/descarga.png'
import Logo5 from '../../../src/assets/eats.png'
import './login.css';
import * as Bs from "react-icons/bs";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin=async(e)=>{
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  const [shown,setShown]=useState("");
  const switchShown =()=>setShown(!shown);
  const onChange=({currentTarget})=>setPassword(currentTarget.value);

  return(
    <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
      <div className='rounder-4'>
      <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-center 'style={{backgroundColor:'white'}}>
      {/* <img src={Logo5} style={{height:150, width:200}}alt=''/> */}
      <h1 className='text-danger'>Bienvenido a UV-Eats</h1>
      <h2>Log In</h2>
      <form onSubmit={handleLogin} className=''>
        <div className='input_group m-2 '>
          <input type='text' id='usuario' className='input_group_input' required onChange={(e)=> setUserName(e.target.value)}/>
          <label for="usuario" className='input_group_label'>Usuario</label>
        </div>
        <div className='input_group m-2 d-flex flex-column'>
          <input type={shown ? 'text':'password'} onChange={(e)=>setPassword(e.target.value)} id='email' className='input_group_input' required/>
          <label for="email" className='input_group_label'>Password</label>
          <span className='position-absolute' onClick={switchShown} style={{ right: 10, cursor: "pointer",fontSize:25 }}>{shown ? <Bs.BsEye/>:<Bs.BsEyeSlash/>}</span>
        </div>
        <div className='align-content-center text-align-center align-items-center ms-5'>
          <button className='rounded-3' type="submit"><strong>Entrar</strong></button>
        </div>
        <label><a href='/recovery' className='text-decoration-none m-2' style={{fontSize:'medium'}}><strong>¿Olvidaste tu constraseña?</strong></a></label>
      </form>
    </div>
    </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};