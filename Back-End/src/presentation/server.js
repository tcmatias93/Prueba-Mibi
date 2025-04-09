const express = require("express");
const cors = require("cors");

class Server {
  constructor(options) {
    this.app = express();
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    //Cors
    this.app.use(cors());
    //Midelware
    this.app.use(express.json());

    //Routes
    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      console.log(`Server funcionando en el puerto ${this.port}`);
    });
  }
}

module.exports = { Server };
