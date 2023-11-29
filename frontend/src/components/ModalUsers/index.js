import { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import { createUser, updateUser } from "../../services/userService";
import * as Bs from "react-icons/bs";
import { getAllCiudades } from "../../services/ciudadService";
import { getAllDepartamentos } from "../../services/departamentoService";


export default function ModalUsers({
  user,
  setUser,
  showModal,
  setShowModal,
  reloadInfo,
}) {
  const [error, setError] = useState('')
  
  const [ciudad, setCiudad] = useState(null);
  const [departamento,setDepartamento]= useState('');

  const [ciudades,setCiudades] = useState([]);
  const [departamentos,setDepartamentos]=useState([]);
  
  const [info, setInfo] = useState({
    rowId:'',
    name: "",
    email: "",
    password:'',
    role: '',
    estado:'',
  });
  useEffect(() => {
    if(user) {
      setInfo({
        name: user?.name,
        email: user?.email,
        /* role: user?.role,
        estado: user?.estado, */
      })
      setCiudad(user?.role)
      setDepartamento(user?.estado)
    }
  }, [user])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfo({
      ...info,
      [id]: value,
    });
  };

  const handleCreateNewUser = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¿Está segur@ de querer agregar este usuario?',
          showDenyButton: true,
          confirmButtonText: 'Confirmar',
          confirmButtonColor: '#D92121',
          denyButtonText: `Cancelar`,
          denyButtonColor:'blue',
          icon:'question'
    }).then((result)=>{
      if(result.isConfirmed){
        const body={
          rowId: info.email,
          name: info.name,
          email:info.email,
          role: departamento.description,
          estado: ciudad.description
        }
        createUser(body)
          .then((data) => {
            setShowModal(!showModal)
            reloadInfo();
            Swal.fire(
              '¡Correcto!', 'El usuario se ha creado con éxito', 'success'
              /* title: '¡Correcto!',
              text: 'El usuario se ha creado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 2500 */
            )
            
          })
        }else if(result.isDenied){
          Swal.fire('Oops', 'La información suministrada se ha descartado', 'info')
          setShowModal(!showModal)
        }
        cleanForm()
    })
      .catch((error) => {
        setError(error.response.data.errors.original.detail)
        setTimeout(() => setError(''), 2500)
      });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¿Está segur@ de querer editar este usuario?',
          showDenyButton: true,
          confirmButtonText: 'Confirmar',
          confirmButtonColor: '#D92121',
          denyButtonText: `Cancelar`,
          denyButtonColor:'blue',
          icon:'question'
    }).then((result)=>{
      if(result.isConfirmed){
        const body={
          rowId: info.email,
          name: info.name,
          email:info.email,
          role: departamento.description,
          estado: ciudad.description
        }
        updateUser(user.id, body)
          .then((data) => {           
            setShowModal(!showModal)
            reloadInfo();
            Swal.fire({
              title: '¡Correcto!',
              text: 'El usuario se ha actualizado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 2500
            })
          })
      }else if(result.isDenied){
        Swal.fire('Oops', 'La información suministrada se ha descartado', 'info')
        setShowModal(!showModal)
      }
      cleanForm()
    })
      .catch((error) => {
        setError(error.response.data.errors.original.detail)
        setTimeout(() => setError(''), 2500)
      });
  };

  const cleanForm = () => {
    setInfo({
      rowId: "",
      name: "",
      email: "",
      password: "",
      role: "",
    })
  }
  const [shown,setShown]=useState("");
  const switchShown =()=>setShown(!shown);

  /* --------------------------------------------------- */

  const selectDepartamentoRef=useRef();
  const selectCiudadRef=useRef();

  useEffect(()=>{
    getAllDepartamentos().then((data) => setDepartamentos(data));
      getAllCiudades().then((data) => setCiudades(data));

  },[]);
  return (
    <div className="wrapper d-flex justify-content-center align-content-center" style={{userSelect:'none'}}>
    <Modal show={showModal} style={{ fontSize: 18, userSelect:'none' }} centered>
      <Modal.Header>
        <center>
        <Modal.Title className="text-danger" style={{fontSize:40}}>
          <strong>{user ? "Actualizar" : "Crear"} Estudiante</strong>
        </Modal.Title>
        </center>
      </Modal.Header>
      <Modal.Body className="p-2">
        <div className="m-2 h-100">
          <form onSubmit={user ? handleUpdateUser : handleCreateNewUser}>
            <div>
              
              <div>
                <label className="fw-bold" style={{fontSize:20}}>Código</label>
                <input
                  id="email"
                  
                  value={info.email}
                  className="form-control form-control-sm"
                  onChange={handleChange}
                  placeholder="Código estudiantil"
                  autoComplete="off"
                  required
                  disabled
                  style={{backgroundColor:'grey', color:'white',height:40, fontSize:17}}
                />
              </div>
              <div>
                <label className="fw-bold" style={{fontSize:20}}>Nombre</label>
                <input
                  id="name"
                  type="text"
                  value={info.name}
                  className="form-control form-control-sm"
                  onChange={handleChange}
                  placeholder="Nombre del estudiante"
                  autoComplete="off"
                  required
                  disabled
                  style={{backgroundColor:'grey', color:'white',height:40, fontSize:17,userSelect:'none'}}
                />
              </div>
              <div>
                <label className="fw-bold" style={{fontSize:20}}>Rol</label>
                <select     
                    id="role"               
                    ref={selectDepartamentoRef}
                    value={info.role}
                    onChange={(e)=>(setDepartamento(JSON.parse(e.target.value)),handleChange(e))}
                    className="form-select form-select-sm m-100 me-3"
                    required   
                 >
                   <option selected value='' disabled>
                    -- Seleccione el Departamento --
                  </option>
                      {departamentos
                      .sort((a,b)=>a.id - b.id)
                      .map((elem)=>(
                        <option key={elem.id} id={elem.id} value={JSON.stringify(elem)}>
                          {elem.description} 
                        </option>
                      ))
                    }
                    </select>
                    {/* <select
                  id="role"
                  value={info.role}
                  className="form-select form-select-sm"
                  onChange={handleChange}
                 style={{height:40, fontSize:17}}
                >
                  <option selected disabled value="">
                    -- Seleccione un rol --
                  </option>
                  <option value="beneficiario">Beneficiario</option>
                  <option value="noBeneficiario">no Beneficiario</option>
                  </select> */}
                  {/* <option value="En Fila">En fila</option>
                  <option value="Aprovado">Aprovado</option>
                  <option value="comprado">Comprado</option>
                  <option >Ninguno</option> */}
                    {/* <option value="beneficiario">Beneficiario</option>
                    <option value="noBeneficiario">No Beneficiario</option> */}
              </div>
              <div>
                <label className="fw-bold" style={{fontSize:20}}>Estado</label>
                {/* <select
                  id="estado"
                  value={info.estado}
                  className="form-select form-select-sm"
                  onChange={handleChange}
                 style={{height:40, fontSize:17}}
                >
                  <option selected disabled value="">
                    -- Seleccione un estado --
                  </option>
                  <option value="SinPenalizar">Sin Penalizar</option>
                  <option value="Penalizado">Penalizado</option>
                  <option value="En Fila">En fila</option>
                  <option value="Aprovado">Aprovado</option>
                  <option value="comprado">Comprado</option>
                  <option >Ninguno</option>
                </select> */}
                <select
                    id="estado"
                    ref={selectCiudadRef}
                    className="form-select form-select-sm w-100"
                    required
                    disabled={departamento ? false : true}
                    value={info.estado} 
                    onChange={(e)=>(setCiudad(JSON.parse(e.target.value)),handleChange(e))}
                  >
                    
                  <option selected value='' disabled>
                    -- Seleccione la Ciudad --
                  </option>  
                  {ciudades
                  .sort((a,b)=>a.id - b.id)
                  .map((elem)=>(
                    elem.codigo == departamento.codigo ?
                    <option id={elem.id} value={JSON.stringify(elem)}>
                    {elem.description}
                    </option>
                    : 
                    null
                  ))
                }
                  </select>
              </div>
            </div>
            <div className="d-flex w-100 mt-2">
              <span 
                className="text-center text-danger w-100 m-0"
                style={{height: 15}}
              >
                {error}
              </span>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-2 ">
              {/* <Button type="submit" variant="success">
                {user ? "Guardar Cambios" : "Guardar"}
              </Button> */}
              <button className="me-5 rounded-3" type="submit">{user ? "Guardar Cambios" : "Guardar"}</button>
              <Button variant="secondary" onClick={(e) => {
                setShowModal(false)
                cleanForm()
                setUser(null)
              }}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
      {<Modal.Footer></Modal.Footer>}
    </Modal>
    </div>
  );
}
