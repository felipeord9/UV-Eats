import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <React.Fragment>
          <button onClick={handleOpen} className='rounded-3 m-3' type="submit"><strong>Efectivo</strong></button>
          <button onClick={handleOpen} className='rounded-3 m-3' type="submit"><strong>Nequi</strong></button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={style}>
              <h2 id="child-modal-title" className="text-danger">¿Estas seguro?</h2>
              <Button onClick={handleClose}>Yes</Button>
              <Button color='error' onClick={handleClose}>No</Button>
            </Box>
          </Modal>
        </React.Fragment>
      );
}

export default function Inscripcion(){
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
        <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
        <div className='rounder-4'>
        <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-between 'style={{backgroundColor:'white'}}>
        {/* <img src={Logo4} style={{height:300, width:500}}alt=''/> */}
        <h1 className='text-danger'>Bienvenid@ a UV-Eats Beneficiari@</h1>
        <div className="d-flex flex-row">
            <h3 className="text-danger">Nombre:</h3>
            <h3>Catalina Cubillos</h3>
        </div>
        <div className="d-flex flex-row">
            <h3 className="text-danger">Código:</h3>
            <h3>202014532</h3>
        </div>
        <h3>¿Desea realizar la compra del almuerzo del dia de hoy?</h3>
        <div className="d-flex flex-row " style={{justifyContent:'space-between'}}>
        <Button onClick={handleOpenCerrar} variant="contained" className="rounded-3 secondary m-3" type="submit"><a href="/login" className="text-decoration-none" style={{color:'white'}}>Cancelar</a></Button>
        <Modal open={cerrar}
          onClose={handleCerrar}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
          <h2 id="parent-modal-title" className='text-danger text-align-center'>* Se ha cerrado la sección *</h2>          
        </Box>
        </Modal> 
        <button onClick={handleOpen} className='rounded-3 m-3' type="submit"><strong>Comprar</strong></button>
        <div className="d-flex flex-center justify-content-center">
        <Modal open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
          <h2 id="parent-modal-title">¿De qué forma desea cancelar su compra?</h2>
          <ChildModal />
        </Box>
        </Modal>   
        </div>
        </div>
      </div>
      </div>
      </div>
    );
}