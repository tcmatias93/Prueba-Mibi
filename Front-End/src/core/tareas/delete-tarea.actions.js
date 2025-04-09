import { baseUrlApi } from "../api/urlApi";

export const deleteTarea = async (id) => {
  try {
    const { data } = await baseUrlApi.delete(`/api/tareas/${id}`, {});

    return data;
  } catch (error) {
    throw new Error(`Algo salio mal al tratar de eliminar la tarea: ${error}`);
  }
};
