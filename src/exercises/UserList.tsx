import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUsers() {
      try {
        // estado de carga inicial
        setLoading(true);
        setError(null);

        // simulación de espera para mejorar experiencia de usuario
        await new Promise((resolve) => setTimeout(resolve, 1200));

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("error al cargar usuarios");
        }

        const data = await response.json();

        // solo actualiza si el componente sigue montado
        if (isMounted) {
          setUsers(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("error al cargar usuarios");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchUsers();

    // limpieza al desmontar el componente
    return () => {
      isMounted = false;
    };
  }, []);

  // estado de carga
  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  // estado de error
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Lista de usuarios</h2>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
            }}
          >
            <p>
              <strong>Nombre:</strong> {user.name}
            </p>

            <p>
              <strong>Correo:</strong> {user.email}
            </p>

            <p>
              <strong>Ciudad:</strong> {user.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
