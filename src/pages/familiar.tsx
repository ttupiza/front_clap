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
    console.log('Enviando datos actualizadoss:', userData);
  };

  return (
    <div className="perfil-page">
      {/* SECCIÓN 1: Registro de Beneficiario */}
      <form className="perfil-card user-profile-container" onSubmit={handleSubmit}>
        <div className="profile-header">
          <h2 className="profile-title">Registro Familiares</h2>
        </div>

        <div className="profile-form">
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

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <div className="input-with-icon">
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={userData.fechaNacimiento} onChange={handleChange} />
                <span className="edit-icon">✏️</span>
              </div>
            </div>
          </div>

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

          <hr className="separator" />

          <div className="actions-row">
            <Button type="submit" text="Guardar Cambios" className="login-button-react" />
          </div>
        </div>
      </form>

     
    </div>
  );
};

export default Perfil;