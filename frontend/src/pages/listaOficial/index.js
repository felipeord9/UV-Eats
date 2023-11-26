import { useState, useEffect } from "react";
import * as GoIcons from "react-icons/go"
import TableOficiales from "../../components/TableOficiales"
import ModalUsers from "../../components/ModalUsers";
import Navbar from "../../components/Navbar";
import { findAllUsersOficial } from "../../services/userService"

export default function ListaOFicial() {
  const [oficiales, setOficiales] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [suggestions, setSuggestions] = useState([])
  const [search, setSearch] = useState('')
  const [showModalUsers, setShowModalUsers] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllOficiales()
  }, []);

  const getAllOficiales = () => {
    setLoading(true)
    findAllUsersOficial()
      .then(({ data }) => {
        setOficiales(data)
        setSuggestions(data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      });
  }

  const searchUsers = (e) => {
    const { value } = e.target
    if(value !== "") {
      const filteredUsers = oficiales.filter((elem) => {
        if(
          elem.email.includes(value) ||
          elem.name.toLowerCase().includes(value.toLowerCase()) 
          /* elem.role.toLowerCase().includes(value.toLowerCase()) */
        ) {
          return elem
        }
      })
      if(filteredUsers.length > 0) {
        setSuggestions(filteredUsers)
      } else {
        setSuggestions(oficiales)
     }
    } else {
      setSuggestions(oficiales)
    }
    setSearch(value)
  }

  return (
    <div className="wrapper justify-content-center  h-100 w-100 m-auto bg-gradient" style={{userSelect:'none'}}>
      <Navbar/>
    <div className='rounder-4'>
      {/* <div style={{height:50}}></div> */}
    <div className="login-wrapper d-flex flex-column mt-5 pt-5" >
      <h1 className="text-danger fw-bold">Listado Oficial Diaria</h1>
      <ModalUsers 
        user={selectedUser}
        setUser={setSelectedUser}
        showModal={showModalUsers} 
        setShowModal={setShowModalUsers} 
        reloadInfo={getAllOficiales} 
      />
      <div className="d-flex flex-column gap-2 h-100">
        <div className="d-flex justify-content-end mt-1 gap-3 mb-1">
          <input
            type="search"
            value={search}
            className="form-control form-control-sm w-100 rounded-2"
            placeholder="Buscar Estudiante"
            onChange={searchUsers}
            style={{ fontSize:22}}
          />
          {/* <button
            title="Nuevo usuario"
            className="d-flex  text-nowrap btn btn-sm btn-danger text-light gap-1" 
            style={{fontSize:18}}
            onClick={(e) => setShowModalUsers(!showModalUsers)}>
              Nuevo beneficiario
              <GoIcons.GoPersonAdd style={{width: 25, height: 25}} />
          </button> */}
        </div>
        <TableOficiales oficiales={suggestions} setShowModal={setShowModalUsers} setSelectedUser={setSelectedUser} loading={loading} style={{fontSize:20}}/>
      </div>
    </div>
    </div>
    </div>
  )
} 