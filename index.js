import { App } from "./src/app.js";
import parseArgs from "minimist";

function main(port) {
  const app = new App(port);
  return app.listen();
}

const args = parseArgs(process.argv);

main(args.PORT);
