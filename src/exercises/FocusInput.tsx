import { useState, useEffect, useRef } from "react";

export default function FocusInput() {
  const [search, setSearch] = useState<string>("");

  // referencia al input
  const inputRef = useRef<HTMLInputElement | null>(null);

  // foco automático al montar
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // manejar cambios del input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  // enfocar nuevamente el input
  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <h2>Buscador</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe algo..."
        value={search}
        onChange={handleChange}
      />

      <button onClick={handleFocus}>Enfocar buscador</button>

      <p>Texto actual: {search}</p>
    </div>
  );
}