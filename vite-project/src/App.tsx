import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "nombre") setNombre(value);
    if (name === "apellido") setApellido(value);
    if (name === "rut") setRut(value);
    if (name === "correo") setCorreo(value);
    if (name === "comentario") setComentario(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Rut:", rut);
    console.log("Correo electrónico:", correo);
    console.log("Comentario:", comentario);
  };

  return (
    <div className="App">
      <h1>Formulario de Información</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rut">Rut</label>
          <input
            type="text"
            id="rut"
            name="rut"
            value={rut}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="comentario">Comentario</label>
          <textarea
            id="comentario"
            name="comentario"
            value={comentario}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default App;