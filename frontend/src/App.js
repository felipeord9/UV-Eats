import logo from './logo.svg';
import './App.css';
import useToken from './useToken';
import {Route, Routes,BrowserRouter as Router, Navigate} from 'react-router-dom'
import Login from '../src/pages/login/login'
import Inscripcion from './pages/inscripcion';
import TableSobrantes from './pages/noBeneficiados';
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
  const {token,setToken}=useState();
  /* const token=getToken(); */
  /* if(!token) {
    return <Login setToken={token} />
  } */

  return (
    <Router>
    <div id='wrapper' className="d-flex vh-100 overflow-scroll">
     <Routes>
        {/* <Route path='/' element={<Navigate to='/login'/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/inscripcion' element={<Inscripcion/>}/>
        <Route path='/no/beneficiarios' element={<TableSobrantes/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
