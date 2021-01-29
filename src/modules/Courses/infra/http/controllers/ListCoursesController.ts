import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCourseService from '@modules/Courses/services/CreateCourseService';
import ListCourseService from '@modules/Courses/services/ListCoursesService';
import UpdateCourseService from '@modules/Courses/services/UpdateCourseService';
import DeleteCourseService from '@modules/Courses/services/DeleteCourseService';

class CoursesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCoursesRepository = container.resolve(ListCourseService);
    const courses = await listCoursesRepository.execute();

    return response.json(courses);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, department } = request.body;

    try {
      const createCourseRepository = container.resolve(CreateCourseService);

      const res = await createCourseRepository.execute({ name, department });

      return response.status(201).json(res);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateCourseRepository = container.resolve(UpdateCourseService);
    const res = await updateCourseRepository.execute(request.body);

    return response.status(204).json(res);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteCourseService = container.resolve(DeleteCourseService);

    const res = await deleteCourseService.execute(request.body.id);

    return response.status(204).json(res);
  }
}

export default new CoursesController();
