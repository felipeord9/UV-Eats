import * as FiIcons from 'react-icons/fi';
import DataTable from 'react-data-table-component'
import useAlert from '../../hooks/useAlert';
import { Autocomplete } from '@mui/material';

export default function TableNoBene({ users, loading, setSelectedUser, setShowModal }) {
  const { successAlert } = useAlert()
  const columns = [
    {
      id: "email",
      name: "Codigo",
      selector: (row) => row.email,
      sortable: true,
      width: '250px'
    },
    {
      id: "name",
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
      width: '300px'
    },
  ]
  
  return (
    <div
      className=" justify-content-center d-flex flex-column rounded" style={{userSelect:'none'}}
    >
    <div className='rounder-4'>
    <div className='login-wrapper rounder-4' >
      <DataTable
        className="bg-light text-center border border-2 h-100"
        style={{fontSize:20 , height:450}}
        columns={columns}
        data={users}
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