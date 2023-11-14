import React, { useEffect, useState,useContext } from 'react';
import Better from '../../../src/assets/better.jpeg'
import Comunicacion from '../../assets/comunicacion.jpg'
import { Fade } from "react-awesome-reveal";
import Button from '@mui/material/Button';
import * as Bs from "react-icons/bs";
import User from '../../assets/user.png'
import MobileStepper from '@mui/material/MobileStepper';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import useUser from "../../hooks/useUser";
import AuthContext from "../../context/authContext";
import Ayuda1 from '../../assets/ayuda1.png'
import LogoRojo from '../../assets/logo-rojo.png'
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  justifyContent:'center',
  boxShadow: 24,
  p: 4,
  borderRadius:5
};

const ColorChangingLabel = ({valor}) => {
  const [labelColor, setLabelColor] = useState('#39FF14');
  useEffect(() => {
    // Lógica para determinar el color basado en el valor de la base de datos
    if (valor === 'Penalizado') {
      setLabelColor('red');
    } else {
      setLabelColor('#39FF14');
    }
  }, [valor]);
      /* setLabelColor('#A9A9A9');
      setLabelColor('#39FF14') */
  return(
    <label className="ps-2" style={{color:labelColor}}><strong>{valor}</strong></label>
  )
}

export default function Nequi() {
  const { user, setUser } = useContext(AuthContext);
  const { isLogged, logout } = useUser();
    const [value, setValue] = useState(12);
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(160,160);
    const navigate = useNavigate();

    const [cerrar,setCerrar]=useState(false);
    const handleOpenCerrar=()=>{
        setCerrar(true);
    }
    const handleCerrar=()=>{
        setCerrar(false);
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
        Swal.fire({
          icon:'success',
          title:'¡Felicidades!',
          text:'Haz realizado tu compra de manera exitosa, vuelve pronto',
          showConfirmButton:false,
          timer:3500
        }).then(()=>{
          logout();
        })
    }
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
            <div className="d-flex flex-row ">
                <img src={LogoRojo} style={{width:70,height:70}}/>
                <div className="ps-2 pt-2">
                    <h5><strong>{user.name}</strong></h5>
                    <div className="d-flex flex-row">
                        <h5><strong>{user.email}</strong></h5>
                        <ColorChangingLabel className="ps-2" valor={user.estado}></ColorChangingLabel>
                    </div>
                </div>
            </div>
        </div>
        <center>
        <div className='d-flex flex-row'>
        <div className='d-flex justify-content-center pt-4 flex-column w-100 '>
            <h5 className=''>Paga con el siguiente código QR</h5>
            <h5 className=''>ó</h5>
            <h5 className=''>Digita el número que se muestra en pantalla.</h5>
            <h5 className='pt-4'><strong>Valor del tiquete:</strong></h5>
            <h5 className='text-danger'><strong>$2.000</strong></h5>
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
        <label className='pt-2'><strong>312456789</strong></label>
        </div>
        </div>
        <button onClick={handleSubmit} className='mt-3 mb-3 rounded-4'>¡Entendido!</button>
        <Modal open={cerrar}
          onClose={handleCerrar}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          >  
        <Box sx={style}>
          {/* <h2 id="parent-modal-title" className='text-danger text-align-center'>* Se ha cerrado la sección *</h2>  */}
          <center>
          <h1 id="parent-modal-title" className='text-danger text-align-center'>¡Felicidades!</h1>
          <h4 >Haz realizado tu compra de manera exitosa, vuelve pronto</h4>
          <button onClick={(e)=>(logout(e),handleCerrar)} className='m-4'>Yes</button> 
      
          </center>        
        </Box>
        </Modal> 
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