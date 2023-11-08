import React from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import Comunicacion from '../../assets/comunicacion.jpg'
import { BiArrowToLeft } from "react-icons/bi";
import User from '../../assets/user.png'
import Profe from '../../assets/profe.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function PQRS(){
    const navigate = useNavigate();

    const labelMegusta = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return(
    <div className=' w-100 h-100 d-flex flex-column' style={{userSelect:'none'}}>
 
        <div className="d-flex justify-content-center align-items-center h-100 " >
        <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
        {/* <h1 className='text-danger'>Bienvenido a UV-Eats</h1> */}
        <form className=''>
            <div className="d-flex flex-row">
            <center>
            <div style={{ backgroundColor:'#FF0000'}} className="p-2 rounded-4 me-5 justify-content-center align-items-center">
               <h2 style={{color:'white'}}>Servicio al Usuario</h2> 
            </div>
            </center>
            <div className="ms-5">
                <div>
                    <h4><strong className="me-2">Valoramos</strong>tu opinión,</h4>
                </div>
                <div>
                    <h4>¡Ayúdanos a<strong className="ms-2">mejorar!</strong></h4>
                </div>
            </div>
            <div className="ms-3">
                <img src={Comunicacion} style={{width:80,height:80}}/>
            </div>
            </div>
            <div className="d-flex flex-row pt-3 pb-3">
                <label>Escribe algún problema que tengas, te asistiremos de la forma más</label>
                <label className="text-danger ps-2 pe-2">rápida</label>
                <label>posible.</label>
            </div>
                <div className="d-flex flex-row">
                   <img src={User} style={{height:40}} className="me-2"/> 
                   <TextField id="standard-basic" label="Me gustaría saber..." variant="standard" style={{width:500}}/>
                </div>       
            <div className="mt-3 d-flex flex -row">
                <div>
                    <img src={Profe} style={{width:50}}/>
                </div>
                <div className="d-flex flex-column" style={{width:600}}>
                    <h5 className="text-danger">User1234</h5>
                    <label>Hola, quería saber cuál es el tiempo límite de espera que una persona que está en la fila
                           virtual le ceda a la persona que sigue, en caso de que no haga efectivo su turno... Grácias.      
                    </label>
                </div>
            </div>  
                <div style={{width:650}} className="d-flex flex-row ps-5 ms-5 mt-3">
                    <div>
                        <img src={Comunicacion} style={{width:50}}/>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="text-danger">Servicio al Usuario</h5>
                        <label><strong>Respondió a User1234</strong></label>
                        <label>
                            <strong className="pe-2">¡Hola,</strong>
                            gracias por usar nuestra sección de dudas y peticiones. El tiempo de espera son de 
                            ... minutos, en caso de que el usuario no hago egectivo su oportunidad, el turno seguirá
                            para quien esté después de él o ella. ¡Esperamos que te haya sido de mucha ayuda!
                        </label>
                        <div className="d-flex flex-row ps-5 pt-1">
                            <label><strong>Me fue de ayuda</strong> <Checkbox {...labelMegusta} icon={<ThumbUpOffAltIcon />} checkedIcon={<ThumbUpAltIcon />} /></label>
                            <label className="ps-5"><strong>NO me fue de ayuda</strong> <Checkbox {...labelMegusta} icon={<ThumbDownOffAltIcon />} checkedIcon={<ThumbDownAltIcon />} /></label>
                        </div>
                    </div>
                </div>
        </form>
        </div>
  
        </div>
        <div className=' d-flex flex-row' style={{height:130}} >
        <div className='p-3 rounded-4 d-flex flex-row justify-content-center text-align-center' style={{backgroundColor:'#FF0000'}}>
            
            <div>
                <img src={Comunicacion} style={{width:70,height:70}}/>
            </div>
            <div className="d-flex flex-column ms-4">
                <div>
                    <label style={{color:'white'}}><strong>Otras líneas de atención</strong></label>
                </div>
                <div>
                    <label><a href="https://mail.google.com/" >uveats@correounivalle.edu.co</a></label>
                </div>
                <div>
                    <label><a href="https://mail.google.com/" >bienestaruniversitario@correounivalle.edu.co</a></label>
                </div>
            </div>
        </div>
        <div className="w-50">

        </div>
        <div className=' justify-content-end' >
            <div className="h-50"></div>
            <div className="me-4 ">
            <Button variant="contained" onClick={(e)=>navigate('/Login')} type='button'><BiArrowToLeft/>Salir</Button>
            </div>
        </div>
        </div>
    </div>
    )
} 