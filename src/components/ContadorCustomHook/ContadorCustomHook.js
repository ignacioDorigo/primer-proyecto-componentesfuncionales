import React from "react";
import useContador from "../../hooks/useContador";

export default function ContadorCustomHook() {
  const [contador, restarContador, aumentarContador, resetearContador] =
    useContador(0);
  return (
    <div>
      <h2>Contador:{contador}</h2>
      <button onClick={aumentarContador}>+1</button>
      <button onClick={restarContador}>-1</button>
      <button onClick={resetearContador}>Reset</button>
    </div>
  );
}
