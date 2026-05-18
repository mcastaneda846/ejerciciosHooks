import { useState } from "react";
import type { ChangeEvent } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const [enviado, setEnviado] = useState(false);

  // CHANGE
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // ERROR
  let error = "";

  // Validar contraseña
  if (formData.contraseña !== "" && formData.contraseña.length < 8) {
    error = "La contraseña debe tener mínimo 8 caracteres";
  }

  // Validar confirmar contraseña
  else if (
    formData.confirmarContraseña !== "" &&
    formData.contraseña !== formData.confirmarContraseña
  ) {
    error = "Las contraseñas no coinciden";
  }

  // Validar correo
  else if (formData.correo !== "" && !emailRegex.test(formData.correo)) {
    error = "El correo no tiene un formato válido";
  }

  // FORMULARIO VÁLIDO
  const formularioValido =
    formData.nombre.trim() !== "" &&
    emailRegex.test(formData.correo) &&
    formData.contraseña.length >= 8 &&
    formData.contraseña === formData.confirmarContraseña;

  // SUBMIT
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formularioValido) return;

    setEnviado(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Nombre</p>

        <input
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Pepito Pérez"
          required
        />

        <p>Correo electrónico</p>

        <input
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
          placeholder="pepito@example.com"
          required
        />

        <p>Contraseña</p>

        <input
          name="contraseña"
          type="password"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />

        <p>Confirmar contraseña</p>

        <input
          name="confirmarContraseña"
          type="password"
          value={formData.confirmarContraseña}
          onChange={handleChange}
          required
        />

        {error && <p>{error}</p>}

        <br />

        <button type="submit" disabled={!formularioValido}>
          Enviar
        </button>
      </form>

      {enviado && (
        <div>
          <h2>Usuario registrado</h2>

          <p>{formData.nombre}</p>
          <p>{formData.correo}</p>
        </div>
      )}
    </div>
  );
}
