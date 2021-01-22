import Router, { Request, Response } from 'express';

import CreateCourseService from '../services/CreateCourseService';

const coursesRoutes = Router();

coursesRoutes.post('/', async (request: Request, response: Response) => {
  const { name, department } = request.body;
  const createCourseRepository = new CreateCourseService();

  const res = await createCourseRepository.execute({ name, department });

  return response.json({ res });
});

export default coursesRoutes;
