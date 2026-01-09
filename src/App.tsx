
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Menutab from './Components/menu';
import Perfil from './pages/perfil';
import Reportes from './pages/reportes';
import Lista_Beneficiarios from './pages/lista_beneficiarios';
import Registro_Beneficiario from './pages/registro_beneficiario';
import Familiar from './pages/familiar';
import Medicina from './pages/medicina';
import Lista_Usuario from './pages/lista_usuario';
import Registrar_Pago from './pages/registrar_pago';


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menutab />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/lista_beneficiarios" element={<Lista_Beneficiarios />} />
        <Route path="/registro_beneficiario" element={<Registro_Beneficiario />} />
        <Route path="/familiar" element={<Familiar />} />
        <Route path="/medicina" element={<Medicina />} />
        <Route path="/lista_usuario" element={<Lista_Usuario />} />
        <Route path="/registrar_pago" element={<Registrar_Pago />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
