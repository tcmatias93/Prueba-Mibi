const { prisma } = require("../../data/postgres");

class TareaController {
  //leer Tareas
  getTareas = async (req, res) => {
    const tareas = await prisma.tarea.findMany();

    return res.json(tareas);
  };

  //Crear tarea
  crearTarea = async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Se necesita agregar una tarea" });
    }

    const tarea = await prisma.tarea.create({
      data: {
        text: text,
      },
    });

    return res.json(tarea);
  };

  //Actualizar tarea
  actualizarTarea = async (req, res) => {
    const id = +req.params.id;

    if (isNaN(id)) {
      return res.status(400).json({ error: "El Id tiene que ser un numero" });
    }

    const { text } = req.body;

    const tareaActualizada = await prisma.tarea.update({
      where: {
        id: id,
      },
      data: {
        text: text,
      },
    });

    res.json(tareaActualizada);
  };

  //Eliminar tarea
  deleteTareas = async (req, res) => {
    const id = +req.params.id;
    console.log({ id });

    const tareaEliminada = await prisma.tarea.delete({
      where: {
        id: id,
      },
    });

    if (!tareaEliminada) {
      return res
        .status(404)
        .json({ error: `La tarea con el id: ${id} no existe` });
    }

    return res.json(tareaEliminada);
  };
}

module.exports = { TareaController };
