import useFetch from "./useFetch";

interface Pago {
  id?: number | string;
  cedula?: string;
  nombre?: string;
  apellido?: string;
  monto?: number;
  fecha?: string;
  numero_referencia?: string;
}

const ReporteData = () => {
  const { data, loading, error } = useFetch<Pago[]>("http://127.0.0.1:8000/api/pagos/");

  return (
    <tbody>
      {loading && (
        <tr>
          <td colSpan={6}>Cargando...</td>
        </tr>
      )}
      {error && (
        <tr>
          <td colSpan={6}>Error: {error}</td>
        </tr>
      )}
      {data && data.length === 0 && (
        <tr>
          <td colSpan={6}>No hay registros disponibles</td>
        </tr>
      )}
      {data &&
        data.map((pago: Pago, index: number) => (
          <tr key={pago.id ?? pago.numero_referencia ?? index}>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {pago.cedula ?? "-"}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {pago.nombre ?? "-"}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {pago.apellido ?? "-"}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {typeof pago.monto === "number" ? `${pago.monto}` : pago.monto ?? "-"}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {pago.fecha ?? "-"}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {pago.numero_referencia ?? "-"}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default ReporteData;
