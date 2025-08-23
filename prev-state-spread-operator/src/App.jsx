import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState([1, 2, 3, 4]);
  const [persona, setPersona] = useState({ nombre: "Pepito", edad: 30 });

  // Tare agregar números consecutivos
  function myFunction() {
    const ultimo = num[num.length - 1];
    setNum([...num, ultimo + 1]);
  }

  // Tarea agregar propiedad al objeto usando spread operator
  //y que al hacer click en un boton dispare la funcion y muestre por consola 

  //Partiendo de {nombre: "Pepito", edad: 30}, cambia solo nombre a "Luis usando el spread"

  return (
    <>
      <div>
        <h2>agregar numeros</h2>
        {num.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={myFunction}>Agregar Número</button>
      </div>
    </>
  );
}

export default App;
