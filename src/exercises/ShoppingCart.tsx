import { useState, useMemo } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Teclado", price: 120, quantity: 1 },
    { id: 2, name: "Mouse", price: 80, quantity: 2 },
    { id: 3, name: "Monitor", price: 500, quantity: 1 },
  ]);

  function increaseQuantity(id) {
    const updated = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );

    setCart(updated);
  }

  function decreaseQuantity(id) {
    const updated = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          }
        : product,
    );

    setCart(updated);
  }

  function removeProduct(id) {
    const updated = cart.filter((product) => product.id !== id);
    setCart(updated);
  }

  const cartWithSubtotal = useMemo(() => {
    return cart.map((product) => ({
      ...product,
      subtotal: product.price * product.quantity,
    }));
  }, [cart]);

  const total = useMemo(() => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }, [cart]);

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "10px" }}>Carrito de compras</h2>

      {/* resumen general */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "20px",
          background: "#f9f9f9",
        }}
      >
        <p>
          <strong>Total de productos:</strong> {totalItems}
        </p>
        <p>
          <strong>Total general:</strong> ${total}
        </p>
      </div>

      {/* lista de productos */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cartWithSubtotal.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ margin: "0 0 5px 0" }}>{product.name}</h3>

            <p style={{ margin: "4px 0" }}>
              <strong>Precio:</strong> ${product.price}
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong>Cantidad:</strong> {product.quantity}
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong>Subtotal:</strong> ${product.subtotal}
            </p>

            {/* botones de acción */}
            <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>

              <button onClick={() => increaseQuantity(product.id)}>+</button>

              <button
                onClick={() => removeProduct(product.id)}
                style={{
                  background: "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
