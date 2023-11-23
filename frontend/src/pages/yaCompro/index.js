import React, { useEffect, useState,useContext } from 'react';
import AuthContext from "../../context/authContext";
import Better from '../../../src/assets/better.jpeg'
import Comunicacion from '../../assets/comunicacion.jpg'
import { Fade } from "react-awesome-reveal";
import Button from '@mui/material/Button';
import * as Bs from "react-icons/bs";
import User from '../../assets/user.png'
import MobileStepper from '@mui/material/MobileStepper';
import { useNavigate } from 'react-router-dom';
import useUser from "../../hooks/useUser";
import { findUsers, updateUser } from "../../services/userService"
import Ayuda1 from '../../assets/ayuda1.png';
import LogoRojo from '../../assets/logo-rojo.png'
import Swal from 'sweetalert2';


const ColorChangingLabel = ({valor}) => {
  const [labelColor, setLabelColor] = useState('#39FF14');
  useEffect(() => {
    // Lógica para determinar el color basado en el valor de la base de datos
    if (valor === 'Penalizado') {
      setLabelColor('red');
    } else if(valor === 'YaCompro'){
      setLabelColor('red');
    }else {
      setLabelColor('#39FF14');
    }
  }, [valor]);
      /* setLabelColor('#A9A9A9');
      setLabelColor('#39FF14') */
  return(
    <label className="ps-2" style={{color:labelColor}}><strong>{valor}</strong></label>
  )
}

export default function YaCompro() {
  const { user, setUser } = useContext(AuthContext);
  const { isLogged, logout } = useUser();
  const navigate = useNavigate();

  return(
    <>
      {isLogged && (
    <div className=' w-100 h-100 d-flex flex-row'>
    <div className='' style={{width:150}}></div>  
    <div className="d-flex justify-content-center align-items-center w-100 " style={{userSelect:'none'}}>
      <Fade cascade direction='down'>
      <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
      {/* <h1 className='text-danger'>Bienvenido a UV-Eats</h1> */}
      <form  className=''>
      <div className="d-flex flex-row">
            <div className="pe-5 me-5">
                <h1 className="p-2 rounded-4" style={{color:'white',backgroundColor:'#FF0000',fontSize:50}}>Bienvenido</h1>
            </div>
            <div style={{width:100}}></div>
            <div className="d-flex flex-row pb-2 mb-3">
                <img src={LogoRojo} style={{width:70,height:70}}/>
                <div className="ps-2 pt-2">
                    <h5><strong>{user.name}</strong></h5>
                    <div className="d-flex flex-row">
                        <h5><strong>{user.email}</strong></h5>
                        <label className="ps-2 text-danger" ><strong>Ya Compró</strong></label>
                    </div>
                </div>
            </div>
        </div>
        <center>
        <div className='d-flex flex-column justify-content-center  '>
        <h1 className='mb-4 text-danger' style={{fontSize:100}}><strong>¡Uops...!</strong></h1>
        <h2 ><strong> Parece que ya has realizado tu compra. Acercate a efectuar tu pago o de no ser así, acerca a el área de sistemas para solucionar tu problema.</strong></h2>
        </div>
        <button onClick={(e)=>logout(e)} className='mt-3 mb-3 rounded-4'>¡Entendido!</button>
        </center>
      </form>
      <MobileStepper
        steps={3}
        position="static"
        activeStep={2}
      />
    </div>
    </Fade>
    </div>
    <div className='d-flex h-100 d-flex flex-column'>
      <div className='h-100'>
      </div>
      <div className='h-25 me-3'>
        <Button onClick={(e)=>navigate('/PQRS')} type='button'><img src={Ayuda1} style={{height:100,width:100}}></img></Button>
      </div>
    </div>
    </div>
    )}
    </>
  )
}