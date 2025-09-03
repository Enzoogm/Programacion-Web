import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState([1, 2, 3, 4]);
  const [persona, setPersona] = useState({ nombre: "Pepito", edad: 30 });

  function agregarNumero() {
    const ultimo = num[num.length - 1];
    setNum([...num, ultimo + 1]);
  }

  function agregarApellido() {
    setPersona({ ...persona, apellido: "García" });
    console.log({ ...persona, apellido: "García" });
  }

  function cambiarNombre() {
    setPersona({ ...persona, nombre: "Luis" });
    console.log({ ...persona, nombre: "Luis" });
  }

  return (
    <>
      <h2>agregar numeros</h2>
      {num.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      <button onClick={agregarNumero}>Agregar Número</button>

      <h2>Persona</h2>
      <button onClick={agregarApellido}>Agregar Apellido</button>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </>
  );
}

export default App;
