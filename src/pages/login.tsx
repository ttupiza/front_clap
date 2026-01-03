import React, { useState } from 'react';
import '../css/login.css';
import Button from '../Components/common/Button';

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    // Simulación de carga
    setTimeout(() => {
      console.log('Datos:', { usuario, contrasena });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="background-gradient-react">
      <div className="login-container-react">
        <header className="header-box-react">
          <h1>Iniciar Sesión</h1>
          <p>Ingresa tus credenciales para acceder</p>
        </header>

        <div className="form-box-react">
          <form onSubmit={handleSubmit}>
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />

            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />

            <a href="#" className="forgot-password-react">¿Olvidaste tu contraseña?</a>

            {/* Este es el botón que envía el formulario */}
            <Button 
              type="submit" 
              text={loading ? 'Cargando...' : 'Iniciar Sesión'} 
              className="login-button-react"
            />
          </form>

          {error && <p className="error-message">{error}</p>}

          <p className="no-account-react">¿No tienes una cuenta?</p>

          {/* Este botón ahora se comporta como un <a href="#"> */}
          <Button 
            text="Regístrate" 
            to="#" 
            className="register-button-react" 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;