const { Cluster } = require("./src/utils/cluster.utils.js");
const { main } = require("./src/utils/server.utils.js");
const { args } = require("./src/utils/minimist.utils.js");

const PORT = args.PORT ? args.PORT : process.argv[2];

if (args.MODE === "CLUSTER") {
  Cluster.init();
} else {
  main(PORT || 8080);
}

module.exports = {
  PORT,
};
