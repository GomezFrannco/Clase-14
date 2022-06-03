const cluster = require("cluster");
const os = require("os");
const { main } = require("./server.utils.js");
const parseArgs = require("minimist");

const args = parseArgs(process.argv);

class Cluster {
  static init() {
    if (cluster.isPrimary) {
      console.log({
        "MasterPID:": process.pid,
      });
      for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
      }
      cluster.on("exit", (worker, code, signal) => {
        console.log(`The worker ${worker.process.pid} left`);
        cluster.fork();
      });
    } else {
      main(args.PORT);
    }
  }
}

module.exports = { Cluster };
