export function processInfo(_req, res) {
  let html = `
  <h1>INFO:</h1>
  <hr>
    <h3>
      <ul>
        <li>Argumentos de entrada: <span style="color: red;">${process.argv.slice(2)}</span></li>
        <li>Sistema operativo: <span style="color: red;">${process.platform}</span></li>
        <li>Version de Node.js: <span style="color: red;">${process.version}</span></li>
        <li>Memoria total reservada: <span style="color: red;">${process.memoryUsage.rss()}</span></li>
        <li>Path de ejecución: <span style="color: red;">${process.execPath}</span></li>
        <li>Process ID: <span style="color: red;">${process.pid}</span></li>
        <li>Directorio: <span style="color: red;">${process.cwd()}</span></li>
      </ul>
    </h3>
  `
  return res.status(200).send(html)
};