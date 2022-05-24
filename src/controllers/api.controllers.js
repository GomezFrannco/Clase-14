import { fork } from "child_process";

var forked = fork("./src/utils/random.utils.js");

export function apiRandom(req, res) {
  const { cant = 1000e5 } = req.query;
  forked.send(cant)
  forked.on("message", (result) => {
    if (result !== 'ready') {
      res.status(200).send(result)
      forked.kill()
    }
    forked = fork("./src/utils/random.utils.js")
  });
}
