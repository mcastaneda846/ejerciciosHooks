import { useState } from "react";

export function SmartCounter() {
  const [counter, setCounter] = useState<number>(0);

  if (counter > 10) {
    alert("Has llegado al límite recomendado");
  }

  if (counter < 0) {
    setCounter(0);
  }

  return (
    <div>
      <h2>Contador Inteligente</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>Disminuir</button>
      <button onClick={() => setCounter(0)}>Reiniciar</button>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}

export default SmartCounter;
