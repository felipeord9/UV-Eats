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
import QRCode from 'react-qr-code';
import TablePagination from '@mui/material/TablePagination';

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
  {id:'no',label:'No',minWidth:170},
  {id:'codigo',label:'codigo',minWidth:170},
  {id:'nombre',label:'nombre',minWidth:170}
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
    const [open,setOpen]=useState(false);
    const [isOpen,setIsOpen]=useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
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
    <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
    <div className='rounder-4'>
    <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-between 'style={{backgroundColor:'white'}}>
    <h2 className='text-danger m-3'><strong>Listado *No* beneficiarios inscritos por orden</strong></h2>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
     <div className='d-flex flex-row text-align-center'>
     <Button onClick={handleOpenCerrar} variant="contained" className="rounded-3 secondary m-4" type="submit">Salir</Button>
     <Modal open={cerrar}
        onClose={handleCerrar}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
          {/* <h2 id="parent-modal-title" className='text-danger text-align-center'>* Se ha cerrado la sección *</h2> */} 
          <center>
          <h2 id="parent-modal-title" className='text-danger text-align-center'>¿Está seguro que desea cerrar la sección?</h2>
          <Button variant="contained" className='m-4' onClick={handleCerrar}><a href="/login" className="text-decoration-none" style={{color:'white'}}>Yes</a></Button>
          <Button variant="contained" className="m-4" color='error' onClick={handleCerrar}>No</Button> 
          </center>         
        </Box>
    </Modal> 
     <button onClick={handleIncripOpen} className='rounded-3 m-4' type="submit"><strong>Inscribirme</strong></button>
     <Modal open={isOpen}
        onClose={handleIncripClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >  
        <Box sx={style}>
        <center>
          <h2 id="parent-modal-title" className='text-danger text-align-center'>* Felicidades *</h2>          
          <h4 id="parent-modal-title">Usted se ha inscrito satisfactoriamente</h4>
          </center>
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