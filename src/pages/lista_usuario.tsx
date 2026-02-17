import React from "react";
import "../css/lista_beneficiarios.css";
import Button from "../Components/common/Button";
import Menutab from "../Components/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

type Usuario = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone?: string;
  address?: { street: string };
};

type SolicitudUsuario = {
  id: string;
  nombre: string;
  email: string;
  motivo: string;
};

const ListaUsuario: React.FC = () => {
  const [data, setData] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Solicitudes pendientes
  const [solicitudes, setSolicitudes] = useState<SolicitudUsuario[]>([
    { id: 'S-001', nombre: 'Juan García', email: 'juan@example.com', motivo: 'Nueva solicitud de acceso' },
    { id: 'S-002', nombre: 'Ana López', email: 'ana@example.com', motivo: 'Solicitud de activación de cuenta' },
    { id: 'S-003', nombre: 'Carlos Mendez', email: 'carlos@example.com', motivo: 'Nueva solicitud de acceso' },
  ]);

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
          const mapped = json.map((u) => ({
            id: u.id,
            username: u.username,
            name: u.name,
            email: u.email,
            phone: u.phone,
            address: u.address,
          }));
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

  useEffect(() => {
    const newTotal = Math.max(1, Math.ceil(data.length / pageSize));
    setCurrentPage((p) => Math.min(p, newTotal));
  }, [data, pageSize]);

  // Funciones para solicitudes
  const handleAceptarSolicitud = (id: string) => {
    setSolicitudes((prev) => prev.filter(s => s.id !== id));
  };

  const handleEliminarSolicitud = (id: string) => {
    setSolicitudes((prev) => prev.filter(s => s.id !== id));
  };

  return (
    <div className="perfil-page">
      <Menutab />

      {/* CONTENEDOR 1: Solicitudes Pendientes */}
      <div className="reportes-card">
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: "#d9234b" }}>
              Solicitudes Pendientes
            </h1>
            <p className="profile-subtitle">
              Acepta o rechaza las nuevas solicitudes de acceso
            </p>
          </div>
        </header>

        <div className="table-wrapper">
          <div
            className="table-title-bar"
            style={{ background: "#d9c8c5", color: "#d9234b" }}
          >
            Solicitudes ({solicitudes.length})
          </div>
          <div className="table-responsive">
            <table className="report-table centered-table">
              <thead>
                <tr>
                  <th>ID Solicitud</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Motivo</th>
                  <th style={{ textAlign: "center" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {solicitudes.length === 0 ? (
                  <tr>
                    <td colSpan={5}>No hay solicitudes pendientes.</td>
                  </tr>
                ) : (
                  solicitudes.map((solicitud) => (
                    <tr key={solicitud.id}>
                      <td className="red-text" style={{ fontWeight: 'normal' }}>{solicitud.id}</td>
                      <td className="red-text" style={{ fontWeight: 'normal' }}>{solicitud.nombre}</td>
                      <td className="red-text" style={{ fontWeight: 'normal' }}>{solicitud.email}</td>
                      <td className="red-text" style={{ fontWeight: 'normal' }}>{solicitud.motivo}</td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                          <Button text="Aceptar" onClick={() => handleAceptarSolicitud(solicitud.id)} className="login-button-react action-btn-small" />
                          <Button text="Eliminar" onClick={() => handleEliminarSolicitud(solicitud.id)} className="register-button-react action-btn-small" />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="footer-pagination">
          <p>
            Total de solicitudes: <span className="red-text">{solicitudes.length}</span>
          </p>
        </footer>
      </div>

      {/* CONTENEDOR 2: Usuarios Existentes */}
      <div className="reportes-card">
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: "#d9234b" }}>
              Usuarios Registrados
            </h1>
            <p className="profile-subtitle">
              Consulta y examina la información de los usuarios existentes
            </p>
          </div>
          <div className="actions-row">
            <Button text="Descargar PDF" className="login-button-react" />
          </div>
        </header>

        <div className="search-container">
          <div className="input-with-icon">
            <FontAwesomeIcon icon={faSearch} className="search-icon-inside" />
            <input type="text" placeholder="Buscar" className="search-input" />
          </div>
        </div>

        <div className="table-wrapper">
          <div
            className="table-title-bar"
            style={{ background: "#d9c8c5", color: "#d9234b" }}
          >
            Usuarios ({data.length})
          </div>
          <div className="table-responsive">
            <table className="report-table centered-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre de Usuario</th>
                  <th>Nombre Completo</th>
                  <th>Email</th>
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
                    <td colSpan={5}>No hay usuarios.</td>
                  </tr>
                )}
                {!loading && !error && pageData.map((elemento) => (
                  <tr key={elemento.id}>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.id}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.username}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.name}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{elemento.email}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Button to={`/examinar_usuario/${elemento.id}`} text="Examinar" className="login-button-react action-btn-small" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pagination-controls">
          <div className="left-pager">
            <Button text="Anterior" onClick={goPrev} disabled={currentPage === 1} className="register-button-react" />
            <Button text="Siguiente" onClick={goNext} disabled={currentPage === totalPages} className="login-button-react" />
          </div>
          <div className="page-info">Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong></div>
          <div className="right-actions"></div>
        </div>

        <footer className="footer-pagination">
          <p>
            Mostrando <span className="red-text">{data.length === 0 ? 0 : startIndex + 1} - {Math.min(startIndex + pageSize, data.length)}</span> de {data.length} usuarios registrados
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ListaUsuario;
