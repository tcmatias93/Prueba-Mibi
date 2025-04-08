import { useEffect, useState } from "react";

import "./App.css";
import List from "./component/List";

const tareas = [
  { id: 1, tarea: "Cortar el pasto" },
  { id: 2, tarea: "Pintar la casa" },
  { id: 3, tarea: "Lavar la ropa" },
];

function App() {
  const [data, setData] = useState({
    id: "",
    tarea: "",
  });

  useEffect(() => {}, []);

  const crearTarea = (e) => {
    e.preventDefault();

    if (!data) {
      return alert("Se necesita agregar una tarea");
    }

    tareas.push({
      id: tareas.length + 1,
      tarea: data,
    });
  };

  console.log(tareas);

  return (
    <>
      <h1>Crear nueva tarea</h1>
      <form onSubmit={crearTarea}>
        <label htmlFor="">Crear nueva tarea</label>
        <input
          type="text"
          name="tarea"
          value={data.tarea}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <h2>Mostrar tareas</h2>
      <List tareas={tareas} />
    </>
  );
}

export default App;
