import * as FiIcons from 'react-icons/fi';
import DataTable from 'react-data-table-component'
import useAlert from '../../hooks/useAlert';
import { Autocomplete } from '@mui/material';

export default function TableOficiales({ oficiales, loading, setSelectedUser, setShowModal }) {
  const { successAlert } = useAlert()
  const columns = [
    {
      id: "email",
      name: "Código",
      selector: (row) => row.email,
      sortable: true,
      width: '150px'
    },
    {
      id: "name",
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
      width: '250px'
    },
    {
      id: "role",
      name: "Rol",
      selector: (row) => row.role,
      sortable: true,
      width: '180px'
    },
    {
      id: "estado",
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
      width: '180px'
    },
  ]
  
  return (
    <div className=' w-100 h-100 d-flex flex-row'>  
    <div className="d-flex justify-content-center align-items-center w-100 " style={{userSelect:'none'}}>
    <div className='login-wrapper shadow border-light rounded-4 border border-1 bg-gradient 'style={{backgroundColor:'white'}}>
      <DataTable
        className="bg-light text-center border border-2 h-100"
        style={{fontSize:20 , height:450}}
        columns={columns}
        data={oficiales}
        fixedHeaderScrollHeight={200}
        
        progressPending={loading}
        progressComponent={
          <div class="d-flex align-items-center text-danger gap-2 mt-2">
            <strong>Cargando...</strong>
            <div
              class="spinner-border spinner-border-sm ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        }
        dense
        striped
        fixedHeader
        
        
      />
    </div>
    </div>
    </div>
  )
}