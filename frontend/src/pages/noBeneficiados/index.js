import  Table  from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  return (
    <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
    <div className='rounder-4'>
    <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-between 'style={{backgroundColor:'white'}}>
    <h2 className='text-danger m-3'><strong>Lista *No* beneficiarios inscritos por orden</strong></h2>
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
     <div className='d-flex flex-row'>
     <button className='rounded-3 m-4' type="submit"><strong>Inscribirme</strong></button>
     <button className='rounded-3 m-4' type="submit"><strong>Comprar</strong></button>
     </div>
     </div>
    </div>
    </div>
  )
}