import * as express from 'express';
import { Project } from '../entity/Project';

const router = express.Router();

router.get('/projects', async (req: express.Request, res: express.Response) => {
  const projects: Project[] = await Project.find();

  if (projects) {
    res.json({ status: 200, data: { projects } });
  } else {
    res.json({ status: 404, data: ['No project find.'] });
  }
});

export default router;
