import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/examinar_beneficiario.css';
import Button from '../Components/common/Button';
import Menutab from '../Components/menu';

interface Beneficiario {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: { street: string };
  // Campos adicionales que simulamos
  apellido?: string;
  fechaNacimiento?: string;
  cedula?: string;
  telefono?: string;
}

const ExaminarBeneficiario: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [beneficiario, setBeneficiario] = useState<Beneficiario | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    
    // Fetch del beneficiario específico
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error('Error al obtener el beneficiario');
          return res.json();
        })
        .then((json: any) => {
          if (!cancelled) {
            // Simular datos adicionales
            const beneficiarioData: Beneficiario = {
              id: json.id,
              name: json.name,
              email: json.email,
              phone: json.phone,
              address: json.address,
              apellido: json.username || 'No disponible',
              fechaNacimiento: '1990-01-01', // Simulado
              cedula: `V-${String(json.id).padStart(8, '0')}`,
              telefono: json.phone || 'No disponible',
            };
            setBeneficiario(beneficiarioData);
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
          <h1 className="examinar-title">Detalles del Beneficiario</h1>
        </div>

        {loading && (
          <div className="examinar-loading">Cargando datos...</div>
        )}

        {error && (
          <div className="examinar-error">Error: {error}</div>
        )}

        {!loading && !error && beneficiario && (
          <div className="examinar-content">
            <div className="info-section">
              <div className="info-row">
                <div className="info-label">Nombre:</div>
                <div className="info-value">{beneficiario.name}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Apellido:</div>
                <div className="info-value">{beneficiario.apellido}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Cédula (CI):</div>
                <div className="info-value red-text">{beneficiario.cedula}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Fecha de Nacimiento:</div>
                <div className="info-value">{beneficiario.fechaNacimiento}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Email:</div>
                <div className="info-value">{beneficiario.email}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Teléfono:</div>
                <div className="info-value">{beneficiario.telefono}</div>
              </div>

              <div className="info-row">
                <div className="info-label">Dirección:</div>
                <div className="info-value">{beneficiario.address?.street || 'No disponible'}</div>
              </div>
            </div>

            <div className="actions-examinar">
              <Button type="button" text="Volver" onClick={goBack} className="register-button-react" />
              <Button to="/lista_beneficiarios" text="Ir a Lista" className="login-button-react" />
            </div>
          </div>
        )}

        {!loading && !error && !beneficiario && (
          <div className="examinar-error">No se encontraron datos del beneficiario.</div>
        )}
      </div>
    </div>
  );
};

export default ExaminarBeneficiario;
