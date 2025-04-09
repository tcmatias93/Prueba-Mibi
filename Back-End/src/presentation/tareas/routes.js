const { Router } = require("express");
const { TareaController } = require("./controller");

class TareasRoutes {
  static get routes() {
    const router = Router();
    const tareaController = new TareaController();

    //Leer todas la tareas
    router.get("/", tareaController.getTareas);
    //Crear una tarea
    router.post("/", tareaController.crearTarea);
    //Actualizar una tarea
    router.put("/:id", tareaController.actualizarTarea);

    //Eliminar una tarea
    router.delete("/:id", tareaController.deleteTareas);

    return router;
  }
}

module.exports = { TareasRoutes };
