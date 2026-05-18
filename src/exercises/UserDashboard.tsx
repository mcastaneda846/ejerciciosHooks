import { useState, useEffect, useMemo } from "react";

// tipo de usuario
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  active: boolean;
};

// props estadísticas
type StatsProps = {
  users: User[];
};

// props filtros
type FiltersProps = {
  search: string;
  role: string;
  status: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

// props lista usuarios
type UserListProps = {
  users: User[];
  onToggleUser: (id: number) => void;
  onDeleteUser: (id: number) => void;
};

// componente estadísticas
function Stats({ users }: StatsProps) {
  // total usuarios
  const totalUsers = users.length;

  // usuarios activos
  const activeUsers = users.filter((user) => user.active).length;

  // usuarios inactivos
  const inactiveUsers = users.filter((user) => !user.active).length;

  // administradores
  const admins = users.filter((user) => user.role === "admin").length;

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <p>Total: {totalUsers}</p>

      <p>Activos: {activeUsers}</p>

      <p>Inactivos: {inactiveUsers}</p>

      <p>Admins: {admins}</p>
    </div>
  );
}

// componente filtros
function Filters({
  search,
  role,
  status,
  onSearchChange,
  onRoleChange,
  onStatusChange,
}: FiltersProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      {/* búsqueda */}
      <input
        type="text"
        placeholder="Buscar usuario"
        value={search}
        onChange={onSearchChange}
      />

      {/* filtro rol */}
      <select value={role} onChange={onRoleChange}>
        <option value="all">Todos los roles</option>

        <option value="admin">Admin</option>

        <option value="user">User</option>
      </select>

      {/* filtro estado */}
      <select value={status} onChange={onStatusChange}>
        <option value="all">Todos</option>

        <option value="active">Activos</option>

        <option value="inactive">Inactivos</option>
      </select>
    </div>
  );
}

// componente lista usuarios
function UserList({ users, onToggleUser, onDeleteUser }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <p>Rol: {user.role}</p>

          <p>Estado: {user.active ? "Activo" : "Inactivo"}</p>

          {/* cambiar estado */}
          <button onClick={() => onToggleUser(user.id)}>
            {user.active ? "Desactivar" : "Activar"}
          </button>

          {/* eliminar usuario */}
          <button
            onClick={() => onDeleteUser(user.id)}
            style={{
              marginLeft: "10px",
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default function UserDashboard() {
  // usuarios iniciales
  const initialUsers: User[] = [
    {
      id: 1,
      name: "Ana Pérez",
      email: "ana@email.com",
      role: "admin",
      active: true,
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      email: "carlos@email.com",
      role: "user",
      active: false,
    },
    {
      id: 3,
      name: "María López",
      email: "maria@email.com",
      role: "user",
      active: true,
    },
    {
      id: 4,
      name: "Juan Torres",
      email: "juan@email.com",
      role: "admin",
      active: true,
    },
    {
      id: 5,
      name: "Laura Gómez",
      email: "laura@email.com",
      role: "user",
      active: false,
    },
  ];

  // estado usuarios
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  });

  // estado búsqueda
  const [search, setSearch] = useState("");

  // estado rol
  const [role, setRole] = useState("all");

  // estado filtro activo/inactivo
  const [status, setStatus] = useState("all");

  // guardar usuarios
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // cambiar estado usuario
  function toggleUser(id: number) {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
            ...user,
            active: !user.active,
          }
        : user,
    );

    setUsers(updatedUsers);
  }

  // eliminar usuario
  function deleteUser(id: number) {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  }

  // usuarios filtrados
  const filteredUsers = useMemo(() => {
    let result = [...users];

    // búsqueda nombre o correo
    result = result.filter((user) => {
      return (
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    });

    // filtro rol
    if (role !== "all") {
      result = result.filter((user) => user.role === role);
    }

    // filtro activos
    if (status === "active") {
      result = result.filter((user) => user.active);
    }

    // filtro inactivos
    if (status === "inactive") {
      result = result.filter((user) => !user.active);
    }

    return result;
  }, [users, search, role, status]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Dashboard de usuarios</h1>

      {/* estadísticas */}
      <Stats users={users} />

      {/* filtros */}
      <Filters
        search={search}
        role={role}
        status={status}
        onSearchChange={(e) => setSearch(e.target.value)}
        onRoleChange={(e) => setRole(e.target.value)}
        onStatusChange={(e) => setStatus(e.target.value)}
      />

      {/* lista usuarios */}
      <UserList
        users={filteredUsers}
        onToggleUser={toggleUser}
        onDeleteUser={deleteUser}
      />
    </div>
  );
}
