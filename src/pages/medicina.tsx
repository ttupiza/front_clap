import React, { useState } from "react";
import Button from "../Components/common/Button";
import "../css/medicina.css";

type Medicamento = {
	id: number;
	nombre: string;
	presentacion: string;
	unidadPresentacion: string;
};

const Medicina: React.FC = () => {
	const [nombre, setNombre] = useState("");
	const [presentacion, setPresentacion] = useState("");
	const [unidadPresentacion, setUnidadPresentacion] = useState("");
	const [lista, setLista] = useState<Medicamento[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!nombre.trim()) return;
		const nuevo: Medicamento = {
			id: Date.now(),
			nombre: nombre.trim(),
			presentacion: presentacion.trim(),
			unidadPresentacion: unidadPresentacion.trim(),
		};
		setLista((s) => [nuevo, ...s]);
		setNombre("");
		setPresentacion("");
		setUnidadPresentacion("");
	};

	const handleEliminar = (id: number) => {
		setLista((s) => s.filter((m) => m.id !== id));
	};

	return (
		<div className="medicina-page">
			<div className="medicina-card">
				<h1>Registro de Medicamentos</h1>

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

				<section className="medicina-list">
				<h2>Medicamentos registrados ({lista.length})</h2>
				{lista.length === 0 ? (
					<p>No hay medicamentos registrados.</p>
				) : (
					<ul>
						{lista.map((m) => (
							<li key={m.id}>
								<strong>{m.nombre}</strong> — {m.presentacion} ({m.unidadPresentacion})
								<Button type="button" text="Eliminar" className="register-button-react action-btn-small" onClick={() => handleEliminar(m.id)} />
							</li>
						))}
					</ul>
				)}
				</section>
			</div>
		</div>
	);
};

export default Medicina;
