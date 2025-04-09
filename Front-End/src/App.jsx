import { useEffect, useState } from "react";

import "./App.css";
import List from "./component/List";
import { getTareas } from "./core/tareas/get-tarea.actions";
import { deleteTarea } from "./core/tareas/delete-tarea.actions";
import { crearTarea } from "./core/tareas/create-tarea.actions";
import { updateTarea } from "./core/tareas/update-tarea.actions";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaCreada, setTareaCreada] = useState("");
  const [tareaId, setTareaId] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
      const data = await getTareas();
      setTareas(data);
    };
    fetchTareas();
  }, []);

  const crearTareas = async (e) => {
    e.preventDefault();

    if (!tareaCreada) {
      return alert("Se necesita agregar una tarea");
    }

    try {
      if (tareaId) {
        const response = await updateTarea(tareaId, tareaCreada);
        const data = await getTareas();
        setTareas(data);
        setTareaCreada("");
      } else {
        const response = await crearTarea(tareaCreada);
        const data = await getTareas();
        setTareas(data);
        setTareaCreada("");
      }
    } catch (error) {
      alert(`algo salio mal: ${error}`);
    }
  };

  const eliminarTarea = async (id) => {
    try {
      const response = await deleteTarea(id);
      const data = await getTareas();
      setTareas(data);
    } catch (error) {
      alert(`algo salio mal: ${error}`);
    }
  };

  const editarTarea = (id) => {
    const tareaAEditar = tareas.find((tarea) => tarea.id === id);
    setTareaCreada(tareaAEditar.text);
    setTareaId(id);
  };

  return (
    <>
      <h1>Crear nueva tarea</h1>
      <form onSubmit={crearTareas}>
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
