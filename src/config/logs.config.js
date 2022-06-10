const log4js = require("log4js");

log4js.configure({
  appenders: {
    fileWarnLogger: { type: "file", filename: "./logs/warn.log" },
    fileErrorLogger: { type: "file", filename: "./logs/error.log" },
    consoleLogger: { type: "console" },
  },
  categories: {
    default: { appenders: ["consoleLogger"], level: "info" },
    fileWarn: { appenders: ["fileWarnLogger"], level: "warn" },
    fileError: { appenders: ["fileErrorLogger"], level: "error" },
  },
});

module.exports = log4js;
