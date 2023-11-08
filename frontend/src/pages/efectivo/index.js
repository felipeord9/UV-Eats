import React, { useEffect, useState } from 'react';

import Better from '../../../src/assets/better.jpeg'
import Comunicacion from '../../assets/comunicacion.jpg'
import { Fade } from "react-awesome-reveal";
import Button from '@mui/material/Button';
import * as Bs from "react-icons/bs";
import User from '../../assets/user.png'
import MobileStepper from '@mui/material/MobileStepper';
import { useNavigate } from 'react-router-dom';

export default function Efectivo() {

  const navigate = useNavigate();

  return(
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
            <div className="d-flex flex-row">
                <img src={User} style={{width:70}}/>
                <div className="ps-2 pt-2">
                    <h5><strong>Catalina García Cubillos</strong></h5>
                    <div className="d-flex flex-row">
                        <h5><strong>202058958</strong></h5>
                        <label className="ps-2" style={{color:'#39FF14'}}>sin penalización</label>
                    </div>
                </div>
            </div>
        </div>
        <center>
        <div className='d-flex justify-content-center pt-5 '>
        <h2 style={{width:500}}><strong> Acércate a las oficinas de bienestar en el primer piso para pagar tu tiquete.</strong></h2>
        </div>
        <button onClick={(e)=>navigate('/login')} className='mt-3 mb-3 rounded-4'>¡Entendido!</button>
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
      <div className=' h-25'>
        <Button onClick={(e)=>navigate('/PQRS')} type='button'><img src={Comunicacion} style={{height:100,width:100}}></img></Button>
      </div>
    </div>
    </div>
  )
}