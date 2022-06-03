const { Cluster } = require("./src/utils/cluster.utils.js");
const parseArgs = require("minimist");
const { main } = require("./src/utils/server.utils.js");

const args = parseArgs(process.argv);

const PORT = args.PORT ? args.PORT : process.argv[2];

if (args.MODE === "CLUSTER") {
  Cluster.init();
} else {
  main(PORT);
}
