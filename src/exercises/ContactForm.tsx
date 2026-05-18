import { useState} from "react";

// tipo de los valores del formulario
type FormValues = {
  name: string;
  email: string;
  message: string;
};

// tipo de errores
type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

// hook personalizado
function useForm(initialValues: FormValues) {
  // estado de valores
  const [values, setValues] = useState<FormValues>(initialValues);

  // estado de errores
  const [errors, setErrors] = useState<FormErrors>({});

  // actualizar campos dinámicamente
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // validar campos obligatorios
  function validate() {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "el nombre es obligatorio";
    }

    if (!values.email.trim()) {
      newErrors.email = "el email es obligatorio";
    }

    if (!values.message.trim()) {
      newErrors.message = "el mensaje es obligatorio";
    }

    setErrors(newErrors);

    // si no existen errores retorna true
    return Object.keys(newErrors).length === 0;
  }

  // reiniciar formulario
  function resetForm() {
    setValues(initialValues);
    setErrors({});
  }

  return {
    values,
    errors,
    handleChange,
    validate,
    resetForm,
  };
}

export default function ContactForm() {
  // estado para mostrar datos enviados
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  // usar hook personalizado
  const { values, errors, handleChange, validate, resetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  // enviar formulario
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    // validar antes de enviar
    const isValid = validate();

    if (!isValid) return;

    // guardar datos enviados
    setSubmittedData(values);

    // limpiar formulario
    resetForm();
  }

  return (
    <div>
      <h2>Formulario de contacto</h2>

      <form onSubmit={handleSubmit}>
        {/* nombre */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={values.name}
            onChange={handleChange}
          />

          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* mensaje */}
        <div>
          <textarea
            name="message"
            placeholder="Mensaje"
            value={values.message}
            onChange={handleChange}
          />

          {errors.message && <p>{errors.message}</p>}
        </div>

        <button type="submit">Enviar</button>

        <button type="button" onClick={resetForm}>
          Limpiar
        </button>
      </form>

      {/* mostrar datos enviados */}
      {submittedData && (
        <div>
          <h3>Datos enviados</h3>

          <p>
            <strong>Nombre:</strong> {submittedData.name}
          </p>

          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>

          <p>
            <strong>Mensaje:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
}
