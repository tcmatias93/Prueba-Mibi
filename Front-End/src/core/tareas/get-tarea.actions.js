import { baseUrlApi } from "../api/urlApi";

export const getTareas = async () => {
  try {
    const { data } = await baseUrlApi.get("/api/tareas");

    return data;
  } catch (error) {
    throw new Error(`No se pudieron obtener las tareas: ${error}`);
  }
};
