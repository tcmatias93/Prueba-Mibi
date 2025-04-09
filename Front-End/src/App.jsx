import { useEffect, useState } from "react";

import "./App.css";
import List from "./component/List";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaCreada, setTareaCreada] = useState("");
  const [tareaId, setTareaId] = useState(null);

  useEffect(() => {}, []);

  const crearTarea = (e) => {
    e.preventDefault();

    if (!tareaCreada) {
      return alert("Se necesita agregar una tarea");
    }

    if (tareaId !== null) {
      setTareas(
        tareas.map((tarea) =>
          tarea.id === tareaId ? { ...tarea, text: tareaCreada } : tarea
        )
      );
      setTareaId(null);
    } else {
      const newTarea = {
        id: Date.now(),
        text: tareaCreada,
      };

      setTareas([...tareas, newTarea]);
    }

    setTareaCreada("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const editarTarea = (id) => {
    const tareaAEditar = tareas.find((tarea) => tarea.id === id);
    setTareaCreada(tareaAEditar.text);
    setTareaId(id);
  };

  return (
    <>
      <h1>Crear nueva tarea</h1>
      <form onSubmit={crearTarea}>
        <label htmlFor="">Crear nueva tarea</label>
        <input
          type="text"
          name="tarea"
          value={tareaCreada}
          onChange={(e) => setTareaCreada(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <h2>Mostrar tareas</h2>
      {tareas && (
        <List
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
        />
      )}
    </>
  );
}

export default App;
