import "../css/lista_beneficiarios.css";
import Button from "../Components/common/Button";
import Menutab from "../Components/menu";
import React, { useState } from "react";
import "../css/lista_beneficiarios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UsuariosData from "../Components/data/usuarios";
import useFetch from "../Components/data/useFetch";

const ListaUsuario: React.FC = () => {
  const { data: solicitudesData, loading, error } = useFetch<any[]>("http://127.0.0.1:8000/api/usuario/");
  const [solicitudes, setSolicitudes] = useState<any[]>([]);

  React.useEffect(() => {
    if (solicitudesData) {
      setSolicitudes(solicitudesData);
    }
  }, [solicitudesData]);

  const handleAceptarSolicitud = (id: string) => {
    setSolicitudes((prev) => prev.filter((s: any) => s.id !== id));
  };

  const handleEliminarSolicitud = (id: string) => {
    setSolicitudes((prev) => prev.filter((s: any) => s.id !== id));
  };

  return (
    <div className="perfil-page">
      <Menutab />

      <div className="reportes-card">
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: "#d9234b" }}>
              Solicitudes Pendientes
            </h1>
            <p className="profile-subtitle">Acepta o rechaza las nuevas solicitudes de acceso</p>
          </div>
        </header>

        <div className="table-wrapper">
          <div className="table-title-bar" style={{ background: "#d9c8c5", color: "#d9234b" }}>
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
                {loading && (
                  <tr>
                    <td colSpan={5}>Cargando solicitudes...</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan={5}>Error: {error}</td>
                  </tr>
                )}
                {!loading && !error && solicitudes.length === 0 && (
                  <tr>
                    <td colSpan={5}>No hay solicitudes pendientes.</td>
                  </tr>
                )}
                {!loading && !error && (
                  solicitudes.map((solicitud: any) => (
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
          <p>Total de solicitudes: <span className="red-text">{solicitudes.length}</span></p>
        </footer>
      </div>

      <div className="reportes-card">
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: "#d9234b" }}>Usuarios Registrados</h1>
            <p className="profile-subtitle">Consulta y examina la información de los usuarios existentes</p>
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
          <div className="table-title-bar" style={{ background: "#d9c8c5", color: "#d9234b" }}>
            Usuarios Registrados
          </div>
          <div className="table-responsive">
            <style>{`.users-table tbody p{display:none}`}</style>
            <table className="report-table centered-table users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre de Usuario</th>
                  <th>Nombre Completo</th>
                  <th>Email</th>
                  <th style={{ textAlign: "center" }}>Acciones</th>
                </tr>
              </thead>

              <UsuariosData />
            </table>
          </div>

          <div className="table-actions-row" style={{ marginTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button to="/registro_usuario" text="Agregar usuario" className="register-button-react fab-inline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaUsuario;
