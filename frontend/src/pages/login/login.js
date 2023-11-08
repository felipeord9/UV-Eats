import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar'
import { Stack } from '@mui/material';
import Logo from '../../../src/assets/R.jpg'
import Logo2 from '../../../src/assets/univalle-logo-01.png'
import Logo3 from '../../../src/assets/logo-universidad-del-valle.png'
import Logo4 from '../../../src/assets/descarga.png'
import Logo5 from '../../../src/assets/eats.png'
import Logo6 from '../../../src/assets/eats2.png'
import Better from '../../../src/assets/better.jpeg'
import Comunicacion from '../../assets/comunicacion.jpg'
import './login.css';
import { Fade } from "react-awesome-reveal";
import Button from '@mui/material/Button';
import * as Bs from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
    <div className=' w-100 h-100 d-flex flex-row'>
    <div className='' style={{width:150}}></div>  
    <div className="d-flex justify-content-center align-items-center w-100 " style={{userSelect:'none'}}>
      <Fade cascade direction='down'>
      <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
      <img className='mb-2' src={Better} style={{height:280, width:300}}alt=''/>
      {/* <h1 className='text-danger'>Bienvenido a UV-Eats</h1> */}
      <form onSubmit={handleLogin} className=''>
        <div className='input_group m-2 d-flex flex-column mb-4 mt-2'>
          <input type={shown ? 'text':'password'} onChange={(e)=>setPassword(e.target.value)} id='email' className='input_group_input' required/>
          <label for="email" className='input_group_label'>Código estudiantil</label>
          <span className='position-absolute' onClick={switchShown} style={{ right: 10, cursor: "pointer",fontSize:25 }}>{shown ? <Bs.BsEye/>:<Bs.BsEyeSlash/>}</span>
        </div>
        <div className='align-content-center text-align-center align-items-center ms-5'>
          <button className='rounded-3' type="submit"><strong>Entrar</strong></button>
        </div>
      </form>
    </div>
    </Fade>
    </div>
    <div className='d-flex h-100 d-flex flex-column'>
      <div className='h-100'>
      </div>
      <div className=' h-25'>
        <Button onClick={(e)=>navigate('/PQRS')} type='button'><img src={Comunicacion} style={{height:100,width:100}}></img></Button>
      </div>
    </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};