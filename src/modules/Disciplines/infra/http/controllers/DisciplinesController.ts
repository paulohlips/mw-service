import CreateDisciplineService from '@modules/Disciplines/services/CreateDisciplineService';
import ListDisciplineByCourseService from '@modules/Disciplines/services/ListDisciplineByCourse';
import ListDisciplineService from '@modules/Disciplines/services/ListDisciplineService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { isUuid } from 'uuidv4';

class DisciplineController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDisciplinesRepository = container.resolve(ListDisciplineService);

    try {
      const disciplines = await listDisciplinesRepository.execute();

      return response.status(200).json(disciplines);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createDisiciplineRepository = container.resolve(
      CreateDisciplineService,
    );

    try {
      const { name, hours, course } = request.body;

      const discipline = await createDisiciplineRepository.execute({
        name,
        hours,
        course,
      });

      return response.status(201).json(discipline);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;

    const validUuid = isUuid(course_id);

    if (!validUuid) {
      return response.status(422).json({ error: 'Invalid course!' });
    }

    const listDisciplinesRepository = container.resolve(
      ListDisciplineByCourseService,
    );

    try {
      const disciplines = await listDisciplinesRepository.execute(course_id);

      return response.status(200).json(disciplines);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export default new DisciplineController();
