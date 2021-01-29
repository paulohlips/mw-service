import Router, { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCourseService from '@modules/Courses/services/CreateCourseService';
import ListCourseService from '@modules/Courses/services/ListCoursesService';

const coursesRoutes = Router();

coursesRoutes.get('/', async (_request, response) => {
  const listCoursesRepository = container.resolve(ListCourseService);
  const courses = await listCoursesRepository.execute();

  return response.json(courses);
});

coursesRoutes.post('/', async (request: Request, response: Response) => {
  const { name, department } = request.body;
  const createCourseRepository = container.resolve(CreateCourseService);

  const res = await createCourseRepository.execute({ name, department });

  return response.json({ res });
});

export default coursesRoutes;
