import { useState, useEffect, useContext } from "react";
import * as GoIcons from "react-icons/go"
import TableUsers from "../../components/TableUsers"
/* import ModalUsers from "../../components/ModalUsers";
 */import { findAllUsersNoBene } from "../../services/userService"
import { Link, useNavigate } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import AuthContext from "../../context/authContext";
import useUser from "../../hooks/useUser";
import "./styles.css";
import React from "react";
import Navbar from "../../components/Navbar";
import NoBene from "../../components/tableNobene";
import ModalUsers from "../../components/ModalUsers";

export default function NoBeneficiarios() {
  const [noBene, setNoBene] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [suggestions, setSuggestions] = useState([])
  const [search, setSearch] = useState('')
  const [showModalUsers, setShowModalUsers] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllNOBeneficiarios()
  }, []);

  const getAllNOBeneficiarios = () => {
    setLoading(true)
    findAllUsersNoBene()
      .then(({ data }) => {
        setNoBene(data)
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
      const filteredUsers = noBene.filter((elem) => {
        if(
          elem.rowId.includes(value) ||
          elem.name.toLowerCase().includes(value.toLowerCase()) ||
          elem.role.toLowerCase().includes(value.toLowerCase())
        ) {
          return elem
        }
      })
      if(filteredUsers.length > 0) {
        setSuggestions(filteredUsers)
      } else {
        setSuggestions(noBene)
     }
    } else {
      setSuggestions(noBene)
    }
    setSearch(value)
  }

  const { isLogged, logout } = useUser();
  const [showSideBar, setShowSidebar] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tipo,setTipo]=useState();
  const handleTipo=(e)=>{
    setTipo(e.target.value);
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [cerrar,setCerrar]=useState(false);
    const handleOpenCerrar=()=>{
        setCerrar(true);
    }
    const handleCerrar=()=>{
        setCerrar(false);
    }

    /* Modal instancias */
    const [openModal,setOpenModal]=useState(false);
    const handleOpenModal=(e)=>{
      setOpenModal(true);
    } 
    const handleCloseModal=()=>{
      setOpenModal(false);
      
    }
  return (  
    <div className=" justify-content-center  h-100 w-100 m-auto" style={{userSelect:'none'}}>
      <Navbar/>
    <div className='rounder-4'>
    <div className="login-wrapper d-flex flex-column mt-5 pt-5" >
    <h2 className='text-danger m-3 mt-1 bg-gradient'><strong>Listado *No* beneficiarios </strong></h2>
      <ModalUsers 
        user={selectedUser}
        setUser={setSelectedUser}
        showModal={showModalUsers} 
        setShowModal={setShowModalUsers} 
        reloadInfo={getAllNOBeneficiarios} 
      />
      <div className="d-flex flex-column gap-2 h-100">
        <div className="d-flex justify-content-end mt-1 gap-3 mb-1">
          <input
            type="search"
            value={search}
            className="form-control form-control-sm w-100"
            placeholder="Buscar No Beneficiario"
            onChange={searchUsers}
            style={{width:500, fontSize:20}}
          />
          {/* <button
            title="Nuevo usuario"
            className="d-flex  text-nowrap btn btn-sm btn-danger text-light gap-1" 
            style={{fontSize:18}}
            onClick={(e) => setShowModalUsers(!showModalUsers)}>
              Agregar
              <GoIcons.GoPersonAdd style={{width: 25, height: 25}} />
          </button> */}
        </div>
        <NoBene noBene={suggestions} setShowModal={setShowModalUsers} setSelectedUser={setSelectedUser} loading={loading} style={{fontSize:20}}/>
      </div>
    </div>
    </div>
    </div>
  )
} 