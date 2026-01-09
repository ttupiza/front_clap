import React from 'react';
import '../css/lista_beneficiarios.css';
import Button from '../Components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Beneficiarios: React.FC = () => {
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
                {[
                  { id: 'V-12345678', nom: 'María', ape: 'Rodríguez', dir: 'Av. Libertador, Caracas' },
                  { id: 'V-23456789', nom: 'Carlos', ape: 'González', dir: 'Calle Los Cedros, Maracaibo' },
                  { id: 'V-34567890', nom: 'Ana', ape: 'Martínez', dir: 'Av. Bolívar, Valencia' },
                  { id: 'V-45678901', nom: 'Luis', ape: 'Fernández', dir: 'Calle Principal, Barquisimeto' },
                  { id: 'V-56789012', nom: 'Carmen', ape: 'López', dir: 'Av. Universidad, Mérida' },
                ].map((b) => (
                  <tr key={b.id}>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{b.id}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{b.nom}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{b.ape}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{b.dir}</td>
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