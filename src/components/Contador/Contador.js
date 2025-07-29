import React, { useState } from "react";

const Contador = () => {
  // Ejemplo de useState
  // Es un hook para ponerle estado a los componentes funcionales, ya que antes no tenian
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador((prevState) => prevState + 1);
  };

  const restarContador = () => {
    setContador((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  return (
    <div>
      <h2>Contador:{contador}</h2>
      <button onClick={aumentarContador}>+1</button>
      <button onClick={restarContador}>-1</button>
    </div>
  );
};

export default Contador;
