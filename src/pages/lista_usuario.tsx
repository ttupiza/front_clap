import React, { useState } from 'react';
import '../css/lista_beneficiarios.css';
import Button from '../Components/common/Button';
import Menutab from '../Components/menu';

type Usuario = {
  id: string;
  nombre: string;
  apellido: string;
  direccion: string;
  permitido?: boolean;
};

const ListaUsuario: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: 'V-10000001', nombre: 'María', apellido: 'Pérez', direccion: 'Av. Los Olivos' },
    { id: 'V-10000002', nombre: 'José', apellido: 'Ramírez', direccion: 'Calle 23' },
    { id: 'V-10000003', nombre: 'Laura', apellido: 'Suárez', direccion: 'Urbanización La Vega' },
  ]);

  const handlePermitir = (id: string) => {
    setUsuarios((prev) => prev.map(u => u.id === id ? { ...u, permitido: !u.permitido } : u));
  };

  const handleEliminar = (id: string) => {
    setUsuarios((prev) => prev.filter(u => u.id !== id));
  };

  return (
    <div className="perfil-page">
      <Menutab />
      <div className="reportes-card">
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: '#d9234b' }}>Lista de Usuarios</h1>
            <p className="profile-subtitle">Permitir o eliminar usuarios</p>
          </div>
        </header>

        <div className="table-wrapper">
          <div className="table-title-bar" style={{ background: '#d9c8c5', color: '#d9234b' }}>
            Usuarios Registrados ({usuarios.length})
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
                {usuarios.map((u) => (
                  <tr key={u.id}>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{u.id}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{u.nombre}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{u.apellido}</td>
                    <td className="red-text" style={{ fontWeight: 'normal' }}>{u.direccion}</td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                        {u.permitido ? (
                          <span className="register-button-react action-btn-small" style={{ padding: '6px 12px', display: 'inline-block' }}>Permitido</span>
                        ) : (
                          <Button text="Permitir" className="login-button-react action-btn-small" onClick={() => handlePermitir(u.id)} />
                        )}

                        <Button text="Eliminar" className="register-button-react action-btn-small" onClick={() => handleEliminar(u.id)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="footer-pagination">
          <p>Mostrando <span className="red-text">{usuarios.length}</span> usuarios</p>
        </footer>
      </div>
    </div>
  );
};

export default ListaUsuario;
