
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Menutab from './Components/menu';
import Perfil from './pages/perfil';
import Reportes from './pages/reportes';
import Lista_Beneficiarios from './pages/lista_beneficiarios';
import Registro_Beneficiario from './pages/registro_beneficiario';


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
      </Routes>
    </Router>

    </>
  )
}

export default App
