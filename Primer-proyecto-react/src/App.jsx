import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState([1, 2, 3, 4]);
  const [persona, setPersona] = useState({ nombre: "Pepito", edad: 30 });

  // Tarea: agregar números consecutivos
  function myfunction() {
    const ultimoNum = num[num.length - 1];
    setNum([...num, ultimoNum + 1]);
  }

  // Tarea: agregar una propiedad al objeto persona usando spread operator
  function agregarPropiedad() {
    setPersona({ ...persona, apellido: "Miguel" }); 
  }

  // Tarea opcional: cambiar solo el nombre a "Luis"
  function cambiarNombre() {
    setPersona({ ...persona, nombre: "Luis" }); // Cambia solo el nombre
  }

  return (
    <>
      <div>
        <h2>Números</h2>
        {num.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={myfunction}>Agregar número</button>
        <button onClick={agregarPropiedad}>Agregar Apellido</button>
        <button onClick={cambiarNombre}>Cambiar Nombre a Luis</button>
      </div>
      <div>
        <h2>Persona</h2>
        <p>Nombre: {persona.nombre}</p>
        <p>Edad: {persona.edad}</p>
        <p>Apellido: {persona.apellido}</p>
      </div>
    </>
  );
}

export default App;
