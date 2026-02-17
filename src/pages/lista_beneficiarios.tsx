import React from "react";
import "../css/lista_beneficiarios.css";
import Button from "../Components/common/Button";
import Menutab from "../Components/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import BeneficiariosData from "../Components/data/beneficiarios"; (usamos fetch localmente para paginar)
import { useEffect, useState } from 'react';

type Beneficiario = {
  id: number;
  name: string;
  email: string;
  address: { street: string };
};

const Beneficiarios: React.FC = () => {
  const [data, setData] = useState<Beneficiario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener datos');
        return res.json();
      })
      .then((json: any[]) => {
        if (!cancelled) {
          // map to Beneficiario shape
          const mapped = json.map((u) => ({ id: u.id, name: u.name, email: u.email, address: { street: u.address?.street ?? '' } }));
          setData(mapped);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Error');
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const pageData = data.slice(startIndex, startIndex + pageSize);

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  // Ensure currentPage stays within bounds when data/pageSize change
  useEffect(() => {
    const newTotal = Math.max(1, Math.ceil(data.length / pageSize));
    setCurrentPage((p) => Math.min(p, newTotal));
  }, [data, pageSize]);

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
            Beneficiarios Registrados ({data.length})
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
                  <tbody>
                    {loading && (
                      <tr>
                        <td colSpan={5}>Cargando...</td>
                      </tr>
                    )}
                    {error && (
                      <tr>
                        <td colSpan={5}>Error: {error}</td>
                      </tr>
                    )}
                    {!loading && !error && pageData.length === 0 && (
                      <tr>
                        <td colSpan={5}>No hay beneficiarios.</td>
                      </tr>
                    )}
                    {!loading && !error && pageData.map((elemento) => (
                      <tr key={elemento.id}>
                        <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.id}</td>
                        <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.name}</td>
                        <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.email}</td>
                        <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.address.street}</td>
                        <td style={{ textAlign: 'center' }}>
                          <Button to={`/examinar_beneficiario/${elemento.id}`} text="Examinar" className="login-button-react action-btn-small" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
            </table>
          </div>
        </div>

            {/* Pagination controls */}
            <div className="pagination-controls">
                <div className="left-pager">
                  <Button text="Anterior" onClick={goPrev} disabled={currentPage === 1} className="register-button-react" />
                  <Button text="Siguiente" onClick={goNext} disabled={currentPage === totalPages} className="login-button-react" />
                </div>
                <div className="page-info">Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong></div>
                <div className="right-actions">
                  <Button to="/registro_beneficiario" text="Agregar beneficiario" className="register-button-react fab-inline" />
                </div>
            </div>

        {/* Contador inferior estilo imagen */}
        <footer className="footer-pagination">
          <p>
            Mostrando <span className="red-text">{data.length === 0 ? 0 : startIndex + 1} - {Math.min(startIndex + pageSize, data.length)}</span> de {data.length} beneficiarios registrados
          </p>
        </footer>
      </div>
      
    </div>
  );
};

export default Beneficiarios;
