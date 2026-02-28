import Button from "../common/Button";
import useFetch from "./useFetch";

interface Beneficiario {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
  // agregar otros campos si los necesita
}

const BeneficiariosData = () => {
  const { data, loading, error } = useFetch<Beneficiario[]>(
    "http://127.0.0.1:8000/api/beneficiarios/",
  );
  console.log(data);
  console.log(error);
  return (
    <tbody>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data &&
        data.map(
          (elemento: Beneficiario) => (
            console.log(elemento),
            (
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
                  {elemento.address.street}
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    text="Examinar"
                    className="login-button-react action-btn-small"
                  />
                </td>
              </tr>
            )
          ),
        )}
    </tbody>
  );
};
export default BeneficiariosData;
