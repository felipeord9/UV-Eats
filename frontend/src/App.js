import logo from './logo.svg';
import './App.css';
import useToken from './useToken';
import {Route, Routes,BrowserRouter as Router, Navigate} from 'react-router-dom'
import Login from '../src/pages/login/login'
import Inscripcion from './pages/inscripcion';
import TableSobrantes from './pages/noBeneficiados';
import TablaBecas from './pages/listaBeca';
import Penalizacion from './pages/penalizacion';
import PQRS from './pages/PQRS'
import Compra from './pages/compra'
import Efectivo from './pages/efectivo';
import Nequi from './pages/nequi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}
function getToken(){
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
function App() {
  const {token,setToken}=useToken();
  /* const token=getToken(); */
  /* if(!token) {
    return <Login setToken={setToken} />
  } */

  return (
    <Router>
    <div id='wrapper' className="d-flex vh-100">
     <Routes>
        {/* <Route path='/' element={<Navigate to='/login'/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/inscripcion' element={<Inscripcion/>}/>
        <Route path='/no/beneficiarios' element={<TableSobrantes/>}/>
        <Route path='/tabla/becas' element={<TablaBecas/>}/>
        <Route path='/penalizacion' element={<Penalizacion/>}/>
        <Route path='/PQRS' element={<PQRS/>}/>
        <Route path='/compra' element={<Compra/>}/>
        <Route path='/compra/efectivo' element={<Efectivo/>}/>
        <Route path='/compra/nequi' element={<Nequi/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
