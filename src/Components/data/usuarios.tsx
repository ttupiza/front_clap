import Button from "../common/Button";
import useFetch from "./useFetch";

interface Usuario {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
}

const UsuariosData = () => {
  const { data, loading, error } = useFetch<Usuario[]>("http://127.0.0.1:8000/api/usuarios/");

  return (
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
      {data &&
        data.map((elemento: Usuario) => (
          <tr key={elemento.id}>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.id}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.name}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.email}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.address?.street}
            </td>
            <td style={{ textAlign: "center" }}>
              <Button text="Examinar" className="login-button-react action-btn-small" />
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default UsuariosData;
