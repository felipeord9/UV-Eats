import  Table  from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import React, { useState } from "react";

const style = {
    align:'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    justifyContent:'center',
    boxShadow: 24,
    p: 4,
    
    
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

function createData(no,codigo,nombre){
    return{no,codigo,nombre};
}
const rows =[
    createData('1','202038347','Catalina Cubillos'),
    createData('2','202020200','Felipe Ordoñez'),
    createData('3','201923456','Antonio Velez'),
    createData('4','202234212','Jose Albeiro')
]
export default function TableSobrantes() {
    const [open,setOpen]=useState(false);
    const [isOpen,setIsOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleIncripOpen=()=>{
        setIsOpen(true)
    }
    const handleIncripClose=()=>{
        setIsOpen(false)
    }
  return (
    <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
    <div className='rounder-4'>
    <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-between 'style={{backgroundColor:'white'}}>
    <h2 className='text-danger m-3'><strong>Listado *No* beneficiarios inscritos por orden</strong></h2>
     <TableContainer component={Paper}>
        <Table sx={{minWidth:650}} aria-aria-label='Tabla Sobrantes'>
            <TableHead>
                <TableRow>
                    <TableCell align='center'><strong>Position</strong></TableCell>
                    <TableCell align='center'><strong>Código</strong></TableCell>
                    <TableCell align='center'><strong>Nombre</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row)=>(
                    <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
                        <TableCell component='th' scope='row' align='center'>{row.no}</TableCell>
                        <TableCell component='th' scope='row' align='center'>
                            {row.codigo}
                        </TableCell>
                        <TableCell component='th' scope='row' align='center'>{row.nombre}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
     </TableContainer>
     <div className='d-flex flex-row text-align-center'>
     <Button variant="contained" className="rounded-3 secondary m-4" type="submit"><a href="/login" className="text-decoration-none" style={{color:'white'}}>Salir</a></Button>
     <button onClick={handleIncripOpen} className='rounded-3 m-4' type="submit"><strong>Inscribirme</strong></button>
     <Modal open={isOpen}
        onClose={handleIncripClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
          <h2 id="parent-modal-title" className='text-danger text-align-center'>* Felicidades *</h2>          
          <h4 id="parent-modal-title">Usted se ha inscrito satisfactoriamente</h4>
        </Box>
    </Modal>                 
     <button onClick={handleOpen} className='rounded-3 m-4' type="submit"><strong>Comprar</strong></button>
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
  )
}