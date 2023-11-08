import React, { useEffect, useState } from 'react';
import Better from '../../../src/assets/better.jpeg'
import Comunicacion from '../../assets/comunicacion.jpg'
import { Fade } from "react-awesome-reveal";
import Button from '@mui/material/Button';
import * as Bs from "react-icons/bs";
import User from '../../assets/user.png'
import MobileStepper from '@mui/material/MobileStepper';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';

export default function Nequi() {
    const [value, setValue] = useState(12);
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(160,160);
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
        <div className='d-flex flex-row'>
        <div className='d-flex justify-content-center pt-5 flex-column w-100 '>
            <h5 className=''>Paga con el siguiente código QR</h5>
            <h5 className=''>ó</h5>
            <h5 className=''>Digita el número que se muestra en pantalla.</h5>
            <h5 className='pt-4'>Valor del tiquete:</h5>
            <h5 className='text-danger'>$2.000</h5>
        </div>
        <div className='w-50 d-flex flex-column ps-5 pe-2 justify-content-center pt-5'>
        {value && (
              <QRCode
                title="GeeksForGeeks"
                value={value}
                bgColor={back}
                fgColor={fore}
                size={size === '' ? 0 : size} 
            />
        )}
        <label className='pt-2'>312456789</label>
        </div>
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