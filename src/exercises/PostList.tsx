import { useState, useEffect } from "react";

// tipo de publicación
type Post = {
  id: number;
  title: string;
  body: string;
};

// tipo de retorno del hook
type UseFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

// hook personalizado
function useFetch<T>(url: string): UseFetchReturn<T> {
  // estado de datos
  const [data, setData] = useState<T | null>(null);

  // estado de carga
  const [loading, setLoading] = useState(true);

  // estado de error
  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    // controlador para cancelar petición
    const controller = new AbortController();

    // obtener señal del controlador
    const signal = controller.signal;

    async function fetchData() {
      try {
        // iniciar carga
        setLoading(true);

        // limpiar error previo
        setError(null);

        const response = await fetch(url, {
          signal,
        });

        // validar respuesta
        if (!response.ok) {
          throw new Error(
            "error al obtener datos",
          );
        }

        // convertir respuesta
        const result: T =
          await response.json();

        // guardar datos
        setData(result);
      } catch (err) {
        // ignorar error si fue cancelación
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            return;
          }

          setError(err.message);
        }
      } finally {
        // finalizar carga
        setLoading(false);
      }
    }

    fetchData();

    // limpieza al desmontar
    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default function PostsList() {
  // url de la api
  const url =
    "https://jsonplaceholder.typicode.com/posts";

  // usar hook personalizado
  const {
    data: posts,
    loading,
    error,
  } = useFetch<Post[]>(url);

  // estado de carga
  if (loading) {
    return <p>Cargando publicaciones...</p>;
  }

  // estado de error
  if (error) {
    return <p>{error}</p>;
  }

return (
  <div>
    <h2>Lista de publicaciones</h2>

    <ul
      style={{
        listStyle: "none",
        padding: 0,
      }}
    >
      {posts?.slice(0, 10).map((post) => (
        <li
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "20px",
          }}
        >
          <h3>{post.title}</h3>

          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
);
}