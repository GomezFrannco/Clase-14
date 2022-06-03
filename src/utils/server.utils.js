const { App } = require("../app.js");

function main(port) {
  const app = new App(port);
  return app.listen();
}

module.exports = { main };
