import {
  createContext,
  useContext,
  useState,
} from "react";
import type {   ReactNode} from "react";
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(
  null,
);

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light",
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme debe usarse dentro de ThemeProvider",
    );
  }

  return context;
}

// COMPONENTE 1
function Header() {
  const { theme } = useTheme();

  return (
    <header
  style={{
    padding: "20px",
    background:
      theme === "light" ? "#dc7a7a" : "#222",
    color:
      theme === "light" ? "#060606" : "#ece5e5",
  }}
>
      <h1>Aplicación con Context API</h1>
    </header>
  );
}

// COMPONENTE 2
function Card() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        borderRadius: "8px",
        background:
          theme === "light" ? "#fff" : "#333",
        color:
          theme === "light" ? "#000" : "#fff",
        border:
          theme === "light"
            ? "1px solid #ccc"
            : "1px solid #555",
      }}
    >
      <p>Este componente cambia según el tema.</p>
    </div>
  );
}

// COMPONENTE 3
function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        marginTop: "20px",
        padding: "20px",
        background:
          theme === "light" ? "#eaeaea" : "#111",
        color:
          theme === "light" ? "#000" : "#fff",
      }}
    >
      Footer del sitio
    </footer>
  );
}

// CONTENIDO PRINCIPAL
function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background:
          theme === "light" ? "#fafafa" : "#1a1a1a",
      }}
    >
      <Header />

      <button onClick={toggleTheme}>
        Cambiar a tema{" "}
        {theme === "light" ? "oscuro" : "claro"}
      </button>

      <p>
        Tema actual: <strong>{theme}</strong>
      </p>

      <Card />

      <Footer />
    </div>
  );
}

export default function ThemeApp() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}