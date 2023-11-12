import logo from './logo.svg';
import './App.css';
import { AuthContextProvider } from './context/authContext';
import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import Login from '../src/pages/login/login'
import Inscripcion from './pages/inscripcion';
import TableSobrantes from './pages/noBeneficiados';
import TablaBecas from './pages/listaBeca';
import Penalizacion from './pages/penalizacion';
import PQRS from './pages/PQRS'
import Compra from './pages/compra'
import Efectivo from './pages/efectivo';
import Nequi from './pages/nequi';
import Page404 from './pages/page404';
import PrivateRoute from '../src/components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthContextProvider>
    <Router>
    <div id='wrapper' className="d-flex vh-100">
     <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/inscripcion' element={<PrivateRoute component={Inscripcion}/>}/>
        <Route path='/no/beneficiarios' element={<PrivateRoute component={TableSobrantes}/>}/>
        <Route path='/tabla/becas' element={<TablaBecas/>}/>
        <Route path='/penalizacion' element={<Penalizacion/>}/>
        <Route path='/PQRS' element={< PQRS/>}/>
        <Route path='/compra' element={<PrivateRoute component={Compra}/>}/>
        <Route path='/compra/efectivo' element={<PrivateRoute component={Efectivo}/>}/>
        <Route path='/compra/nequi' element={<PrivateRoute component={Nequi}/>}/>

        <Route path='*' element={<Page404/>}/>
     </Routes>
    </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
