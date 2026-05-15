import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  // estado para controlar si está corriendo
  const [isRunning, setIsRunning] = useState(false);

  // referencia para guardar el intervalo
  const intervalRef = useRef(null);

  // iniciar o continuar el temporizador
  function handleStart() {
    if (isRunning) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  // pausar temporizador
  function handlePause() {
    setIsRunning(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // reiniciar temporizador
  function handleReset() {
    setSeconds(0);
    setIsRunning(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // limpieza al desmontar componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2>Temporizador</h2>

      <p>{seconds} segundos</p>

      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handlePause}>Pausar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}
