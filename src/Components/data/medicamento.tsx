import useFetch from "./useFetch";

interface Medicamento {
  id: number;
  name: string;
  presentacion: string;
  unidad_presentacion: number;
}

const MedicamentosData = () => {
  const { data, loading, error } = useFetch<Medicamento[]>(
    "http://127.0.0.1:8000/api/medicamentos/"
  );

  return (
    <div className="medicamentos-container">
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {data &&
        data.map((elemento: Medicamento) => (
          <div key={elemento.id} className="medicamento-card">
            <div className="medicamento-info">
              <div className="medicamento-row">
                <span className="medicamento-label">Nombre:</span>
                <span className="medicamento-value">{elemento.name}</span>
              </div>
              <div className="medicamento-row">
                <span className="medicamento-label">Presentación:</span>
                <span className="medicamento-value">{elemento.presentacion}</span>
              </div>
              <div className="medicamento-row">
                <span className="medicamento-label">Unidad de Presentación:</span>
                <span className="medicamento-value">{elemento.unidad_presentacion}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default MedicamentosData;
