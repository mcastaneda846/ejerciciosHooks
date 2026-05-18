import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// tipo del usuario
type User = {
  name: string;
};

// tipo del contexto
type AuthContextType = {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
};

// crear contexto
const AuthContext = createContext<AuthContextType | null>(null);

// props del provider
type AuthProviderProps = {
  children: ReactNode;
};

// provider principal
function AuthProvider({ children }: AuthProviderProps) {
  // estado global del usuario
  const [user, setUser] = useState<User | null>(null);

  // iniciar sesión
  function login(name: string) {
    setUser({ name });
  }

  // cerrar sesión
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// hook personalizado para usar el contexto
function useAuth() {
  const context = useContext(AuthContext);

  // validar que el contexto exista
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }

  return context;
}

// formulario de login
function LoginForm() {
  // obtener login desde contexto
  const { login } = useAuth();

  // estado local del input
  const [name, setName] = useState("");

  // actualizar input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  // enviar formulario
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    // evitar nombres vacíos
    if (name.trim() === "") return;

    // iniciar sesión
    login(name);

    // limpiar input
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={handleChange}
      />

      <button type="submit">Ingresar</button>
    </form>
  );
}

// componente de perfil
function Profile() {
  // obtener usuario y logout
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Perfil</h2>

      <p>
        Bienvenido: <strong>{user?.name}</strong>
      </p>

      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

// componente adicional para demostrar contexto compartido
function Navbar() {
  // acceder al mismo usuario desde otro componente
  const { user } = useAuth();

  return (
    <nav>
      <p>
        Usuario actual: <strong>{user?.name}</strong>
      </p>
    </nav>
  );
}

// contenido principal
function AppContent() {
  // obtener usuario
  const { user } = useAuth();

  return (
    <div>
      {/* mostrar login si no existe usuario */}
      {!user && <LoginForm />}

      {/* mostrar perfil si existe usuario */}
      {user && (
        <>
          <Navbar />
          <Profile />
        </>
      )}
    </div>
  );
}

// componente principal
export default function AuthApp() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
