import React from 'react';
import '../css/reportes.css';
import Button from '../Components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Reportes: React.FC = () => {
  return (
    <div className="perfil-page"> {/* Reutiliza el padding y alineación global */}
      <div className="perfil-card">
        
        <header className="profile-header">
          <h1 className="profile-title">Reportes de Beneficiarios</h1>
          <p className="profile-subtitle">Gestión y seguimiento de pagos a beneficiarios</p>
          <div className="actions-row" style={{ marginTop: '20px' }}>
             <Button text="Descargar PDF" className="login-button-react" />
          </div>
        </header>

        <hr className="separator" />

        {/* Tarjetas de Resumen Estilo Perfil */}
        <section className="summary-grid">
          <div className="summary-item">
            <div className="summary-info">
              <label>Total Beneficiarios</label>
              <p className="summary-value">0</p>
            </div>
            <FontAwesomeIcon icon={faUsers} className="summary-icon" />
          </div>

          <div className="summary-item">
            <div className="summary-info">
              <label>Transacciones</label>
              <p className="summary-value">0</p>
            </div>
            <FontAwesomeIcon icon={faCalendarAlt} className="summary-icon" />
          </div>

          <div className="summary-item">
            <div className="summary-info">
              <label>Total Monto</label>
              <p className="summary-value red-text">0 Bs</p>
            </div>
            <FontAwesomeIcon icon={faFileAlt} className="summary-icon" />
          </div>
        </section>

        <div className="table-wrapper">
          <div className="table-header-title">Lista de Beneficiarios</div>
          <div className="table-responsive">
            <table className="report-table">
              <thead>
                <tr>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Monto (Bs)</th>
                  <th>Fecha</th>
                  <th>N° Referencia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="empty-table">
                    No hay registros disponibles para mostrar
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr className="separator" />

        <footer className="report-footer">
          <div className="footer-stats">
            <p>Reporte generado el: <strong>viernes, 2 de enero de 2026</strong></p>
            <p>Total de registros: 0 | Monto: <span className="red-text">0 Bs</span></p>
          </div>
          <div className="actions-row">
            <Button text="Exportar Reporte" className="register-button-react" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Reportes;