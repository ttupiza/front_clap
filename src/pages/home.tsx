import { Link } from "react-router-dom";
import Login from "./login";
import Menutab from "../Components/menu";



const Home = () => {    
    return (
        <div>
            <h1>
                Bienvenido a la página de inicio
            </h1>
            <button><Link to="/login">Ir a Login</Link></button>
            <button><Link to="/menu">Ir a Home</Link></button>
            <button><Link to="/perfil">Ir a Perfil</Link></button>
            <button><Link to="/reportes">Ir a Reportes</Link></button>
            <button><Link to="/lista_beneficiarios">Ir a Lista de Beneficiarios</Link></button>
            <button><Link to="/registro_beneficiario">Ir a Registro de Beneficiario</Link></button>
            
        </div>
    );
}

export default Home;