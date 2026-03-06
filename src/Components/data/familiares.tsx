import Button from "../common/Button";
import useFetch from "./useFetch";

export interface Familiar {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: {
    street: string;
  };
 
}

export const FAMILIAR_API = "http://127.0.0.1:8000/api/familiar/";

const FamiliaresData = () => {
  const { data, loading, error } = useFetch<Familiar[]>(
    FAMILIAR_API,
  );
  return (
    <tbody>
      {loading && (
        <tr>
          <td colSpan={7}>Cargando...</td>
        </tr>
      )}
      {error && (
        <tr>
          <td colSpan={7}>Error: {error}</td>
        </tr>
      )}
      {data &&
        data.map((elemento: Familiar) => (
          <tr key={elemento.id}>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.id}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.name}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.surname}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.phone}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.email}
            </td>
            <td className="red-text" style={{ fontWeight: "normal" }}>
              {elemento.address.street}
            </td>
            <td style={{ textAlign: "center" }}>
              <Button
                text="Examinar"
                className="login-button-react action-btn-small"
              />
            </td>
          </tr>
        ))}
    </tbody>
  );
};
export default FamiliaresData;
