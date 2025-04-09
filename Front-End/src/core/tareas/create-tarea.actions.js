import { baseUrlApi } from "../api/urlApi";

export const crearTarea = async (tarea) => {
  try {
    const { data } = await baseUrlApi.post("/api/tareas", {
      text: tarea,
    });

    return data;
  } catch (error) {
    throw new Error(`Ocurrio el siguiente error: ${error}`);
  }
};
