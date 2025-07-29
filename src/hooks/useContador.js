import { useState } from "react";

const useContador = (estadoInicial) => {
  const [contador, setContador] = useState(estadoInicial);

  const aumentarContador = () => {
    setContador((prevState) => prevState + 1);
  };

  const restarContador = () => {
    setContador((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  const resetearContador = () => {
    setContador(0);
  };

  return [contador, restarContador, aumentarContador, resetearContador];
};

export default useContador;
