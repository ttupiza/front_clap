import React from "react";
import "../css/lista_beneficiarios.css";
import Button from "../Components/common/Button";
import Menutab from "../Components/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BeneficiariosData from "../Components/data/beneficiarios";

const Beneficiarios: React.FC = () => {
  return (
    <div className="perfil-page">
      <Menutab />
      <div className="reportes-card">
        {/* Encabezado con título y botón de descarga */}
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: "#d9234b" }}>
              Lista de Beneficiarios
            </h1>
            <p className="profile-subtitle">
              Administra y consulta la información de los beneficiarios
            </p>
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
          <div
            className="table-title-bar"
            style={{ background: "#d9c8c5", color: "#d9234b" }}
          >
            Beneficiarios Registrados
          </div>
          <div className="table-responsive">
            <table className="report-table centered-table">
              <thead>
                <tr>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Dirección</th>
                  <th style={{ textAlign: "center" }}>Acciones</th>
                </tr>
              </thead>

              {/* El componente `BeneficiariosData` retorna un <tbody> con los datos y la paginación */}
              <BeneficiariosData />

            </table>
          </div>
        </div>

        <div className="table-actions-row" style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button to="/registro_beneficiario" text="Agregar beneficiario" className="register-button-react fab-inline" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Beneficiarios;
