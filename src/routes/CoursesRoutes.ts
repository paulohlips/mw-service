import Router, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Course from '../entities/Course';

import CreateCourseService from '../services/CreateCourseService';

const coursesRoutes = Router();

coursesRoutes.get('/', async (_request, response) => {
  const createCourseRepository = getRepository(Course);

  const courses = await createCourseRepository.find();

  return response.json(courses);
});

coursesRoutes.post('/', async (request: Request, response: Response) => {
  const { name, department } = request.body;
  const createCourseRepository = new CreateCourseService();

  const res = await createCourseRepository.execute({ name, department });

  return response.json({ res });
});

export default coursesRoutes;
