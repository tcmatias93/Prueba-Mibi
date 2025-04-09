import React from "react";

const List = ({ tareas, editarTarea, eliminarTarea }) => {
  console.log(tareas);
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {tarea.text}{" "}
          <button onClick={() => editarTarea(tarea.id)}>Editar</button>{" "}
          <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
