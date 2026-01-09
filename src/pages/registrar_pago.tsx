import React, { useState } from 'react';
import Button from '../Components/common/Button';
import '../css/registro_beneficiario.css';

type Pago = {
  id: number;
  fecha: string;
  monto: string;
  referencia: string;
  tipo: string;
  banco: string;
};

const RegistrarPago: React.FC = () => {
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState('');
  const [referencia, setReferencia] = useState('');
  const [tipo, setTipo] = useState('Transferencia');
  const [banco, setBanco] = useState('');
  const [pagos, setPagos] = useState<Pago[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fecha || !monto) return;
    const nuevo: Pago = {
      id: Date.now(),
      fecha,
      monto,
      referencia,
      tipo,
      banco,
    };
    setPagos((s) => [nuevo, ...s]);
    // limpiar
    setFecha('');
    setMonto('');
    setReferencia('');
    setTipo('Transferencia');
    setBanco('');
  };

  const handleEliminar = (id: number) => {
    setPagos((s) => s.filter(p => p.id !== id));
  };

  return (
    <div className="perfil-page">
      <div className="reportes-card">
        <header className="report-header">
          <div className="report-header-text">
            <h1 className="profile-title" style={{ color: '#d9234b' }}>Registrar Pago</h1>
            <p className="profile-subtitle">Ingrese los datos del pago</p>
          </div>
        </header>

        <div className="table-wrapper" style={{ padding: 20 }}>
          <form onSubmit={handleSubmit} className="form-box-react registrar-pago-form">
            <label>Fecha</label>
            <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />

            <label>Monto</label>
            <input type="text" value={monto} onChange={e => setMonto(e.target.value)} placeholder="0.00" />

            <label>Número de referencia</label>
            <input type="text" value={referencia} onChange={e => setReferencia(e.target.value)} />

            <label>Tipo de pago</label>
            <select value={tipo} onChange={e => setTipo(e.target.value)}>
              <option>Transferencia</option>
              <option>Depósito</option>
              <option>Pago en efectivo</option>
            </select>

            <label>Banco</label>
            <input type="text" value={banco} onChange={e => setBanco(e.target.value)} />

            <div className="form-actions">
              <Button type="submit" text="Guardar pago" className="login-button-react" />
              <Button text="Cancelar" className="register-button-react" onClick={() => { setFecha(''); setMonto(''); setReferencia(''); setTipo('Transferencia'); setBanco(''); }} />
            </div>
          </form>

          <div style={{ marginTop: 24 }}>
            {pagos.length > 0 && (
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Referencia</th>
                    <th>Tipo</th>
                    <th>Banco</th>
                    <th style={{ textAlign: 'center' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pagos.map(p => (
                    <tr key={p.id}>
                      <td>{p.fecha}</td>
                      <td className="red-text">{p.monto}</td>
                      <td>{p.referencia}</td>
                      <td>{p.tipo}</td>
                      <td>{p.banco}</td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                          <Button text="Editar" className="login-button-react action-btn-small" onClick={() => alert('Editar no implementado')} />
                          <Button text="Eliminar" className="register-button-react action-btn-small" onClick={() => handleEliminar(p.id)} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarPago;
