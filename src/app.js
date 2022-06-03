const express = require("express");
const dotenv = require("dotenv");
const infoRoute = require("./routes/info.routes.js");
const apiRoute = require("./routes/api.routes");

class App {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.dotenv = dotenv.config();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", this.port);
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use("/", infoRoute);
    this.app.use("/", apiRoute);
  }
  listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        `🚀 listening on port: ${Number(this.app.get("port"))}\n PID: ${
          process.pid
        }`
      );
    });
  }
}

module.exports = { App };
