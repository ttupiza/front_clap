import React from 'react';
import '../css/lista_beneficiarios.css';
import Button from '../Components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import beneficiariosData from '../Components/data/beneficiarios';

const Beneficiarios: React.FC = () => {
  const beneficiarios = beneficiariosData();
  return (
    <div className="perfil-page">
      <div className="reportes-card">
        {/* Encabezado con título y botón de descarga */}
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: '#d9234b' }}>Lista de Beneficiarios</h1>
            <p className="profile-subtitle">Administra y consulta la información de los beneficiarios</p>
          </div>
          <div className="actions-row">
            <Button text="Descargar PDF" className="login-button-react" />
          </div>
        </header>

        {/* Barra de búsqueda */}
        <div className="search-container">
          <div className="input-with-icon">
            <FontAwesomeIcon icon={faSearch} className="search-icon-inside" />
            <input type="text" placeholder="Buscar" className="search-input" />
          </div>
        </div>

        {/* Contenedor de la Tabla */}
        <div className="table-wrapper">
          <div className="table-title-bar" style={{ background: '#d9c8c5', color: '#d9234b' }}>
            Beneficiarios Registrados (5)
          </div>
          <div className="table-responsive">
            <table className="report-table centered-table">
              <thead>
                <tr>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Dirección</th>
                  <th style={{ textAlign: 'center' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Datos extraídos de tu imagen */}
                {
                beneficiarios.map((elemento) => (
                  console.log(elemento),
                  <tr key={elemento.id}>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.id}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.name}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.email}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.address.street}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Button text="Examinar" className="login-button-react action-btn-small" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contador inferior estilo imagen */}
        <footer className="footer-pagination">
          <p>Mostrando <span className="red-text">5 de 5</span> beneficiarios registrados</p>
        </footer>
      </div>
    </div>
  );
};

export default Beneficiarios;