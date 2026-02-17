import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/examinar_beneficiario.css';
import Button from '../Components/common/Button';
import Menutab from '../Components/menu';

interface Usuario {
  id: number;
  username: string;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  company?: { name: string };
  address?: { street: string; city: string };
}

const ExaminarUsuario: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error('Error al obtener el usuario');
          return res.json();
        })
        .then((json: any) => {
          if (!cancelled) {
            const usuarioData: Usuario = {
              id: json.id,
              username: json.username,
              name: json.name,
              email: json.email,
              phone: json.phone,
              website: json.website,
              company: json.company,
              address: json.address,
            };
            setUsuario(usuarioData);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!cancelled) {
            setError(err.message || 'Error desconocido');
            setLoading(false);
          }
        });
    }
    
    return () => { cancelled = true; };
  }, [id]);

  const goBack = () => navigate(-1);

  return (
    <div className="perfil-page">
      <Menutab />
      <div className="examinar-card">
        <div className="examinar-header">
          <h1 className="examinar-title">Detalles del Usuario</h1>
        </div>

        {loading && (
          <div className="examinar-loading">Cargando datos...</div>
        )}

        {error && (
          <div className="examinar-error">Error: {error}</div>
        )}

        {!loading && !error && usuario && (
          <div className="examinar-content">
            <div className="info-section">
              <div className="info-row">
                <div className="info-label">ID:</div>
                <div className="info-value red-text">{usuario.id}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Nombre de Usuario:</div>
                <div className="info-value">{usuario.username}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Nombre:</div>
                <div className="info-value">{usuario.name.split(' ')[0]}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Apellido:</div>
                <div className="info-value">{usuario.name.split(' ').slice(1).join(' ') || 'No disponible'}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Email:</div>
                <div className="info-value">{usuario.email}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Teléfono:</div>
                <div className="info-value">{usuario.phone || 'No disponible'}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Sitio Web:</div>
                <div className="info-value">{usuario.website || 'No disponible'}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Empresa:</div>
                <div className="info-value">{usuario.company?.name || 'No disponible'}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Dirección:</div>
                <div className="info-value">
                  {usuario.address 
                    ? `${usuario.address.street}, ${usuario.address.city}` 
                    : 'No disponible'}
                </div>
              </div>
            </div>

            <div className="actions-examinar">
              <Button type="button" text="Volver" onClick={goBack} className="register-button-react" />
              <Button to="/lista_usuario" text="Ir a Lista" className="login-button-react" />
            </div>
          </div>
        )}

        {!loading && !error && !usuario && (
          <div className="examinar-error">No se encontraron datos del usuario.</div>
        )}
      </div>
    </div>
  );
};

export default ExaminarUsuario;
