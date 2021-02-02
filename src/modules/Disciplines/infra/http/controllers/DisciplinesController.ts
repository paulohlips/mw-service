import CreateDisciplineService from '@modules/Disciplines/services/CreateDisciplineService';
import ListDisciplineService from '@modules/Disciplines/services/ListDisciplineService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

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
}

export default new DisciplineController();
