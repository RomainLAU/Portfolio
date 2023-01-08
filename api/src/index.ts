import * as express from 'express';
import { AppDataSource } from './data-source';
import ProjectsRoute from './routes/projects';

const app: express.Application = express();

AppDataSource.initialize().then(async () => {
  app.use(express.json());

  app.use(ProjectsRoute);

  app.listen(8000);
});
