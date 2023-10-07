import React from "react";
import Button from "@mui/material/Button";

export default function Inscripcion(){
    const handleSubmit=async(e)=>{
        e.preventDefault();
    }
    return(
        <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
        <div className='rounder-4'>
        <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-between 'style={{backgroundColor:'white'}}>
        {/* <img src={Logo4} style={{height:300, width:500}}alt=''/> */}
        <h1 className='text-danger'>Querid@ Beneficiario</h1>
        <div className="d-flex flex-row">
            <h3 className="text-danger">Nombre:</h3>
            <h3>Catalina Cubillos</h3>
        </div>
        <div className="d-flex flex-row">
            <h3 className="text-danger">Código:</h3>
            <h3>2020...</h3>
        </div>
        <h3>¿Desea realizar compra del almuerzo del dia de hoy?</h3>
        <div className="d-flex flex-row " style={{justifyContent:'space-between'}}>
        <Button variant="contained" className="rounded-3 secondary m-3" type="submit"><a href="/login"></a>Cancelar</Button>
        <button onClick={handleSubmit} className='rounded-3 m-3' type="submit"><strong>Comprar</strong></button>
        </div>
        {/* <form onSubmit={handleSubmit} className='components-align-center'>
            <h3>¿Desea realizar compra del almuerzo del dia de hoy?</h3>
          
            <button className='rounded-3' type="submit"><strong>Comprar</strong></button>
          
        </form> */}
      </div>
      </div>
      </div>
    )
}