const { args } = require("../utils/minimist.utils.js");
const { consoleLogger } = require("../utils/logs.utils.js");

// Get port
const PORT = args.PORT ? args.PORT : process.argv[2];

function getRoute(req, _res, next) {
  // URL structure
  const url = {
    method: req.method,
    protocol: req.protocol,
    host: req.hostname,
    port: PORT,
    url: req.url,
  };
  const completeUrl = `Route: ${url.protocol}://${url.host}:${url.port}${url.url} | Method: ${url.method}`;
  // here goes the log4js code
  consoleLogger.info(completeUrl);
  // next route
  next();
}

module.exports = { getRoute };
