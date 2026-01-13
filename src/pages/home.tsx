import { Link } from "react-router-dom";
import Button from '../Components/common/Button';
import '../css/home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-content" aria-hidden={false}>
                    <h1>¿Qué es un CLAP en Venezuela?</h1>
                    <p>
                        Estamos comprometidos con el fortalecimiento y bienestar de nuestra comunidad. 
                        A través de esta plataforma, facilitamos la gestión administrativa y la comunicación 
                        directa entre vecinos. Aquí podrás realizar el registro de tus pagos de servicios, 
                        mantenerte al tanto de las últimas asambleas y participar activamente en el desarrollo 
                        de nuestro sector. Juntos construimos un espacio más organizado, transparente y 
                        eficiente para todos los habitantes de Campiña Los Cedros.
                    </p>
                    <div className="hero-actions">
                        <Button to="/registrar_pago" text="Registrar Pago" className="login-button-react" />
                        <Button to="/login" text="Iniciar Sesión" className="register-button-react" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;