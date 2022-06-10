const log4js = require("../config/logs.config.js");

// Console logger levels
const consoleLogger = log4js.getLogger();
// File warn & error logger levels
const warnLogger = log4js.getLogger("fileWarn");
const errorLogger = log4js.getLogger("fileError");

module.exports = {
  consoleLogger,
  warnLogger,
  errorLogger,
};
