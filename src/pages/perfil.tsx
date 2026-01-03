import React, { useState } from 'react';
import '../css/perfil.css';
import Button from '../Components/common/Button';

interface UserData {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  fechaNacimiento: string;
  email: string;
  usuario: string;
  cedula: string;
  telefono: string;
  direccion: string;
  fechaRegistro: string;
  estadoCuenta: string;
}

const Perfil: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    email: '',
    usuario: '',
    cedula: '',
    telefono: '',
    direccion: '',
    fechaRegistro: '15 de Marzo, 2024',
    estadoCuenta: 'Activa',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando datos actualizados:', userData);
  };

  return (
    <div className="perfil-page">
      <form className="perfil-card user-profile-container" onSubmit={handleSubmit}>
        <div className="profile-header">
          <h2 className="profile-title">Perfil de Usuario</h2>
          <p className="profile-subtitle">Gestiona tu información personal</p>
        </div>

        <div className="profile-form">
          {/* Fila 1: Nombres */}
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="primerNombre">Primer Nombre</label>
              <div className="input-with-icon">
                <input placeholder="Tu primer nombre" type="text" id="primerNombre" name="primerNombre" value={userData.primerNombre} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
            <div className="form-group half-width">
              <label htmlFor="segundoNombre">Segundo Nombre</label>
              <div className="input-with-icon">
                <input placeholder="Opcional" type="text" id="segundoNombre" name="segundoNombre" value={userData.segundoNombre} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
          </div>

          {/* Fila 2: Apellidos */}
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="primerApellido">Primer Apellido</label>
              <div className="input-with-icon">
                <input placeholder="Tu primer apellido" type="text" id="primerApellido" name="primerApellido" value={userData.primerApellido} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
            <div className="form-group half-width">
              <label htmlFor="segundoApellido">Segundo Apellido</label>
              <div className="input-with-icon">
                <input placeholder="Opcional" type="text" id="segundoApellido" name="segundoApellido" value={userData.segundoApellido} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
          </div>

          {/* Fila 3: Fecha de Nacimiento y Usuario */}
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <div className="input-with-icon">
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={userData.fechaNacimiento} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
            <div className="form-group half-width">
              <label htmlFor="usuario">Usuario</label>
              <div className="input-with-icon">
                <input placeholder="nombre_usuario" type="text" id="usuario" name="usuario" value={userData.usuario} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
          </div>

          {/* Fila 4: Email y Cédula */}
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <input placeholder="correo@ejemplo.com" type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
            <div className="form-group half-width">
              <label htmlFor="cedula">Cédula (CI)</label>
              <div className="input-with-icon">
                <input placeholder="V-00000000" type="text" id="cedula" name="cedula" value={userData.cedula} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
          </div>

          {/* Fila 5: Teléfono y Dirección */}
          <div className="form-group full-width">
            <label htmlFor="telefono">Teléfono</label>
            <div className="input-with-icon">
              <input placeholder="04xx-xxxxxxx" type="tel" id="telefono" name="telefono" value={userData.telefono} onChange={handleChange} />
              <span className="edit-icon">✏️</span>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="direccion">Dirección</label>
            <div className="input-with-icon">
              <input placeholder="Calle, Ciudad, Estado" type="text" id="direccion" name="direccion" value={userData.direccion} onChange={handleChange} />
              <span className="edit-icon">✏️</span>
            </div>
          </div>

          <hr className="separator"/>

          {/* Estado de la cuenta */}
          <div className="form-row status-row">
            <div className="status-item half-width">
              <label>Fecha de registro:</label>
              <p className="status-value red-text">{userData.fechaRegistro}</p>
            </div>
            <div className="status-item half-width">
              <label>Estado de cuenta:</label>
              <p className="status-value red-text">{userData.estadoCuenta}</p>
            </div>
          </div>

          <div className="actions-row">
            <Button 
              type="submit" 
              text="Guardar Cambios" 
              className="login-button-react" 
            />
          </div>
        </div>
      </form>

      {/* Card de Seguridad */}
      <div className="perfil-card security-container">
        <div className="security-inner">
          <h2 className="security-title">Configuración de Seguridad</h2>
          <div className="security-item">
            <div className="security-info">
              <h3 className="security-action-title">Cambiar contraseña</h3>
              <p className="security-last-update">Protege tu cuenta con una clave segura</p>
            </div>
            <Button 
              text="Actualizar" 
              to="/change-password" 
              className="register-button-react" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;