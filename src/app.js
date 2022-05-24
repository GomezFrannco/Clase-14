import express from 'express';
import dotenv from 'dotenv'
import infoRoute from './routes/info.routes.js'
import apiRoute from './routes/api.routes.js'

export class App {
  constructor(port= 8080) {
    this.app = express();
    this.port = port;
    this.dotenv = dotenv.config();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set('port', process.env.PORT || this.port);
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use('/', infoRoute)
    this.app.use('/', apiRoute)
  }
  listen() {
    this.app.listen(this.app.get('port'), () => {
      console.log('🚀 listening on port:', Number(this.app.get('port')));
    });
  }
}