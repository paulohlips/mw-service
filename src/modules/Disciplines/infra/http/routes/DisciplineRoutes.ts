import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import DisciplineService from '@modules/Disciplines/services/CreateDisciplineService';
import Discipline from '@modules/Disciplines/infra/typeorm/entities/Discipline';

const disciplineRoutes = Router();

disciplineRoutes.get('/', async (request: Request, response: Response) => {
  const disciplineRepository = getRepository(Discipline);

  const disciplines = await disciplineRepository.find();

  return response.json({ disciplines });
});

disciplineRoutes.post('/', async (request: Request, response: Response) => {
  const { name, hours, course } = request.body;

  const createDisciplineService = new DisciplineService();
  const discipline = await createDisciplineService.execute({
    name,
    hours,
    course,
  });

  return response.status(201).json(discipline);
});

export default disciplineRoutes;
