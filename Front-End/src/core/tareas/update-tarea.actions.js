import { baseUrlApi } from "../api/urlApi";

export const updateTarea = async (id, tarea) => {
  try {
    const body = {
      text: tarea,
    };

    const { data } = await baseUrlApi.put(`/api/tareas/${id}`, body);

    return data;
  } catch (error) {
    throw new Error("Algo salio mal al tratar de actualizar la tarea");
  }
};
