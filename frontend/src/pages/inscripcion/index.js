import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import QRCode from 'react-qr-code';
import { Fade } from "react-awesome-reveal";
import MobileStepper from '@mui/material/MobileStepper';
import { useNavigate } from 'react-router-dom';
import User from '../../assets/user.png'
import Comunicacion from '../../assets/comunicacion.jpg'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

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

function ChildModal(){
    const [open,setOpen]=React.useState(false);
    const [value, setValue] = useState(12);
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(260,260);
    const handleOpenEfectivo=()=>{
        setOpen(true);
    }
    const handleCloseEfectivo=()=>{
        setOpen(false);
    }
    const [nequi,setNequi]=useState(false);
    const handleNaqui=()=>{
      setNequi(true);
    }
    const handleCloseNequi=()=>{
      setNequi(false);
    }
    return (
        <React.Fragment>
          <button onClick={handleOpenEfectivo} className='rounded-3 m-3' type="submit"><strong>Efectivo</strong></button>
          <button onClick={handleNaqui} className='rounded-3 m-3' type="submit"><strong>Nequi</strong></button>
          <Modal
            open={open}
            onClose={handleCloseEfectivo}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={style}>
              <center>
            <h2 id="child-modal-title" className="text-danger">* Felicidades *</h2>
            </center>
            <h4>Dirigirse donde el personal de bienestar y efectuar su pago para finalizar su compra</h4>
            </Box>
          </Modal>
          <Modal open={nequi}
            onClose={handleCloseNequi}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description">
              <Box sx={style}>
              <center>
              <h2 className="text-danger m-3">Su código de pago es: </h2>
              {value && (
              <QRCode
                title="GeeksForGeeks"
                value={value}
                bgColor={back}
                fgColor={fore}
                size={size === '' ? 0 : size} 
            />
            )}
              <h6>Una vez efectuado el pago, se completará su proceso de compra</h6>
            </center>
              </Box>
          </Modal>
        </React.Fragment>
      );
}

export default function Inscripcion(){
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
      <div className=' w-100 h-100 d-flex flex-row'>
    <div className='' style={{width:150}}></div>  
    <div className="d-flex justify-content-center align-items-center w-100 " style={{userSelect:'none'}}>
        <Fade cascade>
        <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
        <div className="d-flex flex-row">
            <div className="pe-5 me-5">
                <h1 className="p-2 rounded-4" style={{color:'white',backgroundColor:'#FF0000'}}>Bienvenido</h1>
            </div>
            <div className="d-flex flex-row pb-5 mb-3">
                <img src={User} style={{width:60}}/>
                <div className="ps-2 pt-2">
                    <h5><strong>Catalina García Cubillos</strong></h5>
                    <div className="d-flex flex-row">
                        <h5><strong>202058958</strong></h5>
                        <label className="ps-2" style={{color:'#39FF14'}}>sin penalización</label>
                    </div>
                </div>
            </div>
        </div>
        <h3 className="mb-3">¿Desea realizar la compra del almuerzo del dia de hoy?</h3>
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
          <h2 id="parent-modal-title" className='text-danger text-align-center'>¿Está seguro que desea cerrar la sección?</h2>
          <Button variant="contained" className='m-4' onClick={handleCerrar}><a href="/login" className="text-decoration-none" style={{color:'white'}}>Yes</a></Button>
          <Button variant="contained" className="m-4" color='error' onClick={handleCerrar}>No</Button> 
          </center>        
        </Box>
        </Modal> 
        <button onClick={(e)=>navigate('/compra')} className='rounded-3 m-3' type="submit"><strong>COMPRAR</strong></button>
        <div className="d-flex flex-center justify-content-center">
        </div>
        </div>
        <MobileStepper
        steps={3}
        position="static"
        /* activeStep={activeStep} */
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
    );
}

{/* 
        estructura para un childModal

<Modal open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
          <center>
          <h2 id="parent-modal-title">¿De qué forma desea cancelar su compra?</h2>
          <ChildModal />
          </center>
        </Box>
        </Modal>  */}