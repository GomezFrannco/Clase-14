const { consoleLogger, warnLogger } = require("../utils/logs.utils.js");

function notFound(req, res) {
  consoleLogger.warn(`URL not found at: ${req.url} route`);
  warnLogger.warn(`No resources found at: ${req.url} route`);
  res.status(404).send("Error 404 Not Founded");
}

module.exports = { notFound };
