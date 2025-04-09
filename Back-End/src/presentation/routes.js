const { Router } = require("express");
const { TareasRoutes } = require("./tareas/routes");

class AppRoutes {
  static get routes() {
    const router = Router();

    router.use("/api/tareas", TareasRoutes.routes);

    return router;
  }
}

module.exports = { AppRoutes };
