import React from "react";

const List = ({ tareas }) => {
  return (
    <>
      {tareas.map((tarea) => (
        <p key={tarea.id}> {tarea.tarea}</p>
      ))}
    </>
  );
};

export default List;
