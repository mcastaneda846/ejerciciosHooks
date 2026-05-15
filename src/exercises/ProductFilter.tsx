import { useState, useMemo } from "react";

export default function ProductFilter() {
  // productos base
  const [products] = useState([
    { id: 1, name: "Laptop", category: "Tecnología", price: 2500, stock: 5 },
    { id: 2, name: "Mouse", category: "Tecnología", price: 80, stock: 0 },
    { id: 3, name: "Camiseta", category: "Ropa", price: 40, stock: 10 },
    {
      id: 4,
      name: "Auriculares",
      category: "Tecnología",
      price: 150,
      stock: 3,
    },
    { id: 5, name: "Pantalón", category: "Ropa", price: 90, stock: 2 },
  ]);

  // estados de filtros
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");
  const [onlyStock, setOnlyStock] = useState(false);

  // lista filtrada + ordenada (dato derivado)
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // filtro por nombre
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // filtro por categoría
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // filtro por stock disponible
    if (onlyStock) {
      result = result.filter((p) => p.stock > 0);
    }

    // ordenamiento por precio
    if (sort === "asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sort, onlyStock]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Filtro avanzado de productos</h2>

      {/* controles */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Todas</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Ropa">Ropa</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none">Sin orden</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={onlyStock}
            onChange={(e) => setOnlyStock(e.target.checked)}
          />
          Solo con stock
        </label>
      </div>

      {/* resumen */}
      <p style={{ marginTop: "10px" }}>
        <strong>Resultados:</strong> {filteredProducts.length}
      </p>

      {/* mensaje sin resultados */}
      {filteredProducts.length === 0 && (
        <p>No hay productos disponibles con estos filtros</p>
      )}

      {/* tabla */}
      <table
        style={{
          width: "100%",
          marginTop: "10px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id} style={{ textAlign: "center" }}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
