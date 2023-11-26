import React, { useEffect, useState, useContext } from 'react';
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
import Ayuda1 from '../../assets/ayuda1.png'
import './login.css';
import AuthContext from "../../context/authContext";
import { Fade } from "react-awesome-reveal";
import Button from '@mui/material/Button';
import * as Bs from "react-icons/bs";
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { user, setUser } = useContext(AuthContext);
  const {login,isLoginLoading,hasLoginError,isLogged}=useUser()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate =useNavigate()

  useEffect(()=>{
    if(isLogged && user.role==='beneficiario')navigate('/inscripcion');
    if(isLogged && user.role==='noBeneficiario'
    || isLogged && user.role==='beneficiario' && user.estado==='Penalizado'
    || isLogged && user.role==='beneficiario' && user.estado==='En Fila')navigate('/no/beneficiarios');
    if(isLogged && user.estado==='comprado')navigate('/already/buy')
    if(isLogged && user.role==='admin')navigate('/table/no/beneficiarios')
  },[isLogged,navigate]);

  const handleLogin=async(e)=>{
    e.preventDefault();
    login({email,password});
  }

  const [shown,setShown]=useState("");
  const switchShown =()=>setShown(!shown);

  return(
    <div className=' w-100 h-100 d-flex flex-row'>
    <div className='' style={{width:150}}></div>  
    <div className="d-flex justify-content-center align-items-center w-100 " style={{userSelect:'none'}}>
      <Fade cascade direction='down'>
      <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
      <img className='mb-2' src={Better} style={{height:320, width:430}}alt=''/>
      {/* <h1 className='text-danger'>Bienvenido a UV-Eats</h1> */}
      <form onSubmit={handleLogin} className=''>
        <div className='input_group m-2 d-flex flex-column mb-4 mt-2'>
          <input type={shown ? 'text':'password'} onChange={(e)=>(setPassword(e.target.value),setEmail(e.target.value))} id='email' className='input_group_input' required/>
          <label for="email" className='input_group_label'>Código estudiantil</label>
          <span className='position-absolute' onClick={switchShown} style={{ right: 10, cursor: "pointer",fontSize:25 }}>{shown ? <Bs.BsEye/>:<Bs.BsEyeSlash/>}</span>
        </div>
        <div className='align-content-center text-align-center align-items-center ms-5'>
          <button className='rounded-3' type="submit"><strong>Entrar</strong></button>
        </div>
      </form>
      {isLoginLoading && <div className='loading'>Cargando...</div>}
      {hasLoginError && <div className='text-danger text-center mt-2'>Credenciales Incorrectas</div>}
    </div>
    </Fade>
    </div>
    <div className='d-flex h-100 d-flex flex-column'>
      <div className='h-100'>
      </div>
      <div className=' h-25 me-3'>
        <Button onClick={(e)=>navigate('/PQRS')} type='button'><img src={Ayuda1} style={{height:100,width:100}}></img></Button>
      </div>
    </div>
    </div>
  )
}
