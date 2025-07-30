import React from "react";
import "./App.css";
// import Contador from "./components/Contador/Contador";
import ContadorCustomHook from "./components/ContadorCustomHook/ContadorCustomHook";
import ContadorReducer from "./components/ContadorReducer/ContadorReducer";

export default function App() {
  return (
    <div>
      {/* <Contador></Contador> */}
      {/* <ContadorCustomHook /> */}
      <ContadorReducer></ContadorReducer>
    </div>
  );
}
