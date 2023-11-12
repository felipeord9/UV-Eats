import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import QRCode from 'react-qr-code';
import { Fade } from "react-awesome-reveal";
import Efectivo from "../efectivo";
import MobileStepper from '@mui/material/MobileStepper';
import Ayuda1 from '../../assets/ayuda1.png'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import User from '../../assets/user.png'
import useUser from "../../hooks/useUser";
import AuthContext from "../../context/authContext";
import Comunicacion from '../../assets/comunicacion.jpg'


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

export default function Compra(){
    const { user, setUser } = useContext(AuthContext);
    const { isLogged, logout } = useUser();
    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
    }
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const [cerrar,setCerrar]=useState(false);
    const handleOpenCerrar=()=>{
        setCerrar(true);
    }
    const handleCerrar=()=>{
        setCerrar(false);
    }
    return(
        <>
      {isLogged && (
        <div className=' w-100 h-100 d-flex flex-row'>
        <div className='' style={{width:150}}></div>  
        <div className="d-flex justify-content-center align-items-center w-100 " style={{userSelect:'none'}}>
        {/* <img src={Logo4} style={{height:300, width:500}}alt=''/> */}
        <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
        <Fade cascade>
        <div className="d-flex flex-row">
            <div className="pe-5 me-5">
                <h1 className="p-2 rounded-4" style={{color:'white',backgroundColor:'#FF0000'}}>Bienvenido</h1>
            </div>
            <div className="d-flex flex-row pb-2 mb-3">
                <img src={User} style={{width:70,height:60}}/>
                <div className="ps-2 pt-2">
                    <h5><strong>{user.name}</strong></h5>
                    <div className="d-flex flex-row">
                        <h5><strong>{user.email}</strong></h5>
                        <label className="ps-2" style={{color:'#39FF14'}}>sin penalización</label>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
        <div className="d-flex flex-row ">
            <h1 className=''>¿De qué forma desea</h1>
            <h1 className='text-danger ps-2 pe-2'>realizar</h1>
        </div>
            <h1 className=''>su compra?</h1>

        <div className="d-flex flex-row " style={{justifyContent:'space-between'}}>
        <Button onClick={handleOpenCerrar} variant="contained" className="rounded-3 secondary m-3" type="submit">Cancelar</Button>
        <Modal open={cerrar}
          onClose={handleCerrar}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          >  
        <Box sx={style}>
          {/* <h2 id="parent-modal-title" className='text-danger text-align-center'>* Se ha cerrado la sección *</h2>  */}
          <center>
          <h2 id="parent-modal-title" className='text-danger text-align-center'>¿Está seguro que desea cancelar su compra?</h2>
          <Button onClick={(e)=>(logout(e),handleCerrar)} variant="contained" className='m-4' >Yes</Button>
          <Button variant="contained" className="m-4" color='error' onClick={handleCerrar}>No</Button> 
          </center>        
        </Box>
        </Modal> 
        <button onClick={(e)=>navigate('/compra/efectivo')}className='rounded-3 m-3' type="submit"><strong><a href={<Efectivo/>} ></a>Efectivo</strong></button>
        <button onClick={(e)=>navigate('/compra/nequi')} className='rounded-3 m-3' type="submit"><strong>Nequi</strong></button>
        <div className="d-flex flex-center justify-content-center">
        </div>
        </div>
        <MobileStepper
        steps={3}
        position="static"
        activeStep={1}
      />
      </div>
      </div>
      <div className='d-flex h-100 d-flex flex-column'>
      <div className='h-100'>
      </div>
      <div className=' h-25 me-3'>
        <Button onClick={(e)=>navigate('/PQRS')} type='button'><img src={Ayuda1} style={{height:100,width:100}}></img></Button>
      </div>
    </div>
      </div>
      )}
      </>
    );
}