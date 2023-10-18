import  Table  from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from "react";
import TablePagination from '@mui/material/TablePagination';


const columns=[
    {id:'codigo',label:'Código',minWidth:170},
    {id:'nombre',label:'Nombre',minWidth:170}
  ]
  
  function createData(codigo,nombre){
      return{codigo,nombre};
  }
  const rows =[
      createData('202038347','Catalina Cubillos'),
      createData('202020200','Felipe Ordoñez'),
      createData('201923456','Antonio Velez'),
      createData('202234212','Jose Albeiro'),
      createData('202038347','Catalina Cubillos'),
      createData('202020200','Felipe Ordoñez'),
      createData('201923456','Antonio Velez'),
      createData('202234212','Jose Albeiro'),
      createData('202038347','Catalina Cubillos'),
      createData('202020200','Felipe Ordoñez'),
      createData('201923456','Antonio Velez'),
      createData('202234212','Jose Albeiro'),
]

export default function TablaBecas(){
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    return(
        <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
        <div className='rounder-4'>
        <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-between 'style={{backgroundColor:'white'}}>
        <h2 className='text-danger m-3 mb-4'><strong>Listado estudiantes con beca alimentícia</strong></h2>
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
         </div>
        </div>
        </div>
    )
}