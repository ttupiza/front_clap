import React, { useState } from "react";
import Button from "../Components/common/Button";
import MedicamentosData from "../Components/data/medicamento";
import "../css/medicina.css";

const Medicina: React.FC = () => {
	const [nombre, setNombre] = useState("");
	const [presentacion, setPresentacion] = useState("");
	const [unidadPresentacion, setUnidadPresentacion] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!nombre.trim()) return;
		// Aquí iría la lógica para agregar el medicamento
		setNombre("");
		setPresentacion("");
		setUnidadPresentacion("");
	};

	return (
		<div className="medicina-page">
			{/* Sección de formulario para agregar medicamento */}
			<div className="medicina-card">
				<h1>Agregar Medicamento</h1>

				<form onSubmit={handleSubmit} className="medicina-form">
				<div>
					<label>Nombre del medicamento</label>
					<input
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						placeholder="Ej: Paracetamol"
					/>
				</div>

				<div>
					<label>Presentación</label>
					<input
						type="text"
						value={presentacion}
						onChange={(e) => setPresentacion(e.target.value)}
						placeholder="Ej: Tabletas 500 mg / Jarabe 100 ml"
					/>
				</div>

				<div>
					<label>Unidad presentación</label>
					<input
						type="text"
						value={unidadPresentacion}
						onChange={(e) => setUnidadPresentacion(e.target.value)}
						placeholder="Ej: mg / ml / cápsulas"
					/>
				</div>

				<Button type="submit" text="Agregar medicamento" className="login-button-react" />
				</form>
			</div>

			{/* Sección de medicamentos registrados */}
			<div className="medicina-card">
				<h1>Medicamentos Registrados</h1>
				<MedicamentosData />
			</div>
		</div>
	);
};

export default Medicina;
