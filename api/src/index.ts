import * as express from 'express';
import { AppDataSource } from './data-source';
import ProjectsRoute from './routes/projects';

const app: express.Application = express();

AppDataSource.initialize().then(async () => {
  app.use((req, res, next) => {
    console.log('aaaaaa');
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
  });

  app.use(express.json());

  app.use(ProjectsRoute);

  app.listen(8000);
});
