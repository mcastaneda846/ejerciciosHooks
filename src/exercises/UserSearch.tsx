import { useState, useEffect } from "react";

export default function UserSearch() {
  const users = [
    { id: 1, name: "Ana", role: "Frontend" },
    { id: 2, name: "Luis", role: "Backend" },
    { id: 3, name: "María", role: "Frontend" },
    { id: 4, name: "Carlos", role: "Fullstack" },
  ];

  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Filtrar (nombre o rol)
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
    );
  });

  // useEffect para actualizar el título del navegador
  useEffect(() => {
    document.title = `${filteredUsers.length} usuarios encontrados`;
  }, [filteredUsers.length]);

  return (
    <div>
      <h2>Buscador de usuarios</h2>

      <input
        type="text"
        placeholder="Buscar por nombre o rol"
        value={search}
        onChange={handleChange}
      />

      <p>{filteredUsers.length} usuarios encontrados</p>

      {/* SI NO HAY RESULTADOS */}
      {filteredUsers.length === 0 && <p>No hay resultados</p>}

      {/* LISTA DE USUARIOS */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
