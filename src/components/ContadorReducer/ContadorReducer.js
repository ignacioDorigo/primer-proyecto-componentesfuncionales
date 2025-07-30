import React, { useReducer } from "react";

const estadoInicial = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "sumar":
      return { contador: state.contador + 1 };
    case "restar":
      return { contador: state.contador > 0 ? state.contador - 1 : 0 };
    case "resetear":
      return { contador: 0 };
    default:
      return { contador: state.contador };
  }
}

const ContadorReducer = () => {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <h3>Contador {estado.contador}</h3>
      <button onClick={() => dispatch({ type: "sumar" })}>+1</button>
      <button onClick={() => dispatch({ type: "restar" })}>-1</button>
      <button onClick={() => dispatch({ type: "resetear" })}>Reset</button>
    </div>
  );
};

export default ContadorReducer;
