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
import React, { useState, useContext } from "react";
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import useUser from "../../hooks/useUser";
import AuthContext from "../../context/authContext";
import TablePagination from '@mui/material/TablePagination';
import User from '../../assets/user.png'
import Ayuda1 from '../../assets/ayuda1.png'
import { IoMdArrowRoundBack } from "react-icons/io";

const style = {
    align:'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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

const columns=[
  {id:'no',label:'Turno',minWidth:70},
  {id:'codigo',label:'codigo',minWidth:120},
  {id:'nombre',label:'nombre',minWidth:200}
]

function createData(no,codigo,nombre){
    return{no,codigo,nombre};
}
const rows =[
    createData('1','202038347','Catalina Cubillos'),
    createData('2','202020200','Felipe Ordoñez'),
    createData('3','201923456','Antonio Velez'),
    createData('4','202234212','Jose Albeiro'),
    createData('1','202038347','Catalina Cubillos'),
    createData('2','202020200','Felipe Ordoñez'),
    createData('3','201923456','Antonio Velez'),
    createData('4','202234212','Jose Albeiro'),
]
export default function TableSobrantes() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { isLogged, logout } = useUser();
    const [open,setOpen]=useState(false);
    const [isOpen,setIsOpen]=useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleButtonClick = () => {
      // Cambia el color del botón
      setButtonColor('grey');
      
      // Deshabilita el botón
      setIsButtonDisabled(true);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
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
    const [cerrar,setCerrar]=useState(false);
    const handleOpenCerrar=()=>{
        setCerrar(true);
    }
    const handleCerrar=()=>{
        setCerrar(false);
    }
  return (
    <>
      {isLogged && (
    <div className=' w-100 h-100 d-flex flex-row'>
    <div className='' style={{width:150}}></div>  
    <div className="d-flex justify-content-center align-items-center w-100 " style={{userSelect:'none'}}>
    <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
    <div className="d-flex flex-row">
            <div className="pe-5 me-5">
                <h1 className="p-2 pe-5 ps-5   rounded-4" style={{color:'white',backgroundColor:'#FF0000'}}>Fila Virtual</h1>
            </div>
            <div className="d-flex flex-row mb-2 ms-5">
                <img src={User} style={{width:70,height:60}}/>
                <div className="ps-2 pt-2">
                    <h5><strong>{user.name}</strong></h5>
                    <div className="d-flex flex-row">
                        <h5><strong>{user.email}</strong></h5>
                        
                    </div>
                </div>
            </div>
        </div>
    <h2 className='text-danger m-3 mt-1'><strong>Listado *No* beneficiarios inscritos por orden</strong></h2>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 250 }}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                  {columns.map((column)=>(
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                    </TableCell>))}
                </TableRow>
            </TableHead>
            <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
        </Table>
     </TableContainer>
     <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
      <div className='d-flex flex-row w-100'>
     <div className='d-flex flex-row text-align-center w-25' >
     <Button onClick={handleOpenCerrar} variant="contained" className="rounded-3 secondary m-4" type="submit"><IoMdArrowRoundBack/>Salir</Button>
     <Modal open={cerrar}
        onClose={handleCerrar}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
          {/* <h2 id="parent-modal-title" className='text-danger text-align-center'>* Se ha cerrado la sección *</h2> */} 
          <center>
          <h2 id="parent-modal-title" className='text-danger text-align-center'>¿Está seguro que desea cerrar la sección?</h2>
          <Button onClick={(e)=>(logout(e),handleCerrar)} variant="contained" className='m-4' >Yes</Button>
          <Button variant="contained" className="m-4" color='error' onClick={handleCerrar}>No</Button> 
          </center>         
        </Box>
    </Modal> 
     </div>
     <div className='w-25'>

     </div>
     <div className='w-100'>
     <button onClick={(e)=>(handleButtonClick(e.target.value),handleIncripOpen(e.target.value))} disabled={isButtonDisabled} style={{ backgroundColor: buttonColor }} className='rounded-3 m-4' type="submit"><strong>Inscribirme</strong></button>
     <Modal open={isOpen}
        onClose={handleIncripClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
        <center>
          <h1 id="parent-modal-title" style={{fontSize:80}} className='text-danger text-align-center pb-4'> ¡Qué bien! </h1>          
          <h3 id="parent-modal-title">Te haz inscrito satisfactoriamente</h3>
          </center>
        </Box>
    </Modal> 
    </div>
    </div>                
     {/* <button onClick={handleOpen} disabled className='rounded-3 m-4' type="submit"><strong>Comprar</strong></button>
     <Modal open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
          <h2 id="parent-modal-title">¿De qué forma desea cancelar su compra?</h2>
          <ChildModal />
        </Box>
    </Modal>    */}             
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
  )
}